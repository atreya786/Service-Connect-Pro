"use client";

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { useMyContext } from "@context/MyContext";
import { Button } from "./ui/button";
import toast from "react-hot-toast";

const Booking = ({ service }) => {
  const [date, setDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const { cartItems, setCartItems } = useMyContext();

  const timeSlots = [];
  const startTime = new Date().setHours(9, 0, 0, 0);
  const endTime = new Date().setHours(18, 0, 0, 0);

  for (let time = startTime; time < endTime; time += 60 * 60 * 1000) {
    const slotStart = new Date(time);
    const slotEnd = new Date(time + 60 * 60 * 1000);
    const slotLabel = `${slotStart.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })} - ${slotEnd.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
    timeSlots.push(slotLabel);
  }

  const handleTimeSlotClick = (slot) => {
    setSelectedTimeSlot(slot);
  };

  const handleCart = () => {
    const { _id, price, businessName } = service;
    const newBooking = {
      providerId: _id,
      price: price,
      businessName: businessName,
      dateTime: date.toISOString().split("T")[0],
      time: selectedTimeSlot,
    };
    setCartItems([...cartItems, newBooking]);
    toast.success("Booking added to cart!");
  };

  return (
    <div className="flex flex-col items-center gap-4 p-5">
      <div>
        <h1 className="text-xl font-semibold text-center pb-2">
          Select a Date
        </h1>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>
      <div>
        <h1 className="text-xl font-semibold text-center">
          Select a Time Slot
        </h1>
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 py-2">
          {timeSlots.map((slot, index) => (
            <div
              key={index}
              onClick={() => handleTimeSlotClick(slot)}
              className={`border p-2 rounded-lg ${
                selectedTimeSlot === slot ? "border-black border-2" : ""
              } cursor-pointer`}
            >
              {slot}
            </div>
          ))}
        </div>
      </div>
      <div onClick={handleCart}>
        <Button>Add to cart</Button>
      </div>
    </div>
  );
};

export default Booking;
