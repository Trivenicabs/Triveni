'use client';

import React, { useState } from 'react';
import { ArrowRight, Heart, Star } from 'lucide-react';
import { destinations, phoneNumber } from '@/utilis/data';

export default function ClientDestinationTabs() {
  const [activeTab, setActiveTab] = useState('destinations');

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <>
      {/* Navigation Tabs */}
      <div className="sticky top-0 flex justify-center bg-white shadow-md z-50">
        <div className="max-w-full mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {['destinations', 'packages', 'spots'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-6 max-sm:py-4 px-4 max-sm:px-2 font-medium text-lg max-sm:text-[16px] border-b-2 transition-colors ${
                  activeTab === tab
                    ? 'border-yellow-500 text-yellow-500'
                    : 'border-transparent text-gray-600 hover:text-yellow-500'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Destinations Section */}
      {activeTab === 'destinations' && (
        <section className="py-16 px-4 bg-yellow-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {destinations.map((dest, index) => (
                <div
                  key={index}
                  className="group rounded-2xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={dest.heroImage}
                      alt={dest.city}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-3xl font-bold text-white mb-2">{dest.city}</h3>
                      <p className="text-gray-200 text-lg">{dest.tagline}</p>
                      <div className="flex items-center mt-4">
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                        <span className="ml-2 text-white">{dest.rating}</span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-gray-300">{dest.reviews} reviews</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">{dest.description}</p>
                    <div className="flex justify-between items-center">
                      <button onClick={handleClick} className="px-6 py-3 bg-black text-white rounded-lg hover:bg-yellow-500 transition-colors duration-300">
                        Explore {dest.city}
                      </button>
                      <button className="p-3 rounded-full hover:bg-gray-100 transition-colors">
                        <Heart className="w-6 h-6 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Packages Section */}
      {activeTab === 'packages' && (
        <section className="py-16 px-4 bg-[#FFFCD1]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {destinations.map((dest) =>
                dest.packages.map((pkg, index) => (
                  <div
                    key={`${dest.city}-${index}`}
                    className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full backdrop-blur-sm">
                        <span className="text-yellow-600 font-semibold">{pkg.duration}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                      <p className="text-gray-600 mb-4">{dest.city}</p>
                      <ul className="space-y-2 mb-6">
                        {pkg.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center text-gray-600">
                            <ArrowRight className="w-4 h-4 text-yellow-500 mr-2" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-yellow-600">{pkg.price}</span>
                        <button onClick={handleClick} className="px-4 py-2 bg-black text-white rounded-lg hover:bg-yellow-500 transition-colors">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      )}

      {/* Tourist Spots Section */}
      {activeTab === 'spots' && (
        <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-yellow-100">
          <div className="max-w-7xl mx-auto">
            {destinations.map((dest, index) => (
              <div key={index} className="mb-16 last:mb-0">
                <h2 className="text-3xl font-bold mb-8">{dest.city}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {dest.spots.map((spot, i) => (
                    <div
                      key={i}
                      className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={spot.image}
                          alt={spot.name}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{spot.name}</h3>
                        <p className="text-gray-600 mb-4">{spot.description}</p>
                        <button onClick={handleClick} className="flex items-center text-yellow-600 hover:text-yellow-700 transition-colors">
                          Learn More <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}