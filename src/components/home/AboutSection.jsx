"use client"; // Add this for client-side interactivity

import React from "react";
import { ChevronRight } from "lucide-react";
import { features } from "../../utilis/data";
import Link from "next/link";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="bg-[#FFFCD1] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl text-center tracking-[0.06rem] font-semibold mb-12 hover:text-[#FACF2D] transition-colors duration-300">
          About Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16 md:pt-10 pt-6">
          <div className="space-y-6 ">
            <h3 className="text-2xl font-semibold text-yellow-800 tracking-[0.05rem] hover:text-black transition-colors duration-300">
              Your Trusted Travel Partner
            </h3>
            <p className="text-gray-700 leading-relaxed tracking-[0.05rem]">
              Welcome to Triveni Cabs, your trusted travel partner dedicated to
              providing seamless, reliable, and comfortable transportation
              solutions. Whether you&apos;re planning a quick ride across the city,
              an outstation journey, or an airport transfer, we are here to
              ensure your travel is smooth, affordable, and enjoyable
            </p>
            <div className=" space-x-4 md:pt-10 pt-5 flex w-full justify-center">
              <Link href="/about" className="bg-black text-white px-6 py-2 max-sm:text-sm max-sm:px-2.5 max-sm:py-1.5 rounded-md hover:bg-[#FACF2D] hover:text-black flex items-center group">
                Learn More
                <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="border-2 border-black px-6 py-2 max-sm:text-sm max-sm:px-2.5 max-sm:py-1.5 rounded-md hover:bg-black hover:text-white transition-all duration-300 flex items-center group">
                Contact Us
                <ChevronRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="transform hover:scale-105 transition-transform duration-500">
            <Image
              src="/images/about/about_banner.jpg"
              alt="About Us"
              width={600}
              height={400}
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-6 transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="text-center">
                <feature.icon className="w-8 h-8 text-[#FACF2D] mb-4 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="font-semibold mb-2 tracking-[0.05rem] text-center group-hover:text-[#FACF2D] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 text-center group-hover:text-black transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;