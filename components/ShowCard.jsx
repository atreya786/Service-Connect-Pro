"use client";

import Link from "next/link";
import React from "react";
import card1 from "../public/card1.jpg";
import card2 from "../public/card2.webp";
import card3 from "../public/card3.webp";
import card4 from "../public/card4.webp";
import Image from "next/image";

const Card = () => {
  const cards = [
    {
      id: 1,
      title: "Sparkling Clean Delight",
      description:
        "Experience the joy of pristine cleanliness as our dedicated team meticulously transforms your living space, leaving behind sparkling surfaces and fresh scents that brighten your day.",
      image: card1,
    },
    {
      id: 2,
      title: "Design Dreams Unveiled",
      description:
        "Unlock the potential of your living space with our expert interior design consultation. Let us guide you through a world of possibilities, creating a harmonious haven that reflects your style and personality.",
      image: card2,
    },
    {
      id: 3,
      title: "Renovation Revelation",
      description:
        "Witness the magic of transformation as we breathe new life into your home. From dated to divine, embark on a journey of renovation with us, crafting a modern masterpiece that exceeds your expectations.",
      image: card3,
    },
    {
      id: 4,
      title: "Nature's Oasis",
      description:
        "Step into a tranquil sanctuary crafted by our expert landscapers. Immerse yourself in lush greenery, vibrant blooms, and serene water features, as we bring your dream garden to life, one leaf at a time.",
      image: card4,
    },
  ];
  return (
    <section className="w-full p-2">
      <h1 className="text-4xl text-center font-semibold pb-5">Most Ordered</h1>
      <div className="w-full lg:flex md:justify-around flex-col lg:flex-row items-center sm:grid grid-rows-2 grid-flow-col flex gap-3">
        {cards.map((card) => (
          <div
            key={card.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl transition duration-300 ease-in-out hover:scale-105"
          >
            <Link href="#">
              <Image
                className="rounded-t-lg h-64 w-full object-cover object-center"
                src={card.image}
                alt="Most Ordered Image"
              />
            </Link>
            <div className="p-3">
              <Link href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {card.title}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
