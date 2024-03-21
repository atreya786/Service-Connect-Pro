"use client";

import Booking from "@components/Booking";
import Loader from "@components/Loader";
import Map from "@components/Map";
import Review from "@components/Review";
import ServiceInfo from "@components/ServiceInfo";
import UserProfile from "@components/UserProfile";
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
    <main className="flex flex-col gap-5">
      <div className="md:flex justify-around p-5">
        <div className="flex flex-col gap-5 p-3">
          <ServiceInfo />
          <div className="border-2 rounded-lg p-2 z-10">
            <Map />
          </div>
          <Review />
          <UserProfile />
        </div>
        <Booking />
      </div>
    </main>
  );
};

export default ServiceDetails;
