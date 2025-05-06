"use client";

import { ChevronLeft, ChevronRight, PhoneCall, ShieldCheck, Star, Users } from "lucide-react";
import React, { useState, useEffect } from "react";
import { phoneNumber } from "../../../utilis/data";
import Image from "next/image"; // Import Next.js Image component

const CarSliderStandard = ({ cars, currentIndex, setCurrentIndex, title }) => {
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
      window.addEventListener('resize', handleResize);
      
      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    
    const maxIndex = cars.length - visibleSlides;

    const nextSlide = () => {
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const prevSlide = () => {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const handleClick = () => {
      window.open(`https://wa.me/${phoneNumber}`, '_blank');
    };

    return (
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
              transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
            }}
          >
            {cars.map((car, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 md:px-4"
              >
                <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300 relative">
                  {car.popular && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-black text-sm font-semibold px-3 py-1 rounded-full z-10">
                      Popular Choice
                    </div>
                  )}

                  <div className="relative h-56 w-full">
                    <Image
                      src={car.image}
                      alt={car.type}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 z-10">
                      <div className="flex items-center text-white">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="ml-2 text-sm font-semibold">
                          {car.rating}
                        </span>
                        <span className="mx-2 text-xs mt-[1px]">
                          ({car.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-b from-yellow-50 to-base-100">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold">{car.type}</h3>
                      <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
                        <Users className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">
                          {car.seating} Seater
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-yellow-100 p-2 rounded-lg">
                        <p className="text-gray-600 text-sm mb-1">Per Day</p>
                        <p className="font-bold text-sm">{car.perDay}</p>
                      </div>
                      <div className="bg-yellow-100 p-2 rounded-lg">
                        <p className="text-gray-600 text-sm mb-1">Min Days</p>
                        <p className="font-bold text-sm">{car.minDays} Days</p>
                      </div>
                      <div className="bg-yellow-100 p-2 rounded-lg">
                        <p className="text-gray-600 text-sm mb-1">Advance</p>
                        <p className="font-bold text-sm">{car.securityDeposit}</p>
                      </div>
                      <div className="bg-yellow-100 p-2 rounded-lg">
                        <p className="text-gray-600 text-sm mb-1">Availability</p>
                        <p className="font-bold text-sm text-green-600">Available</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center mb-3">
                        <ShieldCheck className="w-5 h-5 text-yellow-400 mr-2" />
                        <h4 className="font-semibold">Included Features</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {car.facilities.map((facility, i) => (
                          <span
                            key={i}
                            className="bg-gray-100 text-gray-800 text-xs tracking-[0.05rem] px-3 py-1 rounded-full"
                          >
                            {facility}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button onClick={handleClick} className="w-full bg-black text-white py-2 rounded-xl font-semibold hover:bg-yellow-400 hover:text-black transition-colors flex items-center justify-center gap-2">
                      <PhoneCall className="w-4 h-4" />
                      Contact for Booking
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default CarSliderStandard;