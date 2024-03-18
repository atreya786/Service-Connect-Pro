"use client";

import Card from "@components/SearchResultCard";
import Loader from "@components/Loader";
import SearchBar from "@components/SearchBar";
import SearchResults from "@components/SearchResults";
import React, { useEffect, useState } from "react";

const Services = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <Loader />;
  return (
    <div>
      <SearchBar />
      <SearchResults />
      <Card />
    </div>
  );
};

export default Services;
