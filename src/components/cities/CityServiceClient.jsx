'use client';

import { useEffect, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";
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

// Lazy load heavy components
const CityRoutes = dynamic(() => import("@/components/cities/CityRoutes"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-32 rounded-lg" />
});

// Separate components for better code splitting
const HeroBanner = ({ formattedCityName }) => (
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
);

const VehicleCard = ({ vehicle, onBookNow }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="relative h-48">
      <Image
        src={vehicle.image || "/images/car-placeholder.png"}
        alt={vehicle.type}
        className="object-cover"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={false}
        onError={(e) => {
          e.target.src = "/images/car-placeholder.png";
        }}
      />
      <div className="absolute bottom-3 left-3 bg-black/60 rounded-full py-1 px-3 text-white flex items-center">
        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
        <span className="text-sm">{vehicle.rating}</span>
        <span className="text-xs ml-1">({vehicle.reviews} reviews)</span>
      </div>
    </div>

    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg">{vehicle.type}</h3>
        <div className="bg-gray-100 px-2 py-1 rounded-full text-sm flex items-center">
          <Users className="w-4 h-4 mr-1" />
          <span>{vehicle.seating}</span>
        </div>
      </div>

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

      <button
        onClick={onBookNow}
        className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-yellow-400 hover:text-black transition-colors"
      >
        Book Now
      </button>
    </div>
  </div>
);

const CoverageSection = ({ details }) => {
  const coverageAreas = [
    {
      title: "Full Coverage",
      icon: CheckCircle,
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      data: details.coverage?.fullCoverage || []
    },
    {
      title: "Limited Coverage",
      icon: AlertTriangle,
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600",
      data: details.coverage?.limitedCoverage || []
    },
    {
      title: "Restricted Areas",
      icon: X,
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      data: details.coverage?.restricted || []
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold flex items-center gap-2">
        <MapIcon className="w-5 h-5 text-yellow-500" />
        Coverage Areas
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {coverageAreas.map((area, index) => (
          <div key={index} className={`${area.bgColor} p-4 rounded-lg`}>
            <div className="font-medium flex items-center gap-2">
              <area.icon className={`w-4 h-4 ${area.iconColor}`} />
              {area.title}
            </div>
            {area.data.length > 0 ? (
              <ul className="mt-2 flex flex-col ps-3 items-start space-y-1">
                {area.data.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600">
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-sm text-gray-500">Information not available</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const TouristSpotsSection = ({ citySpots, formattedCityName }) => {
  const defaultSpots = useMemo(() => [
    {
      name: "Taj Mahal",
      image: "/images/destinations/taj-mahal.jpg",
      description: "UNESCO World Heritage site and one of the world's most iconic monuments"
    },
    {
      name: "Red Fort",
      image: "/images/destinations/red-fort.jpg",
      description: "Historic fort that served as the main residence of the Mughal Emperors"
    },
    {
      name: "Fatehpur Sikri",
      image: "/images/destinations/fatehpur-sikri.jpg",
      description: "Ancient city built by Emperor Akbar, known for its stunning architecture"
    }
  ], []);

  const spotsToDisplay = citySpots.length > 0 ? citySpots : defaultSpots;

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold flex items-center gap-2">
        <LocateIcon className="w-5 h-5 text-yellow-500" />
        Popular Tourist Spots
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {spotsToDisplay.map((spot, index) => (
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
                loading="lazy"
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
        ))}
      </div>
    </div>
  );
};

const SafetySection = ({ safetyFeatures }) => {
  const defaultFeatures = [
    "GPS Tracking",
    "Verified Drivers",
    "24/7 Customer Support",
    "Regular Vehicle Maintenance"
  ];

  const features = safetyFeatures && safetyFeatures.length > 0 ? safetyFeatures : defaultFeatures;

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold flex items-center gap-2">
        <Shield className="w-5 h-5 text-yellow-500" />
        Safety Features
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 rounded-lg flex items-center gap-3"
          >
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const PopularRoutesSection = ({ popularRoutes, formattedCityName }) => {
  const defaultRoutes = [
    `${formattedCityName} to Delhi`,
    `${formattedCityName} to Agra`,
    `${formattedCityName} to Jaipur`,
    `${formattedCityName} Airport Transfer`
  ];

  const routes = popularRoutes && popularRoutes.length > 0 ? popularRoutes : defaultRoutes;

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold flex items-center gap-2">
        <ParkingCircle className="w-5 h-5 text-yellow-500" />
        Popular Routes
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {routes.map((route, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 rounded-lg flex items-center gap-3"
          >
            <MapPin className="w-5 h-5 text-yellow-500" />
            <span>{route}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const PeakHoursSection = ({ peakHours }) => {
  const peakData = [
    {
      title: "Morning Peak",
      value: peakHours?.morning || "Information not available"
    },
    {
      title: "Evening Peak",
      value: peakHours?.evening || "Information not available"
    },
    {
      title: "Surge Pricing",
      value: peakHours?.surcharge || "Information not available"
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-xl max-sm:text-sm font-semibold flex items-center gap-2">
        <Clock className="w-5 h-5 text-yellow-500" />
        Peak Hours & Pricing
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {peakData.map((item, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">
            <div className="font-medium">{item.title}</div>
            <div className="text-gray-600">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function CityServiceClient({
  formattedCityName,
  citySpots,
  details,
  vehiclesServices
}) {
  // Memoize handlers to prevent unnecessary re-renders
  const handleCallNow = useCallback(() => {
    window.open(`tel:+91${phoneNumber}`, '_blank');
  }, []);

  const handleWhatsAppClick = useCallback(() => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  }, []);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Banner */}
      <HeroBanner formattedCityName={formattedCityName} />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 -mt-30 mb-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 space-y-8">
            {/* City Routes Section */}
            <CityRoutes cityName={formattedCityName} />

            {/* Vehicle Services Section */}
            <div className="space-y-4 mt-8">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Car className="w-5 h-5 text-yellow-500" />
                Our Premium Fleet
              </h3>
              <p className="text-gray-600 mt-5">
                Choose from our selection of well-maintained vehicles, perfect for any journey
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {vehiclesServices.map((vehicle, index) => (
                  <VehicleCard
                    key={index}
                    vehicle={vehicle}
                    onBookNow={handleWhatsAppClick}
                  />
                ))}
              </div>
            </div>

            {/* Coverage Areas */}
            <CoverageSection details={details} />

            {/* Peak Hours */}
            <PeakHoursSection peakHours={details.peakHours} />

            {/* Safety Features */}
            <SafetySection safetyFeatures={details.safetyFeatures} />

            {/* Popular Routes */}
            <PopularRoutesSection
              popularRoutes={details.popularRoutes}
              formattedCityName={formattedCityName}
            />

            {/* Tourist Spots */}
            <TouristSpotsSection
              citySpots={citySpots}
              formattedCityName={formattedCityName}
            />
          </div>
        </div>
      </div>
    </div>
  );
}