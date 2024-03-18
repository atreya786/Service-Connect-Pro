"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import img1 from "@/public/card1.jpg";

export default function FeaturedSection() {
  return (
    <Carousel className="w-full max-w-[90%] repeat-infinite">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 sm:basis-1/2 md:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image src={img1} alt="" className="rounded " />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
