'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="relative h-[90vh] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />

        <motion.div className="relative w-full h-full">
          <Image
            src="/images/home/banner3.jpg"
            alt="banner"
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
          <h1 className="text-4xl md:text-7xl font-bold mb-4 text-center px-4">
            Welcome to Adventure
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl px-4">
            Discover the world's most amazing places with us
          </p>
          <motion.button
            className="mt-8 px-8 py-3 bg-white text-black rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/services")}
          >
            Start Exploring
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Check if Trip component exists and is properly imported */}
        {Trip ? <Trip /> : <div>Trip component not available</div>}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <AboutSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ServicesSection />
      </motion.div>

      <motion.div>
        {/* Call to Action Section */}
        <div className="bg-gradient-to-b from-[#FACF2D] to-[#FFFCD1] py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-3xl max-sm:text-2xl font-semibold mb-4 text-yellow-800">
              Ready to Explore? Book Your Trip Today!
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              Whether you're looking for a local adventure or a weekend getaway,
              we have the perfect package for you.
            </p>
            <button 
              className="bg-black text-white rounded-md py-3 px-6 hover:bg-[#FACF2D] hover:text-black transition-all"
              onClick={() => router.push("/tour-package/vizag-to-araku/book")}
            >
              Book Now
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}