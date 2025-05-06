'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Clock, ChevronRight } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Tour Packages", href: "/packages" },
    { name: "Contact", href: "/contact" }
  ];

  const services = [
    "Local Rides",
    "Airport Transfer",
    "Outstation Trips",
    "Corporate Travel",
    "Wedding Cars"
  ];

  const cities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Pune",
    "Hyderabad"
  ];

  return (
    <footer className="bg-black text-gray-300">
      {/* Newsletter Section */}
      <section className="bg-black py-16 border-b border-gray-500 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl max-sm:text-2xl font-bold text-white mb-4">
              Get Travel Updates
            </h2>
            <p className="text-gray-400 max-sm:text-sm">
              Subscribe to our newsletter for exclusive deals and travel tips
            </p>
          </div>
          <div className="flex gap-4 max-sm:flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 backdrop-blur-sm border border-white/20 focus:outline-none focus:border-yellow-500"
            />
            <button className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Top Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6 flex items-center flex-col">
              <Image src="/images/logo/logo3.jpg" alt="Logo" width={48} height={48} className="h-12 w-auto" />
              <p className="text-sm text-start leading-relaxed">
                Your trusted travel partner providing premium transportation services across India since 2015.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <button className="p-2 bg-[#FACF2D] rounded-full hover:bg-white transition-colors duration-300 group">
                  <Facebook className="w-5 h-5 text-black" />
                </button>
                <button className="p-2 bg-[#FACF2D] rounded-full hover:bg-white transition-colors duration-300">
                  <Instagram className="w-5 h-5 text-black" />
                </button>
                <button className="p-2 bg-[#FACF2D] rounded-full hover:bg-white transition-colors duration-300">
                  <Twitter className="w-5 h-5 text-black" />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:ps-5">
              <h3 className="text-white text-start font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="flex items-center text-sm hover:text-[#FACF2D] transition-colors duration-300 group"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white text-start font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li 
                    key={service}
                    className="flex items-center text-sm hover:text-[#FACF2D] cursor-pointer transition-colors duration-300"
                  >
                    <Clock className="w-4 h-4 mr-2 text-[#FACF2D]" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-white text-start font-semibold">Contact Us</h3>
              <div>
                <div className="flex items-center space-x-3 mb-4 hover:text-[#FACF2D] transition-colors duration-300">
                  <div className="bg-[#FACF2D] p-2 rounded-full">
                    <Phone className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <p>+91 76685 70551</p>
                  </div>
                </div>
                <div className="flex items-center mb-4 space-x-3 hover:text-[#FACF2D] transition-colors duration-300">
                  <div className="bg-[#FACF2D] p-2 rounded-full">
                    <Mail className="w-4 h-4 text-black" />
                  </div>
                  <div className="text-sm text-start">
                    <p>cabstriveni@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 hover:text-[#FACF2D] transition-colors duration-300">
                  <div className="bg-[#FACF2D] p-2 rounded-full">
                    <MapPin className="w-4 h-4 text-black" />
                  </div>
                  <div className="text-start text-sm">
                    <p>366, Dandupura, near Tajganj, Agra, 282006</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © 2024 Triveni Cabs. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <Link href="/privacy" className="text-sm hover:text-[#FACF2D] transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm hover:text-[#FACF2D] transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;