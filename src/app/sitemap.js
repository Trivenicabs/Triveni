// src/app/sitemap.js - Replace your existing sitemap.js with this

import { cities } from "@/utilis/data";
import { cityRoutesData, basicCityRoutes } from "@/utilis/cityRoutesData";

function createRouteSlug(cityName, destination) {
  return `${cityName.toLowerCase()}-to-${destination.toLowerCase().replace(/\s+/g, '-')}`;
}

const allCityRoutes = {
  ...cityRoutesData,
  ...basicCityRoutes
};

export default function sitemap() {
  const baseUrl = 'https://www.trivenicabs.in';
  
  const urls = [
    // Main Pages
    {
      url: baseUrl,
      lastModified: new Date('2025-07-19'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2025-07-19'),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date('2025-07-19'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/destinations`,
      lastModified: new Date('2025-07-19'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/car-rental`,
      lastModified: new Date('2025-07-19'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tour-guide`,
      lastModified: new Date('2025-07-19'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2025-07-19'),
      changeFrequency: 'yearly',
      priority: 0.8,
    },

    // Tour Packages
    {
      url: `${baseUrl}/tour-package/manali-tour-from-mumbai`,
      lastModified: new Date('2025-07-19'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tour-package/chardham-yatra-package`,
      lastModified: new Date('2025-07-19'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tour-package/shimla-from-mumbai`,
      lastModified: new Date('2025-07-19'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tour-package/rajasthan-tour`,
      lastModified: new Date('2025-07-19'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tour-package/kashmir-tour`,
      lastModified: new Date('2025-07-19'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tour-package/punjab-tour`,
      lastModified: new Date('2025-07-19'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Booking Pages
    {
      url: `${baseUrl}/tour-package/manali-tour-from-mumbai/book`,
      lastModified: new Date('2025-07-19'),
      changeFrequency: 'weekly',
      priority: 0.64,
    },
    {
      url: `${baseUrl}/tour-package/chardham-yatra-package/book`,
      lastModified: new Date('2025-07-19'),
      changeFrequency: 'weekly',
      priority: 0.64,
    },
    {
      url: `${baseUrl}/tour-package/shimla-from-mumbai/book`,
      lastModified: new Date('2025-07-19'),
      changeFrequency: 'weekly',
      priority: 0.64,
    },
    {
      url: `${baseUrl}/tour-package/rajasthan-tour/book`,
      lastModified: new Date('2025-07-19'),
      changeFrequency: 'weekly',
      priority: 0.64,
    },
    {
      url: `${baseUrl}/tour-package/kashmir-tour/book`,
      lastModified: new Date('2025-07-19'),
      changeFrequency: 'weekly',
      priority: 0.64,
    },
    {
      url: `${baseUrl}/tour-package/punjab-tour/book`,
      lastModified: new Date('2025-07-19'),
      changeFrequency: 'weekly',
      priority: 0.64,
    },

    // Vehicle Categories
    {
      url: `${baseUrl}/vehicles/sedan`,
      lastModified: new Date('2025-07-19'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vehicles/suv`,
      lastModified: new Date('2025-07-19'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vehicles/tempo-traveller`,
      lastModified: new Date('2025-07-19'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vehicles/luxury-bus`,
      lastModified: new Date('2025-07-19'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vehicles/bus`,
      lastModified: new Date('2025-07-19'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Add ALL city pages (not just 4)
  cities.forEach(city => {
    if (!city || !city.name) return;
    
    const cityName = city.name.toLowerCase();
    urls.push({
      url: `${baseUrl}/${cityName}`,
      lastModified: new Date('2025-07-19'),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Add ALL route pages with debugging
  cities.forEach(city => {
    if (!city || !city.name) return;
    
    const cityName = city.name;
    const formattedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
    
    const routes = allCityRoutes[formattedCityName] || [];
    
    console.log(`Processing routes for ${formattedCityName}: ${routes.length} routes found`);
    
    if (Array.isArray(routes) && routes.length > 0) {
      routes.forEach(route => {
        if (route && route.destination) {
          const routeSlug = createRouteSlug(cityName, route.destination);
          urls.push({
            url: `${baseUrl}/${routeSlug}`,
            lastModified: new Date('2025-07-19'),
            changeFrequency: 'monthly',
            priority: 0.64,
          });
          console.log(`Added route: ${routeSlug}`);
        }
      });
    }
  });

  console.log(`Generated sitemap with ${urls.length} URLs`);
  return urls;
}