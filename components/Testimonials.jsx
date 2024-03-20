import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";

const testimonials = [
  {
    quote:
      "Service Connect Pro has been a game-changer for my business. The platform helped me connect with new clients and grow my network. The support team is excellent and always available to assist. Highly recommended!",
    author: "John Doe, Service Provider",
  },
  {
    quote:
      "Finding reliable professionals has never been easier! Service Connect Pro made the process seamless and stress-free. The quality of service is exceptional, and I'm impressed with the variety of options available.",
    author: "Jane Smith, Client",
  },
  {
    quote:
      "Service Connect Pro exceeded my expectations. The platform is user-friendly, and the booking process is straightforward. I've had a great experience so far and will continue to use the service in the future.",
    author: "David Johnson, Client",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card>
              <CardContent
                key={index}
                className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105"
              >
                <CardTitle className="text-lg mb-4">
                  {testimonial.quote}
                </CardTitle>
                <CardDescription className="text-gray-600 font-semibold">
                  {testimonial.author}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
