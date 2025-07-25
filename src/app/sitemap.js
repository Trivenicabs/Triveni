// src/app/sitemap.js - This should be in your app directory root

import { cities } from "@/utilis/data";
import { cityRoutesData, basicCityRoutes } from "@/utilis/cityRoutesData";

// Helper function to create route slug
function createRouteSlug(cityName, destination) {
  return `${cityName.toLowerCase()}-to-${destination.toLowerCase().replace(/\s+/g, '-')}`;
}

// Combine all route data
const allCityRoutes = {
  ...cityRoutesData,
  ...basicCityRoutes
};

export default function sitemap() {
  const baseUrl = 'https://www.trivenicabs.in';
  
  const urls = [
    // Main pages
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/destinations`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/car-rental`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tour-guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ];

  // Add tour packages
  const tourPackages = [
    'manali-tour-from-mumbai',
    'chardham-yatra-package', 
    'shimla-from-mumbai',
    'rajasthan-tour',
    'kashmir-tour',
    'punjab-tour'
  ];

  tourPackages.forEach(packageSlug => {
    urls.push({
      url: `${baseUrl}/tour-package/${packageSlug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
    
    urls.push({
      url: `${baseUrl}/tour-package/${packageSlug}/book`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.64,
    });
  });

  // Add vehicle categories
  const vehicleTypes = ['sedan', 'suv', 'tempo-traveller', 'luxury-bus', 'bus'];
  vehicleTypes.forEach(vehicleType => {
    urls.push({
      url: `${baseUrl}/vehicles/${vehicleType}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Add destination pages
  const mainDestinations = ['delhi', 'agra', 'jaipur', 'haridwar'];
  mainDestinations.forEach(destination => {
    urls.push({
      url: `${baseUrl}/${destination}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Add city pages
  cities.forEach(city => {
    if (!city || !city.name) return;
    
    const cityName = city.name.toLowerCase();
    urls.push({
      url: `${baseUrl}/${cityName}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Add all route pages
  cities.forEach(city => {
    if (!city || !city.name) return;
    
    const cityName = city.name;
    const formattedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
    
    // Get routes for this city
    const routes = allCityRoutes[formattedCityName] || [];
    
    if (Array.isArray(routes)) {
      routes.forEach(route => {
        if (route && route.destination) {
          const routeSlug = createRouteSlug(cityName, route.destination);
          urls.push({
            url: `${baseUrl}/${routeSlug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.64,
          });
        }
      });
    }
  });

  return urls;
}