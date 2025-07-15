'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Clock, MapPin, Eye, Calendar, Car, Users, Info } from 'lucide-react';
import Image from 'next/image';
import { cityRoutesData, defaultRoutes } from "@/utilis/cityRoutesData";
import { phoneNumber } from "@/utilis/data";

// Helper function to create route slug
function createRouteSlug(cityName, destination) {
  return `${cityName.toLowerCase()}-to-${destination.toLowerCase().replace(/\s+/g, '-')}`;
}

const CityRoutes = ({ cityName }) => {
  const [activeTab, setActiveTab] = useState('oneWay');
  const [expandedRoutes, setExpandedRoutes] = useState({});

  // Get routes for the current city - FIXED: Proper fallback handling
  const routes = cityRoutesData[cityName] || defaultRoutes[cityName] || [];

  const handleBookNow = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  // Filter vehicles based on trip type
  const getFilteredVehicles = (prices) => {
    if (!prices) return [];
    
    if (activeTab === 'oneWay') {
      // For one-way trips, exclude Bus and Tempo Traveller
      return prices.filter(price => 
        !price.vehicle.toLowerCase().includes('bus') && 
        !price.vehicle.toLowerCase().includes('tempo')
      );
    } else {
      // For round trips, show all vehicles
      return prices;
    }
  };

  // Get vehicles that are only available for round trips
  const getRoundTripOnlyVehicles = (prices) => {
    if (!prices) return [];
    
    return prices.filter(price => 
      price.vehicle.toLowerCase().includes('bus') || 
      price.vehicle.toLowerCase().includes('tempo')
    );
  };

  const getStartingPrice = (route) => {
    const filteredPrices = getFilteredVehicles(route.prices);
    if (!filteredPrices || filteredPrices.length === 0) return "₹3000";
    
    const lowestPrice = Math.min(...filteredPrices.map(p => {
      const price = activeTab === 'oneWay' ? p.price : p.roundTrip;
      return parseInt(price.replace('₹', ''));
    }));
    return `₹${lowestPrice}`;
  };

  const toggleVehicleOptions = (index) => {
    setExpandedRoutes(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Map vehicle types to images
  const getVehicleImage = (vehicleType) => {
    const vehicleImageMap = {
      'Sedan': '/images/car/car1.png',
      'SUV Ertiga': '/images/car/car2.png', 
      'SUV Innova': '/images/car/car2.png',
      'Tempo Traveller': '/images/car/tempo_traveller.jpeg',
      'Traveller 9 Seater': '/images/car/tempo_traveller.jpeg',
      'Traveller 12 Seater': '/images/car/tempo_traveller.jpeg', 
      'Traveller 17 Seater': '/images/car/tempo_traveller.jpeg',
      'Bus': '/images/car/luxury_bus.jpeg'
    };
    return vehicleImageMap[vehicleType] || '/images/car/car1.png';
  };

  // FIXED: Helper function to create unique route headings
  const getRouteHeading = (cityName, destination, index) => {
    const headingVariations = [
      `${cityName} to ${destination} Route`,
      `Travel from ${cityName} to ${destination}`,
      `${cityName}-${destination} Cab Booking`,
      `Journey: ${cityName} → ${destination}`
    ];
    return headingVariations[index % headingVariations.length];
  };

  // Add a check for empty routes
  if (!routes || routes.length === 0) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Popular Routes from {cityName}</h2>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
          <p className="text-gray-600">No routes available for {cityName} at the moment.</p>
          <p className="text-sm text-gray-500 mt-2">Please contact us for custom routes and pricing.</p>
          <button
            onClick={handleBookNow}
            className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header - FIXED: Changed to h2 for better hierarchy */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Popular Routes from {cityName}</h2>
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('oneWay')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'oneWay'
                ? 'bg-white text-black shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            One Way
          </button>
          <button
            onClick={() => setActiveTab('roundTrip')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'roundTrip'
                ? 'bg-white text-black shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Round Trip
          </button>
        </div>
      </div>

      {/* Routes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {routes.map((route, index) => {
          const filteredVehicles = getFilteredVehicles(route.prices);
          const roundTripOnlyVehicles = getRoundTripOnlyVehicles(route.prices);
          const vehiclesToShow = expandedRoutes[index] ? filteredVehicles : filteredVehicles.slice(0, 2);

          return (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              {/* Route Header - FIXED: Unique headings */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{getRouteHeading(cityName, route.destination, index)}</h3>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{route.distance}</span>
                    </div>
                    {route.time && (
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{route.time}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Starting from</div>
                  <div className="text-2xl font-bold text-green-600">
                    {getStartingPrice(route)}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4">{route.description}</p>

              {/* Tags */}
              {route.tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {route.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Vehicle Options - FIXED: Reduced heading levels */}
              <div className="space-y-2 mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Available Vehicles</h4>
                {vehiclesToShow.map((price, priceIndex) => (
                  <div key={priceIndex} className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium">{price.vehicle}</span>
                      {price.capacity && (
                        <span className="text-xs text-gray-500">({price.capacity})</span>
                      )}
                    </div>
                    <div className="font-semibold">
                      {activeTab === 'oneWay' ? price.price : price.roundTrip}
                    </div>
                  </div>
                ))}
              </div>

              {/* Round Trip Only Vehicles Information */}
              {activeTab === 'oneWay' && roundTripOnlyVehicles.length > 0 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <div className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-blue-700 font-medium mb-2">
                        Additional vehicles available for round trips:
                      </p>
                      <div className="space-y-1">
                        {roundTripOnlyVehicles.map((vehicle, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <div className="relative w-8 h-6 rounded overflow-hidden bg-white flex-shrink-0">
                              <Image
                                src={getVehicleImage(vehicle.vehicle)}
                                alt={vehicle.vehicle}
                                fill
                                className="object-contain"
                                sizes="32px"
                              />
                            </div>
                            <span className="font-medium text-blue-800">{vehicle.vehicle}</span>
                            <span className="text-blue-600">- {vehicle.roundTrip}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-blue-600 mt-2">
                        💡 Switch to "Round Trip" to book these options!
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Link
                  href={`/${createRouteSlug(cityName, route.destination)}`}
                  className="flex-1 bg-black text-white py-2 px-4 rounded-lg text-center text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  aria-label={`View detailed information for ${cityName} to ${route.destination} route`}
                >
                  <Eye className="w-4 h-4" />
                  View Details
                </Link>
                <button
                  onClick={handleBookNow}
                  className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                  aria-label={`Book cab from ${cityName} to ${route.destination}`}
                >
                  Book Now
                </button>
              </div>

              {/* Show all vehicle options link */}
              {filteredVehicles.length > 2 && (
                <button
                  className="w-full mt-3 text-center text-sm text-gray-500 hover:text-gray-700 transition-colors"
                  onClick={() => toggleVehicleOptions(index)}
                  aria-label={expandedRoutes[index] ? 'Show fewer vehicle options' : 'Show all vehicle options'}
                >
                  {expandedRoutes[index] ? 'Show less vehicle options ˄' : 'Show all vehicle options ˅'}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CityRoutes;