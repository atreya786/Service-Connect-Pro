"use client";

import React, { useEffect, useState } from "react";
import SkeletonCard from "./SkeletonCard";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter } from "next/navigation";

const SearchResults = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const dummyData = [
    {
      id: 1,
      name: "John Doe",
      role: "Software Engineer",
      description:
        "Experienced software engineer specializing in web development.",
      rating: "3.2k",
    },
    {
      id: 2,
      name: "Alice Smith",
      role: "Data Analyst",
      description:
        "Skilled data analyst with expertise in statistical analysis.",
      rating: "4.7k",
    },
    {
      id: 3,
      name: "Bob Johnson",
      role: "UX Designer",
      description:
        "Creative UX designer passionate about user-centered design.",
      rating: "2.9k",
    },
    {
      id: 4,
      name: "Emily Brown",
      role: "Project Manager",
      description:
        "Organized project manager with a proven track record of delivering successful projects.",
      rating: "5.2k",
    },
    {
      id: 5,
      name: "Michael Wilson",
      role: "DevOps Engineer",
      description:
        "Experienced DevOps engineer proficient in cloud infrastructure management.",
      rating: "3.8k",
    },
    {
      id: 6,
      name: "Sarah Jones",
      role: "Frontend Developer",
      description:
        "Skilled frontend developer with expertise in modern web technologies.",
      rating: "4.5k",
    },
    {
      id: 7,
      name: "David Lee",
      role: "Database Administrator",
      description:
        "Experienced database administrator proficient in SQL and database management systems.",
      rating: "3.1k",
    },
    {
      id: 8,
      name: "Emma Taylor",
      role: "UI Designer",
      description:
        "Creative UI designer passionate about creating visually appealing user interfaces.",
      rating: "4.0k",
    },
    {
      id: 9,
      name: "James Rodriguez",
      role: "Full Stack Developer",
      description:
        "Versatile full stack developer with experience in both frontend and backend development.",
      rating: "4.9k",
    },
    {
      id: 10,
      name: "Olivia Martinez",
      role: "Quality Assurance Engineer",
      description:
        "Detail-oriented QA engineer dedicated to ensuring product quality.",
      rating: "3.6k",
    },
    {
      id: 11,
      name: "Daniel Garcia",
      role: "Systems Administrator",
      description:
        "Experienced systems administrator proficient in maintaining and securing IT infrastructure.",
      rating: "3.3k",
    },
    {
      id: 12,
      name: "Sophia Hernandez",
      role: "Network Engineer",
      description:
        "Skilled network engineer specializing in network design and implementation.",
      rating: "3.7k",
    },
  ];

  const pageSize = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(dummyData.length / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, dummyData.length);

  const currentPageData = dummyData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-5">
        {loading
          ? Array.from({ length: currentPageData.length }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : currentPageData.map((data) => (
              <Card
                key={data.id}
                className="flex flex-col bg-white rounded-lg shadow-lg p-6"
                onClick={() => router.push(`/ServiceDetails/${data.id}`)}
              >
                <div className="flex justify-between items-center">
                  <CardContent className="flex items-center">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="/profile.jpg"
                      alt="profile"
                    />
                    <div className="ml-3">
                      <CardTitle className="text-lg font-semibold">
                        {data.name}
                      </CardTitle>
                      <CardDescription className="text-gray-500">
                        {data.role}
                      </CardDescription>
                    </div>
                  </CardContent>
                </div>
                <div className="p-4 text-gray-600">
                  <CardDescription>{data.description}</CardDescription>
                </div>
                <div className="flex items-center justify-between">
                  <span className="ml-1 text-gray-600">{data.rating}</span>
                  <Button className="px-4 py-2 bg-black text-white rounded-lg">
                    Add to Cart
                  </Button>
                </div>
              </Card>
            ))}
      </div>
      <Pagination className="px -5 pt-2 pb-5">
        <PaginationContent>
          <PaginationItem className="mr-2">
            <PaginationPrevious
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            />
          </PaginationItem>
          <PaginationItem>
            Page {currentPage} of {totalPages}
          </PaginationItem>
          <PaginationItem className="ml-2">
            <PaginationNext
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default SearchResults;
