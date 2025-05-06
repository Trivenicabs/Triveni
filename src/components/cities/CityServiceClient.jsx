'use client';

import { useEffect } from "react";
import {
  MapPin,
  Phone,
  Car,
  X,
  Clock,
  Shield,
  AlertTriangle,
  CheckCircle,
  MapIcon,
  ParkingCircle,
  Users,
  ChevronRight,
  LocateIcon,
  Star,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BsWhatsapp } from 'react-icons/bs';
import { phoneNumber } from "@/utilis/data";
import CityRoutes from "@/components/cities/CityRoutes";

export default function CityServiceClient({ 
  formattedCityName, 
  citySpots, 
  details, 
  vehiclesServices 
}) {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCallNow = () => {
    window.open(`tel:+91${phoneNumber}`, '_blank');
  };
  
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Breadcrumb */}
      <nav
        className="relative bg-cover bg-center bg-no-repeat text-sm text-gray-600 py-32"
        aria-label="Breadcrumb"
        style={{
          backgroundImage: "url('/images/about/about_banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-white hover:text-yellow-600 text-2xl">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center font-semibold">
                <ChevronRight className="w-4 h-4 mx-2 text-white" />
                <span className="text-yellow-400 text-xl">{formattedCityName}</span>
              </div>
            </li>
          </ol>
          <h1 className="text-3xl tracking-[0.07rem] md:text-3xl font-bold text-white mt-4">
           Triveni Cabs {formattedCityName} 
          </h1>
          <p className="font-bold text-white mt-4 text-2xl">
          Best taxi service in {formattedCityName} for outstation trips, local trips & weddings 
          </p>
        </div>
      </nav>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 -mt-30 mb-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Content */}
          <div className="p-6 space-y-8">
            {/* Popular Routes Section - Added New Component */}
            <CityRoutes cityName={formattedCityName} />
            
            {/* Vehicle Services Section */}
            <div className="space-y-4 mt-8">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Car className="w-5 h-5 text-yellow-500" />
                Our Premium Fleet
              </h3>
              
              <p className="text-gray-600 mt-5" >
                Choose from our selection of well-maintained vehicles, perfect for any journey
              </p>
              
              {/* Direct Vehicle Services Implementation */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {vehiclesServices.map((vehicle, index) => (
                  <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    {/* Vehicle Image */}
                    <div className="relative h-48">
                      <Image 
                        src={vehicle.image || "/images/car-placeholder.png"} 
                        alt={vehicle.type}
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={(e) => {
                          e.target.src = "/images/car-placeholder.png";
                        }}
                      />
                      {/* Rating Badge */}
                      <div className="absolute bottom-3 left-3 bg-black/60 rounded-full py-1 px-3 text-white flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                        <span className="text-sm">{vehicle.rating}</span>
                        <span className="text-xs ml-1">({vehicle.reviews} reviews)</span>
                      </div>
                    </div>
                    
                    {/* Vehicle Info */}
                    <div className="p-4">
                      {/* Header */}
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-lg">{vehicle.type}</h3>
                        <div className="bg-gray-100 px-2 py-1 rounded-full text-sm flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          <span>{vehicle.seating}</span>
                        </div>
                      </div>
                      
                      {/* Pricing Grid */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div>
                          <p className="text-gray-500 text-xs">Per KM</p>
                          <p className="font-semibold">{vehicle.perKm}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs">Driver</p>
                          <p className="font-semibold">{vehicle.driverCharges || "₹500 (Per Day)"}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs">Per Day KM</p>
                          <p className="font-semibold">{vehicle.perDayLimit || "250km"}</p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs">Cancellation</p>
                          <p className="font-semibold">{vehicle.cancellationCharge || "₹500"}</p>
                        </div>
                      </div>
                      
                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-2 flex items-center">
                          <ShieldCheck className="w-4 h-4 text-yellow-500 mr-1" />
                          Included Features
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {vehicle.facilities && vehicle.facilities.slice(0, 3).map((feature, i) => (
                            <span key={i} className="bg-gray-100 text-xs px-2 py-1 rounded-full">
                              {feature}
                            </span>
                          ))}
                          {vehicle.facilities && vehicle.facilities.length > 3 && (
                            <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">
                              +{vehicle.facilities.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Book Button */}
                      <button 
                        onClick={handleClick}
                        className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-yellow-400 hover:text-black transition-colors"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coverage Areas */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapIcon className="w-5 h-5 text-yellow-500" />
                Coverage Areas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="font-medium flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Full Coverage
                  </div>
                  {details.coverage && details.coverage.fullCoverage && details.coverage.fullCoverage.length > 0 ? (
                    <ul className="mt-2 flex flex-col ps-3 items-start space-y-1">
                      {details.coverage.fullCoverage.map((area, index) => (
                        <li key={index} className="text-sm text-gray-600">
                          {area}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-sm text-gray-500">Information not available</p>
                  )}
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="font-medium flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600" />
                    Limited Coverage
                  </div>
                  {details.coverage && details.coverage.limitedCoverage && details.coverage.limitedCoverage.length > 0 ? (
                    <ul className="mt-2 flex flex-col ps-3 items-start space-y-1">
                      {details.coverage.limitedCoverage.map((area, index) => (
                        <li key={index} className="text-sm text-gray-600">
                          {area}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-sm text-gray-500">Information not available</p>
                  )}
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="font-medium flex items-center gap-2">
                    <X className="w-4 h-4 text-red-600" />
                    Restricted Areas
                  </div>
                  {details.coverage && details.coverage.restricted && details.coverage.restricted.length > 0 ? (
                    <ul className="mt-2 flex flex-col ps-3 items-start space-y-1">
                      {details.coverage.restricted.map((area, index) => (
                        <li key={index} className="text-sm text-gray-600">
                          {area}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-sm text-gray-500">Information not available</p>
                  )}
                </div>
              </div>
            </div>

            {/* Peak Hours */}
            <div className="space-y-4">
              <h3 className="text-xl max-sm:text-sm font-semibold flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-500" />
                Peak Hours & Pricing
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-medium">Morning Peak</div>
                  <div className="text-gray-600">{details.peakHours?.morning || "Information not available"}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-medium">Evening Peak</div>
                  <div className="text-gray-600">{details.peakHours?.evening || "Information not available"}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-medium">Surge Pricing</div>
                  <div className="text-gray-600">{details.peakHours?.surcharge || "Information not available"}</div>
                </div>
              </div>
            </div>

            {/* Safety Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Shield className="w-5 h-5 text-yellow-500" />
                Safety Features
              </h3>
              {details.safetyFeatures && details.safetyFeatures.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {details.safetyFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-4 rounded-lg flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>GPS Tracking</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Verified Drivers</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>24/7 Customer Support</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Regular Vehicle Maintenance</span>
                  </div>
                </div>
              )}
            </div>

            {/* Popular Routes */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <ParkingCircle className="w-5 h-5 text-yellow-500" />
                Popular Routes
              </h3>
              {details.popularRoutes && details.popularRoutes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {details.popularRoutes.map((route, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-4 rounded-lg flex items-center gap-3"
                    >
                      <MapPin className="w-5 h-5 text-yellow-500" />
                      <span>{route}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-yellow-500" />
                    <span>{formattedCityName} to Delhi</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-yellow-500" />
                    <span>{formattedCityName} to Agra</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-yellow-500" />
                    <span>{formattedCityName} to Jaipur</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-yellow-500" />
                    <span>{formattedCityName} Airport Transfer</span>
                  </div>
                </div>
              )}
            </div>

            {/* Tourist Spots */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <LocateIcon className="w-5 h-5 text-yellow-500" />
                Popular Tourist Spots
              </h3>
              
              {/* Direct implementation of tourist spots as image cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {citySpots.length > 0 ? (
                  citySpots.map((spot, index) => (
                    <div
                      key={spot.name || index}
                      className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative w-full h-48">
                        <Image
                          src={spot.image || "/images/about/about_banner.jpg"}
                          alt={spot.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                          onError={(e) => {
                            e.target.src = "/images/about/about_banner.jpg";
                          }}
                        />
                      </div>
                      <div className="p-4 bg-white">
                        <h3 className="text-xl font-semibold mb-2">{spot.name}</h3>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {spot.description}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  // Default spots if none are available for this city
                  <>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <div className="relative w-full h-48">
                        <Image
                          src="/images/destinations/taj-mahal.jpg"
                          alt="Taj Mahal"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                          onError={(e) => {
                            e.target.src = "/images/about/about_banner.jpg"; // Fallback
                          }}
                        />
                      </div>
                      <div className="p-4 bg-white">
                        <h3 className="text-xl font-semibold mb-2">Taj Mahal</h3>
                        <p className="text-gray-600 text-sm">
                          UNESCO World Heritage site and one of the world's most iconic monuments
                        </p>
                      </div>
                    </div>
                    
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <div className="relative w-full h-48">
                        <Image
                          src="/images/destinations/red-fort.jpg"
                          alt="Red Fort"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                          onError={(e) => {
                            e.target.src = "/images/about/about_banner.jpg"; // Fallback
                          }}
                        />
                      </div>
                      <div className="p-4 bg-white">
                        <h3 className="text-xl font-semibold mb-2">Red Fort</h3>
                        <p className="text-gray-600 text-sm">
                          Historic fort that served as the main residence of the Mughal Emperors
                        </p>
                      </div>
                    </div>
                    
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <div className="relative w-full h-48">
                        <Image
                          src="/images/destinations/fatehpur-sikri.jpg"
                          alt="Fatehpur Sikri"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                          onError={(e) => {
                            e.target.src = "/images/about/about_banner.jpg"; // Fallback
                          }}
                        />
                      </div>
                      <div className="p-4 bg-white">
                        <h3 className="text-xl font-semibold mb-2">Fatehpur Sikri</h3>
                        <p className="text-gray-600 text-sm">
                          Ancient city built by Emperor Akbar, known for its stunning architecture
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}