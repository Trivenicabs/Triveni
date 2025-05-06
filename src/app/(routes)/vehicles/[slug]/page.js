'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Users, Star, ShieldCheck, Calendar, Clock, Map, Shield, 
  ChevronRight, ChevronLeft, Info, DollarSign, CheckCircle2,
  SquareChartGantt, LocateIcon
} from "lucide-react";

// Vehicle details page with client-side interactions
export default function VehicleDetailsPage({ params }) {
  const [vehicleData, setVehicleData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedSeating, setSelectedSeating] = useState(null);
  const [tempoOptions, setTempoOptions] = useState([]);
  const [adjustedPrices, setAdjustedPrices] = useState(null);

  // Fetch vehicle data on component mount
  useEffect(() => {
    const fetchVehicleData = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be an API call
        // For demo purposes, we're using static data
        const data = await getVehicleData(params.slug);
        const tempoData = await getTempoOptions();
        setVehicleData(data);
        setTempoOptions(tempoData);
        setAdjustedPrices(data);
      } catch (error) {
        console.error("Error fetching vehicle data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVehicleData();
  }, [params.slug]);

  // Handle seating selection change
  useEffect(() => {
    if (vehicleData && selectedSeating) {
      const multiplier = selectedSeating.priceMultiplier;
      setAdjustedPrices({
        ...vehicleData,
        baseFare: `₹${Math.round(
          parseInt(vehicleData.baseFare.replace("₹", "")) * multiplier
        )}`,
        perKm: `₹${Math.round(
          parseInt(vehicleData.perKm.replace("₹", "")) * multiplier
        )}`,
        perDay: `₹${Math.round(
          parseInt(vehicleData.perDay.replace("₹", "")) * multiplier
        )}`,
      });
    }
  }, [selectedSeating, vehicleData]);

  // Gallery navigation
  const nextImage = () => {
    if (!vehicleData?.gallery) return;
    setCurrentImageIndex((prev) =>
      prev === vehicleData.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!vehicleData?.gallery) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? vehicleData.gallery.length - 1 : prev - 1
    );
  };

  // Seating options based on vehicle type
  const getSeatingOptions = (slug) => {
    const seatingOptions = {
      "tempo-traveller": [
        { seats: 12, priceMultiplier: 1 },
        { seats: 16, priceMultiplier: 1.2 },
        { seats: 20, priceMultiplier: 1.4 },
        { seats: 26, priceMultiplier: 1.6 },
      ],
      "bus": [
        { seats: 35, priceMultiplier: 1 },
        { seats: 40, priceMultiplier: 1.15 },
        { seats: 45, priceMultiplier: 1.25 },
        { seats: 49, priceMultiplier: 1.3 },
        { seats: 55, priceMultiplier: 1.45 },
      ],
      "luxury-bus": [
        { seats: 35, priceMultiplier: 1 },
        { seats: 40, priceMultiplier: 1.15 },
        { seats: 45, priceMultiplier: 1.25 },
        { seats: 49, priceMultiplier: 1.3 },
        { seats: 55, priceMultiplier: 1.45 },
      ],
    };
    return seatingOptions[slug] || null;
  };

  // Handle booking button click
  const handleBooking = () => {
    window.open(`https://wa.me/917668570551`, "_blank");
  };

  // Loading state
  if (isLoading || !vehicleData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading vehicle details...</p>
        </div>
      </div>
    );
  }

  // Get available seating options for this vehicle
  const availableSeatingOptions = getSeatingOptions(params.slug);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FFFCD1]">
      {/* Hero Banner */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-32"
        aria-label="Breadcrumb"
        style={{
          backgroundImage: `url('/images/about/about_banner.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-white hover:text-yellow-600">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center font-semibold">
                <ChevronRight className="w-4 h-4 mx-2 text-white" />
                <span className="text-yellow-400 text-xl">Vehicle Details</span>
              </div>
            </li>
          </ol>
          <h1 className="text-3xl tracking-[0.07rem] md:text-3xl font-bold text-white mt-8">
            Book with Ease, Travel with Joy.
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Vehicle Gallery */}
          <div className="relative h-96">
            <Image
              src={vehicleData.gallery?.[currentImageIndex] || vehicleData.image}
              alt={vehicleData.type}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1280px"
            />
            
            {/* Gallery Navigation */}
            {vehicleData.gallery?.length > 1 && (
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                  onClick={prevImage}
                  className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            )}
            
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h1 className="text-4xl font-bold mb-4">
                {vehicleData.type}
              </h1>
              <div className="flex items-center max-sm:flex-col gap-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="ml-2 font-semibold">
                    {vehicleData.rating}
                  </span>
                  <span className="ml-1">
                    ({vehicleData.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5" />
                  <span className="ml-2">
                    {selectedSeating ? `${selectedSeating.seats} Seater` : vehicleData.seating}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Thumbnails */}
          {vehicleData.gallery?.length > 0 && (
            <div className="p-4 bg-gray-50">
              <div className="flex gap-4 overflow-x-auto pb-2 scroll-smooth">
                {vehicleData.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 transition-all ${
                      currentImageIndex === index 
                        ? 'ring-2 ring-yellow-400 scale-105' 
                        : 'opacity-80 hover:opacity-100'
                    }`}
                  >
                    <div className="relative w-60 h-36">
                      <Image
                        src={image}
                        alt={`${vehicleData.type} view ${index + 1}`}
                        fill
                        className="object-cover rounded"
                        sizes="240px"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Tab Navigation */}
          <div className="p-4 md:p-8">
            <div className="border-b border-gray-100 mb-6 overflow-x-auto">
              <nav className="flex space-x-8 min-w-max pb-1">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`md:pb-4 pb-1.5 px-0 md:px-1 ${
                    activeTab === 'overview'
                      ? 'border-b-2 border-yellow-400 md:text-lg text-sm text-yellow-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('comfort')}
                  className={`md:pb-4 pb-1.5 px-0 md:px-1 ${
                    activeTab === 'comfort'
                      ? 'border-b-2 border-yellow-400 md:text-lg text-sm text-yellow-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Comfort
                </button>
                <button
                  onClick={() => setActiveTab('pricing')}
                  className={`md:pb-4 pb-1.5 px-0 md:px-1 ${
                    activeTab === 'pricing'
                      ? 'border-b-2 border-yellow-400 md:text-lg text-sm text-yellow-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Pricing & Taxes
                </button>
                <button
                  onClick={() => setActiveTab('maintenance')}
                  className={`md:pb-4 pb-1.5 px-0 md:px-1 ${
                    activeTab === 'maintenance'
                      ? 'border-b-2 border-yellow-400 md:text-lg text-sm text-yellow-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Maintenance
                </button>
              </nav>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <h2 className="text-2xl font-semibold mb-6">
                    Vehicle Details
                  </h2>
                  <p className="text-gray-600 mb-8">
                    {vehicleData.description}
                  </p>

                  {/* Seating Options */}
                  {availableSeatingOptions && (
                    <div className="mb-8">
                      <label className="block text-start text-sm font-medium text-gray-700 mb-2">
                        Select Seating Capacity
                      </label>
                      <select
                        value={selectedSeating?.seats || ""}
                        onChange={(e) => {
                          const seats = parseInt(e.target.value);
                          setSelectedSeating(
                            availableSeatingOptions.find(
                              (opt) => opt.seats === seats
                            ) || null
                          );
                        }}
                        className="w-full p-2 focus:outline-none py-2 border border-gray-300 rounded-md"
                      >
                        <option value="">Choose seating capacity</option>
                        {availableSeatingOptions.map((option) => (
                          <option key={option.seats} value={option.seats}>
                            {option.seats} Seater
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <p className="text-gray-600 text-sm mb-1">Per KM</p>
                      <p className="font-bold text-lg">
                        {adjustedPrices.perKm}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <p className="text-gray-600 text-sm mb-1">Driver</p>
                      <p className="font-bold text-lg">
                        {adjustedPrices.driverCharges}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <p className="text-gray-600 text-sm mb-1">
                        Per Day KM
                      </p>
                      <p className="font-bold text-lg">
                        {adjustedPrices.perDayLimit}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <p className="text-gray-600 text-sm mb-1">
                        Cancellation Fee
                      </p>
                      <p className="font-bold text-lg">
                        {adjustedPrices.cancellationCharge}
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-4">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {vehicleData.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2"
                      >
                        <Shield className="w-5 h-5 text-yellow-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Booking Card */}
                <div>
                  <div className="bg-gray-50 p-6 rounded-2xl sticky top-8">
                    <h3 className="text-2xl font-semibold mb-6">
                      Quick Booking
                    </h3>
                    <button
                      onClick={handleBooking}
                      className="block w-full bg-black text-white py-2 rounded-xl font-semibold text-center hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                    >
                      Book Now
                    </button>
                    <div className="mt-8 space-y-4">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-yellow-400" />
                        <span>Instant Confirmation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-yellow-400" />
                        <span>Free Cancellation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Map className="w-5 h-5 text-yellow-400" />
                        <span>24/7 Customer Support</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Need help?</h4>
                      <Link 
                        href="tel:+917668570551"
                        className="text-yellow-600 font-semibold hover:text-yellow-800 transition-colors"
                      >
                        Call +91 7668 570551
                      </Link>
                    </div>
                  </div>

                  {/* Local Sightseeing Section */}
                  {vehicleData.localSightseeing && vehicleData.localSightseeing.length > 0 && (
                    <div className="mt-8 border-t pt-6">
                      <h3 className="text-xl font-semibold mb-6 px-4 md:px-0">
                        Local Sightseeing Packages
                      </h3>
                      <div className="space-y-4 md:space-y-6">
                        {vehicleData.localSightseeing.map((pkg, index) => (
                          <div
                            key={index}
                            className="bg-white p-4 md:p-5 rounded-xl border border-gray-100 hover:border-yellow-400 transition-colors duration-300 mx-4 md:mx-0"
                          >
                            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                              <div className="flex items-center gap-3 md:gap-5">
                                <div className="bg-yellow-400/10 p-1 rounded-lg">
                                  <Clock className="w-5 h-5 text-yellow-500" />
                                </div>
                                <div className="flex-1 ms-0 md:ms-3">
                                  <h4 className="font-semibold text-lg">
                                    {pkg.duration}
                                  </h4>
                                  <p className="text-gray-500 text-sm">
                                    Distance covered: {pkg.distance}
                                  </p>
                                </div>
                              </div>
                              <div className="md:text-right mt-2 ms-0 md:ms-5 md:mt-0">
                                <span className="text-xl font-bold text-gray-900">
                                  {pkg.price}
                                </span>
                                <p className="text-xs text-gray-500 mt-1">
                                  All inclusive
                                </p>
                              </div>
                            </div>

                            <div className="md:pl-12 pl-0 mt-4 md:mt-0">
                              <div className="flex flex-wrap gap-2 md:gap-3">
                                {pkg.inclusive.map((item, i) => (
                                  <span
                                    key={i}
                                    className="inline-flex items-center gap-1.5 bg-gray-50 px-2 md:px-3 py-1 rounded-full text-sm text-gray-600"
                                  >
                                    <Shield className="w-3.5 h-3.5 text-yellow-500" />
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Comfort Tab Content */}
          {activeTab === 'comfort' && (
            <div className="space-y-4 pb-5 p-8">
              <h3 className="text-xl font-semibold">Comfort & Convenience</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-4">Seating Comfort</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Ergonomic push-back seats
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Extra leg space for long journeys
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Individual AC vents
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-4">Entertainment</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Premium audio system
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      LCD screens for entertainment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      USB charging points
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Pricing Tab Content */}
          {activeTab === 'pricing' && (
            <div className="space-y-4 p-8">
              <h3 className="text-xl font-semibold">Pricing & Tax Information</h3>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Additional Charges:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Info className="w-4 h-4 text-blue-500" />
                      GST (5% for transport)
                    </li>
                    <li className="flex items-center gap-2">
                      <Info className="w-4 h-4 text-blue-500" />
                      Interstate taxes (if applicable)
                    </li>
                    <li className="flex items-center gap-2">
                      <Info className="w-4 h-4 text-blue-500" />
                      Parking & toll charges
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Payment Terms:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-yellow-500" />
                      50% advance payment
                    </li>
                    <li className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-yellow-500" />
                      Balance before trip starts
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Maintenance Tab Content */}
          {activeTab === 'maintenance' && (
            <div className="space-y-4 pb-8 p-8">
              <h3 className="text-xl font-semibold mb-5">Maintenance & Safety</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 flex flex-col items-center rounded-lg">
                  <h4 className="font-semibold  flex items-center text-lg text-center mb-4 gap-2">
                    <SquareChartGantt className="w-5 h-5 text-blue-500" />
                    Regular Maintenance
                  </h4>
                  <ul className="space-y-2">
                    <li>Regular mechanical inspections</li>
                    <li>Tire and brake checks</li>
                    <li>AC servicing</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 flex flex-col items-center rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center text-lg gap-2">
                    <ShieldCheck className="w-5 h-5 text-green-500" />
                    Safety Features
                  </h4>
                  <ul className="space-y-2">
                    <li>GPS tracking enabled</li>
                    <li>First aid kit</li>
                    <li>24/7 roadside assistance</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tempo Travellers Section */}
        {params.slug === "tempo-traveller" && tempoOptions.length > 0 && (
          <div className="max-w-7xl mx-auto py-16 bg-[#FFF8DC] mt-10 rounded-xl">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="py-16 bg-gradient-to-r from-yellow-100 to-yellow-100 p-10 rounded-xl">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                  Our Available Tempo Travellers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {tempoOptions.map((traveller, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-b from-yellow-50 to-yellow-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">
                        {traveller.title}
                      </h3>
                      <p className="text-gray-700 mb-2">{traveller.capacity}</p>
                      <p className="text-gray-700 mb-2">{traveller.fare}</p>
                      <p className="text-gray-700 mb-4">{traveller.minFare}</p>
                      <ul className="mb-4">
                        {traveller.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm text-gray-600 mb-2">
                        Contact: {traveller.contact}
                      </p>
                      <button 
                        onClick={handleBooking}
                        className="w-full bg-black text-white py-2 rounded-md hover:bg-yellow-500 hover:text-black transition-all"
                      >
                        Book Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Data fetching functions (would normally be API calls)
async function getVehicleData(slug) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const vehicleDetails = [
    {
      id: "tempo-traveller",
      type: "Tempo Traveller",
      seating: "12 to 26 Seater",
      rating: "4.8",
      reviews: "236",
      baseFare: "₹5500",
      perKm: "₹22",
      perDay: "₹5500",
      perDayLimit: "250 KM",
      driverCharges: "Included",
      cancellationCharge: "20%",
      description: "Our Tempo Travellers are perfect for group travel, offering comfortable seating, ample luggage space, and a smooth ride. Available in various seating capacities to suit your group size.",
      image: "/images/vehicles/tempo-traveller.jpg",
      gallery: [
        "/images/vehicles/tempo-traveller.jpg",
        "/images/vehicles/tempo-traveller-interior.jpg",
        "/images/vehicles/tempo-traveller-side.jpg"
      ],
      features: [
        "Air Conditioning",
        "Push-back Seats",
        "Music System",
        "Ample Luggage Space",
        "24×7 On-road Support",
        "Experienced Driver"
      ],
      localSightseeing: [
        {
          duration: "Full Day (8 Hours)",
          distance: "80 KM",
          price: "₹4500",
          inclusive: ["Driver", "Fuel", "Parking", "Taxes"]
        },
        {
          duration: "Half Day (4 Hours)",
          distance: "40 KM",
          price: "₹2500",
          inclusive: ["Driver", "Fuel", "Taxes"]
        }
      ]
    },
    {
      id: "bus",
      type: "Bus",
      seating: "35 to 55 Seater",
      rating: "4.7",
      reviews: "184",
      baseFare: "₹12000",
      perKm: "₹45",
      perDay: "₹12000",
      perDayLimit: "300 KM",
      driverCharges: "Included",
      cancellationCharge: "25%",
      description: "Our buses are ideal for large groups and corporate outings, offering comfortable travel with all modern amenities for a pleasant journey experience.",
      image: "/images/vehicles/bus.jpg",
      gallery: [
        "/images/vehicles/bus.jpg",
        "/images/vehicles/bus-interior.jpg",
        "/images/vehicles/bus-side.jpg"
      ],
      features: [
        "Full Air Conditioning",
        "Comfortable Seats",
        "Entertainment System",
        "Large Luggage Compartment",
        "On-board Restroom",
        "Professional Driver"
      ],
      localSightseeing: [
        {
          duration: "Full Day (10 Hours)",
          distance: "120 KM",
          price: "₹15000",
          inclusive: ["Driver", "Fuel", "Parking", "Taxes", "Helper"]
        }
      ]
    },
    {
      id: "luxury-bus",
      type: "Luxury Bus",
      seating: "35 to 55 Seater",
      rating: "4.9",
      reviews: "152",
      baseFare: "₹18000",
      perKm: "₹60",
      perDay: "₹18000",
      perDayLimit: "300 KM",
      driverCharges: "Included",
      cancellationCharge: "30%",
      description: "Experience the pinnacle of group travel comfort with our luxury buses. Featuring plush interiors, extra legroom, and premium amenities, our luxury buses are perfect for corporate retreats and VIP travel.",
      image: "/images/vehicles/luxury-bus.jpg",
      gallery: [
        "/images/vehicles/luxury-bus.jpg",
        "/images/vehicles/luxury-bus-interior.jpg",
        "/images/vehicles/luxury-bus-seats.jpg"
      ],
      features: [
        "Premium Air Conditioning",
        "Plush Reclining Seats",
        "High-end Entertainment System",
        "Spacious Luggage Compartment",
        "Modern Restroom Facilities",
        "Experienced Professional Driver",
        "Onboard Refreshments",
        "Wi-Fi Connectivity"
      ],
      localSightseeing: [
        {
          duration: "Full Day (10 Hours)",
          distance: "120 KM",
          price: "₹22000",
          inclusive: ["Driver", "Fuel", "Parking", "Taxes", "Helper", "Refreshments"]
        }
      ]
    }
  ];
  
  // Find the vehicle by slug or return the first one as default
  return vehicleDetails.find(v => v.id === slug) || vehicleDetails[0];
}

async function getTempoOptions() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return [
    {
      title: "16 Seater Tempo Traveller",
      capacity: "Capacity: 16 guests",
      fare: "Fare: Rs 22 per km",
      minFare: "Minimum per day fare: Rs 5500 for outstation & Rs 4000-4500 for local",
      features: ["Complete AC", "Good luggage space for 16 pax"],
      contact: "+91 76685 70551",
    },
    {
      title: "22 Seater Tempo Traveller",
      capacity: "Capacity: 22 guests",
      fare: "Fare: Rs 28-30 per km",
      minFare: "Minimum per day fare: Rs 7000 for outstation & Rs 5000 for local",
      features: ["AC at front and back", "Good luggage space"],
      contact: "+91 76685 70551",
    },
    {
      title: "18 Seater Tempo Traveller",
      capacity: "Capacity: 18 guests",
      fare: "Fare: Rs 25 per km",
      minFare: "Minimum per day fare: Rs 5500 for outstation & Rs 4000-4500 for local",
      features: ["Complete AC", "Good luggage space for 18 pax"],
      contact: "+91 76685 70551",
    },
  ];
}