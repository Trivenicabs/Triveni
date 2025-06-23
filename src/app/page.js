'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

import Trip from "@/components/trip/Trip";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/services/ServicesSection";
import { trackButtonClick, trackBookingAttempt } from "@/lib/analytics";

export default function Home() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const parallaxScroll = () => {
      const banner = document.querySelector(".banner-image");
      if (banner) {
        const scrolled = window.scrollY;
        const rate = scrolled * -0.5;
        banner.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    };

    const handleScroll = () => {
      requestAnimationFrame(parallaxScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    setIsLoaded(true);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleExploreClick = () => {
    trackButtonClick('start_exploring', 'hero');
    router.push("/services");
  };

  const handleBookNowClick = () => {
    trackBookingAttempt('vizag_to_araku', 'homepage_cta');
    router.push("/tour-package/vizag-to-araku/book");
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Hero Section */}
        <section className="relative h-[100vh] overflow-hidden">
          {/* Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          />

          {/* Background Image */}
          <div className="relative w-full h-full">
            <Image
              src="/images/home/banner3.jpg"
              alt="Triveni Cabs - Professional taxi and car rental services"
              className="banner-image object-cover object-center"
              fill
              priority
              sizes="100vw"
              quality={85}
              style={{
                objectFit: 'cover',
              }}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>

          {/* Hero Content */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 px-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-center max-w-4xl leading-tight"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Welcome to <span className="text-[#FACF2D]">Triveni Cabs</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-center max-w-3xl mb-8 leading-relaxed text-gray-100"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              Your trusted travel partner for reliable and comfortable transportation solutions across India
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <motion.button
                className="px-8 py-4 bg-[#FACF2D] text-black rounded-full text-lg font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleExploreClick}
              >
                Explore Our Services
              </motion.button>
              
              <motion.button
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  trackButtonClick('call_now', 'hero');
                  window.open('tel:+917668570551', '_self');
                }}
              >
                Call Now: +91 7668570551
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
              >
                <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Trip Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-10"
        >
          {Trip ? <Trip /> : (
            <div className="py-16 text-center">
              <p className="text-gray-600">Trip component is loading...</p>
            </div>
          )}
        </motion.section>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-10"
        >
          <AboutSection />
        </motion.section>

        {/* Services Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-10"
        >
          <ServicesSection />
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-10"
        >
          <div className="bg-gradient-to-br from-[#FACF2D] via-[#FFFCD1] to-[#F5E6A8] py-20">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Ready to Start Your Journey?
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Whether you're planning a local trip, weekend getaway, or a long-distance journey, 
                we have the perfect vehicle and package for your needs.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.button 
                  className="bg-black text-white rounded-full py-4 px-8 text-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleBookNowClick}
                >
                  Book Your Trip Now
                </motion.button>
                
                <motion.button
                  className="bg-transparent border-2 border-black text-black rounded-full py-4 px-8 text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    trackButtonClick('get_quote', 'cta');
                    router.push("/contact");
                  }}
                >
                  Get Free Quote
                </motion.button>
              </motion.div>

              <motion.div
                className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800 mb-2">24/7</div>
                  <div className="text-gray-600">Available Service</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800 mb-2">500+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800 mb-2">50+</div>
                  <div className="text-gray-600">Destinations Covered</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </>
  );
}