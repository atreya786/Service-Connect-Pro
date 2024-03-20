import React from "react";
import profile from "../public/profile.webp";
import Image from "next/image";
const UserProfile = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex items-center justify-center pt-5">
          <Image
            className="w-36 h-36 object-cover rounded-full"
            src={profile}
            alt="Profile Picture"
          />
        </div>
        <div className="text-center pt-4">
          <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
          <h1 className="text-sm text-gray-600 pt-2">Frontend Developer</h1>
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base">
            Highly skilled and dedicated full stack developer with a passion for
            creating visually appealing and interactive user experiences.
            Equipped with a strong foundation in HTML, CSS, and JavaScript, I
            specialize in transforming design concepts into seamless and
            responsive web interfaces. With a keen eye for detail and a
            commitment to staying updated with the latest industry trends, I
            strive to deliver innovative solutions that enhance user engagement
            and drive business growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
