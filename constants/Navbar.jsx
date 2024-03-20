"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { IoNotifications, IoLogOutOutline, IoMenu } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdAdminPanelSettings } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { FcAbout } from "react-icons/fc";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import logo from "../public/logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  const handleLogout = async () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <nav className="flex justify-between px-10 items-center py-3 shadow-md sticky top-0 left-0 bg-white z-50">
      <Link href="/Home">
        <Image src={logo} width={55} height={55} alt="logo" />
      </Link>
      {/* Mobile View */}
      <div className="sm:hidden flex items-center gap-2">
        <div>
          <Link href="/Profile">
            <CgProfile size={30} />
          </Link>
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          <IoMenu size={30} />
        </div>
      </div>
      <div className="sm:flex items-center hidden">
        <div className="flex sm:justify-between items-center gap-2">
          <div className="text-black text-xl p-1 font-bold cursor-pointer hover:text-gray-700">
            <Link href="/About" className="flex gap-1">
              <span>About</span>
              <FcAbout size={30} />
            </Link>
          </div>
          <div className="text-black text-xl p-1 font-bold cursor-pointer hover:text-gray-700">
            <Link className="flex gap-1 " href="/Admin">
              <span>Admin</span>
              <MdAdminPanelSettings size={30} />
            </Link>
          </div>
          <div className="text-black p-1 text-xl font-bold cursor-pointer hover:text-gray-700">
            <Link href="/Services" className="flex gap-1">
              <span>Services</span>
              <GrServices size={30} />
            </Link>
          </div>
          <div className="cursor-pointer">
            <IoNotifications size={30} />
          </div>
          <div className="cursor-pointer">
            <Link href="/Checkout" className="flex">
              <FaShoppingCart size={30} />
              <span className="font-bold text-sm absolute right-32 top-3 text-red-500">
                {count}
              </span>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href="/Profile">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
            </Link>
          </div>
          <div onClick={handleLogout} className="cursor-pointer">
            <IoLogOutOutline size={30} />
          </div>
        </div>
      </div>

      {/* mobile view */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white z-10">
          <div className="flex flex-col items-center">
            <div className="text-black text-xl p-1 font-bold cursor-pointer hover:text-gray-700">
              <Link href="/About" className="flex gap-1">
                <span>About</span>
                <FcAbout size={25} />
              </Link>
            </div>
            <div className="text-black text-xl p-1 font-bold cursor-pointer hover:text-gray-700">
              <Link className="flex gap-1" href="/Admin">
                <span>Admin</span>
                <MdAdminPanelSettings size={25} />
              </Link>
            </div>
            <div className="text-black p-1 text-xl font-bold cursor-pointer hover:text-gray-700">
              <Link href="/Services" className="flex gap-1">
                <span>Services</span>
                <GrServices size={25} />
              </Link>
            </div>
            <div className="text-black p-1 text-xl font-bold cursor-pointer hover:text-gray-700 flex">
              <span>Notifications</span>
              <IoNotifications size={25} />
            </div>
            <div className="text-black p-1 text-xl font-bold cursor-pointer hover:text-gray-700">
              <Link href="/Checkout" className="flex">
                <span>Cart</span>
                <FaShoppingCart size={25} />
              </Link>
            </div>
            <div
              onClick={handleLogout}
              className="text-black gap-1 p-1 text-xl font-bold cursor-pointer hover:text-gray-700 flex"
            >
              <span>Logout</span>
              <IoLogOutOutline size={25} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
