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
    const routes = allCityRoutes[formattedCityName] || [];
    
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

  console.log(`Generated ${params.length} static params`);
  return params;
}
// FIXED: Enhanced metadata generation with better SEO structure
export async function generateMetadata({ params }) {
  const { cityName } = params;
  
  // Check if it's a route (contains '-to-')
  const routeData = parseRouteSlug(cityName);
  
  if (routeData) {
    // It's a route page - FIXED: More descriptive and SEO-friendly titles
    const { cityName: originCity, destination } = routeData;
    const formattedCityName = originCity.charAt(0).toUpperCase() + originCity.slice(1);
    const formattedDestination = destination
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    return {
      title: `${formattedCityName} to ${formattedDestination} Cab Service | Book Online - Triveni Cabs`,
      description: `Book reliable and affordable cab service from ${formattedCityName} to ${formattedDestination}. 24/7 availability, professional drivers, comfortable vehicles, and transparent pricing. Starting from ₹12/km.`,
      keywords: `${formattedCityName} to ${formattedDestination} cab, taxi service, car rental, outstation cab booking, one way taxi, round trip cab`,
      openGraph: {
        title: `${formattedCityName} to ${formattedDestination} Cab Service - Triveni Cabs`,
        description: `Professional cab service from ${formattedCityName} to ${formattedDestination}. Book now for comfortable and safe journey.`,
        type: 'website',
        locale: 'en_IN',
      },
      alternates: {
        canonical: `/${cityName}`
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      }
    };
  } else {
    // It's a city page - FIXED: More comprehensive SEO metadata
    const formattedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
    return {
      title: `Triveni Cabs ${formattedCityName} | Best Taxi Service & Car Rentals`,
      description: `Best taxi service in ${formattedCityName} for outstation trips, local tours & weddings. Book a cab online with reliable drivers, affordable rates, and 24/7 availability. Premium fleet available.`,
      keywords: `${formattedCityName} taxi service, cab booking ${formattedCityName}, car rental ${formattedCityName}, outstation taxi, local cab service, wedding car rental`,
      openGraph: {
        title: `Triveni Cabs ${formattedCityName} - Professional Taxi Services`,
        description: `Reliable taxi service in ${formattedCityName}. Book cabs for outstation, local trips, and special occasions.`,
        type: 'website',
        locale: 'en_IN',
      },
      alternates: {
        canonical: `/${cityName}`
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
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

    // FIXED: More realistic distance and time estimates
    const estimatedDistance = route.distance || `${Math.floor(Math.random() * 200) + 150} km`;
    const estimatedTime = route.time || `${Math.floor(Math.random() * 4) + 3} hours`;

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
    
    // FIXED: Better error handling and fallback structure
    let details = {};
    try {
      details = cityDetails[formattedCityName] || cityDetails.Delhi || {
        coverage: {
          fullCoverage: [
            `${formattedCityName} City Center`,
            `${formattedCityName} Railway Station`,
            `${formattedCityName} Airport`,
            "Major Shopping Areas"
          ],
          limitedCoverage: [
            "Remote Suburbs",
            "Industrial Areas"
          ],
          restricted: [
            "Military Zones",
            "Restricted Government Areas"
          ]
        },
        peakHours: {
          morning: "7:00 AM - 10:00 AM",
          evening: "5:00 PM - 8:00 PM",
          surcharge: "15-25% extra during peak hours"
        },
        safetyFeatures: [
          "GPS Tracking System",
          "Verified Professional Drivers",
          "24/7 Customer Support",
          "Regular Vehicle Maintenance",
          "Emergency Assistance",
          "Sanitized Vehicles"
        ],
        popularRoutes: [
          `${formattedCityName} to Delhi`,
          `${formattedCityName} to Mumbai`,
          `${formattedCityName} to Bangalore`,
          `${formattedCityName} Airport Transfer`
        ]
      };
    } catch (error) {
      console.error("Error accessing city details:", error);
      // Fallback with city-specific data
      details = {
        coverage: {
          fullCoverage: [
            `${formattedCityName} City Center`,
            `${formattedCityName} Railway Station`,
            "Major Commercial Areas"
          ],
          limitedCoverage: [
            "Outer City Areas"
          ],
          restricted: [
            "Restricted Zones"
          ]
        },
        peakHours: {
          morning: "8:00 AM - 10:00 AM",
          evening: "5:00 PM - 8:00 PM",
          surcharge: "10-25% extra during peak hours"
        },
        safetyFeatures: [
          "Professional Drivers",
          "GPS Tracking",
          "24/7 Support"
        ],
        popularRoutes: [
          `${formattedCityName} Local Tours`,
          `${formattedCityName} Airport Transfer`
        ]
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