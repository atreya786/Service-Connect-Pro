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
import car1 from "@/public/car1.webp";
import car2 from "@/public/car2.webp";
import car3 from "@/public/car3.webp";
import car4 from "@/public/car4.webp";
import car5 from "@/public/car5.webp";
import car6 from "@/public/car6.webp";

const Services = [
  {
    title: "Companion Care",
    description:
      "Provide companionship and emotional support for seniors, engaging in activities such as conversation, games, and outings.",
    image: car1,
  },
  {
    title: "Personal Care",
    description:
      "Assist with activities of daily living including bathing, grooming, dressing, toileting, and mobility assistance.",
    image: car2,
  },
  {
    title: "Medication Management",
    description:
      "Administer medications as prescribed, monitor dosage schedules, and provide reminders for medication refills.",
    image: car3,
  },
  {
    title: "Meal Preparation",
    description:
      "Prepare nutritious meals tailored to dietary needs and preferences, ensuring seniors receive proper nutrition.",
    image: car4,
  },
  {
    title: "Housekeeping Assistance",
    description:
      "Assist with light housekeeping tasks such as laundry, dishes, vacuuming, and tidying up living spaces.",
    image: car5,
  },
  {
    title: "Transportation Services",
    description:
      "Provide transportation for medical appointments, grocery shopping, errands, and social outings, ensuring seniors remain active and engaged.",
    image: car6,
  },
];

export default function FeaturedSection() {
  return (
    <Carousel className="w-full max-w-[90%] repeat-infinite">
      <CarouselContent className="-ml-1">
        {Services.map((service, index) => (
          <CarouselItem key={index} className="pl-1 sm:basis-1/2 md:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex gap-2 flex-col aspect-square items-center justify-center p-2">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="rounded w-full h-auto"
                  />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-sm text-center">{service.description}</p>
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
