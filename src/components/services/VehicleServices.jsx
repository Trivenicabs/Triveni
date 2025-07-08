"use client";

import { useState, useEffect } from "react";
import {
  Users,
  Star,
  ShieldCheck,
  Navigation,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { phoneNumber, vehiclesServices } from "../../utilis/data";
import HowToBook from "./HowToBook";
import WhyBook from "./WhyBook";
import Link from "next/link";
import Image from "next/image";

const VehicleServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, vehiclesServices.length - visibleSlides);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // WhatsApp contact handler
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className="bg-gradient-to-b from-white to-[#FFFCD1]">
      <section className="py-16 max-w-7xl mx-auto px-4" aria-labelledby="vehicle-fleet-heading">
        <header className="text-center mb-12">
          <h3 id="vehicle-fleet-heading" className="text-3xl max-sm:text-2xl font-bold mb-4">
            Our Premium Vehicle Fleet - Professional Taxi Service
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our selection of well-maintained vehicles, perfect for any journey with professional drivers and competitive rates
          </p>
        </header>

        <div className="relative">
          {currentIndex > 0 && (
            <button
              onClick={prevSlide}
              className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-yellow-400 hover:text-black transition-all"
              aria-label="Previous vehicles"
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
            </button>
          )}

          {currentIndex < maxIndex && (
            <button
              onClick={nextSlide}
              className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-yellow-400 hover:text-black transition-all"
              aria-label="Next vehicles"
            >
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
            </button>
          )}

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleSlides)
                }%)`,
              }}
              role="list"
              aria-label="Available vehicles for taxi service"
            >
              {vehiclesServices.map((vehicle, index) => (
                <article
                  key={index}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 md:px-4"
                  role="listitem"
                >
                  <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300 relative">
                    {vehicle.popular && (
                      <div className="absolute top-4 right-4 bg-yellow-400 text-black text-sm font-semibold px-3 py-1 rounded-full z-10">
                        Popular Choice
                      </div>
                    )}

                    <div className="relative">
                      <Image
                        src={vehicle.image}
                        alt={`${vehicle.type} - Professional taxi service vehicle`}
                        width={400}
                        height={224}
                        className="w-full h-56 object-cover"
                        priority={index < 3}
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <div className="flex items-center text-white">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                          <span className="ml-2 text-sm font-semibold">
                            {vehicle.rating}
                          </span>
                          <span className="mx-2 text-xs mt-[1px]">
                            ({vehicle.reviews} reviews)
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <header className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-bold">{vehicle.type} Taxi Service</h4>
                        <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                          <Users className="w-4 h-4 mr-1" aria-hidden="true" />
                          <span className="text-sm font-medium">
                            {vehicle.seating}
                          </span>
                        </div>
                      </header>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-50 p-2 rounded-lg">
                          <p className="text-gray-600 text-sm mb-1">Per KM Rate</p>
                          <p className="font-bold text-sm">{vehicle.perKm}</p>
                        </div>
                        <div className="bg-gray-50 p-2 rounded-lg">
                          <p className="text-gray-600 text-sm mb-1">Driver Charges</p>
                          <p className="font-bold text-sm">
                            {vehicle.driverCharges}
                          </p>
                        </div>
                        <div className="bg-gray-50 p-2 rounded-lg">
                          <p className="text-gray-600 text-sm mb-1">Daily Limit</p>
                          <p className="font-bold text-sm">{vehicle.perDayLimit}</p>
                        </div>
                        <div className="bg-gray-50 p-2 rounded-lg">
                          <p className="text-gray-600 text-sm mb-1">Cancellation</p>
                          <p className="font-bold text-sm">{vehicle.cancellationCharge}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="flex items-center mb-3">
                          <ShieldCheck className="w-5 h-5 text-yellow-400 mr-2" aria-hidden="true" />
                          <h5 className="font-semibold">Included Vehicle Features</h5>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {vehicle.facilities.map((facility, i) => (
                            <span
                              key={i}
                              className="bg-gray-100 text-gray-800 text-xs tracking-[0.05rem] px-3 py-1 rounded-full"
                            >
                              {facility}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button 
                          onClick={handleClick} 
                          className="w-full bg-black text-white py-2 rounded-xl font-semibold hover:bg-yellow-400 hover:text-black transition-colors flex items-center justify-center"
                          aria-label={`Book ${vehicle.type} taxi service via WhatsApp`}
                        >
                          Book This Vehicle
                        </button>
                        <Link
                          href={`/vehicles/${vehicle.type
                            .toLowerCase()
                            .replace(/ /g, "-")}`}
                          className="px-4 border-2 border-yellow-400 flex justify-center items-center rounded-xl hover:bg-yellow-400 transition-colors"
                          aria-label={`View details of ${vehicle.type} taxi service`}
                        >
                          <Navigation className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HowToBook />
      <WhyBook />
    </div>
  );
};

export default VehicleServices;