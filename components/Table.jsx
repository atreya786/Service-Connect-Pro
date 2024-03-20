"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import SearchBar from "./SearchBar";

const AdminTable = () => {
  const tableData = [
    {
      id: 1,
      person1: "John Doe",
      service: "Plumbing",
      person2: "Jane Smith",
      amount: "$150.00",
      paymentMethod: "Cash",
      status: "Completed",
    },
    {
      id: 2,
      person1: "Alice Johnson",
      service: "Cleaning",
      person2: "Bob Brown",
      amount: "$200.00",
      paymentMethod: "Credit Card",
      status: "Pending",
    },
    {
      id: 3,
      person1: "Emily Davis",
      service: "Painting",
      person2: "Michael Wilson",
      amount: "$300.00",
      paymentMethod: "Online Transfer",
      status: "Paid",
    },
    {
      id: 4,
      person1: "OpenAI",
      service: "AI Consulting",
      person2: "ChatGPT",
      amount: "$500.00",
      paymentMethod: "Bitcoin",
      status: "Completed",
    },
    {
      id: 5,
      person1: "Google",
      service: "Software Development",
      person2: "OpenAI",
      amount: "$1000.00",
      paymentMethod: "PayPal",
      status: "Pending",
    },
    {
      id: 6,
      person1: "OpenAI",
      service: "Language Model Training",
      person2: "ChatGPT",
      amount: "$1500.00",
      paymentMethod: "Bank Transfer",
      status: "Paid",
    },
    {
      id: 7,
      person1: "John Doe",
      service: "Plumbing",
      person2: "Jane Smith",
      amount: "$150.00",
      paymentMethod: "Cash",
      status: "Completed",
    },
    {
      id: 8,
      person1: "Alice Johnson",
      service: "Cleaning",
      person2: "Bob Brown",
      amount: "$200.00",
      paymentMethod: "Credit Card",
      status: "Pending",
    },
    {
      id: 9,
      person1: "Emily Davis",
      service: "Painting",
      person2: "Michael Wilson",
      amount: "$300.00",
      paymentMethod: "Online Transfer",
      status: "Paid",
    },
    {
      id: 10,
      person1: "OpenAI",
      service: "AI Consulting",
      person2: "ChatGPT",
      amount: "$500.00",
      paymentMethod: "Bitcoin",
      status: "Completed",
    },
    {
      id: 11,
      person1: "Google",
      service: "Software Development",
      person2: "OpenAI",
      amount: "$1000.00",
      paymentMethod: "PayPal",
      status: "Pending",
    },
    {
      id: 12,
      person1: "OpenAI",
      service: "Language Model Training",
      person2: "ChatGPT",
      amount: "$1500.00",
      paymentMethod: "Bank Transfer",
      status: "Paid",
    },
  ];
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(tableData.length / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, tableData.length);

  const currentPageData = tableData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <section className="p-5">
      <div className="flex justify-between p-2">
        <h1 className="text-3xl font-semibold">Recent Invoices</h1>
        <SearchBar />
      </div>
      <Table>
        <TableCaption>A list of recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center font-semibold">
              Serial No.
            </TableHead>
            <TableHead className="text-center font-semibold">
              Customer
            </TableHead>
            <TableHead className="text-center font-semibold">
              Service Name
            </TableHead>
            <TableHead className="text-center font-semibold">
              Service Provider
            </TableHead>
            <TableHead className="text-center font-semibold">
              Payment Amount
            </TableHead>
            <TableHead className="text-center font-semibold">
              Payment Type
            </TableHead>
            <TableHead className="text-center font-semibold">
              Payment Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentPageData.map((data) => (
            <TableRow>
              <TableCell key={data.id} className="font-semibold text-center">
                {data.id}
              </TableCell>
              <TableCell className="text-center">{data.person1}</TableCell>
              <TableCell className="text-center">{data.service}</TableCell>
              <TableCell className="text-center">{data.person2}</TableCell>
              <TableCell className="text-center">{data.amount}</TableCell>
              <TableCell className="text-center">
                {data.paymentMethod}
              </TableCell>
              <TableCell className="text-center">{data.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination className="p-5">
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

export default AdminTable;
