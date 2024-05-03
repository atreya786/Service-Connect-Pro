import React from "react";
import profile from "../public/profile.webp";
import Image from "next/image";
import { useSession } from "next-auth/react";
const UserProfile = () => {
  const { data: session } = useSession();
  console.log(session);
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
          <h2 className="text-2xl font-bold text-gray-800">
            {session.user.firstName} {session.user.lastName}
          </h2>
          <h1 className="text-sm text-gray-600 pt-2">{session.user.mobile}</h1>
          <p className="text-sm text-gray-600 py-2">{session.user.location}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
