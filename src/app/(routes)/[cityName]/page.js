// app/[cityName]/page.js
import { notFound } from 'next/navigation';
import { cityDetails, touristSpots, vehiclesServices, cities } from "@/utilis/data";
import CityServiceClient from "@/components/cities/CityServiceClient";

// Generate static params for all city routes
export async function generateStaticParams() {
  return cities.map((city) => ({
    cityName: city.name.toLowerCase(),
  }));
}

// Generate dynamic metadata for each city page
export async function generateMetadata({ params }) {
  const { cityName } = params;
  const formattedCityName = cityName ? cityName.charAt(0).toUpperCase() + cityName.slice(1) : "Delhi";
  
  return {
    title: `Triveni Cabs ${formattedCityName} - Taxi Services & Car Rentals`,
    description: `Best taxi service in ${formattedCityName} for outstation trips, local trips & weddings. Book a cab online with reliable drivers and affordable rates.`,
  };
}

export default function CityServicePage({ params }) {
  const { cityName } = params;
  
  // Ensure we have a properly formatted city name
  const formattedCityName = cityName ? cityName.charAt(0).toUpperCase() + cityName.slice(1) : "Delhi";
  
  // Check if city exists - if not, show 404
  const cityExists = cities.some(city => city.name.toLowerCase() === cityName.toLowerCase());
  if (!cityExists) {
    notFound();
  }
  
  // Get tourist spots for this city
  const citySpots = touristSpots[formattedCityName] || [];
  
  // Safe access to city details
  let details = {};
  try {
    details = cityDetails[formattedCityName] || cityDetails.Delhi || {
      coverage: {
        fullCoverage: [],
        limitedCoverage: [],
        restricted: []
      },
      peakHours: {
        morning: "8:00 AM - 10:00 AM",
        evening: "5:00 PM - 8:00 PM",
        surcharge: "10-25% extra during peak hours"
      },
      safetyFeatures: [],
      popularRoutes: []
    };
  } catch (error) {
    console.error("Error accessing city details:", error);
    details = {
      coverage: {
        fullCoverage: [],
        limitedCoverage: [],
        restricted: []
      },
      peakHours: {
        morning: "8:00 AM - 10:00 AM",
        evening: "5:00 PM - 8:00 PM",
        surcharge: "10-25% extra during peak hours"
      },
      safetyFeatures: [],
      popularRoutes: []
    };
  }

  // Pass all the data to the client component
  return (
    <CityServiceClient 
      formattedCityName={formattedCityName}
      citySpots={citySpots}
      details={details}
      vehiclesServices={vehiclesServices}
    />
  );
}