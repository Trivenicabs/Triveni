'use client'; // Add this for client-side components in Next.js

import React from "react";
import { Star } from "lucide-react";
import { services } from "../../utilis/data";
import VehicleServices from "./VehicleServices";
import CitiesSection from "../cities/CitiesSection";
import TourPackage from "./TourPackage";
import CarRentalSection from "../trip/carRent/CarRentalSection";
import { motion } from "framer-motion";

const ServicesSection = () => {
  return (
    <>
      {/* tour package */}
      <TourPackage />
      
      {/* all services */}
      <section className="py-8 md:py-16 bg-gradient-to-b from-white to-[#FFFCD1]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl text-center font-semibold mb-8 md:mb-12">
            All Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold ml-3">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm md:text-base mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center text-xs md:text-sm"
                    >
                      <Star className="w-4 h-4 text-yellow-400 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* vehicles services */}
      <VehicleServices />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <CarRentalSection />
      </motion.div>
      
      {/* location section */}
      <CitiesSection />
    </>
  );
};

export default ServicesSection;