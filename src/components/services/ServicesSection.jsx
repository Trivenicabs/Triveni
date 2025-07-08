'use client';

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
      {/* Tour Package Component */}
      <TourPackage />
      
      {/* all services */}
      <section className="py-8 md:py-16 bg-gradient-to-b from-white to-[#FFFCD1]">
        <div className="max-w-7xl mx-auto px-4">
          <header className="text-center mb-8 md:mb-12">
            <h3 id="all-services-heading" className="text-2xl md:text-3xl font-semibold mb-4">
              Complete Taxi Services - All Transportation Solutions
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From local city rides to long-distance travel, we provide comprehensive taxi and cab booking services across India
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" role="list" aria-label="Available taxi services">
            {services.map((service, index) => (
              <article
                key={index}
                className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                role="listitem"
              >
                <header className="flex items-center mb-4">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    {service.icon}
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold ml-3">
                    {service.title} - Taxi Service
                  </h4>
                </header>
                
                <p className="text-gray-600 text-sm md:text-base mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2" role="list" aria-label={`${service.title} features`}>
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center text-xs md:text-sm"
                      role="listitem"
                    >
                      <Star className="w-4 h-4 text-yellow-400 mr-2" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      {/* Vehicle Services Component */}
      <VehicleServices />
      
      {/* Car Rental Section with Motion */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <CarRentalSection />
      </motion.div>
      
      {/* Cities Section Component */}
      <CitiesSection />
    </>
  );
};

export default ServicesSection;