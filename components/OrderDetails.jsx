import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useMyContext } from "@context/MyContext";

const OrderDetails = () => {
  const { orderedItems } = useMyContext();
  console.log(orderedItems);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <h2 className="text-2xl font-bold text-gray-800 pb-4">
            Ordered Items
          </h2>
          <div>
            <div className="flex items-center border-b border-gray-200 py-4">
              <div className="flex justify-around items-center w-full pl-4">
                <p className="text-md text-black font-bold">Business Name</p>
                <p className="text-md text-black font-bold">Date</p>
                <p className="text-md text-black font-bold">Time</p>
                <p className="text-md text-black font-bold">Amount</p>
              </div>
            </div>
            <ScrollArea className="h-[23rem] rounded-md border p-4">
              {orderedItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center border-b border-gray-200 py-4"
                >
                  <div className="flex justify-around items-center w-full pl-4">
                    <p className="text-sm text-gray-600">{item.businessName}</p>
                    <p className="text-sm text-gray-600">{item.dateTime.slice(0,10)}</p>
                    <p className="text-sm text-gray-600">{item.time}</p>
                    <p className="text-sm text-gray-700 pt-1">${item.amount}</p>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderDetails;
