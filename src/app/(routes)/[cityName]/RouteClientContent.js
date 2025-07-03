'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Car, ChevronRight, Star, ShieldCheck, Users, ArrowRight, Clock } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { phoneNumber } from "@/utilis/data";

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

  const handleCallNow = () => {
    window.open(`tel:+91${phoneNumber}`, '_blank');
  };
  
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  const getDisplayPrice = (price) => {
    return activeTab === 'oneWay' ? price.price : price.roundTrip;
  };

  const getStartingPrice = () => {
    if (!route.prices || route.prices.length === 0) return "₹3000";
    const prices = route.prices.map(p => {
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

  // Get individual vehicle pricing type
  const getVehiclePricingType = (vehicleIndex) => {
    return vehiclePricingType[vehicleIndex] || 'oneWay';
  };

  // Map vehicle types to images
  const getVehicleImage = (vehicleType) => {
    const vehicleImageMap = {
      'Sedan': '/images/car/car1.png',
      'SUV Ertiga': '/images/car/car2.png', 
      'SUV Innova': '/images/car/car2.png',
      'Traveller 9 Seater': '/images/car/tempo_traveller.jpeg',
      'Traveller 12 Seater': '/images/car/tempo-side2.jpeg',
      'Traveller 17 Seater': '/images/car/luxury_bus.jpeg'
    };
    return vehicleImageMap[vehicleType] || '/images/car/car1.png';
  };

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
                <Link href="/" className="text-white hover:text-yellow-400 transition-colors">
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
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </button>
            
            <button 
              onClick={handleWhatsApp}
              className="bg-black hover:bg-yellow-400 hover:text-black text-white px-6 py-3 rounded-lg flex items-center transition-colors"
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
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 py-3 px-4 border-b flex justify-between items-center">
                <h2 className="text-2xl font-semibold">
                  {formattedCityName} to {formattedDestination} Cab Details
                </h2>
                {/* Trip Type Tabs */}
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
              
              <div className="p-4">
                <p className="text-gray-700 mb-6">
                  {route.description || `Experience a comfortable journey from ${formattedCityName} to ${formattedDestination} with our premium cab service. Our professional drivers ensure a safe and pleasant trip with well-maintained vehicles.`}
                </p>

                {/* Tags */}
                {route.tags && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {route.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Vehicle Pricing with Individual Toggle Options */}
                <div className="space-y-6 mb-6">
                  <h3 className="text-xl font-semibold">
                    Vehicle Options & Pricing for {activeTab === 'oneWay' ? 'One Way' : 'Round Trip'}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {route.prices && route.prices.map((price, index) => {
                      const currentPricingType = getVehiclePricingType(index);
                      const isRoundTrip = currentPricingType === 'roundTrip';
                      
                      return (
                        <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
                          {/* Large Vehicle Image */}
                          <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden bg-gray-50">
                            <Image
                              src={getVehicleImage(price.vehicle)}
                              alt={price.vehicle}
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              onError={(e) => {
                                e.target.src = '/images/car/car1.png';
                              }}
                            />
                          </div>
                          
                          {/* Vehicle Details */}
                          <div className="text-center flex-1 flex flex-col">
                            <h4 className="font-bold text-lg mb-2">{price.vehicle}</h4>
                            
                            {/* Always show capacity info - add default if missing */}
                            <div className="text-gray-500 text-sm flex items-center justify-center mb-4">
                              <Users className="w-4 h-4 mr-1" />
                              {price.capacity || (price.vehicle === 'Sedan' ? '4 guests' : '6+ guests')}
                            </div>
                            
                            {/* Round Trip Toggle */}
                            <div className="flex items-center justify-center mb-4">
                              <label className="flex items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={isRoundTrip}
                                  onChange={() => toggleVehiclePricing(index)}
                                  className="sr-only"
                                />
                                <div className="relative">
                                  <div className={`block w-10 h-6 rounded-full ${isRoundTrip ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                                  <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform ${isRoundTrip ? 'translate-x-4' : ''}`}></div>
                                </div>
                                <span className="ml-2 text-sm text-gray-600">Round Trip?</span>
                              </label>
                            </div>
                            
                            {/* Current Pricing Display */}
                            <div className="mb-4">
                              <div className="flex justify-between items-center">
                                <span className="text-gray-600">
                                  {isRoundTrip ? 'Round Trip:' : 'One Way:'}
                                </span>
                                <span className={`font-semibold ${isRoundTrip ? 'text-blue-600' : 'text-green-600'}`}>
                                  {isRoundTrip ? price.roundTrip : price.price}
                                </span>
                              </div>
                            </div>
                            
                            {/* Large Price Display */}
                            <div className="text-center mb-6 flex-1 flex flex-col justify-center">
                              <div className={`text-3xl font-bold ${isRoundTrip ? 'text-blue-600' : 'text-green-600'}`}>
                                {isRoundTrip ? price.roundTrip : price.price}
                              </div>
                              <div className="text-sm text-gray-500">
                                {isRoundTrip ? 'Round Trip' : 'One Way'}
                              </div>
                            </div>
                            
                            {/* Book Button - Always at bottom */}
                            <div className="mt-auto">
                              <button
                                onClick={handleWhatsApp}
                                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-yellow-400 hover:text-black transition-colors"
                              >
                                Book Now
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {(!route.prices || route.prices.length === 0) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white border border-gray-200 rounded-xl p-6 h-full flex flex-col">
                        <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden bg-gray-50">
                          <Image
                            src="/images/car/car1.png"
                            alt="Sedan"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                        <div className="text-center flex-1 flex flex-col">
                          <h4 className="font-bold text-lg mb-2">Sedan</h4>
                          <div className="text-gray-500 text-sm flex items-center justify-center mb-4">
                            <Users className="w-4 h-4 mr-1" />
                            4 seater
                          </div>
                          <div className="text-3xl font-bold text-green-600 mb-6 flex-1 flex items-center justify-center">₹12/km</div>
                          <div className="mt-auto">
                            <button
                              onClick={handleWhatsApp}
                              className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-yellow-400 hover:text-black transition-colors"
                            >
                              Book Now
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-xl p-6 h-full flex flex-col">
                        <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden bg-gray-50">
                          <Image
                            src="/images/car/car2.png"
                            alt="SUV"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                        <div className="text-center flex-1 flex flex-col">
                          <h4 className="font-bold text-lg mb-2">SUV</h4>
                          <div className="text-gray-500 text-sm flex items-center justify-center mb-4">
                            <Users className="w-4 h-4 mr-1" />
                            6-7 seater
                          </div>
                          <div className="text-3xl font-bold text-green-600 mb-6 flex-1 flex items-center justify-center">₹16/km</div>
                          <div className="mt-auto">
                            <button
                              onClick={handleWhatsApp}
                              className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-yellow-400 hover:text-black transition-colors"
                            >
                              Book Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Highlights */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Why Choose Triveni Cabs for {formattedCityName} to {formattedDestination} Travel
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2 font-semibold mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Pricing Transparency
                  </div>
                  <p className="text-gray-600 text-sm">No hidden charges. Clear pricing and detailed bills for your journey.</p>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2 font-semibold mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Safety First
                  </div>
                  <p className="text-gray-600 text-sm">Verified drivers, well-maintained vehicles, and 24/7 customer support.</p>
                </div>
                
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <div className="flex items-center gap-2 font-semibold mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Comfort & Convenience
                  </div>
                  <p className="text-gray-600 text-sm">Choose from a range of AC vehicles with ample luggage space.</p>
                </div>
              </div>
            </div>
            
            {/* Recommended Vehicles */}
            {/* <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Recommended Vehicles for {formattedCityName} to {formattedDestination}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {vehiclesServices.slice(0, 3).map((vehicle, index) => (
                  <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  
                    <div className="relative h-48">
                      <Image 
                        src={vehicle.image || "/images/car/car1.png"} 
                        alt={vehicle.type}
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={(e) => {
                          e.target.src = "/images/car/car1.png";
                        }}
                      />
                        <div className="absolute bottom-3 left-3 bg-black/60 rounded-full py-1 px-3 text-white flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                        <span className="text-sm">{vehicle.rating || "4.5"}</span>
                      </div>
                    </div>
                   
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold text-lg">{vehicle.type}</h3>
                        <div className="bg-gray-100 px-2 py-1 rounded-full text-sm flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          <span>{vehicle.seating}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-3">
                        Perfect for {formattedCityName} to {formattedDestination} journey
                      </p>
             
                      <button 
                        onClick={handleWhatsApp}
                        className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-yellow-400 hover:text-black transition-colors"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
            
            {/* FAQs */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Frequently Asked Questions
              </h3>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 p-4 font-medium">
                    How much time does it take to travel from {formattedCityName} to {formattedDestination}?
                  </div>
                  <div className="p-4 text-gray-600">
                    The journey from {formattedCityName} to {formattedDestination} typically takes {route.time || estimatedTime} depending on traffic and road conditions.
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 p-4 font-medium">
                    Can I book a one-way cab from {formattedCityName} to {formattedDestination}?
                  </div>
                  <div className="p-4 text-gray-600">
                    Yes, Triveni Cabs offers affordable one-way cab services from {formattedCityName} to {formattedDestination}. You only pay for one direction.
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 p-4 font-medium">
                    Do you provide pickup from my location in {formattedCityName}?
                  </div>
                  <div className="p-4 text-gray-600">
                    Yes, we provide doorstep pickup from any location in {formattedCityName} and drop you at your desired location in {formattedDestination}.
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 p-4 font-medium">
                    What types of vehicles are available for {formattedCityName} to {formattedDestination} travel?
                  </div>
                  <div className="p-4 text-gray-600">
                    We offer a range of vehicles including Sedans, SUVs, and Tempo Travellers depending on your group size and comfort preferences.
                  </div>
                </div>
              </div>
            </div>
            
            {/* Related Routes */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Other Popular Routes From {formattedCityName}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {routes.filter(r => r.destination !== formattedDestination).map((route, index) => (
                  <Link 
                    key={index}
                    href={`/${createRouteSlug(cityName, route.destination)}`}
                    className="p-4 border border-gray-200 rounded-lg hover:border-yellow-400 hover:bg-yellow-50 transition-colors flex items-center justify-between"
                  >
                    <div className="flex-1">
                      <div className="font-medium">{formattedCityName} to {route.destination}</div>
                      <div className="text-sm text-gray-600">{route.distance || '---'}</div>
                      {route.time && (
                        <div className="text-xs text-gray-500">{route.time}</div>
                      )}
                    </div>
                    <ArrowRight className="w-4 h-4 text-yellow-500 flex-shrink-0 ml-2" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}