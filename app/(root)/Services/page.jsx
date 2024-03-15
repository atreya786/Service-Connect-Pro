import Card from "@components/Card";
import SearchBar from "@components/SearchBar";
import SearchResults from "@components/SearchResults";
import React from "react";

const Services = () => {
  return (
    <div>
      <SearchBar />
      <SearchResults />
      <Card />
    </div>
  );
};

export default Services;
