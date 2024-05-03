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
import { useMyContext } from "@context/MyContext";

const AdminTable = () => {
  const { allOrders } = useMyContext();

  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allOrders.length / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, allOrders.length);

  const currentPageData = allOrders.slice(startIndex, endIndex);

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
              Service Schedule
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentPageData.map((data, index) => (
            <TableRow key={data.id}>
            {console.log(data)}
              <TableCell className="font-semibold text-center">
                {index + 1}
              </TableCell>
              <TableCell className="text-center">{data.userId}</TableCell>
              <TableCell className="text-center">{data.businessName}</TableCell>
              <TableCell className="text-center">{data.providerId}</TableCell>
              <TableCell className="text-center">$ {data.amount}</TableCell>

              <TableCell className="text-center">{data.dateTime.slice(0,10)} | {data.time}</TableCell>
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
