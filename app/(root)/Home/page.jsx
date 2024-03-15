import Card from "@components/Card";
import Carousel from "@components/Carousel";
import Contact from "@components/Contact";
import Hero from "@components/Hero";
import Suggestions from "@components/Suggestions";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <Card />
      <Carousel />
      <Suggestions />
      <Contact />
    </div>
  );
};

export default Home;
