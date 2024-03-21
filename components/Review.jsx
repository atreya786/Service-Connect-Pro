import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const Review = () => {
  const reviews = [
    {
      user: "John Doe",
      date: "2022-03-15",
      comment: "Great service, very professional!",
      rating: 5,
    },
    {
      user: "Alice Johnson",
      date: "2022-03-12",
      comment: "Prompt response and excellent work!",
      rating: 4,
    },
    {
      user: "Emily Davis",
      date: "2022-03-10",
      comment: "Highly recommend! Will definitely use again.",
      rating: 5,
    },
    {
      user: "Michael Wilson",
      date: "2022-03-08",
      comment: "Very satisfied with the quality of service.",
      rating: 4,
    },
    {
      user: "Sophia Miller",
      date: "2022-03-05",
      comment: "Impressed by the professionalism and efficiency.",
      rating: 5,
    },
    {
      user: "William Brown",
      date: "2022-03-02",
      comment: "Friendly staff and great attention to detail.",
      rating: 4,
    },
    {
      user: "Olivia Garcia",
      date: "2022-02-28",
      comment: "Service exceeded expectations. Thank you!",
      rating: 5,
    },
    {
      user: "Daniel Martinez",
      date: "2022-02-25",
      comment: "Very pleased with the results. Will use again in the future.",
      rating: 4,
    },
    {
      user: "Emma Rodriguez",
      date: "2022-02-22",
      comment: "Professional and courteous service. Highly recommended.",
      rating: 5,
    },
    {
      user: "James Taylor",
      date: "2022-02-20",
      comment: "Excellent service. Will definitely be a repeat customer.",
      rating: 4,
    },
  ];

  return (
    <ScrollArea className="sm:h-[20rem] h-[10rem] rounded-md border-2 p-4">
      <div className="flex flex-col gap-2">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex items-center border-2 rounded-md p-4 gap-2"
          >
            <h3 className="font-semibold">{review.user}</h3>
            <Separator orientation="vertical" />
            <span>{review.date}</span>
            <Separator orientation="vertical" />
            <p>{review.comment}</p>
            <Separator orientation="vertical" />
            <span>Rating :</span>
            {Array.from({ length: review.rating }, (_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 1l2.5 6.5h7L13 10l2.5 6.5h-7L10 14l-2.5 2.5h-7L7 10 0 7.5h7L10 1zm0 0" />
              </svg>
            ))}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default Review;
