"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { features } from "../../utilis/data";
import Link from "next/link";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section 
      className="about-section bg-gradient-to-br from-[#FFFCD1] via-[#FFF8E1] to-[#FFFCD1] py-16 md:py-24"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Changed from H2 to H3 */}
        <header className="text-center mb-16 md:mb-20">
          <h3 
            id="about-heading"
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight hover:text-[#FACF2D] transition-colors duration-300"
          >
            About Triveni Cabs - Your Reliable Transportation Partner
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FACF2D] to-yellow-500 mx-auto rounded-full"></div>
        </header>

        {/* Main Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20 md:mb-24 items-center">
          {/* Content Column */}
          <article className="space-y-8">
            <header>
              <h4 className="text-xl md:text-2xl font-bold text-yellow-800 mb-6 tracking-tight hover:text-black transition-colors duration-300">
                Professional Taxi Service Across India
              </h4>
            </header>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed tracking-wide">
                Welcome to <strong className="text-yellow-800">Triveni Cabs</strong>, your trusted taxi service provider dedicated to
                providing seamless, reliable, and comfortable transportation
                solutions. Whether you&apos;re planning a quick ride across the city,
                an outstation journey, or an airport transfer, we are here to
                ensure your travel is smooth, affordable, and enjoyable.
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center bg-black text-white px-8 py-4 text-base md:text-lg font-semibold rounded-lg hover:bg-[#FACF2D] hover:text-black focus:outline-none focus:ring-2 focus:ring-[#FACF2D] focus:ring-offset-2 transition-all duration-300 group shadow-lg hover:shadow-xl"
                aria-label="Learn more about Triveni Cabs taxi service"
              >
                Learn More About Our Service
                <ChevronRight 
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                  aria-hidden="true"
                />
              </Link>
              
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center border-2 border-black text-black px-8 py-4 text-base md:text-lg font-semibold rounded-lg hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all duration-300 group shadow-lg hover:shadow-xl"
                aria-label="Contact Triveni Cabs for taxi booking"
              >
                Contact for Booking
                <ChevronRight 
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                  aria-hidden="true"
                />
              </Link>
            </div>
          </article>

          {/* Image Column */}
          <aside className="relative">
            <div className="relative transform hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FACF2D] to-yellow-500 rounded-xl opacity-20 blur-lg"></div>
              <Image
                src="/images/about/about_banner.jpg"
                alt="Triveni Cabs - Professional taxi service with comfortable vehicles and experienced drivers"
                width={600}
                height={400}
                className="relative rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 w-full h-auto"
                priority
              />
            </div>
          </aside>
        </div>

        {/* Features Section - Changed heading structure */}
        <section aria-labelledby="features-heading">
          <header className="text-center mb-12">
            <h4 
              id="features-heading"
              className="text-xl md:text-2xl font-bold text-gray-900 mb-4"
            >
              Why Choose Our Taxi Service
            </h4>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes Triveni Cabs your ideal cab booking partner
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <article 
                key={index} 
                className="feature-card bg-white rounded-xl shadow-lg p-6 md:p-8 transform hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 cursor-pointer group border border-gray-100 hover:border-[#FACF2D]"
              >
                <header className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FACF2D] to-yellow-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <feature.icon 
                      className="w-8 h-8 text-white" 
                      aria-hidden="true"
                    />
                  </div>
                  <h5 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FACF2D] transition-colors duration-300">
                    {feature.title}
                  </h5>
                </header>
                
                <p className="text-base text-gray-600 text-center leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Stats section - Changed to H5 */}
        <section className="mt-20 text-center" aria-labelledby="stats-heading">
          <h5 id="stats-heading" className="sr-only">Our Service Statistics</h5>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="stat-item">
              <div className="text-3xl md:text-4xl font-bold text-[#FACF2D] mb-2">1000+</div>
              <div className="text-gray-600 font-medium">Happy Customers</div>
            </div>
            <div className="stat-item">
              <div className="text-3xl md:text-4xl font-bold text-[#FACF2D] mb-2">50+</div>
              <div className="text-gray-600 font-medium">Cities Covered</div>
            </div>
            <div className="stat-item">
              <div className="text-3xl md:text-4xl font-bold text-[#FACF2D] mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Taxi Service Available</div>
            </div>
            <div className="stat-item">
              <div className="text-3xl md:text-4xl font-bold text-[#FACF2D] mb-2">5★</div>
              <div className="text-gray-600 font-medium">Average Rating</div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutSection;