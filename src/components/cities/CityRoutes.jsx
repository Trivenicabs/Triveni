"use client";

import React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { cityRoutesData, defaultRoutes } from "../../utilis/cityRoutesData";
import { phoneNumber } from "../../utilis/data";

const CityRoutes = ({ cityName }) => {
  // Get routes for this city or use default routes if none exist
  const routes = cityRoutesData[cityName] || defaultRoutes;
  
  // Split routes into rows of 2 for display
  const getRouteRows = () => {
    const rows = [];
    for (let i = 0; i < routes.length; i += 2) {
      rows.push(routes.slice(i, i + 2));
    }
    return rows;
  };

  const routeRows = getRouteRows();
  
  const handleCallNow = () => {
    window.open(`tel:+91${phoneNumber}`, '_blank');
  };

  return (
    <section className="space-y-4" aria-labelledby="routes-heading">
      <header>
        <h2 id="routes-heading" className="text-2xl font-bold">
          Popular Routes from {cityName}
        </h2>
        <p className="text-gray-600">
          Book your one-way and round trip taxi services from {cityName} to the following destinations with competitive rates and professional drivers:
        </p>
      </header>
      
      <div role="list" aria-label="Available taxi routes">
        {routeRows.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {row.map((route, index) => (
              <article 
                key={`${route.destination}-${index}`} 
                className="border border-gray-300 rounded-lg overflow-hidden"
                role="listitem"
              >
                <header className="bg-gray-50 py-3 px-4 border-b">
                  <h3 className="text-xl font-semibold">
                    <Link 
                      href={`/${cityName.toLowerCase()}/to/${route.destination.toLowerCase().replace(/\s+/g, '-')}`}
                      className="hover:text-yellow-600 transition-colors"
                      aria-label={`Book taxi from ${cityName} to ${route.destination}`}
                    >
                      {cityName} to {route.destination} Cab
                    </Link>
                  </h3>
                </header>
                
                <div className="p-4">
                  <p className="text-gray-700 mb-4">
                    {route.description}
                  </p>
                  
                  {/* Pricing Information */}
                  <div className="space-y-2 mb-6" role="region" aria-label="Pricing information">
                    {route.prices && route.prices.map((price, priceIndex) => (
                      <div key={priceIndex} className="flex items-center" role="listitem">
                        <div className="h-7 w-7 rounded-full bg-green-500 flex items-center justify-center mr-2" aria-hidden="true">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>
                          {price.price} {price.vehicle} {price.capacity ? `${price.capacity}` : ""}
                        </span>
                      </div>
                    ))}
                    
                    {/* If no prices are defined, show default message */}
                    {(!route.prices || route.prices.length === 0) && (
                      <div className="text-gray-600 italic" role="note">
                        Contact us for current pricing and availability.
                      </div>
                    )}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3" role="group" aria-label="Booking actions">
                    <Link
                      href={`/${cityName.toLowerCase()}/to/${route.destination.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center justify-center gap-2 bg-black hover:bg-yellow-400 hover:text-black text-white py-3 px-4 rounded-md transition-colors font-medium"
                      aria-label={`Book now for ${cityName} to ${route.destination} route`}
                    >
                      <span>BOOK NOW</span>
                    </Link>
                    
                    <button 
                      onClick={handleCallNow}
                      className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md transition-colors font-medium"
                      aria-label={`Call now to book taxi from ${cityName} to ${route.destination}`}
                    >
                      <Phone className="h-5 w-5" aria-hidden="true" />
                      <span>CALL NOW</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CityRoutes;