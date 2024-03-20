import React from "react";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";

const Notification = () => {
  return (
    <div className="sm:p-2 p-1">
      <Card className="flex flex-col sm:flex-row text-center pb-2 sm:items-center">
        <CardContent className="sm:flex sm:flex-col items-center gap-2 justify-center">
          <CardHeader className="text-lg font-semibold">New Order</CardHeader>
          <CardDescription className="text-sm">
            You have received a new order
          </CardDescription>
        </CardContent>
        <h1 className="text-md">10:00 AM</h1>
      </Card>
    </div>
  );
};

export default Notification;
