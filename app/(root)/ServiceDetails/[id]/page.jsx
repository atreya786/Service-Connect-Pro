"use client";

import Booking from "@components/Booking";
import Loader from "@components/Loader";
import Map from "@components/Map";
import Review from "@components/Review";
import ServiceInfo from "@components/ServiceInfo";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ServiceDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <Loader />;
  return (
    <div>
      {/* <h1>{id}</h1> */}
      <ServiceInfo />
      <Map />
      <Booking />
      <Review />
    </div>
  );
};

export default ServiceDetails;
