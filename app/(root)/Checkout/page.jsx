"use client";

import Cart from "@components/Cart";
import Loader from "@components/Loader";
import React, { useEffect, useState } from "react";

const CheckoutPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <Loader />;

  return (
    <section className="w-full flex lg:flex-row flex-col lg:justify-around items-center p-5 gap-5">
      <Cart />
    </section>
  );
};

export default CheckoutPage;
