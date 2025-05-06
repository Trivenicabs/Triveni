import React from "react";
import { tourDetails } from "@/utilis/data";
import ItinerarySection from "@/components/ItinerarySection";
import { Calendar, MapPin, Clock, Users, Car, Star, Coffee, BedDouble } from "lucide-react";

// Generate static paths for all tour packages
export async function generateStaticParams() {
  // Create an array of objects with slug property for each tour package
  return Object.keys(tourDetails).map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for the page
export async function generateMetadata({ params }) {
  const { slug } = params;
  const packageInfo = tourDetails[slug];
  
  if (!packageInfo) {
    return {
      title: "Package Not Found",
      description: "The requested tour package could not be found",
    };
  }

  return {
    title: `${packageInfo.title} | Tour Package`,
    description: packageInfo.overview.substring(0, 160),
    openGraph: {
      title: packageInfo.title,
      description: packageInfo.overview.substring(0, 160),
      images: [packageInfo.image],
    },
  };
}

// Main Tour Package Page Component
export default function TourPackagePage({ params }) {
  const { slug } = params;
  const packageInfo = tourDetails[slug];

  if (!packageInfo) {
    return <div className="text-center py-16">Package not found</div>;
  }

  return (
    <div className="bg-white">
      <div className="relative h-[60vh]">
        <img
          src={packageInfo.image}
          alt={packageInfo.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70">
          <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-16 text-white">
            <h1 className="text-4xl font-bold mb-6 tracking-[0.07rem]">
              {packageInfo.title}
            </h1>
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
            <section className="bg-yellow-100 p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl tracking-[0.06rem] font-semibold mb-6">
                Overview
              </h2>
              <p className="text-yellow-900 text-lg leading-relaxed">
                {packageInfo.overview}
              </p>
            </section>

            <ItinerarySection itinerary={packageInfo.itinerary} />

            <section className="bg-yellow-100 p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl tracking-[0.06rem] font-semibold mb-6">
                Accommodation
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
          </div>

          <div className="md:col-span-1">
            <div className="sticky top-4 bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">
                Package Inclusions
              </h2>
              <ul className="space-y-4">
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
              <a href={`/tour-package/${slug}/book`}>
                <button
                  className="w-full mt-8 bg-[#FACF2D] text-black py-2 rounded-xl font-semibold text-lg
                  hover:bg-black hover:text-white transition-colors shadow-lg"
                >
                  Book Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}