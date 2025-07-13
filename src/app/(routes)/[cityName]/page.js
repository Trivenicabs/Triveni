// src/app/[cityName]/page.js - SERVER COMPONENT (NO "use client")
import { notFound } from 'next/navigation';
import { cities, vehiclesServices, cityDetails, touristSpots } from "@/utilis/data";
import { cityRoutesData, basicCityRoutes, defaultRoutes } from "@/utilis/cityRoutesData";
import CityServiceClient from "@/components/cities/CityServiceClient";
import RouteClientContent from "./RouteClientContent";

// Combine main routes and basic routes
const allCityRoutes = {
  ...cityRoutesData,
  ...basicCityRoutes
};

// Helper functions
function parseRouteSlug(slug) {
  const parts = slug.split('-to-');
  if (parts.length !== 2) return null;
  
  const cityName = parts[0];
  const destination = parts[1].replace(/-/g, ' ');
  
  return { cityName, destination };
}

export function createRouteSlug(cityName, destination) {
  return `${cityName.toLowerCase()}-to-${destination.toLowerCase().replace(/\s+/g, '-')}`;
}

// Generate static params for both cities and routes
export async function generateStaticParams() {
  const params = [];

  // Check if cities is defined and is an array
  if (!Array.isArray(cities)) {
    console.error("Cities is not an array:", cities);
    return params;
  }

  cities.forEach(city => {
    if (!city || !city.name) {
      console.error("Invalid city object:", city);
      return;
    }

    const cityName = city.name.toLowerCase();
    
    // Add city page
    params.push({
      cityName: cityName
    });
    
    // Get formatted city name for cityRoutesData lookup
    const formattedCityName = city.name.charAt(0).toUpperCase() + city.name.slice(1);
    
    // Add route pages with proper error handling
    const routes = allCityRoutes[formattedCityName] || defaultRoutes || [];
    
    // Ensure routes is an array before calling forEach
    if (Array.isArray(routes)) {
      routes.forEach(route => {
        if (route && route.destination) {
          params.push({
            cityName: createRouteSlug(cityName, route.destination)
          });
        }
      });
    }
  });

  return params;
}

// Generate metadata
export async function generateMetadata({ params }) {
  const { cityName } = params;
  
  // Check if it's a route (contains '-to-')
  const routeData = parseRouteSlug(cityName);
  
  if (routeData) {
    // It's a route page
    const { cityName: originCity, destination } = routeData;
    const formattedCityName = originCity.charAt(0).toUpperCase() + originCity.slice(1);
    const formattedDestination = destination
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    return {
      title: `${formattedCityName} to ${formattedDestination} Cab Service - Triveni Cabs`,
      description: `Book reliable and affordable cab service from ${formattedCityName} to ${formattedDestination}. 24/7 availability, professional drivers, and comfortable vehicles.`,
      alternates: {
        canonical: `/${cityName}`
      }
    };
  } else {
    // It's a city page
    const formattedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
    return {
      title: `Triveni Cabs ${formattedCityName} - Taxi Services & Car Rentals`,
      description: `Best taxi service in ${formattedCityName} for outstation trips, local trips & weddings. Book a cab online with reliable drivers and affordable rates.`,
      alternates: {
        canonical: `/${cityName}`
      }
    };
  }
}

export default function CityNamePage({ params }) {
  const { cityName } = params;
  
  // Check if it's a route (contains '-to-')
  const routeData = parseRouteSlug(cityName);
  
  if (routeData) {
    // Handle route page (e.g., delhi-to-agra)
    const { cityName: originCity, destination } = routeData;
    
    const formattedCityName = originCity.charAt(0).toUpperCase() + originCity.slice(1);
    const formattedDestination = destination
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    // Check if city exists
    const cityExists = cities.some(city => city.name.toLowerCase() === originCity.toLowerCase());
    if (!cityExists) {
      notFound();
    }
    
    // Get routes for this city with error handling
    const routes = allCityRoutes[formattedCityName] || defaultRoutes || [];
    
    // Find the specific route
    const route = Array.isArray(routes) ? routes.find(r => 
      r && r.destination && r.destination.toLowerCase() === formattedDestination.toLowerCase()
    ) : null;
    
    if (!route) {
      notFound();
    }

    const estimatedDistance = route.distance || `${Math.floor(Math.random() * 300) + 100} km`;
    const estimatedTime = route.time || `${Math.floor(Math.random() * 5) + 2} hours`;

    return (
      <RouteClientContent 
        cityName={originCity}
        formattedCityName={formattedCityName}
        destination={destination.replace(/\s+/g, '-')}
        formattedDestination={formattedDestination}
        estimatedDistance={estimatedDistance}
        estimatedTime={estimatedTime}
        route={route}
        routes={routes}
        vehiclesServices={vehiclesServices}
      />
    );
  } else {
    // Handle city page (e.g., delhi)
    const formattedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
    
    // Check if city exists
    const cityExists = cities.some(city => city.name.toLowerCase() === cityName.toLowerCase());
    if (!cityExists) {
      notFound();
    }
    
    // Get data for city page
    const citySpots = touristSpots[formattedCityName] || [];
    
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

    return (
      <CityServiceClient 
        formattedCityName={formattedCityName}
        citySpots={citySpots}
        details={details}
        vehiclesServices={vehiclesServices}
      />
    );
  }
}