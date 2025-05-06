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

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, vehiclesServices.length - visibleSlides);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // call us
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className="bg-gradient-to-b from-white to-[#FFFCD1]">
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl max-sm:text-2xl font-bold text-center mb-4">
          Our Premium Fleet
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Choose from our selection of well-maintained vehicles, perfect for any
          journey
        </p>

        <div className="relative">
          {currentIndex > 0 && (
            <button
              onClick={prevSlide}
              className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-yellow-400 hover:text-black transition-all"
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
            </button>
          )}

          {currentIndex < maxIndex && (
            <button
              onClick={nextSlide}
              className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-yellow-400 hover:text-black transition-all"
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
            >
              {vehiclesServices.map((vehicle, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 md:px-4"
                >
                  <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300 relative">
                    {vehicle.popular && (
                      <div className="absolute top-4 right-4 bg-yellow-400 text-black text-sm font-semibold px-3 py-1 rounded-full z-10">
                        Popular Choice
                      </div>
                    )}

                    <div className="relative">
                      <img
                        src={vehicle.image}
                        alt={vehicle.type}
                        className="w-full h-56 object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <div className="flex items-center text-white">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
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
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold">{vehicle.type}</h3>
                        <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                          <Users className="w-4 h-4 mr-1" />
                          <span className="text-sm font-medium">
                            {vehicle.seating}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-50 p-2 rounded-lg">
                          <p className="text-gray-600 text-sm mb-1">Per KM</p>
                          <p className="font-bold text-sm">{vehicle.perKm}</p>
                        </div>
                        <div className="bg-gray-50 p-2 rounded-lg">
                          <p className="text-gray-600 text-sm mb-1">Driver</p>
                          <p className="font-bold text-sm">
                            {vehicle.driverCharges}
                          </p>
                        </div>
                        <div className="bg-gray-50 p-2 rounded-lg">
                          <p className="text-gray-600 text-sm mb-1">Per Day KM</p>
                          <p className="font-bold text-sm">{vehicle.perDayLimit}</p>
                        </div>
                        <div className="bg-gray-50 p-2 rounded-lg">
                          <p className="text-gray-600 text-sm mb-1">Cancellation</p>
                          <p className="font-bold text-sm">{vehicle.cancellationCharge}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="flex items-center mb-3">
                          <ShieldCheck className="w-5 h-5 text-yellow-400 mr-2" />
                          <h4 className="font-semibold">Included Features</h4>
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
                        >
                          Book Now
                        </button>
                        <Link
                          href={`/vehicle-details/${vehicle.type
                            .toLowerCase()
                            .replace(/ /g, "-")}`}
                          className="px-4 border-2 border-yellow-400 flex justify-center items-center rounded-xl hover:bg-yellow-400 transition-colors"
                        >
                          <Navigation className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
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