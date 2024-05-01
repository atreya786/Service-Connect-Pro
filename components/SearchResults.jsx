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
import Image from "next/image";
import { useMyContext } from "@context/MyContext";

const SearchResults = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const { providers } = useMyContext();
  const pageSize = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(providers.length / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, providers.length);

  const currentPageData = providers.slice(startIndex, endIndex);

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
          : currentPageData?.map((data) => (
              <Card
                key={data._id}
                className="flex flex-col bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex justify-between items-center">
                  <CardContent className="flex items-center">
                    <Image
                      className="w-10 h-10 rounded-full"
                      src={data.profilePhoto}
                      alt="profile"
                      width={40}
                      height={40}
                    />
                    <div className="ml-3">
                      <CardTitle className="text-lg font-semibold">
                        {data.firstName} {data.lastName}
                      </CardTitle>
                      <CardDescription className="text-gray-500">
                        {data.businessName}
                      </CardDescription>
                    </div>
                  </CardContent>
                </div>
                <div className="p-4 text-gray-600">
                  <CardDescription>{data.businessCategory}</CardDescription>
                </div>
                <div className="flex items-center justify-between">
                  <span className="ml-1 text-gray-600">{data.rating}</span>
                  <Button
                    className="px-4 py-2 bg-black text-white rounded-lg"
                    onClick={() => router.push(`/ServiceDetails/${data._id}`)}
                  >
                    View Service
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
