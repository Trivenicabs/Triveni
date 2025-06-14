'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
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
        banner.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };

    window.addEventListener("scroll", parallaxScroll);
    return () => window.removeEventListener("scroll", parallaxScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Triveni Cabs - Premium Taxi & Car Rental Services</title>
        <meta name="description" content="Book reliable taxi services, outstation cabs, and airport transfers with Triveni Cabs. Affordable rates, professional drivers, and 24/7 availability across major cities." />
        <meta name="keywords" content="taxi service, cab booking, outstation cabs, airport transfer, car rental, local taxi, Triveni Cabs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.trivenicabs.in/" />
      </Head>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
        role="main"
      >
        {/* Hero Section */}
        <section className="relative h-[90vh] overflow-hidden" aria-label="Hero banner">
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          />

          <motion.div className="relative w-full h-full">
            <Image
              src="/images/home/banner3.jpg"
              alt="Triveni Cabs - Professional taxi service with modern vehicles"
              className="banner-image object-cover object-center"
              fill
              priority
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
            />
          </motion.div>

          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <header className="text-center">
              <h1 className="text-4xl md:text-7xl font-bold mb-4 text-center px-4">
                Welcome to Triveni
              </h1>
              <p className="text-xl md:text-2xl text-center max-w-2xl px-4">
                Discover the world&apos;s most amazing places with us
              </p>
            </header>
            <motion.button
              className="mt-8 px-8 py-3 bg-white text-black rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/services")}
              aria-label="Start exploring our services"
            >
              Start Exploring
            </motion.button>
          </motion.div>
        </section>

        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="bg-gray-50 py-2 px-4">
          <ol className="max-w-7xl mx-auto flex items-center space-x-2 text-sm">
            <li><a href="/" className="text-blue-600 hover:underline">Home</a></li>
          </ol>
        </nav>

        {/* Trip Booking Section */}
        <section className="py-8" aria-labelledby="booking-section">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 id="booking-section" className="sr-only">Book Your Trip</h2>
            {Trip ? <Trip /> : <div>Trip component not available</div>}
          </motion.div>
        </section>

        {/* About Section */}
        <section className="py-8" aria-labelledby="about-section">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 id="about-section" className="sr-only">About Triveni Cabs</h2>
            <AboutSection />
          </motion.div>
        </section>

        {/* Services Section */}
        <section className="py-8" aria-labelledby="services-section">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 id="services-section" className="sr-only">Our Services</h2>
            <ServicesSection />
          </motion.div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-b from-[#FACF2D] to-[#FFFCD1] py-16" aria-labelledby="cta-section">
          <motion.div className="max-w-7xl mx-auto px-4 text-center">
            <h2 id="cta-section" className="text-3xl max-sm:text-2xl font-semibold mb-4 text-yellow-800">
              Ready to Explore? Book Your Trip Today!
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Whether you&apos;re looking for a local adventure or a weekend getaway,
              we have the perfect package for you.
            </p>
            <button 
              className="bg-black text-white rounded-md py-3 px-6 hover:bg-[#FACF2D] hover:text-black transition-all"
              onClick={() => router.push("/tour-package/vizag-to-araku/book")}
              aria-label="Book your trip now"
            >
              Book Now
            </button>
          </motion.div>
        </section>

        {/* Schema.org structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Triveni Cabs",
              "description": "Premium taxi and car rental services with professional drivers and modern vehicles",
              "url": "https://www.trivenicabs.in",
              "telephone": "+91-XXXXXXXXXX",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Visakhapatnam",
                "addressRegion": "Andhra Pradesh",
                "addressCountry": "IN"
              },
              "service": [
                {
                  "@type": "Service",
                  "name": "Local Taxi Service",
                  "description": "Local transportation within the city"
                },
                {
                  "@type": "Service", 
                  "name": "Outstation Cab Service",
                  "description": "Long distance travel between cities"
                },
                {
                  "@type": "Service",
                  "name": "Airport Transfer",
                  "description": "Airport pickup and drop services"
                }
              ]
            })
          }}
        />
      </motion.main>
    </>
  );
}