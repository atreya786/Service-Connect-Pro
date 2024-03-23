import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import image from "../public/profile.webp"

const ServiceInfo = () => {
  return (
    <div>
      <Card>
        <div className="flex flex-col gap-4 p-5">
          <div className="flex justify-around">
            <Image src={image} alt="" className="bg-black h-56 w-56" />
          </div>
          <h1 className="text-2xl font-semibold">Service Name</h1>
          <h1 className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h1>
          <div>
            <h1 className="text-lg font-semibold">Service Price</h1>
            <p>$100</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ServiceInfo;
