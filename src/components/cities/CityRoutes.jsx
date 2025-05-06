"use client"; // Add client directive since this component has interactive elements

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
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Popular Routes from {cityName}</h2>
      <p className="text-gray-600">Book your one-way and round trip taxi services from {cityName} to the following destinations:</p>
      
      {routeRows.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {row.map((route, index) => (
            <div 
              key={`${route.destination}-${index}`} 
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <div className="bg-gray-50 py-3 px-4 border-b">
                <h3 className="text-xl font-semibold">
                  <Link 
                    href={`/${cityName.toLowerCase()}/to/${route.destination.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-yellow-600 transition-colors"
                  >
                    {cityName} to {route.destination} Cab
                  </Link>
                </h3>
              </div>
              
              <div className="p-4">
                <p className="text-gray-700 mb-4">
                  {route.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {route.prices && route.prices.map((price, priceIndex) => (
                    <div key={priceIndex} className="flex items-center">
                      <div className="h-7 w-7 rounded-full bg-green-500 flex items-center justify-center mr-2">
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
                    <div className="text-gray-600 italic">
                      Contact us for current pricing and availability.
                    </div>
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href={`/${cityName.toLowerCase()}/to/${route.destination.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center justify-center gap-2 bg-black hover:bg-yellow-400 hover:text-black text-white py-3 px-4 rounded-md transition-colors font-medium"
                  >
                    <span>BOOK NOW</span>
                  </Link>
                  
                  <button 
                    onClick={handleCallNow}
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md transition-colors font-medium"
                  >
                    <Phone className="h-5 w-5" />
                    <span>CALL NOW</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CityRoutes;