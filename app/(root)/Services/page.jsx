"use client";

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
    <section>
      <div className="flex p-5 justify-center">
        <SearchBar />
      </div>
      <SearchResults />
    </section>
  );
};

export default Services;
