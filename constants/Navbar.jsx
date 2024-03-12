"use client";

import { signOut } from "next-auth/react";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = async () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <nav className="flex justify-between px-10 items-center py-3 shadow-md sticky top-0 left-0 bg-white">
      <p className="text-2xl font-semibold">LOGO</p>
      {/* Mobile View */}
      <div className="lg:hidden flex items-center">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="h-12 w-12 rounded-full cursor-pointer"
        >
          <img src="" alt="Profile" />
        </div>
      </div>
      <div className="lg:flex gap-10 items-center  hidden">
        <div className="flex  items-center gap-2">
          <div className="h-12 w-12 bg-gray-300 rounded-full cursor-pointer">
            <img src="" alt="profile" />
          </div>
          <button
            onClick={handleLogout}
            className="px-3 py-2 border-2 border-black text-black cursor-pointer hover:bg-black hover:text-white"
          >
            Log Out
          </button>
        </div>
      </div>

      {/* mobile view */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white z-10">
          <div className="flex flex-col items-center py-3">
            <button
              onClick={handleLogout}
              className="px-3 text-center w-50 py-3 border-2 border-black text-black cursor-pointer hover:bg-black hover:text-white"
            >
              Log Out
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
