"use client";

import React from "react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Cart = () => {
  const router = useRouter();

  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
  }, []);
  const placeOrder = async () => {
    if (!scriptLoaded) return;

    try {
      const key = process.env.NEXT_RAZORPAY_KEY_ID;
      if (!key) {
        throw new Error("Razorpay key not found.");
      }

      const response = await fetch("/api/payment");
      if (!response.ok) {
        throw new Error("Failed to fetch order details.");
      }

      const { order } = await response.json();

      const options = {
        key,
        name: "Atreya",
        currency: order.currency,
        amount: order.amount,
        order_id: order.id,
        description: "Understanding RazorPay Integration",
        handler: function (response) {
          if (response.razorpay_payment_id) {
            router.push(
              `/PaymentSuccess?paymentid=${response.razorpay_payment_id}`
            );
          } else {
            throw new Error("Payment failed.");
          }
        },
        prefill: {
          name: "Atreya",
          email: "atreya@gmail.com",
          contact: "9999999999",
        },
      };

      if (typeof window !== "undefined" && window.Razorpay) {
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();

        paymentObject.on("payment.failed", function (response) {
          alert("Payment failed. Please try again. Contact support for help");
        });
      } else {
        console.error("Razorpay library not found");
      }
    } catch (error) {
      console.error("Error placing order:", error.message);
    }
  };

  const handleIncrement = (index) => {
    // Implement logic to increment quantity
  };

  const handleDecrement = (index) => {
    // Implement logic to decrement quantity
  };

  const items = [
    {
      id: 1,
      name: "Product 1",
      price: 10,
      quantity: 1,
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
      quantity: 2,
    },
    {
      id: 3,
      name: "Product 3",
      price: 15,
      quantity: 3,
    },
    {
      id: 4,
      name: "Product 4",
      price: 25,
      quantity: 1,
    },
    {
      id: 5,
      name: "Product 5",
      price: 30,
      quantity: 2,
    },
    {
      id: 6,
      name: "Product 1",
      price: 10,
      quantity: 1,
    },
    {
      id: 7,
      name: "Product 2",
      price: 20,
      quantity: 2,
    },
    {
      id: 8,
      name: "Product 3",
      price: 15,
      quantity: 3,
    },
    {
      id: 9,
      name: "Product 4",
      price: 25,
      quantity: 1,
    },
    {
      id: 10,
      name: "Product 5",
      price: 30,
      quantity: 2,
    },
  ];

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl w-full">
      <h2 className="text-3xl font-semibold mb-4">Your Cart</h2>
      <div className="flex text-lg items-center justify-between border-b p-2">
        <h1 className="font-semibold">Service Name</h1>
        <h1 className="font-semibold">Price</h1>
        <h1 className="font-semibold">Quantity</h1>
      </div>
      <div className="grid gap-4">
        <ScrollArea className="h-[23rem] rounded-md border p-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b p-1"
            >
              <h1 className="font-semibold">{item.name}</h1>
              <h1 className="font-semibold">${item.price}</h1>
              <div className="flex items-center gap-2">
                <Button
                  className="px-3 py-1 bg-gray-500 rounded-md"
                  onClick={() => handleDecrement(index)}
                >
                  -
                </Button>
                <span className="px-2 rounded-md">{item.quantity}</span>
                <Button
                  className="px-3 py-1 bg-gray-500 rounded-md"
                  onClick={() => handleIncrement(index)}
                >
                  +
                </Button>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>
      <div className="py-2 flex justify-around">
        <h2 className="font-semibold text-xl">Total - ${totalPrice}</h2>
        <Button onClick={placeOrder}>Place Order</Button>
      </div>
    </div>
  );
};

export default Cart;
