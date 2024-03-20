import React from "react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

const Cart = () => {
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
      <div className="py-2 flex justify-end">
        <h2 className="font-semibold text-xl">Total - ${totalPrice}</h2>
      </div>
    </div>
  );
};

export default Cart;
