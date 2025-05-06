// File: /src/app/(routes)/tour-guide/page.js

'use client';

import React, { useState } from 'react';
import { ChevronRight, Phone, MapPin } from 'lucide-react';
import { BsWhatsapp } from 'react-icons/bs';

// Remove the metadata export - you'll add this in a separate file later if needed

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

const phoneNumber = '9876543210'; // Replace with your actual phone number

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
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true);
    // In a real implementation, you would send this data to your API
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <>
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
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a href="/" className="text-white hover:text-yellow-600">
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center font-semibold">
                  <ChevronRight className="w-4 h-4 mx-2 text-white" />
                  <span className="text-yellow-400 text-xl">Tour Guide</span>
                </div>
              </li>
            </ol>
            <h1 className="text-3xl tracking-wider md:text-3xl font-bold text-white mt-8 animate-slideUp">
              Book Your Personal Tour Guide
            </h1>
          </div>
        </nav>

        {/* Form Section */}
        <div className="max-w-xl mx-auto px-4 py-16">
          {isSubmitted ? (
            <div className="bg-white shadow-lg rounded-lg p-8 text-center animate-bounceIn">
              <h2 className="text-2xl font-semibold text-green-600 mb-4">
                Booking Submitted Successfully!
              </h2>
              <p className="text-gray-600 mb-6">
                We'll contact you shortly to confirm your tour guide booking.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-yellow-600 text-white px-6 py-2 rounded-md hover:bg-yellow-700"
              >
                Book Another Guide
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 space-y-4 animate-slideUp">
              <h2 className="text-2xl font-semibold text-yellow-800 mb-6 text-center">
                Tour Guide Booking
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-2 border text-sm tracking-wider rounded focus:ring-2 focus:ring-yellow-400 transition-all"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full p-2 border rounded text-sm tracking-wider focus:ring-2 focus:ring-yellow-400 transition-all"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full p-2 border rounded text-sm tracking-wider focus:ring-2 focus:ring-yellow-400 transition-all"
                  required
                />
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  className="w-full p-2 border rounded text-sm tracking-wider focus:ring-2 focus:ring-yellow-400 transition-all"
                  required
                >
                  <option value="">Select Language</option>
                  {Object.keys(languagePrices).map(lang => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>

              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-2 border rounded text-sm tracking-wider focus:ring-2 focus:ring-yellow-400 transition-all"
                required
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
                placeholder="Your Message"
                className="w-full p-2 border text-sm tracking-wider rounded h-32 focus:ring-2 focus:ring-yellow-400 transition-all"
              />

              {formData.language && (
                <div className="text-center font-semibold text-yellow-800 animate-fadeIn">
                  Guide Price: ₹{price}
                </div>
              )}

              <div className="flex flex-col md:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-yellow-600 text-white py-3 rounded-md hover:bg-yellow-700 transition-colors flex items-center justify-center"
                >
                  Book Tour Guide
                </button>
              </div>

              <div className="flex justify-center space-x-4 mt-4">
                <a 
                  href={`tel:+91${phoneNumber}`}
                  className="bg-black text-sm tracking-wider text-white px-4 py-2 rounded-full flex items-center hover:bg-yellow-600 transition-colors"
                >
                  <Phone className="mr-2 w-4 h-4" /> Call Now
                </a>
                <button 
                  onClick={handleWhatsAppClick}
                  type="button"
                  className="bg-green-600 text-sm tracking-wider text-white px-4 py-2 rounded-full flex items-center hover:bg-green-700 transition-colors"
                >
                  <BsWhatsapp className="mr-2" /> WhatsApp Us
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Quick Contact Section */}
        <div className="bg-yellow-100 py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-semibold text-yellow-800 mb-4 animate-slideUp">
              Need Instant Assistance?
            </h3>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 animate-bounceIn">
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                <MapPin className="text-yellow-600 mr-4 w-12 h-12" />
                <div>
                  <h4 className="font-semibold text-yellow-800">Our Locations</h4>
                  <p className="text-gray-600">366, Dandupura, near Tajganj, Agra, Uttar Pradesh, 282006, India</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                <Phone className="text-yellow-600 mr-4 w-12 h-12" />
                <div>
                  <h4 className="font-semibold text-yellow-800">Quick Support</h4>
                  <p className="text-gray-600">+91 {phoneNumber}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}