import React from "react";
import Image from "next/image";
const ProviderDetails = ({ provider }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex items-center justify-center pt-5">
          <Image
            className="w-36 h-36 object-cover rounded-full"
            src={provider?.profilePhoto}
            alt="Profile Picture"
            width={100}
            height={100}
          />
        </div>
        <div className="text-center pt-4">
          <h2 className="text-2xl font-bold text-gray-800">
            {provider.firstName} {provider.lastName}
          </h2>
          <h1 className="text-sm text-gray-600 pt-2">
            {provider.businessName}
          </h1>
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base">
            {provider.businessCategory}
            {provider.businessDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProviderDetails;
