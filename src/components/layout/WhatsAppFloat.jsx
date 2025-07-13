'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = ({ phoneNumber = "1234567890" }) => {
  const handleClick = () => {
    // Track the WhatsApp float button click in Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'whatsapp_float_click', {
        'event_category': 'engagement',
        'event_label': 'floating_whatsapp_button',
        'button_location': 'floating_bottom_right',
        'contact_method': 'whatsapp',
        'phone_number': phoneNumber,
        'value': 1
      });
    }
    
    // Open WhatsApp
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  // Track when the component becomes visible (optional)
  const handleVisibilityChange = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'whatsapp_float_visible', {
        'event_category': 'engagement',
        'event_label': 'floating_whatsapp_visibility',
        'button_location': 'floating_bottom_right',
        'value': 1
      });
    }
  };

  // Track hover interactions (optional)
  const handleHover = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'whatsapp_float_hover', {
        'event_category': 'engagement',
        'event_label': 'floating_whatsapp_hover',
        'button_location': 'floating_bottom_right',
        'value': 1
      });
    }
  };
  
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring", 
        stiffness: 260,
        damping: 20,
        duration: 1
      }}
      onAnimationComplete={handleVisibilityChange} // Track when animation completes
    >
      <motion.div
        className="relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={handleHover} // Track hover events
      >
        {/* Ripple effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-green-500 opacity-20"
          initial={{ scale: 1 }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.1, 0.2]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Main button */}
        <button
          onClick={handleClick}
          className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center group transition-all duration-300"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle size={28} className="group-hover:rotate-12 transition-transform duration-300" />
          
          {/* Tooltip */}
          <motion.span
            className="absolute right-full mr-4 bg-black text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
            initial={{ x: 20 }}
            animate={{ x: 0 }}
          >
            Chat with us on WhatsApp
          </motion.span>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default WhatsAppFloat;