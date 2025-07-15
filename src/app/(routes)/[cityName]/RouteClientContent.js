'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Car, ChevronRight, Star, ShieldCheck, Users, ArrowRight, Clock, Info } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { phoneNumber } from "@/utilis/data";
import { getRouteOffices } from "@/utilis/officeLocations";
import OfficeLocations from "@/components/cities/OfficeLocations";

// Helper function to create route slug (replicated here since we can't import from server component)
function createRouteSlug(cityName, destination) {
  return `${cityName.toLowerCase()}-to-${destination.toLowerCase().replace(/\s+/g, '-')}`;
}

export default function RouteClientContent({
  cityName,
  formattedCityName,
  destination, 
  formattedDestination,
  estimatedDistance,
  estimatedTime,
  route,
  routes,
  vehiclesServices
}) {
  const [activeTab, setActiveTab] = useState('oneWay');
  const [showAllVehicles, setShowAllVehicles] = useState(false);
  const [vehiclePricingType, setVehiclePricingType] = useState({});

  // Get office locations for this route
  const routeOffices = getRouteOffices(formattedCityName, formattedDestination);

  const handleCallNow = () => {
    window.open(`tel:+91${phoneNumber}`, '_blank');
  };
  
  const handleWhatsApp = () => {
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

  const getStartingPrice = () => {
    if (!route.prices || route.prices.length === 0) return "₹3000";
    
    const filteredPrices = getFilteredVehicles(route.prices);
    if (filteredPrices.length === 0) return "₹3000";
    
    const prices = filteredPrices.map(p => {
      const price = activeTab === 'oneWay' ? p.price : p.roundTrip;
      return parseInt(price.replace('₹', ''));
    });
    return `₹${Math.min(...prices)}`;
  };

  // Toggle individual vehicle pricing type
  const toggleVehiclePricing = (vehicleIndex) => {
    setVehiclePricingType(prev => ({
      ...prev,
      [vehicleIndex]: prev[vehicleIndex] === 'roundTrip' ? 'oneWay' : 'roundTrip'
    }));
  };

  // Get individual vehicle pricing type - now syncs with main tab
  const getVehiclePricingType = (vehicleIndex) => {
    // If user hasn't specifically set this vehicle's pricing, use the main tab
    if (vehiclePricingType[vehicleIndex] === undefined) {
      return activeTab;
    }
    return vehiclePricingType[vehicleIndex];
  };

  // Reset individual toggles when main tab changes
  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
    // Reset all individual vehicle toggles to match the new main tab
    setVehiclePricingType({});
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

  // FIXED: Helper function to create unique vehicle headings
  const getVehicleHeading = (vehicleType, index) => {
    const headingVariations = [
      `${vehicleType} Cab Service`,
      `Book ${vehicleType} Online`,
      `${vehicleType} Rental Option`,
      `Premium ${vehicleType} Service`
    ];
    return headingVariations[index % headingVariations.length];
  };

  // FIXED: Helper function to create unique FAQ question variations
  const getFAQVariation = (baseQuestion, cityName, destination, index) => {
    const variations = [
      baseQuestion,
      baseQuestion.replace('travel from', 'go from'),
      baseQuestion.replace('much time', 'long'),
      baseQuestion.replace('does it take', 'is required')
    ];
    return variations[index % variations.length];
  };

  const filteredVehicles = route.prices ? getFilteredVehicles(route.prices) : [];
  const roundTripOnlyVehicles = route.prices ? getRoundTripOnlyVehicles(route.prices) : [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Breadcrumb with Hero Banner */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-32"
        style={{
          backgroundImage: "url('/images/about/about_banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link 
                  href="/" 
                  className="text-white hover:text-yellow-400 transition-colors"
                  aria-label="Return to Triveni Cabs homepage"
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-1 text-white" />
                <span className="text-yellow-400">{formattedCityName} to {formattedDestination}</span>
              </li>
            </ol>
          </nav>

          <h1 className="text-4xl font-bold text-white mb-4">
            {formattedCityName} to {formattedDestination} Cab Service
          </h1>
          
          <p className="text-xl text-white max-w-3xl">
            Book reliable and affordable taxi service from {formattedCityName} to {formattedDestination} with Triveni Cabs
          </p>
          
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg text-white">
              <Car className="w-5 h-5 mr-2 text-yellow-400" />
              <span>Distance: ~{route.distance || estimatedDistance}</span>
            </div>
            {(route.time || estimatedTime) && (
              <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg text-white">
                <Clock className="w-5 h-5 mr-2 text-yellow-400" />
                <span>Estimated time: {route.time || estimatedTime}</span>
              </div>
            )}
            <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg text-white">
              <span>Starting from: <span className="font-bold text-yellow-400">{getStartingPrice()}</span></span>
            </div>
          </div>
          
          <div className="flex gap-4 mt-8">
            <button 
              onClick={handleCallNow}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center transition-colors"
              aria-label={`Call +91${phoneNumber} to book cab from ${formattedCityName} to ${formattedDestination}`}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </button>
            
            <button 
              onClick={handleWhatsApp}
              className="bg-black hover:bg-yellow-400 hover:text-black text-white px-6 py-3 rounded-lg flex items-center transition-colors"
              aria-label={`WhatsApp booking for ${formattedCityName} to ${formattedDestination} cab service`}
            >
              <BsWhatsapp className="w-5 h-5 mr-2" />
              Book on WhatsApp
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="p-6 space-y-8">
            {/* Route Details */}
            <section className="border border-gray-200 rounded-lg overflow-hidden">
              <header className="bg-gray-50 py-3 px-4 border-b flex justify-between items-center">
                <h2 className="text-2xl font-semibold">
                  {formattedCityName} to {formattedDestination} Cab Details
                </h2>
                {/* Trip Type Tabs */}
                <div className="flex bg-gray-100 rounded-lg p-1" role="tablist">
                  <button
                    onClick={() => handleTabChange('oneWay')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === 'oneWay'
                        ? 'bg-white text-black shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    role="tab"
                    aria-selected={activeTab === 'oneWay'}
                    aria-label="Select one way trip pricing"
                  >
                    One Way
                  </button>
                  <button
                    onClick={() => handleTabChange('roundTrip')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === 'roundTrip'
                        ? 'bg-white text-black shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    role="tab"
                    aria-selected={activeTab === 'roundTrip'}
                    aria-label="Select round trip pricing"
                  >
                    Round Trip
                  </button>
                </div>
              </header>
              
              <div className="p-4">
                <p className="text-gray-700 mb-6">
                  {route.description || `Experience a comfortable journey from ${formattedCityName} to ${formattedDestination} with our premium cab service. Our professional drivers ensure a safe and pleasant trip with well-maintained vehicles.`}
                </p>

                {/* Tags */}
                {route.tags && (
                  <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Route features">
                    {route.tags.map((tag, index) => (
                      <span
                        key={index}
                        role="listitem"
                        className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Vehicle Pricing - FIXED: Better heading hierarchy */}
                <section className="space-y-6 mb-6">
                  <h3 className="text-xl font-semibold">
                    Vehicle Options & Pricing for {activeTab === 'oneWay' ? 'One Way' : 'Round Trip'}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Available vehicles">
                    {filteredVehicles.length > 0 && filteredVehicles.map((price, index) => {
                      const currentPricingType = getVehiclePricingType(index);
                      const isRoundTrip = currentPricingType === 'roundTrip';
                      
                      return (
                        <article key={index} role="listitem" className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
                          {/* Large Vehicle Image */}
                          <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden bg-gray-50">
                            <Image
                              src={getVehicleImage(price.vehicle)}
                              alt={`${price.vehicle} available for ${formattedCityName} to ${formattedDestination} route`}
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              onError={(e) => {
                                e.target.src = '/images/car/car1.png';
                              }}
                            />
                          </div>
                          
                          {/* Vehicle Details - FIXED: Unique headings */}
                          <div className="text-center flex-1 flex flex-col">
                            <h4 className="font-bold text-lg mb-2">{getVehicleHeading(price.vehicle, index)}</h4>
                            
                            {/* Always show capacity info */}
                            <div className="text-gray-500 text-sm flex items-center justify-center mb-4">
                              <Users className="w-4 h-4 mr-1" />
                              {price.capacity || 
                                (price.vehicle === 'Sedan' ? '4 guests' : 
                                 price.vehicle.includes('Ertiga') ? '6 guests' :
                                 price.vehicle.includes('Innova') ? '7 guests' :
                                 price.vehicle === 'Tempo Traveller' || price.vehicle.includes('Traveller') ? '25 guests' :
                                 price.vehicle === 'Bus' ? '35 guests' : '6+ guests')}
                            </div>
                            
                            {/* Round Trip Toggle */}
                            <div className="flex items-center justify-center mb-4">
                              <label className="flex items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={isRoundTrip}
                                  onChange={() => toggleVehiclePricing(index)}
                                  className="sr-only"
                                  aria-label={`Toggle round trip pricing for ${price.vehicle}`}
                                />
                                <div className="relative">
                                  <div className={`block w-10 h-6 rounded-full ${isRoundTrip ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                                  <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform ${isRoundTrip ? 'translate-x-4' : ''}`}></div>
                                </div>
                                <span className="ml-2 text-sm text-gray-600">Round Trip?</span>
                              </label>
                            </div>
                            
                            {/* Large Price Display - Based on Individual Toggle */}
                            <div className="text-center mb-6 flex-1 flex flex-col justify-center">
                              <div className={`text-3xl font-bold ${isRoundTrip ? 'text-blue-600' : 'text-green-600'}`}>
                                {isRoundTrip ? price.roundTrip : price.price}
                              </div>
                              <div className="text-sm text-gray-500">
                                {isRoundTrip ? 'Round Trip Price' : 'One Way Price'}
                              </div>
                            </div>
                            
                            {/* Book Button - Always at bottom */}
                            <div className="mt-auto">
                              <button
                                onClick={handleWhatsApp}
                                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-yellow-400 hover:text-black transition-colors"
                                aria-label={`Book ${price.vehicle} for ${formattedCityName} to ${formattedDestination} ${isRoundTrip ? 'round trip' : 'one way trip'}`}
                              >
                                Book Now
                              </button>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>

                  {/* Fallback vehicles if no pricing data */}
                  {(!route.prices || filteredVehicles.length === 0) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <article className="bg-white border border-gray-200 rounded-xl p-6 h-full flex flex-col">
                        <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden bg-gray-50">
                          <Image
                            src="/images/car/car1.png"
                            alt="Sedan cab service available"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                        <div className="text-center flex-1 flex flex-col">
                          <h4 className="font-bold text-lg mb-2">Sedan Cab Service</h4>
                          <div className="text-gray-500 text-sm flex items-center justify-center mb-4">
                            <Users className="w-4 h-4 mr-1" />
                            4 seater capacity
                          </div>
                          <div className="text-3xl font-bold text-green-600 mb-6 flex-1 flex items-center justify-center">₹12/km</div>
                          <div className="mt-auto">
                            <button
                              onClick={handleWhatsApp}
                              className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-yellow-400 hover:text-black transition-colors"
                              aria-label="Book sedan cab service for this route"
                            >
                              Book Now
                            </button>
                          </div>
                        </div>
                      </article>
                      
                      <article className="bg-white border border-gray-200 rounded-xl p-6 h-full flex flex-col">
                        <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden bg-gray-50">
                          <Image
                            src="/images/car/car2.png"
                            alt="SUV cab service available"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                        <div className="text-center flex-1 flex flex-col">
                          <h4 className="font-bold text-lg mb-2">SUV Cab Service</h4>
                          <div className="text-gray-500 text-sm flex items-center justify-center mb-4">
                            <Users className="w-4 h-4 mr-1" />
                            6-7 seater capacity
                          </div>
                          <div className="text-3xl font-bold text-green-600 mb-6 flex-1 flex items-center justify-center">₹16/km</div>
                          <div className="mt-auto">
                            <button
                              onClick={handleWhatsApp}
                              className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-yellow-400 hover:text-black transition-colors"
                              aria-label="Book SUV cab service for this route"
                            >
                              Book Now
                            </button>
                          </div>
                        </div>
                      </article>
                    </div>
                  )}
                </section>

                {/* Round Trip Only Vehicles Information Section */}
                {activeTab === 'oneWay' && roundTripOnlyVehicles.length > 0 && (
                  <section className="space-y-4 mb-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <div className="flex items-start gap-3">
                        <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-lg font-semibold text-blue-900 mb-2">
                            Additional Vehicles Available for Round Trips
                          </h4>
                          <p className="text-blue-700 mb-4">
                            For better value and comfort on longer journeys, we also offer larger vehicles exclusively for round-trip bookings:
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" role="list" aria-label="Round trip only vehicles">
                            {roundTripOnlyVehicles.map((vehicle, index) => (
                              <div key={index} role="listitem" className="bg-white rounded-lg p-4 border border-blue-200">
                                <div className="flex items-center gap-3">
                                  <div className="relative w-16 h-12 rounded overflow-hidden bg-gray-50 flex-shrink-0">
                                    <Image
                                      src={getVehicleImage(vehicle.vehicle)}
                                      alt={`${vehicle.vehicle} for round trip service`}
                                      fill
                                      className="object-contain"
                                      sizes="64px"
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <h5 className="font-semibold text-gray-900">{vehicle.vehicle}</h5>
                                    <div className="text-sm text-gray-600 flex items-center">
                                      <Users className="w-3 h-3 mr-1" />
                                      {vehicle.capacity || 
                                        (vehicle.vehicle === 'Tempo Traveller' || vehicle.vehicle.includes('Traveller') ? '25 guests' :
                                         vehicle.vehicle === 'Bus' ? '35 guests' : '25+ guests')}
                                    </div>
                                    <div className="text-sm font-medium text-blue-600">
                                      Round Trip: {vehicle.roundTrip}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          <div className="mt-4 pt-4 border-t border-blue-200">
                            <p className="text-sm text-blue-600 font-medium">
                              💡 Switch to Round Trip above to see all available vehicles and book these larger options!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                )}
              </div>
            </section>

            {/* Office Locations Section - Only show if offices exist */}
            <OfficeLocations 
              originCity={formattedCityName}
              destinationCity={formattedDestination}
              offices={routeOffices}
            />
            
            {/* Highlights - FIXED: Better structure */}
            <section className="space-y-4">
              <h3 className="text-xl font-semibold">
                Why Choose Triveni Cabs for {formattedCityName} to {formattedDestination} Travel
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4" role="list" aria-label="Service highlights">
                <article role="listitem" className="p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2 font-semibold mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Transparent Pricing
                  </div>
                  <p className="text-gray-600 text-sm">No hidden charges. Clear pricing and detailed bills for your journey from {formattedCityName} to {formattedDestination}.</p>
                </article>
                
                <article role="listitem" className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2 font-semibold mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Safety First Approach
                  </div>
                  <p className="text-gray-600 text-sm">Verified drivers, well-maintained vehicles, GPS tracking, and 24/7 customer support for your journey.</p>
                </article>
                
                <article role="listitem" className="p-4 bg-yellow-50 rounded-lg">
                  <div className="flex items-center gap-2 font-semibold mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Comfort & Convenience
                  </div>
                  <p className="text-gray-600 text-sm">Choose from AC vehicles with ample luggage space and flexible pickup locations.</p>
                </article>
              </div>
            </section>
            
            {/* FAQs - FIXED: Better structure and unique questions */}
            <section className="space-y-4">
              <h3 className="text-xl font-semibold">
                Frequently Asked Questions - {formattedCityName} to {formattedDestination}
              </h3>
              
              <div className="space-y-4" role="list" aria-label="Frequently asked questions">
                <article role="listitem" className="border border-gray-200 rounded-lg overflow-hidden">
                  <h4 className="bg-gray-50 p-4 font-medium">
                    How long does the journey take from {formattedCityName} to {formattedDestination}?
                  </h4>
                  <div className="p-4 text-gray-600">
                    The journey from {formattedCityName} to {formattedDestination} typically takes {route.time || estimatedTime} depending on traffic conditions and route taken.
                  </div>
                </article>
                
                <article role="listitem" className="border border-gray-200 rounded-lg overflow-hidden">
                  <h4 className="bg-gray-50 p-4 font-medium">
                    Can I book a one-way cab from {formattedCityName} to {formattedDestination}?
                  </h4>
                  <div className="p-4 text-gray-600">
                    Yes, Triveni Cabs offers affordable one-way cab services from {formattedCityName} to {formattedDestination}. You only pay for one direction with no return charges.
                  </div>
                </article>
                
                <article role="listitem" className="border border-gray-200 rounded-lg overflow-hidden">
                  <h4 className="bg-gray-50 p-4 font-medium">
                    Do you provide doorstep pickup service in {formattedCityName}?
                  </h4>
                  <div className="p-4 text-gray-600">
                    Yes, we provide convenient doorstep pickup from any location in {formattedCityName} and drop you at your preferred destination in {formattedDestination}.
                  </div>
                </article>
                
                <article role="listitem" className="border border-gray-200 rounded-lg overflow-hidden">
                  <h4 className="bg-gray-50 p-4 font-medium">
                    What vehicle types are available for {formattedCityName} to {formattedDestination} route?
                  </h4>
                  <div className="p-4 text-gray-600">
                    We offer Sedans, SUVs (Ertiga, Innova) for both one-way and round trips. For round trips, we also provide Tempo Travellers and Buses for larger groups.
                  </div>
                </article>

                {roundTripOnlyVehicles.length > 0 && (
                  <article role="listitem" className="border border-gray-200 rounded-lg overflow-hidden">
                    <h4 className="bg-gray-50 p-4 font-medium">
                      Why are larger vehicles only available for round trips?
                    </h4>
                    <div className="p-4 text-gray-600">
                      Larger vehicles like Tempo Travellers and Buses are more cost-effective for round-trip journeys, ensuring better value for money and optimal vehicle utilization.
                    </div>
                  </article>
                )}
              </div>
            </section>
            
            {/* Related Routes - FIXED: Better structure and anchor texts */}
            <section className="space-y-4">
              <h3 className="text-xl font-semibold">
                Other Popular Routes From {formattedCityName}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4" role="list" aria-label="Related cab routes">
                {routes.filter(r => r.destination !== formattedDestination).slice(0, 8).map((routeItem, index) => (
                  <Link 
                    key={index}
                    href={`/${createRouteSlug(cityName, routeItem.destination)}`}
                    role="listitem"
                    className="p-4 border border-gray-200 rounded-lg hover:border-yellow-400 hover:bg-yellow-50 transition-colors flex items-center justify-between group"
                    aria-label={`Book cab from ${formattedCityName} to ${routeItem.destination} - Distance: ${routeItem.distance || 'Contact for details'} - Estimated time: ${routeItem.time || 'varies'}`}
                  >
                    <div className="flex-1">
                      <div className="font-medium group-hover:text-yellow-700">
                        {formattedCityName} to {routeItem.destination}
                      </div>
                      <div className="text-sm text-gray-600">
                        {routeItem.distance || 'Distance varies'}
                      </div>
                      {routeItem.time && (
                        <div className="text-xs text-gray-500">
                          Duration: {routeItem.time}
                        </div>
                      )}
                    </div>
                    <ArrowRight className="w-4 h-4 text-yellow-500 flex-shrink-0 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}