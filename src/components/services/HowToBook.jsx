import React from "react";
import { SearchCheck, Calendar, CreditCard, Car } from "lucide-react";

const HowToBook = () => {
  const steps = [
    {
      icon: <SearchCheck className="w-12 h-12 text-yellow-400" />,
      title: "Search & Select",
      description:
        "Browse our fleet and choose the vehicle that best suits your needs and budget.",
    },
    {
      icon: <Calendar className="w-12 h-12 text-yellow-400" />,
      title: "Book Your Dates",
      description:
        "Select your pickup and drop-off dates and times for a hassle-free reservation.",
    },
    {
      icon: <CreditCard className="w-12 h-12 text-yellow-400" />,
      title: "Secure Payment",
      description:
        "Complete your booking with our secure payment gateway. Multiple payment options available.",
    },
    {
      icon: <Car className="w-12 h-12 text-yellow-400" />,
      title: "Enjoy Your Ride",
      description:
        "Our driver will arrive at your location on time. Just relax and enjoy your journey.",
    },
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">How to Book</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Booking your transportation with us is simple, fast, and secure. Follow
          these easy steps to get started.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center"
          >
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
            <div className="mt-4 flex justify-center">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black">
                {index + 1}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowToBook;