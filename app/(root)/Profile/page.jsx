"use client";

import Loader from "@components/Loader";
import OrderDetails from "@components/OrderDetails";
import UserProfile from "@components/UserProfile";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <Loader />;
  return (
    <div className="md:flex justify-around items-center">
      <UserProfile />
      <OrderDetails />
    </div>
  );
};

export default Profile;
