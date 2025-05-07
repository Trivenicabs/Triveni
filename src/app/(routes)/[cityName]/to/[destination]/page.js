import React from "react";
import { notFound } from 'next/navigation';
import Link from "next/link";
import { cities, vehiclesServices } from "@/utilis/data";
import { cityRoutesData, defaultRoutes } from "@/utilis/cityRoutesData";
import RouteClientContent from "./RouteClientContent";

// Generate static params for all city-to-destination routes
export async function generateStaticParams() {
  const params = [];

  // Generate for all cities and their routes
  cities.forEach(city => {
    const cityName = city.name.toLowerCase();
    const routes = cityRoutesData[city.name] || defaultRoutes;
    
    routes.forEach(route => {
      params.push({
        cityName,
        destination: route.destination.toLowerCase().replace(/\s+/g, '-')
      });
    });
  });

  return params;
}

// Generate dynamic metadata for each city-to-destination page
export async function generateMetadata({ params }) {
  const { cityName, destination } = params;
  
  const formattedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
  const formattedDestination = destination
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return {
    title: `${formattedCityName} to ${formattedDestination} Cab Service - Triveni Cabs`,
    description: `Book reliable and affordable cab service from ${formattedCityName} to ${formattedDestination}. 24/7 availability, professional drivers, and comfortable vehicles.`,
  };
}

export default function CityToDestinationPage({ params }) {
  const { cityName, destination } = params;
  
  // Format the city name and destination
  const formattedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
  const formattedDestination = destination
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // Check if city exists - if not, show 404
  const cityExists = cities.some(city => city.name.toLowerCase() === cityName.toLowerCase());
  if (!cityExists) {
    notFound();
  }
  
  // Get routes for this city or use default routes if none exist
  const routes = cityRoutesData[formattedCityName] || defaultRoutes;
  
  // Find the specific route
  const route = routes.find(r => 
    r.destination.toLowerCase() === formattedDestination.toLowerCase()
  );
  
  // If route doesn't exist, show 404
  if (!route) {
    notFound();
  }

  // Calculate distance between cities (this would typically come from data)
  const estimatedDistance = route.distance || `${Math.floor(Math.random() * 300) + 100}`;
  
  // Calculate estimated time (this would typically come from data)
  const estimatedTime = route.time || `${Math.floor(Math.random() * 5) + 2} hours`;

  return (
    <RouteClientContent 
      cityName={cityName}
      formattedCityName={formattedCityName}
      destination={destination}
      formattedDestination={formattedDestination}
      estimatedDistance={estimatedDistance}
      estimatedTime={estimatedTime}
      route={route}
      routes={routes}
      vehiclesServices={vehiclesServices}
    />
  );
}