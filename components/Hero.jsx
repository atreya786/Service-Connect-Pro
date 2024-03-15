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
      <div className="sm:flex w-full sm:mt-5 justify-around p-2 gap-3">
        <div
          className="flex flex-col 
         text-center sm:w-[50%] bg-orange-100 p-3"
        >
          <div>
            <h1 className="text-3xl font-bold ">Service Connect Pro</h1>
          </div>
          <div className="grid grid-rows-2 grid-flow-col gap-2">
            <div className="bg-white m-2 p-3 rounded">1</div>
            <div className="bg-white m-2 p-3 rounded">2</div>
            <div className="bg-white m-2 p-3 rounded">3</div>
            <div className="bg-white m-2 p-3 rounded">4</div>
            <div className="bg-white m-2 p-3 rounded">5</div>
            <div className="bg-white m-2 p-3 rounded">6</div>
          </div>
          <div className="flex justify-around">
            <div>Rating</div>
            <div>Users</div>
          </div>
        </div>
        <div className="text-center sm:w-[50%] bg-orange-200 sm:grid sm:grid-flow-col sm:grid-rows-2 flex flex-col gap-2 p-2">
          <div className="bg-white rounded">Image-1</div>
          <div className="bg-white rounded">Image-2</div>
          <div className="bg-white rounded">Image-3</div>
          <div className="bg-white rounded">Image-4</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
