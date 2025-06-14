'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";

import Trip from "@/components/trip/Trip";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/services/ServicesSection";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const parallaxScroll = () => {
      const banner = document.querySelector(".banner-image");
      if (banner) {
        const scrolled = window.scrollY;
        const rate = scrolled * -0.3; // Reduced for better performance
        banner.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    };

    // Throttle scroll event for better performance
    let ticking = false;
    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(parallaxScroll);
        ticking = true;
        setTimeout(() => { ticking = false; }, 16);
      }
    };

    window.addEventListener("scroll", requestTick, { passive: true });
    return () => window.removeEventListener("scroll", requestTick);
  }, []);

  // Structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Triveni Cabs",
    "description": "Premium taxi and car rental services with professional drivers and modern vehicles across India",
    "url": "https://www.trivenicabs.in",
    "telephone": "+91-XXXXXXXXXX",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Visakhapatnam",
      "addressRegion": "Andhra Pradesh",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "17.6868",
      "longitude": "83.2185"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "service": [
      {
        "@type": "Service",
        "name": "Local Taxi Service",
        "description": "Local transportation within the city with professional drivers"
      },
      {
        "@type": "Service", 
        "name": "Outstation Cab Service",
        "description": "Long distance travel between cities with comfortable vehicles"
      },
      {
        "@type": "Service",
        "name": "Airport Transfer",
        "description": "Reliable airport pickup and drop services available 24/7"
      },
      {
        "@type": "Service",
        "name": "Tour Packages",
        "description": "Customized tour packages for popular destinations"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Visakhapatnam"
      },
      {
        "@type": "State",
        "name": "Andhra Pradesh"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Triveni Cabs - Premium Taxi & Car Rental Services | Book Online</title>
        <meta name="description" content="Book reliable taxi services, outstation cabs, and airport transfers with Triveni Cabs. Professional drivers, modern vehicles, competitive rates, and 24/7 availability across Andhra Pradesh and major Indian cities." />
        <meta name="keywords" content="taxi service, cab booking, outstation cabs, airport transfer, car rental, local taxi, Triveni Cabs, Visakhapatnam taxi, Andhra Pradesh cabs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Triveni Cabs - Premium Taxi & Car Rental Services" />
        <meta property="og:description" content="Book reliable taxi services with professional drivers and modern vehicles. Available 24/7 across major cities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.trivenicabs.in/" />
        <meta property="og:image" content="https://www.trivenicabs.in/images/home/banner3.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.trivenicabs.in/" />
        <link rel="preload" href="/images/home/banner3.jpg" as="image" />
      </Head>

      <div className="min-h-screen">
        {/* Skip to main content link for accessibility */}
        <Link 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded-md z-50 focus:z-50"
        >
          Skip to main content
        </Link>

        <motion.main
          id="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
          role="main"
        >
          {/* Hero Section */}
          <section 
            className="relative min-h-screen flex items-center justify-center overflow-hidden" 
            aria-labelledby="hero-heading"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              />

              <Image
                src="/images/home/banner3.jpg"
                alt="Triveni Cabs fleet of modern, comfortable vehicles ready for your journey"
                className="banner-image object-cover object-center"
                fill
                priority
                sizes="100vw"
                quality={85}
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Hero Content */}
            <motion.div
              className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <header>
                <h1 
                  id="hero-heading"
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                >
                  Welcome to <span className="text-[#FACF2D]">Triveni Cabs</span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                  Your trusted travel partner for comfortable, reliable, and affordable 
                  transportation across India. Experience premium cab services with professional drivers.
                </p>
              </header>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  className="bg-[#FACF2D] text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-[#FACF2D] focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push("/services")}
                  aria-label="Explore our taxi and cab services"
                >
                  Book Your Ride
                </motion.button>
                
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push("/about")}
                  aria-label="Learn more about Triveni Cabs"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                <motion.div
                  className="w-1 h-3 bg-white rounded-full mt-2"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </section>

          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="bg-gray-50 py-3 px-4 border-b border-gray-200">
            <div className="max-w-7xl mx-auto">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link href="/" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                    Home
                  </Link>
                </li>
              </ol>
            </div>
          </nav>

          {/* Trip Booking Section */}
          <section className="py-12 bg-white" aria-labelledby="booking-section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <header className="text-center mb-12">
                  <h2 id="booking-section" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Book Your Trip
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Quick and easy booking for all your transportation needs
                  </p>
                </header>
                {Trip ? <Trip /> : <div className="text-center text-gray-500">Trip component not available</div>}
              </motion.div>
            </div>
          </section>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AboutSection />
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ServicesSection />
          </motion.div>

          {/* Call to Action Section */}
          <section className="bg-gradient-to-br from-[#FACF2D] via-yellow-400 to-[#FFFCD1] py-20" aria-labelledby="cta-section">
            <motion.div 
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <header className="mb-8">
                <h2 id="cta-section" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                  Ready to Explore? Book Your Trip Today!
                </h2>
                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  Whether you&apos;re looking for a local adventure, business travel, or a weekend getaway,
                  we have the perfect transportation solution for you.
                </p>
              </header>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button 
                  className="bg-black text-white rounded-lg py-4 px-8 text-lg font-semibold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => router.push("/tour-package/vizag-to-araku/book")}
                  aria-label="Book your trip now"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Now
                </motion.button>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-black text-black px-8 py-4 text-lg font-semibold rounded-lg hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all duration-300"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          </section>

          {/* Trust Indicators Section */}
          <section className="py-16 bg-gray-50" aria-labelledby="trust-section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <header className="text-center mb-12">
                <h3 id="trust-section" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Trusted by Thousands
                </h3>
                <p className="text-lg text-gray-600">
                  Join our satisfied customers across India
                </p>
              </header>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="trust-metric">
                  <div className="text-4xl md:text-5xl font-bold text-[#FACF2D] mb-2">10K+</div>
                  <div className="text-gray-600 font-medium">Happy Customers</div>
                </div>
                <div className="trust-metric">
                  <div className="text-4xl md:text-5xl font-bold text-[#FACF2D] mb-2">100+</div>
                  <div className="text-gray-600 font-medium">Cities Covered</div>
                </div>
                <div className="trust-metric">
                  <div className="text-4xl md:text-5xl font-bold text-[#FACF2D] mb-2">24/7</div>
                  <div className="text-gray-600 font-medium">Service Available</div>
                </div>
                <div className="trust-metric">
                  <div className="text-4xl md:text-5xl font-bold text-[#FACF2D] mb-2">4.9★</div>
                  <div className="text-gray-600 font-medium">Average Rating</div>
                </div>
              </div>
            </div>
          </section>
        </motion.main>

        {/* Schema.org structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </div>
    </>
  );
}