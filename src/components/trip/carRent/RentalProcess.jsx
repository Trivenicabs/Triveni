import React from "react";

const RentalProcess = () => (
  <div className="bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        How to Rent a Car
      </h2>
      <div className="grid md:grid-cols-4 gap-8">
        {[
          {
            step: "1",
            title: "Choose Your Car",
            description:
              "Select from our range of luxury and standard vehicles",
          },
          {
            step: "2",
            title: "Contact Us",
            description:
              "Get in touch to check availability and discuss requirements",
          },
          {
            step: "3",
            title: "Documentation",
            description: "Provide necessary documents and security deposit",
          },
          {
            step: "4",
            title: "Start Journey",
            description: "Pick up your car and begin your journey",
          },
        ].map((item, index) => (
          <div key={index} className="relative">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">{item.step}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
            {index < 3 && (
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300" />
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default RentalProcess;