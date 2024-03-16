import Cart from "@components/Cart";
import Payment from "@components/Payment";
import React from "react";

const CheckoutPage = () => {
  return (
    <div>
      <Payment />
      <Cart />
    </div>
  );
};

export default CheckoutPage;
