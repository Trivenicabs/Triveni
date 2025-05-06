'use client';

import React, { useState } from "react";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { vehiclesServices } from "@/utilis/data";

// You'll need to import the AuthModal component
// import AuthModal from "@/components/Auth/AuthModal";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogin = () => {
    setIsModalOpen(true);
    setMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 w-full">
      <header className="bg-[#FACF2D] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/images/logo/logo3.jpg"
                  alt="Company Logo"
                  width={64}
                  height={64}
                  className="h-16 w-auto hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
              <button
                className="text-black focus:outline-none"
                onClick={toggleMenu}
              >
                {menuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="font-bold text-gray-700 hover:text-yellow-600 px-2 py-1 transition-colors">
                Home
              </Link>
              <Link href="/about" className="font-bold text-gray-700 hover:text-yellow-600 px-2 py-1 transition-colors">
                About
              </Link>
              <Link href="/services" className="font-bold text-gray-700 hover:text-yellow-600 px-2 py-1 transition-colors">
                Services
              </Link>
              <Link href="/destinations" className="font-bold text-gray-700 hover:text-yellow-600 px-2 py-1 transition-colors">
                Destinations
              </Link>
              <Link
                href="/car-rental"
                className="font-bold text-gray-700 hover:text-yellow-600 px-2 py-1 transition-colors"
              >
                Rent Car
              </Link>
              <Link
                href="/tour-guide"
                className="font-bold text-gray-700 hover:text-yellow-600 px-2 py-1 transition-colors"
              >
                Tour Guide
              </Link>
            </nav>

            {/* Phone Number & Login */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center">
                <div className="text-sm flex items-center px-2 bg-amber-50 rounded-l-md py-1">
                  <Phone className="h-4 w-4 text-gray-700 mr-1" />
                  <span className="text-gray-700 text-xs">24x7</span>
                </div>
                <div className="text-xs font-medium bg-black text-white py-1.5 px-3 rounded-r-md">
                  +91 76685 70551
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-black text-white rounded-full px-6 py-2 text-sm hover:bg-gray-800 transition-all duration-300"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-white w-64 h-full shadow-md p-4 relative">
            <button
              className="text-black focus:outline-none absolute top-2 right-2"
              onClick={toggleMenu}
            >
              <X className="h-5 w-5" />
            </button>
            <nav className="flex mt-10 flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-yellow-600 font-semibold"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-yellow-600 font-semibold"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-yellow-600 font-semibold"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                href="/destinations"
                className="text-gray-700 hover:text-yellow-600 font-semibold"
                onClick={toggleMenu}
              >
                Destinations
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-yellow-600 font-semibold"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link
                href="/car-rental"
                className="text-gray-700 hover:text-yellow-600 font-semibold"
                onClick={toggleMenu}
              >
                Rent Car
              </Link>
              <Link
                href="/tour-guide"
                className="text-gray-700 hover:text-yellow-600 font-semibold"
                onClick={toggleMenu}
              >
                Tour Guide
              </Link>

              {/* Vehicles Section */}
              <div className="py-2 pt-3 border-t border-gray-200">
                <div className="space-y-2">
                  {vehiclesServices.map((vehicle) => (
                    <Link
                      key={vehicle.type}
                      href={`/vehicle-details/${vehicle.type
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                      className="block text-gray-600 hover:text-yellow-600 pl-2 text-sm"
                      onClick={toggleMenu}
                    >
                      {vehicle.type}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
            {/* <button
              onClick={handleLogin}
              className="bg-black mt-10 text-white rounded-full px-10 py-2 text-xs tracking-[0.06rem] hover:bg-gray-800 hover:text-[#FACF2D] transition-all duration-300"
            >
              Login
            </button> */}
          </div>
        </div>
      )}
      {isModalOpen && (
        <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}

      <style jsx>{`
        /* Using Tailwind classes directly in the JSX instead */
      `}</style>
    </div>
  );
};

export default Header;