import { Metadata } from "next";
import { Star, ChevronRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/utilis/data";
import VehicleServices from "../../../components/services/VehicleServices";
import TourPackage from "@/components/services/TourPackage";
import CitiesSection from "@/components/cities/CitiesSection";

export const metadata = {
  title: "Our Services | Travel Agency",
  description: "Explore our comprehensive range of travel services including tour packages, vehicle rentals, and city-specific offerings.",
  keywords: "travel services, tour packages, car rental, city tours",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <nav
        className="relative bg-cover bg-center bg-no-repeat py-20 md:py-32"
        aria-label="Breadcrumb"
        style={{ backgroundImage: "url('/images/about/about_banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-white hover:text-yellow-600">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center font-semibold">
                <ChevronRight className="w-4 h-4 mx-2 text-white" />
                <span className="text-yellow-400 text-lg md:text-xl">
                  Services
                </span>
              </div>
            </li>
          </ol>
          <h1 className="text-2xl md:text-3xl font-bold text-white mt-6 md:mt-8">
            Our Services, Your Comfort.
          </h1>
        </div>
      </nav>

      {/* all services */}
      <section className="bg-gradient-to-b from-white to-yellow-100 py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            All Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold ml-3">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm md:text-base mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center text-xs md:text-sm"
                    >
                      <Star className="w-4 h-4 text-yellow-400 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* tour packages */}
      <TourPackage />

      {/* vehicles services */}
      <VehicleServices />

      {/* location section */}
      <CitiesSection />

      {/* ready to start journey */}
      <section className="bg-gradient-to-b from-[#FACF2D] to-[#FFFCD1] py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="mb-6 md:mb-8 tracking-[0.07rem] text-gray-700 text-sm md:text-base">
            Contact us today to customize your perfect travel experience
          </p>
          <Link href="/contact">
            <button className="bg-yellow-400 text-black px-6 md:px-8 py-2 md:py-3 rounded-md text-sm md:text-base font-semibold hover:bg-yellow-500 transition-colors">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}