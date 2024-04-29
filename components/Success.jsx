"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";

const Success = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paymentid = searchParams.get("paymentid");
  const handleHome = () => {
    router.push("/Home");
  };

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div
        className="bg-green-100 border border-green-400 w-1/2 text-green-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Payment successful!</strong>
        <span className="block sm:inline">
          Your paymentID= {paymentid} has been processed.
        </span>
        <Button className="ml-2" onClick={handleHome}>
          <svg
            className="fill-current h-6 w-6 text-green-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path
              d="M14.293 5.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 11-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.293a1 1 0 111.414-1.414L10 8.586l4.293-4.293z"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default Success;
