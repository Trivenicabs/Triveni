// OfficeLocations.jsx - Component to display office locations on route pages

'use client';

import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { BsWhatsapp } from 'react-icons/bs';

const OfficeCard = ({ office, cityName, isOrigin = false }) => {
  const handleCall = () => {
    window.open(`tel:+91${office.contact.phone}`, '_blank');
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${office.contact.whatsapp}`, '_blank');
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{office.name}</h3>
          <div className="flex items-center mt-1">
            <span className={`px-2 py-1 text-xs rounded-full ${
              isOrigin ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
            }`}>
              {isOrigin ? 'Pick-up Office' : 'Drop Office'}
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">Contact</div>
          <div className="font-semibold">{office.contact.phone}</div>
        </div>
      </div>

      {/* Address - This section will grow to fill available space */}
      <div className="mb-4 flex-1">
        <div className="flex items-start gap-2 mb-2">
          <MapPin className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
          <div>
            <p className="text-gray-700 font-medium">{office.address}</p>
            <p className="text-sm text-gray-500">{cityName}, {office.pincode}</p>
          </div>
        </div>
        
        {office.landmark && (
          <p className="text-sm text-gray-600 ml-6">
            <span className="font-medium">Landmark:</span> {office.landmark}
          </p>
        )}
      </div>

      {/* Timings */}
      <div className="mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>{office.timings}</span>
        </div>
      </div>

      {/* Action Buttons - Always at bottom */}
      <div className="flex gap-2 mt-auto">
        <button
          onClick={handleCall}
          className="flex-1 bg-green-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-1"
        >
          <Phone className="w-4 h-4" />
          Call
        </button>
        
        <button
          onClick={handleWhatsApp}
          className="flex-1 bg-black text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-1"
        >
          <BsWhatsapp className="w-4 h-4" />
          WhatsApp
        </button>
      </div>
    </div>
  );
};

const OfficeLocations = ({ originCity, destinationCity, offices }) => {
  // Don't render if no offices found
  if (!offices || (!offices.origin && !offices.destination)) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">
        Our Offices - Easy Pickup & Drop Services
      </h3>
      
      <p className="text-gray-600">
        Visit our offices for hassle-free booking and reliable service. Our team is ready to assist you!
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Origin Office */}
        {offices.origin && (
          <OfficeCard 
            office={offices.origin} 
            cityName={originCity}
            isOrigin={true}
          />
        )}
        
        {/* Destination Office */}
        {offices.destination && (
          <OfficeCard 
            office={offices.destination} 
            cityName={destinationCity}
            isOrigin={false}
          />
        )}
      </div>
      
      {/* Benefits Section */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 mt-6">
        <h4 className="font-semibold mb-3 text-gray-800">
          Why Visit Our Offices?
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-700">Personal assistance & guidance</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-700">Transparent pricing discussion</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span className="text-sm text-gray-700">Vehicle inspection available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-sm text-gray-700">Custom tour planning</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span className="text-sm text-gray-700">Emergency support</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
            <span className="text-sm text-gray-700">Local area expertise</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeLocations;