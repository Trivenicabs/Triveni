"use client";

import { useState, useEffect } from "react";
import { tourPackages } from "@/utilis/data";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Star,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function TourPackage() {
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

  const maxIndex = Math.max(0, tourPackages.length - visibleSlides);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div>
      {/* tour package */}
      <section className="py-8 md:py-16 bg-gradient-to-b from-white to-[#FFFCD1]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl text-center font-semibold mb-8 md:mb-12">
            Featured Tour Packages
          </h2>

          <div className="relative">
            {currentIndex > 0 && (
              <button
                onClick={prevSlide}
                className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-[#FACF2D] hover:text-black transition-all"
              >
                <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
              </button>
            )}

            {currentIndex < maxIndex && (
              <button
                onClick={nextSlide}
                className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-[#FACF2D] hover:text-black transition-all"
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
                {tourPackages.map((pkg, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 md:px-4"
                  >
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:-translate-y-2 transition-all duration-300">
                      <div className="relative">
                        <img
                          src={pkg.image}
                          alt={pkg.title}
                          className="w-full h-40 md:h-48 object-cover"
                        />
                        <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-[#FACF2D] text-black px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                          {pkg.category}
                        </div>
                      </div>
                      <div className="p-4 md:p-6">
                        <h3 className="text-lg md:text-xl font-semibold mb-2">
                          {pkg.title}
                        </h3>
                        <div className="text-xl md:text-2xl font-bold text-[#FACF2D] mb-3">
                          {pkg.price}
                        </div>

                        <div className="space-y-2 text-gray-600 text-xs md:text-sm">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-[#FACF2D]" />
                            <span>{pkg.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2 text-[#FACF2D]" />
                            <span>
                              {pkg.startingPoint} to {pkg.destination}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 mr-2 text-[#FACF2D]" />
                            <span>Departure: {pkg.departureDate}</span>
                          </div>
                        </div>

                        <div className="mt-4 md:mt-6 flex gap-2">
                          <Link
                            href={`/tour-package/${pkg.title
                              .toLowerCase()
                              .replace(/ /g, "-")}/book`}
                            className="flex-1"
                          >
                            <button className="w-full bg-black px-10 text-white rounded-md py-1.5 md:py-2 text-xs md:text-sm font-semibold hover:bg-[#FACF2D] hover:text-black transition-all duration-300">
                              Book Now
                            </button>
                          </Link>
                          <Link
                            href={`/tour-package/${pkg.title
                              .toLowerCase()
                              .replace(/ /g, "-")}`}
                            className="flex-1"
                          >
                            <button className="w-full border-2 border-[#FACF2D] text-black rounded-md py-1.5 md:py-2 text-xs md:text-sm font-semibold hover:bg-[#FACF2D] transition-all duration-300">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}