"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useMyContext } from "@context/MyContext";
import toast from "react-hot-toast";

const Cart = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const { cartItems, setCartItems, addOrder } = useMyContext();

  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
  }, []);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const placeOrder = async () => {
    if (!scriptLoaded) return;

    try {
      const key = process.env.NEXT_RAZORPAY_KEY_ID;
      if (!key) {
        throw new Error("Razorpay key not found.");
      }

      const orderDetails = {
        userID: session.user.id,
        cartItems,
        totalPrice,
        razorpay_payment_id: null,
      };

      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDetails),
      });
      if (!response.ok) {
        throw new Error("Failed to place order.");
      }

      const options = {
        key,
        name: session.user.firstName,
        amount: totalPrice * 100,
        description: "Understanding RazorPay Integration",
        handler: function (response) {
          if (response.razorpay_payment_id) {
            orderDetails.razorpay_payment_id = response.razorpay_payment_id;
            addOrder(orderDetails);
            router.push(
              `/PaymentSuccess?paymentid=${response.razorpay_payment_id}`
            );
          } else {
            throw new Error("Payment failed.");
          }
        },
        prefill: {
          name: cartItems.businessName,
        },
      };

      if (typeof window !== "undefined" && window.Razorpay) {
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();

        paymentObject.on("payment.failed", function (response) {
          toast.error(
            "Payment failed. Please try again. Contact support for help"
          );
        });
      } else {
        console.error("Razorpay library not found");
      }
    } catch (error) {
      console.error("Error placing order:", error.message);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl w-full">
      <h2 className="text-3xl font-semibold mb-4">Your Cart</h2>
      <div className="flex text-lg items-center justify-between border-b p-2">
        <h1 className="font-semibold">Service Name</h1>
        <h1 className="font-semibold">Price</h1>
      </div>
      <div className="grid gap-4">
        <ScrollArea className="h-[23rem] rounded-md border p-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b p-1"
            >
              <h1 className="font-semibold">{item.businessName}</h1>
              <h1 className="font-semibold">${item.price}</h1>
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
