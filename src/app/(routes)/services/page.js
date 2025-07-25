import { Metadata } from "next";
import { Star, ChevronRight, Car, Users, Package, MapPin, Clock, Phone } from "lucide-react";
import Link from "next/link";
import { services, features, vehiclesServices, tourPackages } from "@/utilis/data";
import VehicleServices from "../../../components/services/VehicleServices";
import TourPackage from "@/components/services/TourPackage";
import CitiesSection from "@/components/cities/CitiesSection";

export const metadata = {
  title: "Best Travel Services 2025 | Car Rental, Tour Packages, Cab Booking Online | Cheap Rates",
  description: "✅ Book car rental, tour packages, tempo traveller, luxury bus online. Best rates for Delhi, Mumbai, Agra, Jaipur, Manali tours. AC vehicles, professional drivers, 24/7 support. Instant booking!",
  keywords: "travel services, car rental, tour packages, cab booking, vehicle rental, cheap car rental, best tour packages 2025, Delhi car rental, Mumbai taxi, Agra tour, Jaipur sightseeing, Manali tour package, Kashmir tour, Rajasthan tour, Chardham Yatra, tempo traveller booking, luxury bus rental, sedan hire, SUV rental, outstation taxi, local sightseeing, airport transfer, wedding car rental, corporate travel, group tour packages, adventure tours, pilgrimage tours, honeymoon packages, family tour packages, budget tours, premium car rental, chauffeur driven cars, AC vehicle booking, online cab booking, instant car booking, 24x7 taxi service, reliable cab service, safe travel, comfortable journey, professional drivers, verified drivers, GPS tracking, doorstep pickup, flexible booking, cancellation policy, travel insurance, tourist guide services, hotel booking, flight booking, complete travel solutions, India tour packages, domestic tours, international tours, weekend getaways, holiday packages, travel deals, discount offers, early bird offers, group discounts, student discounts, senior citizen discounts, travel blog, travel tips, destination guides, travel reviews, customer testimonials",
  alternates: {
    canonical: "https://trivenicabs.in/services"
  },
  openGraph: {
    title: "🚗 Best Car Rental & Tour Packages 2025 | Instant Booking | Cheap Rates",
    description: "✅ Premium vehicles ✅ Expert drivers ✅ 24/7 support ✅ Best prices guaranteed. Book now for Delhi, Mumbai, Agra, Jaipur tours!",
    type: "website",
    locale: "en_IN",
    siteName: "Travel Agency India"
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Travel Services India | Car Rental & Tour Packages",
    description: "Book premium vehicles and curated tour packages at best rates. Professional service across India."
  },
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Breadcrumb */}
      <nav
        className="relative bg-cover bg-center bg-no-repeat py-20 md:py-32"
        aria-label="Breadcrumb"
        style={{ backgroundImage: "url('/images/about/about_banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-white hover:text-yellow-400 transition-colors">
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
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-6 md:mt-8">
            🚗 Best Travel Services 2025 | Car Rental & Tour Packages
          </h1>
          <p className="text-lg text-gray-200 mt-4 max-w-3xl">
            ✅ Instant Booking ✅ Cheapest Rates ✅ Professional Drivers ✅ 24/7 Support | Delhi, Mumbai, Agra, Jaipur Tours
          </p>
          <div className="flex flex-wrap gap-4 mt-6 text-sm">
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold">⚡ Same Day Booking</span>
            <span className="bg-green-500 text-white px-3 py-1 rounded-full font-semibold">🛡️ 100% Safe & Secure</span>
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full font-semibold">✅ Verified Drivers</span>
          </div>
        </div>
      </nav>

      {/* SEO Content Section */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            
           
            <div className="flex flex-wrap justify-center gap-2 mt-4 text-xs">
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">✅ Verified Drivers</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded">✅ Best Price Guarantee</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">✅ Professional Service</span>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">✅ 24/7 Support</span>
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded">✅ Instant Confirmation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mb-3">
                  <feature.icon className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="bg-gradient-to-b from-white to-yellow-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🚘 Complete Travel Solutions | Best Rates Guaranteed
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              <strong>Book car rental, tour packages, tempo traveller online</strong>  <strong>Professional service with competitive rates!</strong>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-yellow-100 rounded-xl">
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold ml-4 text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.items.map((item, i) => (
                    <div key={i} className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* tour packages */}
      <TourPackage />

      {/* vehicles services */}
      <VehicleServices />

      {/* Full Tour Package Component */}
      <TourPackage />

      {/* Cities Coverage */}
      <CitiesSection />

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            🚀 Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-gray-800 mb-6 leading-relaxed">
            <strong>Book India's most reliable car rental & tour packages!</strong> Professional drivers, AC vehicles, 24/7 support. <strong>Contact us for personalized service!</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-black text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-800 transition-colors">
                📞 Get Quote Now
              </button>
            </Link>
            <Link href="tel:7668570551">
              <button className="bg-white text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors flex items-center justify-center border-2 border-black">
                <Phone className="w-5 h-5 mr-2" />
                📱 Call: 7668570551
              </button>
            </Link>
          </div>
          <p className="text-sm text-gray-800 mt-4">
            ⏰ <strong>Available 24/7 for bookings and inquiries.</strong> Professional service you can trust!
          </p>
        </div>
      </section>
    </div>
  );
}