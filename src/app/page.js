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

// Import data from data.js
import { features, services, vehiclesServices, tourPackages, phoneNumber, cities } from "@/utilis/data";

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

// SEO-optimized structured data using real data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Triveni Cabs",
  "description": "Best car rental, taxi service and tour packages in India 2025. Sedan ₹11/km, SUV ₹15/km, Tempo Traveller ₹24/km. Professional drivers, AC vehicles, 24/7 support.",
  "url": "https://www.trivenicabs.in",
  "telephone": `+91-${phoneNumber}`,
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
    "name": "Car Rental and Tour Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sedan Car Rental",
          "description": `4 passenger sedan rental starting ${vehiclesServices[0]?.perKm || '₹11/km'}`
        },
        "price": "11",
        "priceCurrency": "INR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SUV Car Rental",
          "description": `6-7 passenger SUV rental starting ${vehiclesServices[1]?.perKm || '₹15/km'}`
        },
        "price": "15",
        "priceCurrency": "INR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tempo Traveller Rental",
          "description": `12-26 passenger tempo traveller starting ${vehiclesServices[2]?.perKm || '₹24/km'}`
        },
        "price": "24",
        "priceCurrency": "INR"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tour Packages",
          "description": `Manali tour ${tourPackages[0]?.price || '₹9,999'}, Kashmir tour ${tourPackages[4]?.price || '₹16,999'}`
        }
      }
    ]
  }
};

// Key features using data from data.js
const keyFeatures = [
  {
    icon: Car,
    title: features[0]?.title || "Quality Fleet",
    description: features[0]?.description || "Modern, well-maintained vehicles for your comfort and safety",
    color: "text-blue-500"
  },
  {
    icon: Clock,
    title: features[1]?.title || "24/7 Service",
    description: features[1]?.description || "Round-the-clock availability for all your travel needs",
    color: "text-green-500"
  },
  {
    icon: MapPin,
    title: features[2]?.title || "Wide Coverage",
    description: features[2]?.description || "Serving major cities and tourist destinations nationwide",
    color: "text-yellow-500"
  },
  {
    icon: Phone,
    title: features[3]?.title || "Easy Booking",
    description: features[3]?.description || "Quick and hassle-free reservation process",
    color: "text-purple-500"
  }
];

// Service highlights using data from services
const serviceHighlights = [
  {
    title: services[0]?.title || "Vehicles",
    description: services[0]?.description || "Wide range of comfortable and reliable vehicles",
    icon: Car,
    whatsappMessage: `Hi! I am interested in booking ${services[0]?.title.toLowerCase() || 'vehicle rental'} service. Can you provide more details about rates and availability?`
  },
  {
    title: services[1]?.title || "Tour Guide",
    description: services[1]?.description || "Expert guides for an enriching experience",
    icon: Users,
    whatsappMessage: `Hi! I am interested in ${services[1]?.title.toLowerCase() || 'tour guide'} services. Can you help me with pricing and available options?`
  },
  {
    title: services[2]?.title || "Tour Packages",
    description: services[2]?.description || "Curated experiences for every traveler",
    icon: Award,
    whatsappMessage: `Hi! I am interested in your ${services[2]?.title.toLowerCase() || 'tour packages'}. Can you share available travel experiences and pricing details?`
  },
  {
    title: "Airport Transfer",
    description: "Reliable airport pickup & drop services",
    icon: Zap,
    whatsappMessage: "Hi! I need airport transfer service. Can you provide details about pickup/drop services and rates?"
  }
];

// Homepage component
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
        <title>Best Car Rental & Tour Packages 2025 | Triveni Cabs | Professional Taxi Service | Book Now | 24/7 Available</title>
        <meta 
          name="description" 
          content={`Book car rental, taxi, tour packages with Triveni Cabs. Sedan ${vehiclesServices[0]?.perKm || '₹11/km'}, SUV ${vehiclesServices[1]?.perKm || '₹15/km'}, Tempo Traveller ${vehiclesServices[2]?.perKm || '₹24/km'}. Delhi, Mumbai, Agra, Manali tours. Professional drivers, AC vehicles, 24/7 support. Safe, secure & affordable cab booking.`}
        />
        <meta name="keywords" content="taxi service, cab booking, outstation taxi, airport transfer, local taxi, car rental, India taxi, online cab booking, car rental, taxi service, tour packages, cheap car rental, best taxi service 2025, Delhi car rental, Mumbai taxi, Agra tour, Jaipur taxi, Manali tour package, Kashmir tour, Rajasthan tour, Chardham Yatra, sedan rental, SUV hire, tempo traveller booking, luxury bus rental, outstation taxi, local taxi, airport transfer, wedding car rental, corporate travel, AC vehicle booking, professional drivers, 24x7 support, online booking, instant booking, same day booking, vehicle rental India, travel services, verified drivers, GPS tracking, safe travel, reliable transport, competitive rates, transparent pricing, Triveni Cabs" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Triveni Cabs" />
        <link rel="canonical" href="https://www.trivenicabs.in" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="🚗 Best Car Rental & Tour Packages 2025 | Triveni Cabs | Starting ₹11/km" />
        <meta property="og:description" content={`✅ Book sedan ${vehiclesServices[0]?.perKm || '₹11/km'}, SUV ${vehiclesServices[1]?.perKm || '₹15/km'}, tempo traveller online. Delhi, Mumbai, Manali tours. Professional drivers, competitive rates.`} />
        <meta property="og:url" content="https://www.trivenicabs.in" />
        <meta property="og:image" content="https://www.trivenicabs.in/images/home/banner3.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Car Rental & Tour Packages India | Triveni Cabs" />
        <meta name="twitter:description" content={`Book sedan ${vehiclesServices[0]?.perKm || '₹11/km'}, SUV ${vehiclesServices[1]?.perKm || '₹15/km'} online. Professional service, competitive rates.`} />
        <meta name="twitter:image" content="https://www.trivenicabs.in/images/home/banner3.jpg" />
        
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
              alt="Best car rental and taxi service - Professional drivers with luxury vehicles across India"
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
              🚗 Best Car Rental & Tour Packages 2025 | Triveni Cabs
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-center max-w-4xl mb-8 leading-relaxed"
              variants={{
                initial: { y: 30, opacity: 0 },
                animate: { y: 0, opacity: 1, transition: { delay: 0.7, duration: 0.8 } }
              }}
            >
              ✅ Sedan {vehiclesServices[0]?.perKm || '₹11/km'} ✅ SUV {vehiclesServices[1]?.perKm || '₹15/km'} ✅ Professional Drivers ✅ 24/7 Support
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
                📞 Free Quote Now
              </motion.button>
              
              <motion.button
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
                variants={scaleOnHover}
                whileHover="hover"
                whileTap="tap"
                onClick={handleExploreClick}
                aria-label="Explore our taxi services"
              >
                🚘 Explore Services
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
                🏆 Why Choose Our Car Rental & Taxi Services?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                <strong>Best car rental rates in India!</strong> Professional service with competitive pricing across {cities.length}+ cities
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
                🚗 Our Premium Car Rental & Tour Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                <strong>Complete transportation solutions:</strong> From sedan {vehiclesServices[0]?.perKm || '₹11/km'} to luxury tours {tourPackages[0]?.price || '₹9,999'}
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
              🚀 Book Car Rental & Tour Packages Today - Get Free Quote!
            </h2>
            <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto">
              <strong>Best rates guaranteed!</strong> Sedan {vehiclesServices[0]?.perKm || '₹11/km'}, SUV {vehiclesServices[1]?.perKm || '₹15/km'}, Tempo {vehiclesServices[2]?.perKm || '₹24/km'}. Professional drivers, AC vehicles, competitive prices. Available 24/7 across India.
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
                📱 Call/WhatsApp: {phoneNumber}
              </motion.button>
              
              <motion.div className="flex items-center text-black font-medium">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>✅ Free Quotes • No Hidden Charges</span>
              </motion.div>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center items-center gap-8 text-black/80">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                <span>✅ Verified Drivers</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>✅ 24/7 Support</span>
              </div>
              <div className="flex items-center">
                <Car className="w-5 h-5 mr-2" />
                <span>✅ {cities.length}+ Cities</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2" />
                <span>✅ Professional Service</span>
              </div>
            </div>
          </div>
        </motion.section>
      </motion.main>
    </>
  );
}