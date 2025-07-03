'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Clock, MapPin, Eye, Calendar, Car, Users } from 'lucide-react';
import { cityRoutesData, defaultRoutes } from "@/utilis/cityRoutesData";
import { phoneNumber } from "@/utilis/data";

// Helper function to create route slug
function createRouteSlug(cityName, destination) {
  return `${cityName.toLowerCase()}-to-${destination.toLowerCase().replace(/\s+/g, '-')}`;
}

const CityRoutes = ({ cityName }) => {
  const [activeTab, setActiveTab] = useState('oneWay');
  const [expandedRoutes, setExpandedRoutes] = useState({});

  // Get routes for the current city
  const routes = cityRoutesData[cityName] || defaultRoutes;

  const handleBookNow = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  const getStartingPrice = (route) => {
    if (!route.prices || route.prices.length === 0) return "₹3000";
    const lowestPrice = Math.min(...route.prices.map(p => {
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

  return (
    <div className="space-y-6">
      {/* Header */}
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
        {routes.map((route, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            {/* Route Header */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold">{cityName} to {route.destination}</h3>
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

            {/* Vehicle Options */}
            <div className="space-y-2 mb-4">
              {route.prices && route.prices.slice(0, expandedRoutes[index] ? route.prices.length : 2).map((price, priceIndex) => (
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

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Link
                href={`/${createRouteSlug(cityName, route.destination)}`}
                className="flex-1 bg-black text-white py-2 px-4 rounded-lg text-center text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4" />
                View Details
              </Link>
              <button
                onClick={handleBookNow}
                className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
              >
                Book Now
              </button>
            </div>

            {/* Show all vehicle options link */}
            {route.prices && route.prices.length > 2 && (
              <button
                className="w-full mt-3 text-center text-sm text-gray-500 hover:text-gray-700 transition-colors"
                onClick={() => toggleVehicleOptions(index)}
              >
                {expandedRoutes[index] ? 'Show less vehicle options ˄' : 'Show all vehicle options ˅'}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityRoutes;