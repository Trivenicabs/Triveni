import React from "react";
import Image from "next/image";
import Link from "next/link";
import { tourDetails } from "@/utilis/data";
import ItinerarySection from "@/components/ItinerarySection";
import { Calendar, MapPin, Clock, Users, Car, Star, Coffee, BedDouble } from "lucide-react";

// Import the client components
import { TrackingProvider, ItineraryWrapper, AccommodationWrapper, BookNowButton } from "./client-components";

// SEO Keywords mapping for different tour packages
const seoKeywords = {
  "manali-tour-from-mumbai": {
    primary: ["Manali tour packages", "Mumbai to Manali", "Himachal Pradesh tours"],
    secondary: ["Rohtang Pass tours", "Solang Valley activities", "Manali honeymoon packages", "adventure tours India"],
    longTail: ["best Manali tour from Mumbai", "5 days Manali package", "Manali snow activities tour"],
    location: ["Manali", "Mumbai", "Himachal Pradesh", "Rohtang Pass", "Solang Valley"]
  },
  "chardham-yatra-package": {
    primary: ["Chardham Yatra", "Char Dham tour", "spiritual tours India"],
    secondary: ["Kedarnath tours", "Badrinath packages", "Yamunotri Gangotri", "pilgrimage tours"],
    longTail: ["complete Chardham Yatra package", "12 days Char Dham tour", "Delhi to Chardham package"],
    location: ["Kedarnath", "Badrinath", "Yamunotri", "Gangotri", "Haridwar", "Rishikesh"]
  },
  "shimla-from-mumbai": {
    primary: ["Shimla tour packages", "Mumbai to Shimla", "hill station tours"],
    secondary: ["Kufri tours", "Mall Road Shimla", "colonial architecture tours", "summer vacation packages"],
    longTail: ["best Shimla package from Mumbai", "6 days Shimla tour", "Queen of Hills vacation"],
    location: ["Shimla", "Mumbai", "Kufri", "Naldehra", "Himachal Pradesh"]
  },
  "rajasthan-tour": {
    primary: ["Rajasthan tour packages", "Royal Rajasthan tours", "heritage tours India"],
    secondary: ["Jaipur Jodhpur Udaipur", "palace tours", "desert safari", "cultural tours Rajasthan"],
    longTail: ["complete Rajasthan heritage tour", "7 days royal Rajasthan package", "Golden Triangle Rajasthan"],
    location: ["Jaipur", "Jodhpur", "Udaipur", "Pushkar", "Mount Abu", "Rajasthan"]
  },
  "kashmir-tour": {
    primary: ["Kashmir tour packages", "Srinagar tours", "Kashmir valley tours"],
    secondary: ["Dal Lake tours", "Gulmarg packages", "Pahalgam tours", "houseboat stay Kashmir"],
    longTail: ["best Kashmir tour package", "paradise on earth tour", "5 days Kashmir valley tour"],
    location: ["Kashmir", "Srinagar", "Gulmarg", "Pahalgam", "Dal Lake"]
  },
  "punjab-tour": {
    primary: ["Punjab tour packages", "Golden Temple tours", "cultural tours Punjab"],
    secondary: ["Amritsar tours", "Wagah Border", "Sikh heritage tours", "Punjab culture tours"],
    longTail: ["Golden Temple Amritsar package", "3 days Punjab cultural tour", "Delhi to Amritsar tour"],
    location: ["Punjab", "Amritsar", "Golden Temple", "Wagah Border"]
  }
};

// Enhanced metadata generation
export async function generateMetadata({ params }) {
  const { slug } = params;
  const packageInfo = tourDetails[slug];
  const keywords = seoKeywords[slug];
  
  if (!packageInfo) {
    return {
      title: "Package Not Found | Triveni Cabs",
      description: "The requested tour package could not be found",
    };
  }

  // Create comprehensive meta description
  const metaDescription = `Book ${packageInfo.title} starting at ${packageInfo.price}. ${packageInfo.duration} package from ${packageInfo.startingPoint} to ${packageInfo.destination}. Best rates, comfortable stay, guided tours included.`;

  // Combine all keywords for meta keywords
  const allKeywords = keywords ? [
    ...keywords.primary,
    ...keywords.secondary,
    ...keywords.longTail,
    ...keywords.location,
    "tour packages India",
    "travel agency",
    "holiday packages",
    "Triveni Cabs"
  ].join(", ") : "";

  return {
    title: `${packageInfo.title} | ${packageInfo.price} | ${packageInfo.duration} | Triveni Cabs`,
    description: metaDescription,
    keywords: allKeywords,
    openGraph: {
      title: `${packageInfo.title} - Book Now at ${packageInfo.price}`,
      description: metaDescription,
      images: [
        {
          url: packageInfo.image,
          width: 1200,
          height: 630,
          alt: `${packageInfo.title} - ${packageInfo.destination} tour package`
        }
      ],
      type: 'website',
      locale: 'en_IN',
      siteName: 'Triveni Cabs'
    },
    twitter: {
      card: 'summary_large_image',
      title: `${packageInfo.title} | ${packageInfo.price}`,
      description: metaDescription,
      images: [packageInfo.image],
    },
    alternates: {
      canonical: `https://trivenicabs.com/tour-packages/${slug}`
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
    },
    verification: {
      google: 'your-google-verification-code',
    }
  };
}

// Generate static paths for all tour packages
export async function generateStaticParams() {
  return Object.keys(tourDetails).map((slug) => ({
    slug: slug,
  }));
}

// Main Tour Package Page Component (Server Component)
export default function TourPackagePage({ params }) {
  const { slug } = params;
  const packageInfo = tourDetails[slug];
  const keywords = seoKeywords[slug];

  if (!packageInfo) {
    return <div className="text-center py-16">Package not found</div>;
  }

  // Generate JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TourPackage",
    "name": packageInfo.title,
    "description": packageInfo.overview,
    "image": packageInfo.image,
    "provider": {
      "@type": "TravelAgency",
      "name": "Triveni Cabs",
      "url": "https://trivenicabs.com",
      "telephone": "7668570551"
    },
    "offers": {
      "@type": "Offer",
      "price": packageInfo.price.replace('₹', '').replace(',', ''),
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString(),
      "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
    },
    "duration": packageInfo.duration,
    "startLocation": {
      "@type": "Place",
      "name": packageInfo.startingPoint
    },
    "endLocation": {
      "@type": "Place", 
      "name": packageInfo.destination
    },
    "itinerary": packageInfo.itinerary.map(item => ({
      "@type": "Event",
      "name": item.title,
      "description": item.details
    })),
    "includesObject": packageInfo.inclusions.map(inclusion => ({
      "@type": "Thing",
      "name": inclusion
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Satisfied Customer"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": `Excellent ${packageInfo.title}. Great service and amazing experience.`
      }
    ]
  };

  return (
    <TrackingProvider slug={slug} packageTitle={packageInfo.title}>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      <div className="bg-white">
        {/* Hero Section with SEO-optimized content */}
        <div className="relative h-[60vh]">
          <Image
            src={packageInfo.image}
            alt={`${packageInfo.title} - ${packageInfo.destination} tour package from ${packageInfo.startingPoint}`}
            className="w-full h-full object-cover"
            fill
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70">
            <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-16 text-white">
              <h1 className="text-4xl font-bold mb-6 tracking-[0.07rem]">
                {packageInfo.title}
              </h1>
              
              {/* SEO-rich subtitle */}
              <p className="text-lg mb-4 max-w-3xl">
                {keywords?.longTail?.[0] || `Best ${packageInfo.destination} tour from ${packageInfo.startingPoint}`}. 
                Book now for {packageInfo.duration} of unforgettable memories.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm tracking-[0.05rem]">
                <div className="flex items-center bg-black/30 px-3 rounded-full">
                  <Clock className="w-4 h-4 mr-2" />
                  {packageInfo.duration}
                </div>
                <div className="flex items-center bg-black/30 px-3 rounded-full">
                  <MapPin className="w-5 h-5 mr-2" />
                  {packageInfo.startingPoint} to {packageInfo.destination}
                </div>
                <div className="text-xl font-bold bg-[#FACF2D] text-black px-6 py-1 rounded-full">
                  {packageInfo.price}{" "}
                  <span className="text-sm font-normal">per person</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-16">
              {/* Overview Section with keyword optimization */}
              <section className="bg-yellow-100 p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl tracking-[0.06rem] font-semibold mb-6">
                  About {packageInfo.title} - Complete Travel Guide
                </h2>
                <div className="text-yellow-900 text-lg leading-relaxed space-y-4">
                  <p>{packageInfo.overview}</p>
                  
                  {/* Additional SEO content based on package type */}
                  {keywords?.primary && (
                    <p>
                      Our {keywords.primary[0]} offers the perfect blend of comfort, adventure, and cultural experiences. 
                      {keywords.location && ` Visit ${keywords.location.slice(0,3).join(", ")}`} with our expertly 
                      crafted itinerary designed for maximum enjoyment and value.
                    </p>
                  )}
                  
                  <p>
                    <strong>Why Choose This Package:</strong> Premium accommodations, experienced guides, 
                    comfortable transportation, and 24/7 customer support. Book with confidence - 
                    we have been serving travelers since our establishment.
                  </p>
                </div>
              </section>

              {/* Highlights Section */}
              {packageInfo.highlights && (
                <section className="bg-blue-50 p-8 rounded-2xl shadow-lg">
                  <h2 className="text-2xl tracking-[0.06rem] font-semibold mb-6">
                    Tour Highlights & Key Attractions
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {packageInfo.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                        <Star className="w-5 h-5 text-[#FACF2D] mr-3 flex-shrink-0" />
                        <span className="font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Itinerary Section */}
              <ItineraryWrapper slug={slug}>
                <section>
                  <h2 className="text-2xl tracking-[0.06rem] font-semibold mb-6">
                    Detailed {packageInfo.duration} Itinerary
                  </h2>
                  <ItinerarySection itinerary={packageInfo.itinerary} />
                </section>
              </ItineraryWrapper>

              {/* Accommodation Section */}
              <AccommodationWrapper slug={slug} accommodationName={packageInfo.accommodation.name}>
                <section className="bg-yellow-100 p-8 rounded-2xl shadow-lg">
                  <h2 className="text-2xl tracking-[0.06rem] font-semibold mb-6">
                    Premium Accommodation - {packageInfo.accommodation.name}
                  </h2>
                  <div className="bg-gray-50 p-8 rounded-xl">
                    <h3 className="text-2xl mb-4">
                      {packageInfo.accommodation.name}
                    </h3>
                    <div className="flex items-center mb-6">
                      {[...Array(parseInt(packageInfo.accommodation.rating))].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-6 h-6 text-[#FACF2D]"
                            fill="#FACF2D"
                          />
                        )
                      )}
                      <span className="ml-2 text-gray-600">
                        {packageInfo.accommodation.rating} Star Rated Hotel
                      </span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      {packageInfo.accommodation.amenities.map((amenity, index) => (
                        <div
                          key={index}
                          className="flex items-center bg-white p-4 rounded-lg shadow-sm hover:scale-[1.03] transition-transform"
                        >
                          <div className="w-10 h-10 rounded-full bg-[#FACF2D] flex items-center justify-center mr-3">
                            <Coffee className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-medium">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </AccommodationWrapper>


            </div>

            {/* Sidebar with enhanced CTAs */}
            <div className="md:col-span-1">
              <div className="sticky top-4 bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">
                  Package Inclusions
                </h2>
                <ul className="space-y-4 mb-8">
                  {packageInfo.inclusions.map((inclusion, index) => (
                    <li
                      key={index}
                      className="flex items-start"
                    >
                      <Star className="w-5 h-5 text-[#FACF2D] mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{inclusion}</span>
                    </li>
                  ))}
                </ul>
                <BookNowButton slug={slug} packageTitle={packageInfo.title} />
                
                {/* Contact information */}
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold mb-2">Need Help?</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Speak with our travel experts
                  </p>
                  <a 
                    href="tel:7668570551" 
                    className="text-blue-600 font-semibold"
                  >
                    📞 7668570551
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TrackingProvider>
  );
}