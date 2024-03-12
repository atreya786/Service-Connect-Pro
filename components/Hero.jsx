"use client";

import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const Hero = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <d2v className="sm:flex min-h-screen w-full sm:m-5 gap-5">
        <div className="text-center sm:w-[50%] bg-orange-100 m-2">
          Left Side
        </div>
        <div className="text-center sm:w-[50%] bg-orange-200 m-2">
          Right Side
        </div>
      </d2v>
    </div>
  );
};

export default Hero;
