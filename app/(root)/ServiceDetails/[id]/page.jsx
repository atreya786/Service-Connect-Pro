"use client";

import Booking from "@components/Booking";
import Loader from "@components/Loader";
import Map from "@components/Map";
import ProviderDetails from "@components/ProviderDetails";
import Review from "@components/Review";
import ServiceInfo from "@components/ServiceInfo";
import { useMyContext } from "@context/MyContext";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ServiceDetails = () => {
  const { id } = useParams();
  const { serviceDetails, fetchServiceById } = useMyContext();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchServiceById(id);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <Loader />;
  return (
    <main className="flex flex-col gap-5">
      <div className="md:flex justify-around p-5">
        <div className="flex flex-col gap-5 p-3">
          <ServiceInfo service={serviceDetails} />
          <div className="border-2 rounded-lg p-2 z-10">
            <Map address={serviceDetails.location} />
          </div>
          <Review reviews={serviceDetails.reviews} />
          <ProviderDetails provider={serviceDetails} />
        </div>
        <Booking service={serviceDetails}/>
      </div>
    </main>
  );
};

export default ServiceDetails;
