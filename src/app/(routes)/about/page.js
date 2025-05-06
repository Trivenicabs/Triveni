'use client';

import React from "react";
import { MapPin, Car, Clock, Phone, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { features } from "@/utilis/data";

export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="bg-gradient-to-b from-yellow-100 to-white min-h-screen">
      {/* Breadcrumb Section */}
      <nav
        className="relative bg-cover bg-center bg-no-repeat text-sm text-gray-600 py-[7rem] "
        aria-label="Breadcrumb"
        style={{
          backgroundImage: "url('/images/about/about_banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-white hover:text-yellow-600">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center font-semibold">
                <ChevronRight className="w-4 h-4 mx-2 text-white" />
                <span className="text-yellow-400 text-xl">About Us</span>
              </div>
            </li>
          </ol>
          <h1 className="text-3xl tracking-[0.06rem] md:text-3xl font-bold text-white mt-8">
            Connecting Dreams with Destinations.
          </h1>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Intro Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-yellow-800">
              Your Trusted Travel Partner
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to Triveni Cabs, your trusted travel partner dedicated to
              providing seamless, reliable, and comfortable transportation
              solutions. Whether you're planning a quick ride across the city,
              an outstation journey, or an airport transfer, we are here to
              ensure your travel is smooth, affordable, and enjoyable.
            </p>
            <div className="flex w-full justify-center space-x-4 md:pt-10 pt-5">
              <button
                onClick={() => router.push("/contact")}
                className="bg-yellow-600 text-white px-6 py-3 max-sm:text-sm max-sm:px-2.5 max-sm:py-1.5 rounded-md shadow-md hover:bg-yellow-700 transition-all duration-300 flex items-center"
              >
                Learn More
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
              <button
                onClick={() => router.push("/contact")}
                className="border-2 border-yellow-600 text-yellow-600 px-6 py-3 max-sm:text-sm max-sm:px-2.5 max-sm:py-1.5 rounded-md hover:bg-yellow-600 hover:text-white transition-all duration-300 flex items-center"
              >
                Contact Us
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500">
            <img
              src="/images/about/about_banner.jpg"
              alt="About Us"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-center mb-4">
                <feature.icon className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-yellow-800 text-center mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-yellow-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            At Triveni Cabs, our mission is to redefine travel by offering
            unparalleled convenience, safety, and affordability. We aim to
            connect people and places with reliability and excellence, making
            every journey memorable.
          </p>
        </div>
      </div>
    </div>
  );
}