// src/app/[cityName]/page.js - SERVER COMPONENT (NO "use client")
import { notFound } from 'next/navigation';
import { cities, vehiclesServices, cityDetails, touristSpots } from "@/utilis/data";
import { cityRoutesData, defaultRoutes } from "@/utilis/cityRoutesData";
import CityServiceClient from "@/components/cities/CityServiceClient";
import RouteClientContent from "./RouteClientContent";

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

  cities.forEach(city => {
    const cityName = city.name.toLowerCase();
    
    // Add city page
    params.push({
      cityName: cityName
    });
    
    // Add route pages
    const routes = cityRoutesData[city.name] || defaultRoutes;
    routes.forEach(route => {
      params.push({
        cityName: createRouteSlug(cityName, route.destination)
      });
    });
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
    
    // Get routes for this city
    const routes = cityRoutesData[formattedCityName] || defaultRoutes;
    
    // Find the specific route
    const route = routes.find(r => 
      r.destination.toLowerCase() === formattedDestination.toLowerCase()
    );
    
    if (!route) {
      notFound();
    }

    const estimatedDistance = route.distance || `${Math.floor(Math.random() * 300) + 100}`;
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