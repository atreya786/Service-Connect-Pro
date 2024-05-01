import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";

const ServiceInfo = ({service}) => {
  return (
    <div>
      <Card>
        <div className="flex flex-col gap-4 p-5">
          <div className="flex justify-around">
            <Image src={service.businessPhoto} alt="" className="bg-black h-56 w-56" width={100} height={100}/>
          </div>
          <h1 className="text-2xl font-semibold">{service.businessName}</h1>
          <h1 className="text-lg">
            {service.businessCategory}
          </h1>
          <div>
            <h1 className="text-lg font-semibold">Service Price</h1>
            <p>${service.price}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ServiceInfo;
