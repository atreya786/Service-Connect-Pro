import React from "react";

const Loader = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 sm:h-40 sm:w-40 h-20 w-20"></div>
    <div className="mt-4 text-black sm:text-2xl text-xl">Almost there...</div>
  </div>
);

export default Loader;
