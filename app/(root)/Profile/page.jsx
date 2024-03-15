import OrderDetails from "@components/OrderDetails";
import UserProfile from "@components/UserProfile";
import React from "react";

const Profile = () => {
  return (
    <div>
      <UserProfile />
      <OrderDetails />
    </div>
  );
};

export default Profile;
