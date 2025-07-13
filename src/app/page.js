'use client';

import { useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { 
  Star, 
  Shield, 
  Clock, 
  Users, 
  MapPin, 
  Phone, 
  Car, 
  Award,
  ChevronRight,
  CheckCircle,
  Zap,
  Globe
} from "lucide-react";

// Import your existing components
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/services/ServicesSection";

// Animation variants optimized for performance
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const scaleOnHover = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 }
};

// SEO-optimized structured data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Triveni Cabs",
  "description": "Professional taxi and cab services across India with 24/7 availability, luxury vehicles, and experienced drivers.",
  "url": "https://triveni-cabs.com",
  "telephone": "+91-7668570551",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "serviceArea": {
    "@type": "Country",
    "name": "India"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Taxi Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Local Taxi Service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Outstation Cab Service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Airport Transfer"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "1000"
  }
};

// Key features data
const keyFeatures = [
  {
    icon: Clock,
    title: "24/7 Service",
    description: "Round-the-clock availability for all your travel needs",
    color: "text-blue-500"
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Verified drivers and well-maintained vehicles",
    color: "text-green-500"
  },
  {
    icon: Star,
    title: "4.8★ Rating",
    description: "Trusted by 1000+ satisfied customers",
    color: "text-yellow-500"
  },
  {
    icon: Globe,
    title: "50+ Cities",
    description: "Coverage across major cities in India",
    color: "text-purple-500"
  }
];

// Service highlights
const serviceHighlights = [
  {
    title: "Local Taxi",
    description: "Quick rides within the city",
    icon: Car,
    whatsappMessage: "Hi! I am interested in booking a local taxi service within the city. Can you provide more details about rates and availability?"
  },
  {
    title: "Outstation Trips",
    description: "Comfortable long-distance travel",
    icon: MapPin,
    whatsappMessage: "Hi! I am interested in booking an outstation trip. Can you help me with pricing and available vehicles for long-distance travel?"
  },
  {
    title: "Airport Transfer",
    description: "Reliable airport pickup & drop",
    icon: Zap,
    whatsappMessage: "Hi! I need airport transfer service. Can you provide details about pickup/drop services and rates?"
  },
  {
    title: "Tour Packages",
    description: "Curated travel experiences",
    icon: Award,
    whatsappMessage: "Hi! I am interested in your tour packages. Can you share available travel experiences and pricing details?"
  }
];

export default function OptimizedHomePage() {
  const router = useRouter();

  // Analytics tracking functions
  const trackEvent = useCallback((eventName, parameters = {}) => {
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, {
        event_category: 'homepage_interaction',
        page_location: window.location.href,
        page_title: document.title,
        ...parameters
      });
    }
  }, []);

  // Track page view
  useEffect(() => {
    trackEvent('homepage_view', {
      event_category: 'page_view',
      page_type: 'homepage'
    });
  }, [trackEvent]);

  // Memoized parallax function
  const parallaxScroll = useCallback(() => {
    const banner = document.querySelector(".hero-banner");
    if (banner) {
      const scrolled = window.scrollY;
      const rate = scrolled * 0.3;
      banner.style.transform = `translate3d(0, ${rate}px, 0)`;
    }
  }, []);

  // Optimized scroll handler with scroll tracking
  useEffect(() => {
    let ticking = false;
    let scrollTimeout;
    let hasTrackedScroll = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          parallaxScroll();
          ticking = false;
          
          // Track scroll engagement (once per session)
          if (!hasTrackedScroll && window.scrollY > 100) {
            trackEvent('homepage_scroll_engagement', {
              event_category: 'engagement',
              scroll_depth: Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
            });
            hasTrackedScroll = true;
          }
        });
        ticking = true;
      }

      // Track scroll depth every 25%
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent >= 25 && scrollPercent % 25 === 0) {
          trackEvent('scroll_depth', {
            event_category: 'engagement',
            scroll_depth: scrollPercent
          });
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [parallaxScroll, trackEvent]);

  // Memoized event handlers with analytics
  const handleExploreClick = useCallback(() => {
    trackEvent('explore_services_click', {
      event_category: 'navigation',
      event_label: 'hero_explore_button',
      button_location: 'hero_section'
    });
    router.push("/services");
  }, [router, trackEvent]);

  const handleBookNowClick = useCallback((location = 'hero') => {
    trackEvent('book_now_click', {
      event_category: 'conversion',
      event_label: `${location}_book_now`,
      button_location: location,
      contact_method: 'whatsapp'
    });
    
    const phoneNumber = "7668570551";
    const message = encodeURIComponent("Hi! I am interested in booking a taxi service. Can you help me with the details?");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  }, [trackEvent]);

  // WhatsApp service inquiry handler with analytics
  const handleServiceInquiry = useCallback((service) => {
    trackEvent('service_inquiry_click', {
      event_category: 'conversion',
      event_label: service.title.toLowerCase().replace(' ', '_'),
      service_type: service.title,
      button_location: 'service_highlights',
      contact_method: 'whatsapp'
    });
    
    const phoneNumber = "7668570551";
    const message = encodeURIComponent(service.whatsappMessage);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  }, [trackEvent]);

  // Track feature card interactions
  const handleFeatureHover = useCallback((featureTitle) => {
    trackEvent('feature_hover', {
      event_category: 'engagement',
      event_label: featureTitle.toLowerCase().replace(' ', '_'),
      feature_name: featureTitle
    });
  }, [trackEvent]);

  // Track CTA interactions
  const handleCTAClick = useCallback(() => {
    trackEvent('cta_book_now_click', {
      event_category: 'conversion',
      event_label: 'bottom_cta_button',
      button_location: 'final_cta_section',
      contact_method: 'whatsapp'
    });
    handleBookNowClick('cta_section');
  }, [trackEvent, handleBookNowClick]);

  // Memoized structured data script
  const structuredDataScript = useMemo(() => 
    JSON.stringify(structuredData), []);

  return (
    <>
      {/* SEO Head */}
      <Head>
        <title>Triveni Cabs - Professional Taxi Service | Book Now | 24/7 Available</title>
        <meta 
          name="description" 
          content="Book reliable taxi services with Triveni Cabs. 24/7 availability, professional drivers, luxury vehicles across 50+ cities in India. Safe, secure & affordable cab booking." 
        />
        <meta name="keywords" content="taxi service, cab booking, outstation taxi, airport transfer, local taxi, car rental, India taxi, online cab booking" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Triveni Cabs" />
        <link rel="canonical" href="https://triveni-cabs.com" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Triveni Cabs - Professional Taxi Service | Book Now" />
        <meta property="og:description" content="Book reliable taxi services with Triveni Cabs. 24/7 availability, professional drivers, luxury vehicles across India." />
        <meta property="og:url" content="https://triveni-cabs.com" />
        <meta property="og:image" content="https://triveni-cabs.com/images/home/banner3.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Triveni Cabs - Professional Taxi Service" />
        <meta name="twitter:description" content="Book reliable taxi services with 24/7 availability across India." />
        <meta name="twitter:image" content="https://triveni-cabs.com/images/home/banner3.jpg" />
        
        {/* Structured Data */}
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: structuredDataScript }}
        />
      </Head>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden" aria-labelledby="hero-heading">
          {/* Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          />

          {/* Hero Image */}
          <div className="relative w-full h-full">
            <Image
              src="/images/home/banner3.jpg"
              alt="Professional taxi service with scenic destination background"
              className="hero-banner object-cover"
              fill
              priority
              sizes="100vw"
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Sh6gqrR9/"
              onLoad={() => {
                trackEvent('hero_image_loaded', {
                  event_category: 'performance',
                  loading_time: performance.now()
                });
              }}
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
              id="hero-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center leading-tight"
              variants={{
                initial: { y: 50, opacity: 0 },
                animate: { y: 0, opacity: 1, transition: { delay: 0.5, duration: 0.8 } }
              }}
            >
              Triveni Cabs - Professional Taxi Service in India
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-center max-w-4xl mb-8 leading-relaxed"
              variants={{
                initial: { y: 30, opacity: 0 },
                animate: { y: 0, opacity: 1, transition: { delay: 0.7, duration: 0.8 } }
              }}
            >
              Discover the worlds most amazing places with us
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={{
                initial: { y: 30, opacity: 0 },
                animate: { y: 0, opacity: 1, transition: { delay: 0.9, duration: 0.8 } }
              }}
            >
              <motion.button
                className="px-8 py-4 bg-white text-black rounded-full text-lg font-semibold hover:bg-[#FACF2D] transition-all duration-300 shadow-lg"
                variants={scaleOnHover}
                whileHover="hover"
                whileTap="tap"
                onClick={() => handleBookNowClick('hero')}
                aria-label="Get free quote for taxi service via WhatsApp"
              >
                Free Quote
              </motion.button>
              
              <motion.button
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
                variants={scaleOnHover}
                whileHover="hover"
                whileTap="tap"
                onClick={handleExploreClick}
                aria-label="Explore our taxi services"
              >
                Explore Services
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
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

        {/* Key Features Section */}
        <motion.section
          className="py-16 bg-white"
          initial="initial"
          whileInView="animate"
          variants={fadeInUp}
          viewport={{ once: true, margin: "-100px" }}
          aria-labelledby="features-heading"
          onViewportEnter={() => {
            trackEvent('features_section_view', {
              event_category: 'section_view',
              section_name: 'key_features'
            });
          }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="features-heading" className="text-2xl md:text-3xl font-bold mb-4">
                Why Choose Our Taxi Services?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience the difference with our premium cab booking services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                  variants={{
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                  }}
                  onHoverStart={() => handleFeatureHover(feature.title)}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.color} bg-gray-100 rounded-full mb-4`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Service Highlights */}
        <motion.section
          className="py-16 bg-gradient-to-b from-gray-50 to-white"
          initial="initial"
          whileInView="animate"
          variants={fadeInUp}
          viewport={{ once: true, margin: "-100px" }}
          aria-labelledby="services-heading"
          onViewportEnter={() => {
            trackEvent('service_highlights_view', {
              event_category: 'section_view',
              section_name: 'service_highlights'
            });
          }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="services-heading" className="text-2xl md:text-3xl font-bold mb-4">
                Our Premium Cab Booking Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From local rides to luxury tours, we provide complete transportation solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceHighlights.map((service, index) => (
                <motion.div
                  key={index}
                  className="group cursor-pointer"
                  onClick={() => handleServiceInquiry(service)}
                  onHoverStart={() => {
                    trackEvent('service_card_hover', {
                      event_category: 'engagement',
                      service_type: service.title,
                      card_index: index
                    });
                  }}
                >
                  <motion.div
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2"
                    variants={{
                      initial: { opacity: 0, y: 30 },
                      animate: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                    }}
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-[#FACF2D] rounded-full mb-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-[#FACF2D] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex items-center text-[#FACF2D] font-medium">
                      <span>Learn More</span>
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          variants={fadeInUp}
          viewport={{ once: true, margin: "-100px" }}
          onViewportEnter={() => {
            trackEvent('about_section_view', {
              event_category: 'section_view',
              section_name: 'about_section'
            });
          }}
        >
          <AboutSection />
        </motion.section>

        {/* Services Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          variants={fadeInUp}
          viewport={{ once: true, margin: "-100px" }}
          onViewportEnter={() => {
            trackEvent('services_section_view', {
              event_category: 'section_view',
              section_name: 'services_section'
            });
          }}
        >
          <ServicesSection />
        </motion.section>

        {/* Final CTA Section */}
        <motion.section
          className="bg-gradient-to-r from-[#FACF2D] to-yellow-400 py-16"
          initial="initial"
          whileInView="animate"
          variants={fadeInUp}
          viewport={{ once: true, margin: "-100px" }}
          aria-labelledby="cta-heading"
          onViewportEnter={() => {
            trackEvent('final_cta_view', {
              event_category: 'section_view',
              section_name: 'final_cta'
            });
          }}
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 id="cta-heading" className="text-2xl md:text-3xl font-bold mb-6 text-black">
              Book Your Taxi Service Today - Get Free Quote
            </h2>
            <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
              Professional drivers, clean vehicles, and competitive prices for all your transportation needs. Available 24/7 across India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button 
                className="bg-black text-white rounded-lg py-4 px-8 text-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg flex items-center gap-2"
                variants={scaleOnHover}
                whileHover="hover"
                whileTap="tap"
                onClick={handleCTAClick}
                aria-label="Book taxi service now via WhatsApp"
              >
                <Phone className="w-5 h-5" />
                Book Now - Call/WhatsApp
              </motion.button>
              
              <motion.div className="flex items-center text-black font-medium">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Free Quotes • No Hidden Charges</span>
              </motion.div>
            </div>
            
            <div className="mt-8 flex justify-center items-center gap-8 text-black/80">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                <span>Verified Drivers</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2" />
                <span>4.8★ Rated</span>
              </div>
            </div>
          </div>
        </motion.section>
      </motion.main>
    </>
  );
}