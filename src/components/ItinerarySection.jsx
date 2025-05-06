"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const ItinerarySection = ({ itinerary }) => {
  const [activeDay, setActiveDay] = useState(null);
  
  return (
    <motion.section 
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl tracking-[0.06rem] font-semibold mb-8">
        Itinerary
      </h2>
      {itinerary.map((day, index) => (
        <motion.div
          key={index}
          className="bg-gradient-to-r from-yellow-50 to-bg-white py-3 px-5 rounded-xl shadow-md hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.02 }}
          onClick={() => setActiveDay(activeDay === index ? null : index)}
        >
          <div className="flex justify-between items-center cursor-pointer">
            <div>
              <h3 className="font-semibold w-fit text-xl text-yellow-900">
                {day.day}: {day.title}
              </h3>
              <motion.div
                className="text-gray-600 mt-2"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeDay === index ? "auto" : 0,
                  opacity: activeDay === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {day.details}
              </motion.div>
            </div>
            <ChevronDown
              className={`w-6 h-6 transition-transform ${
                activeDay === index ? "rotate-180" : ""
              }`}
            />
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default ItinerarySection;