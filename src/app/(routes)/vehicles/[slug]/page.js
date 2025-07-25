'use client';

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Head from "next/head";
import VehicleDetails from "../../../../components/VehicleDetails";
import { vehicleDetails } from "../../../../utilis/data";

const VehicleSlugPage = () => {
  const { slug } = useParams();
  const [vehicleData, setVehicleData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Find vehicle data based on slug
    const vehicle = vehicleDetails.find(
      (v) => v.type.toLowerCase().replace(/\s+/g, '-') === slug
    ) || vehicleDetails[0];
    
    setVehicleData(vehicle);
    setIsLoading(false);
  }, [slug]);

  // SEO data for different vehicle types with Indian market keywords
  const getVehicleSEOData = (vehicleType, slug) => {
    const seoMapping = {
      'sedan': {
        title: `Book Sedan Car Rental Online India | AC Sedan Taxi Hire | Triveni Cabs`,
        description: `Rent AC sedan cars for outstation trips in India. Professional sedan taxi service with driver at ₹11/km. Book sedan car rental for Delhi, Mumbai, Bangalore, Chennai, Hyderabad travel.`,
        keywords: `sedan car rental india, sedan taxi booking online, ac sedan hire with driver, sedan car rental delhi mumbai, outstation sedan booking, airport sedan transfer, sedan taxi service india, sedan car hire rates, book sedan online india, sedan rental for wedding`,
        canonical: `https://trivenicabs.com/vehicles/sedan`,
        breadcrumbTitle: "Sedan Car Rental Service"
      },
      'suv': {
        title: `SUV Car Rental India | 6-7 Seater SUV Hire | Innova Ertiga Booking`,
        description: `Book 6-7 seater SUV cars for family trips across India. Innova, Ertiga SUV rental with professional driver. Best rates for group travel, hill station tours, family outings.`,
        keywords: `suv rental india, 7 seater car hire, innova car rental, ertiga booking online, family suv rental, group travel suv, suv hire with driver, innova crysta rental, suv taxi service india, hill station suv booking`,
        canonical: `https://trivenicabs.com/vehicles/suv`,
        breadcrumbTitle: "SUV Car Rental Service"
      },
      'tempo-traveller': {
        title: `Tempo Traveller Rental India | 12-26 Seater AC Tempo Hire | Group Travel`,
        description: `Book 12-26 seater tempo traveller for group tours in India. AC tempo traveller rental with experienced driver. Perfect for pilgrimage trips, corporate tours, wedding parties, school excursions.`,
        keywords: `tempo traveller rental india, 12 seater tempo hire, group travel vehicle, pilgrimage tempo booking, wedding tempo traveller, corporate tour vehicle, ac tempo traveller hire, tempo rental delhi mumbai, school trip tempo booking, group tour vehicle rental`,
        canonical: `https://trivenicabs.com/vehicles/tempo-traveller`,
        breadcrumbTitle: "Tempo Traveller Rental Service"
      },
      'luxury-bus': {
        title: `Luxury Bus Rental India | 35-55 Seater AC Bus Hire | Corporate Group Travel`,
        description: `Rent luxury AC buses for large group travel in India. 35-55 seater premium buses with modern amenities. Ideal for corporate events, luxury tours, large wedding parties.`,
        keywords: `luxury bus rental india, ac bus hire, corporate bus booking, large group travel bus, premium bus rental, luxury tour bus, wedding bus rental, 45 seater bus hire, corporate event transport, luxury bus service india`,
        canonical: `https://trivenicabs.com/vehicles/luxury-bus`,
        breadcrumbTitle: "Luxury Bus Rental Service"
      },
      'bus': {
        title: `Bus Rental India | AC Bus Hire | 28-35 Seater Group Transport`,
        description: `Book AC buses for group travel across India. 28-35 seater bus rental with professional driver. Affordable rates for school trips, corporate outings, religious tours, group excursions.`,
        keywords: `bus rental india, ac bus booking, group transport bus, school bus rental, corporate bus hire, religious tour bus, group travel bus, bus hire with driver, affordable bus rental, tourist bus service india`,
        canonical: `https://trivenicabs.com/vehicles/bus`,
        breadcrumbTitle: "Bus Rental Service"
      }
    };

    return seoMapping[slug] || seoMapping['sedan'];
  };

  const seoData = vehicleData ? getVehicleSEOData(vehicleData.type, slug) : null;

  // Generate JSON-LD structured data
  const generateStructuredData = () => {
    if (!vehicleData || !seoData) return null;

    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": seoData.title,
      "description": seoData.description,
      "url": seoData.canonical,
      "mainEntity": {
        "@type": "Product",
        "name": `${vehicleData.type} Rental Service`,
        "description": seoData.description,
        "brand": {
          "@type": "Brand",
          "name": "Triveni Cabs",
          "url": "https://trivenicabs.com"
        },
        "category": "Vehicle Rental Service",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": vehicleData.perKm?.replace(/[₹\/km]/g, "") || "12",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": vehicleData.perKm?.replace(/[₹\/km]/g, "") || "12",
            "priceCurrency": "INR",
            "unitText": "per kilometer"
          },
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Triveni Cabs"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": vehicleData.rating || "4.5",
          "reviewCount": vehicleData.reviews || "100",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://trivenicabs.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Vehicles",
            "item": "https://trivenicabs.com/vehicles"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": seoData.breadcrumbTitle,
            "item": seoData.canonical
          }
        ]
      },
      "provider": {
        "@type": "Organization",
        "name": "Triveni Cabs",
        "url": "https://trivenicabs.com",
        "logo": "https://trivenicabs.com/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-7668570551",
          "contactType": "Customer Service",
          "availableLanguage": ["Hindi", "English"]
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        }
      }
    };
  };

  // Loading state
  if (isLoading) {
    return (
      <>
        <Head>
          <title>Loading Vehicle Details | Triveni Cabs</title>
          <meta name="description" content="Loading vehicle rental details..." />
        </Head>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#FFFCD1]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading vehicle details...</p>
          </div>
        </div>
      </>
    );
  }

  // Error state - vehicle not found
  if (!vehicleData || !seoData) {
    return (
      <>
        <Head>
          <title>Vehicle Not Found | Triveni Cabs - Car Rental India</title>
          <meta name="description" content="The requested vehicle type is not available. Browse our complete fleet of cars, SUVs, tempo travellers and buses for rental across India." />
          <meta name="robots" content="noindex, follow" />
        </Head>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#FFFCD1]">
          <div className="text-center max-w-md mx-auto p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Vehicle Not Found</h1>
            <p className="text-gray-600 mb-6">
              The vehicle type you are looking for is not available. Please check our available fleet.
            </p>
            
           
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* SEO Head Tags */}
      <Head>
        {/* Primary Meta Tags */}
        <title>{seoData.title}</title>
        <meta name="title" content={seoData.title} />
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={seoData.canonical} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={vehicleData.image || "https://trivenicabs.com/images/default-vehicle.jpg"} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Triveni Cabs" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={seoData.canonical} />
        <meta property="twitter:title" content={seoData.title} />
        <meta property="twitter:description" content={seoData.description} />
        <meta property="twitter:image" content={vehicleData.image || "https://trivenicabs.com/images/default-vehicle.jpg"} />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Triveni Cabs" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Geographic Meta Tags for Indian Market */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.country" content="India" />
        <meta name="geo.placename" content="India" />
        <meta name="ICBM" content="20.5937, 78.9629" />
        
        {/* Language and Locale */}
        <meta httpEquiv="content-language" content="en-IN" />
        <meta name="language" content="English" />
        
        {/* Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData())
          }}
        />
        
        {/* Preload Critical Resources */}
        <link rel="preload" href={vehicleData.image} as="image" />
        
        {/* Alternate Language Tags (if you support multiple languages) */}
        <link rel="alternate" href={seoData.canonical} hrefLang="en-in" />
        <link rel="alternate" href={seoData.canonical} hrefLang="en" />
        
        {/* DNS Prefetch for External Resources */}
        <link rel="dns-prefetch" href="//api.whatsapp.com" />
        <link rel="dns-prefetch" href="//wa.me" />
        
        {/* Additional Meta for Rich Snippets */}
        <meta name="price" content={vehicleData.perKm?.replace(/[₹\/km]/g, "") || "12"} />
        <meta name="priceCurrency" content="INR" />
        <meta name="availability" content="InStock" />
        <meta name="category" content="Vehicle Rental" />
        <meta name="brand" content="Triveni Cabs" />
        
        {/* Local Business Schema for Contact */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Triveni Cabs",
              "description": "Professional car rental and taxi service across India",
              "url": "https://trivenicabs.com",
              "telephone": "+91-7668570551",
              "priceRange": "₹₹",
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "serviceType": "Vehicle Rental Service",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Vehicle Rental Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": `${vehicleData.type} Rental Service`
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>

      {/* Main Content with Semantic HTML */}
      <main role="main" itemScope itemType="https://schema.org/WebPage">
        <article itemScope itemType="https://schema.org/Product">
          <VehicleDetails slug={slug} />
        </article>
      </main>
    </>
  );
};

export default VehicleSlugPage;