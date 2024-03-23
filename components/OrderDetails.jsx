import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import image from "../public/profile.webp";
import Image from "next/image";

const OrderDetails = () => {
  const items = [
    {
      id: 1,
      image: "/product1.jpg",
      title: "Product 1",
      name: "Vintage Leather Jacket",
      price: 129.99,
    },
    {
      id: 2,
      image: "/product2.jpg",
      title: "Product 2",
      name: "Classic White Sneakers",
      price: 79.99,
    },
    {
      id: 3,
      image: "/product3.jpg",
      title: "Product 3",
      name: "Stainless Steel Watch",
      price: 199.99,
    },
    {
      id: 4,
      image: "/product4.jpg",
      title: "Product 4",
      name: "Denim Slim Fit Jeans",
      price: 59.99,
    },
    {
      id: 5,
      image: "/product5.jpg",
      title: "Product 5",
      name: "Cotton Casual Shirt",
      price: 49.99,
    },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <h2 className="text-2xl font-bold text-gray-800 pb-4">
            Ordered Items
          </h2>
          <ScrollArea className="h-[23rem] rounded-md border p-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center border-b border-gray-200 py-4"
              >
                <div className="w-16">
                  <Image
                    className="w-full h-auto object-cover"
                    src={image}
                    alt={item.title}
                  />
                </div>
                <div className="flex justify-around items-center w-full pl-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.name}</p>
                  <p className="text-sm text-gray-700 pt-1">${item.price}</p>
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>
      </div>
    </main>
  );
};

export default OrderDetails;
