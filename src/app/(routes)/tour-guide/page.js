'use client';

import React, { useState } from 'react';
import { ChevronRight, Phone, MapPin } from 'lucide-react';
import { BsWhatsapp } from 'react-icons/bs';
import Link from 'next/link';
import Head from 'next/head';

// Define constants
const availableLocations = [
  'Delhi', 'Agra', 'Jaipur', 'Haridwar', 'Chandigarh', 
  'Shimla', 'Manali', 'Amritsar', 'Dehradun', 'Rishikesh', 
  'Jodhpur', 'Udaipur', 'Ayodhya', 'Ahmedabad'
];

const languagePrices = {
  'English': 1500,
  'Hindi': 1200,
  'French': 2000,
  'Spanish': 2000,
  'German': 2200,
  'Chinese': 2500
};

const phoneNumber = '7668570551'; 

// CSS for animations (would normally be in globals.css)
const animationStyles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  
  @keyframes bounceIn {
    0% { transform: scale(0.8); opacity: 0; }
    60% { transform: scale(1.05); opacity: 1; }
    100% { transform: scale(1); }
  }
  
  .animate-fadeIn {
    animation: fadeIn 1s ease-in-out;
  }
  
  .animate-slideUp {
    animation: slideUp 0.8s ease-out;
  }
  
  .animate-bounceIn {
    animation: bounceIn 0.8s ease-out;
  }
`;

export default function TourGuidePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    language: '',
    city: '',
    message: ''
  });

  const [price, setPrice] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'language') {
      setPrice(languagePrices[value] || 0);
    }
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    // Create formatted message with form data
    const message = `🎯 *Tour Guide Booking Request*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phoneNumber}
🌍 *Language:* ${formData.language}
📍 *City:* ${formData.city}
💰 *Price:* ₹${price}

📝 *Message:*
${formData.message || 'No additional message'}

Please confirm my booking. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        {/* Primary Meta Tags */}
        <title>Professional Tour Guide Booking | Multi-Language Guides in Delhi, Agra, Jaipur and More</title>
        <meta name="title" content="Professional Tour Guide Booking | Multi-Language Guides in Delhi, Agra, Jaipur and More" />
        <meta name="description" content="Book experienced tour guides in 14+ Indian cities. Multi-language guides available in English, Hindi, French, Spanish, German and Chinese. Starting from ₹1200. Expert local guides for heritage sites, cultural tours and sightseeing." />
        <meta name="keywords" content="tour guide booking, professional tour guide, local tour guide, Delhi tour guide, Agra tour guide, Jaipur tour guide, Golden Triangle tour guide, Rajasthan tour guide, multi language tour guide, English speaking guide, heritage tour guide, private tour guide, certified tour guide, Shimla tour guide, Manali tour guide" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="Your Company Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/tour-guide" />
        <meta property="og:title" content="Professional Tour Guide Booking | Multi-Language Guides in Delhi, Agra, Jaipur and More" />
        <meta property="og:description" content="Book experienced tour guides in 14+ Indian cities. Multi-language guides available in English, Hindi, French, Spanish, German and Chinese. Starting from ₹1200." />
        <meta property="og:image" content="https://yourwebsite.com/images/tour-guide-og-image.jpg" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Your Company Name" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourwebsite.com/tour-guide" />
        <meta property="twitter:title" content="Professional Tour Guide Booking | Multi-Language Guides in Delhi, Agra, Jaipur and More" />
        <meta property="twitter:description" content="Book experienced tour guides in 14+ Indian cities. Multi-language guides available in English, Hindi, French, Spanish, German and Chinese. Starting from ₹1200." />
        <meta property="twitter:image" content="https://yourwebsite.com/images/tour-guide-twitter-image.jpg" />

        {/* Additional SEO Tags */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="28.6139;77.2090" />
        <meta name="ICBM" content="28.6139, 77.2090" />

        {/* Schema.org markup for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristInformationCenter",
              "name": "Professional Tour Guide Services",
              "description": "Book experienced tour guides in 14+ Indian cities. Multi-language guides available.",
              "url": "https://yourwebsite.com/tour-guide",
              "telephone": "+91-7668570551",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "366, Dandupura, near Tajganj",
                "addressLocality": "Agra",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "282006",
                "addressCountry": "India"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "27.1767",
                "longitude": "78.0081"
              },
              "areaServed": [
                "Delhi", "Agra", "Jaipur", "Shimla", "Manali", "Haridwar", 
                "Chandigarh", "Amritsar", "Dehradun", "Rishikesh", 
                "Jodhpur", "Udaipur", "Ayodhya", "Ahmedabad"
              ],
              "serviceType": [
                "Tour Guide Services", "Heritage Tours", "Cultural Tours", 
                "Sightseeing Tours", "Multi-language Guide Services"
              ],
              "priceRange": "₹1200-₹2500",
              "availableLanguage": [
                "English", "Hindi", "French", "Spanish", "German", "Chinese"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Tour Guide Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "English Speaking Tour Guide",
                      "description": "Professional English speaking tour guide for heritage and cultural sites"
                    },
                    "price": "1500",
                    "priceCurrency": "INR"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Hindi Tour Guide",
                      "description": "Professional Hindi speaking local tour guide"
                    },
                    "price": "1200",
                    "priceCurrency": "INR"
                  }
                ]
              }
            })
          }}
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://yourwebsite.com/tour-guide" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      {/* Inject animation styles */}
      <style jsx global>{animationStyles}</style>
      
      <div className="bg-gradient-to-b from-yellow-100 to-white min-h-screen">
        {/* Breadcrumb Section */}
        <nav
          className="relative bg-cover bg-center bg-no-repeat text-sm text-gray-600 py-24 md:py-28 animate-fadeIn"
          style={{
            backgroundImage: "url('/images/about/about_banner.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <ol className="inline-flex items-center space-x-1 md:space-x-3" itemScope itemType="https://schema.org/BreadcrumbList">
              <li className="inline-flex items-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" className="text-white hover:text-yellow-600" itemProp="item">
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <div className="flex items-center font-semibold">
                  <ChevronRight className="w-4 h-4 mx-2 text-white" />
                  <span className="text-yellow-400 text-xl" itemProp="name">Tour Guide</span>
                </div>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
            <h1 className="text-3xl tracking-wider md:text-3xl font-bold text-white mt-8 animate-slideUp">
              Book Your Professional Tour Guide
            </h1>
            <p className="text-white text-lg mt-4 max-w-2xl">
              Expert local guides available in 14+ cities across India. Multi-language support for an authentic cultural experience.
            </p>
          </div>
        </nav>

        {/* Main Content Section with SEO-optimized content */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* SEO Content Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">
              Professional Tour Guide Services Across India
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-yellow-700">Why Choose Our Tour Guides?</h3>
                <ul className="space-y-2">
                  <li>✓ <strong>Certified and Licensed</strong> tour guides</li>
                  <li>✓ <strong>Multi-language support</strong> in 6 languages</li>
                  <li>✓ <strong>Local expertise</strong> in heritage and culture</li>
                  <li>✓ <strong>Flexible booking</strong> options available</li>
                  <li>✓ <strong>Competitive pricing</strong> starting from ₹1200</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-yellow-700">Cities We Cover</h3>
                <div className="grid grid-cols-2 gap-1 text-sm">
                  {availableLocations.map((city, index) => (
                    <span key={index} className="text-gray-600">• {city}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form Section */}
          <div className="max-w-xl mx-auto">
            <form onSubmit={handleWhatsAppSubmit} className="bg-white shadow-lg rounded-lg p-8 space-y-4 animate-slideUp">
              <h2 className="text-2xl font-semibold text-yellow-800 mb-6 text-center">
                Book Your Tour Guide
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-3 border text-sm tracking-wider rounded-lg focus:ring-2 focus:ring-yellow-400 transition-all"
                  required
                  aria-label="Your full name"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full p-3 border rounded-lg text-sm tracking-wider focus:ring-2 focus:ring-yellow-400 transition-all"
                  required
                  aria-label="Your email address"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full p-3 border rounded-lg text-sm tracking-wider focus:ring-2 focus:ring-yellow-400 transition-all"
                  required
                  aria-label="Your phone number"
                />
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg text-sm tracking-wider focus:ring-2 focus:ring-yellow-400 transition-all"
                  required
                  aria-label="Select preferred language"
                >
                  <option value="">Select Language</option>
                  {Object.keys(languagePrices).map(lang => (
                    <option key={lang} value={lang}>{lang} - ₹{languagePrices[lang]}</option>
                  ))}
                </select>
              </div>

              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg text-sm tracking-wider focus:ring-2 focus:ring-yellow-400 transition-all"
                required
                aria-label="Select city for tour"
              >
                <option value="">Select City</option>
                {availableLocations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Special requirements or tour preferences"
                className="w-full p-3 border text-sm tracking-wider rounded-lg h-32 focus:ring-2 focus:ring-yellow-400 transition-all"
                aria-label="Additional message or requirements"
              />

              {formData.language && (
                <div className="text-center font-semibold text-yellow-800 animate-fadeIn p-4 bg-yellow-50 rounded-lg">
                  <div className="text-lg">Guide Price: ₹{price}</div>
                  <div className="text-sm text-gray-600 mt-1">Per day rate for {formData.language} speaking guide</div>
                </div>
              )}

              <div className="flex flex-col md:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center font-semibold"
                  aria-label="Book tour guide via WhatsApp"
                >
                  <BsWhatsapp className="mr-2 w-5 h-5" />
                  Book via WhatsApp
                </button>
              </div>

              <div className="flex justify-center space-x-4 mt-6">
                <a 
                  href={`tel:+91${phoneNumber}`}
                  className="bg-black text-sm tracking-wider text-white px-6 py-3 rounded-full flex items-center hover:bg-yellow-600 transition-colors"
                  aria-label="Call us now"
                >
                  <Phone className="mr-2 w-4 h-4" /> Call Now
                </a>
                <button 
                  onClick={handleWhatsAppSubmit}
                  type="button"
                  className="bg-green-600 text-sm tracking-wider text-white px-6 py-3 rounded-full flex items-center hover:bg-green-700 transition-colors"
                  aria-label="Contact us via WhatsApp"
                >
                  <BsWhatsapp className="mr-2 w-4 h-4" /> WhatsApp Us
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Quick Contact Section */}
        <div className="bg-yellow-100 py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-semibold text-yellow-800 mb-4 animate-slideUp">
              Need Instant Assistance?
            </h3>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 animate-bounceIn">
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                <MapPin className="text-yellow-600 mr-4 w-12 h-12 flex-shrink-0" />
                <div className="text-left">
                  <h4 className="font-semibold text-yellow-800">Our Office</h4>
                  <p className="text-gray-600">366, Dandupura, near Tajganj, Agra, Uttar Pradesh, 282006, India</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                <Phone className="text-yellow-600 mr-4 w-12 h-12 flex-shrink-0" />
                <div className="text-left">
                  <h4 className="font-semibold text-yellow-800">24/7 Support</h4>
                  <p className="text-gray-600">+91 {phoneNumber}</p>
                  <p className="text-sm text-gray-500">Available for immediate booking</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional SEO Content */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-yellow-800 mb-6">
              Frequently Asked Questions About Our Tour Guide Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-yellow-700 mb-2">What languages do your guides speak?</h3>
                <p className="text-gray-600 text-sm mb-4">Our certified tour guides are fluent in English, Hindi, French, Spanish, German, and Chinese, ensuring clear communication throughout your journey.</p>
                
                <h3 className="font-semibold text-yellow-700 mb-2">Are your guides certified?</h3>
                <p className="text-gray-600 text-sm mb-4">Yes, all our tour guides are licensed by the Ministry of Tourism and have extensive knowledge of local history, culture, and heritage sites.</p>
              </div>
              <div>
                <h3 className="font-semibold text-yellow-700 mb-2">How do I book a tour guide?</h3>
                <p className="text-gray-600 text-sm mb-4">Simply fill out our booking form above, select your preferred language and city, and we'll connect you with the perfect guide via WhatsApp.</p>
                
                <h3 className="font-semibold text-yellow-700 mb-2">What's included in the guide service?</h3>
                <p className="text-gray-600 text-sm">Our tour guide service includes expert commentary, historical insights, cultural explanations, and assistance with local interactions during your tour.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}