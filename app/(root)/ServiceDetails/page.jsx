import Booking from "@components/Booking";
import Map from "@components/Map";
import Review from "@components/Review";
import ServiceInfo from "@components/ServiceInfo";
import React from "react";

const ServiceDetails = () => {
  return (
    <div>
      <ServiceInfo />
      <Map />
      <Booking />
      <Review />
    </div>
  );
};

export default ServiceDetails;
