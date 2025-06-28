'use client';

import { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/services/ServicesSection";

// Animation variants for better performance
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

export default function Home() {
  const router = useRouter();

  // Memoized parallax function for better performance
  const parallaxScroll = useCallback(() => {
    const banner = document.querySelector(".banner-image");
    if (banner) {
      const scrolled = window.scrollY;
      const rate = scrolled * 0.4;
      banner.style.transform = `translate3d(0, ${rate}px, 0)`;
    }
  }, []);

  useEffect(() => {
    // Throttle scroll events for better performance
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          parallaxScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [parallaxScroll]);

  const handleExploreClick = useCallback(() => {
    router.push("/services");
  }, [router]);

  const handleBookNowClick = useCallback(() => {
    // WhatsApp number and message - customize as needed
    const phoneNumber = "7668570551"; // Replace with your WhatsApp number (include country code without +)
    const message = encodeURIComponent("Hi! I'm interested in booking an adventure trip. Can you help me with the details?");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />

        {/* Hero Image */}
        <div className="relative w-full h-full">
          <Image
            src="/images/home/banner3.jpg"
            alt="Adventure destination with scenic landscape"
            className="banner-image object-cover"
            fill
            priority
            sizes="100vw"
            quality={90}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh6gqrR9/"
          />
        </div>

        {/* Hero Content */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 px-4"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-center leading-tight"
            variants={{
              initial: { y: 50, opacity: 0 },
              animate: { y: 0, opacity: 1, transition: { delay: 0.8, duration: 0.8 } }
            }}
          >
            Welcome to Triveni
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-center max-w-3xl mb-8 leading-relaxed"
            variants={{
              initial: { y: 30, opacity: 0 },
              animate: { y: 0, opacity: 1, transition: { delay: 1, duration: 0.8 } }
            }}
          >
            Discover the world&apos;s most amazing places with us
          </motion.p>
          
          <motion.button
            className="px-8 py-4 bg-white text-black rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg"
            variants={{
              initial: { y: 30, opacity: 0 },
              animate: { y: 0, opacity: 1, transition: { delay: 1.2, duration: 0.8 } }
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleExploreClick}
            aria-label="Start exploring our adventure packages"
          >
            Start Exploring
          </motion.button>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        variants={fadeInUp}
        viewport={{ once: true, margin: "-100px" }}
      >
        <AboutSection />
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        variants={fadeInUp}
        viewport={{ once: true, margin: "-100px" }}
      >
        <ServicesSection />
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        variants={fadeInUp}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-gradient-to-b from-[#FACF2D] to-[#FFFCD1] py-16 lg:py-20"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-yellow-800 leading-tight">
            Ready to Explore? Book Your Trip Today!
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re looking for a local adventure or a weekend getaway,
            we have the perfect package for you.
          </p>
          <motion.button 
            className="bg-black text-white rounded-lg py-4 px-8 text-lg font-medium hover:bg-[#FACF2D] hover:text-black transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBookNowClick}
            aria-label="Contact us on WhatsApp to book your adventure trip"
          >
            Book Now
          </motion.button>
        </div>
      </motion.section>
    </motion.div>
  );
}