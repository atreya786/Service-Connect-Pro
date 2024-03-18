"use client";

import Card from "@components/ShowCard";
import FeaturedSection from "@components/FeaturedSection";
import Contact from "@components/Contact";
import Hero from "@components/Hero";
import Suggestions from "@components/Suggestions";
import React, { useEffect, useState } from "react";
import Loader from "@components/Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <Loader />;
  return (
    <main className="p-4 flex flex-col gap-5">
      <Hero />
      <section className="flex flex-col items-center gap-5">
        <Card />
        <FeaturedSection />
        <Suggestions />
        <Contact />
      </section>
    </main>
  );
};

export default Home;
