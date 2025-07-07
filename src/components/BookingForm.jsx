"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Check,
  PhoneCall,
  MessageCircleMore,
} from "lucide-react";
import { motion } from "framer-motion";

const BookingForm = ({ slug, packageInfo }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    passengers: [{ name: "", age: "", gender: "" }],
    contactInfo: {
      email: "",
      phone: "",
      address: "",
    },
  });

  const addPassenger = () => {
    setFormData((prev) => ({
      ...prev,
      passengers: [...prev.passengers, { name: "", age: "", gender: "" }],
    }));
  };

  const removePassenger = (index) => {
    if (formData.passengers.length > 1) {
      setFormData((prev) => ({
        ...prev,
        passengers: prev.passengers.filter((_, i) => i !== index),
      }));
    }
  };

  const updatePassenger = (index, field, value) => {
    const newPassengers = [...formData.passengers];
    newPassengers[index] = { ...newPassengers[index], [field]: value };
    setFormData((prev) => ({ ...prev, passengers: newPassengers }));
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const steps = [
    { number: 1, title: "Passenger Details" },
    { number: 2, title: "Contact Information" },
    { number: 3, title: "Confirmation" },
  ];

  // Generate WhatsApp message from form data
  const generateWhatsAppMessage = () => {
    let message = `🌟 *New Booking Request* 🌟\n\n`;
    message += `📦 *Package:* ${packageInfo.title}\n`;
    message += `⏰ *Duration:* ${packageInfo.duration}\n`;
    message += `📍 *Route:* ${packageInfo.startingPoint} to ${packageInfo.destination}\n`;
    message += `💰 *Price:* ${packageInfo.price} per person\n`;
    message += `👥 *Total Passengers:* ${formData.passengers.length}\n`;
    message += `💵 *Total Amount:* ₹${parseInt(packageInfo.price.replace(/[^0-9]/g, "")) * formData.passengers.length}\n\n`;
    
    message += `👥 *Passenger Details:*\n`;
    formData.passengers.forEach((passenger, index) => {
      message += `${index + 1}. *Name:* ${passenger.name || 'Not provided'}\n`;
      message += `   *Age:* ${passenger.age || 'Not provided'}\n`;
      message += `   *Gender:* ${passenger.gender || 'Not provided'}\n\n`;
    });
    
    message += `📞 *Contact Information:*\n`;
    message += `📧 *Email:* ${formData.contactInfo.email || 'Not provided'}\n`;
    message += `📱 *Phone:* ${formData.contactInfo.phone || 'Not provided'}\n`;
    message += `🏠 *Address:* ${formData.contactInfo.address || 'Not provided'}\n\n`;
    
    message += `Please confirm this booking and provide further details. Thank you! 🙏`;
    
    return encodeURIComponent(message);
  };

  // WhatsApp booking handler
  const handleWhatsAppBooking = () => {
    const phoneNumber = "917668570551";
    const message = generateWhatsAppMessage();
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  // Direct WhatsApp click handler
  const handleWhatsAppClick = () => {
    const phoneNumber = "917668570551";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  // Form validation
  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.passengers.every(p => p.name.trim() !== "");
      case 2:
        return formData.contactInfo.email.trim() !== "" && 
               formData.contactInfo.phone.trim() !== "";
      case 3:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <nav
        className="relative bg-cover bg-center bg-no-repeat text-sm text-gray-600 py-32"
        aria-label="Breadcrumb"
        style={{
          backgroundImage: `url('${packageInfo.image}')`,
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
                <span className="text-yellow-400 text-xl">Booking Form</span>
              </div>
            </li>
          </ol>
          <h1 className="text-3xl tracking-[0.07rem] md:text-3xl max-sm:text-2xl font-bold text-white mt-8">
            Book with Ease, Travel with Joy.
          </h1>
        </div>
      </nav>
      <div className="max-w-6xl mx-auto px-4 bg-gray-50 py-12">
        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Header with Tour Summary */}
          <div className="bg-gradient-to-r from-[#FACF2D] to-[#FFE17D] p-8">
            <div className="flex flex-wrap items-center justify-between">
              <div>
                <h1 className="text-2xl max-sm:text-xl font-bold text-gray-900 mb-2">
                  {packageInfo.title}
                </h1>
                <div className="flex gap-4 text-gray-700">
                  <div className="flex items-center max-sm:text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {packageInfo.duration}
                  </div>
                  <div className="flex items-center max-sm:text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    {packageInfo.startingPoint} to {packageInfo.destination}
                  </div>
                </div>
              </div>
              <div className="text-3xl max-sm:text-2xl max-sm:mt-2 max-sm:ms-3 font-bold text-gray-900">
                {packageInfo.price}
                <span className="text-sm font-normal block">
                  per person
                </span>
              </div>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="px-8 py-6 border-b">
            <div className="flex justify-between items-center">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <motion.div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      currentStep >= step.number
                        ? "bg-[#FACF2D] text-black"
                        : "bg-gray-200 text-gray-500"
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {currentStep > step.number ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      step.number
                    )}
                  </motion.div>
                  <span className="ml-3 font-medium hidden sm:block">
                    {step.title}
                  </span>
                  {index < steps.length - 1 && (
                    <div className="w-16 sm:w-32 h-1 mx-4 bg-gray-200">
                      <motion.div
                        className="h-full bg-[#FACF2D]"
                        initial={{ width: 0 }}
                        animate={{
                          width: currentStep > step.number ? "100%" : "0%",
                        }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8">
            {currentStep === 1 && (
              // Passenger Details Step
              <motion.div {...fadeInUp} className="space-y-6">
                <p className="text-2xl font-semibold mb-6">
                  Passenger Details
                </p>
                {formData.passengers.map((passenger, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-6 rounded-xl relative"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="text-lg font-medium mb-4">
                      Passenger {index + 1}
                    </h3>
                    <div className="grid sm:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm text-start font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#FACF2D]"
                          value={passenger.name}
                          onChange={(e) =>
                            updatePassenger(index, "name", e.target.value)
                          }
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-start font-medium mb-2">
                          Age
                        </label>
                        <input
                          type="number"
                          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#FACF2D]"
                          value={passenger.age}
                          onChange={(e) =>
                            updatePassenger(index, "age", e.target.value)
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-start font-medium mb-2">
                          Gender
                        </label>
                        <select
                          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#FACF2D]"
                          value={passenger.gender}
                          onChange={(e) =>
                            updatePassenger(index, "gender", e.target.value)
                          }
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    {formData.passengers.length > 1 && (
                      <button
                        onClick={() => removePassenger(index)}
                        className="absolute top-4 right-4 text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    )}
                  </motion.div>
                ))}
                <motion.button
                  onClick={addPassenger}
                  className="text-[#FACF2D] font-medium hover:text-black transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  + Add Another Passenger
                </motion.button>
              </motion.div>
            )}

            {currentStep === 2 && (
              // Contact Information Step
              <motion.div {...fadeInUp} className="space-y-6">
                <p className="text-2xl font-semibold mb-6">
                  Contact Information
                </p>
                <div className="bg-gray-50 p-6 rounded-xl space-y-6">
                  <div>
                    <label className="block text-sm text-start font-medium mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 text-gray-400" />
                      <input
                        type="email"
                        className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-[#FACF2D]"
                        value={formData.contactInfo.email}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            contactInfo: {
                              ...prev.contactInfo,
                              email: e.target.value,
                            },
                          }))
                        }
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-start font-medium mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 text-gray-400" />
                      <input
                        type="tel"
                        className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-[#FACF2D]"
                        value={formData.contactInfo.phone}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            contactInfo: {
                              ...prev.contactInfo,
                              phone: e.target.value,
                            },
                          }))
                        }
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-start font-medium mb-2">
                      Address
                    </label>
                    <textarea
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#FACF2D]"
                      rows={4}
                      value={formData.contactInfo.address}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          contactInfo: {
                            ...prev.contactInfo,
                            address: e.target.value,
                          },
                        }))
                      }
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div {...fadeInUp} className="space-y-6">
                <p className="text-2xl font-semibold mb-6">
                  Confirm Your Booking
                </p>
                <div className="bg-gray-50 p-6 rounded-xl space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Booking Summary</h3>
                    <div className="space-y-2">
                      <p className="flex justify-between">
                        <span>Package:</span>
                        <span className="font-medium">
                          {packageInfo.title}
                        </span>
                      </p>
                      <p className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-medium">
                          {packageInfo.duration}
                        </span>
                      </p>
                      <p className="flex justify-between">
                        <span>Number of Passengers:</span>
                        <span className="font-medium">
                          {formData.passengers.length}
                        </span>
                      </p>
                      <p className="flex justify-between">
                        <span>Total Amount:</span>
                        <span className="font-medium">
                          ₹
                          {parseInt(
                            packageInfo.price.replace(/[^0-9]/g, "")
                          ) * formData.passengers.length}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-600">
                      By clicking &quot;Book via WhatsApp&quot;, you will be redirected to WhatsApp 
                      with your booking details pre-filled. Our team will confirm your reservation.
                    </p>
                  </div>
                </div>

                {/* WhatsApp booking section */}
                <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <MessageCircleMore className="w-6 h-6 text-green-600 mr-2" />
                    <h3 className="text-lg font-medium text-green-800">Complete Your Booking on WhatsApp</h3>
                  </div>
                  <p className="text-green-700 mb-4">
                    Click below to send your booking details directly to our WhatsApp. We'll respond quickly to confirm your reservation!
                  </p>
                  <div className="flex gap-3">
                    <motion.button
                      onClick={handleWhatsAppBooking}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <MessageCircleMore className="w-5 h-5 mr-2" />
                      Book via WhatsApp
                    </motion.button>
                    <motion.a
                      href="tel:+917668570551"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-[#FACF2D] text-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors flex items-center justify-center"
                    >
                      <PhoneCall className="w-5 h-5 mr-2" />
                      Call Us
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="px-8 py-6 bg-gray-50 border-t flex justify-between">
            {currentStep > 1 && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 text-gray-600 font-medium hover:text-black transition-colors"
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                Back
              </motion.button>
            )}
            {currentStep < 3 && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`ml-auto px-8 py-3 font-semibold rounded-lg transition-colors flex items-center ${
                  isStepValid() 
                    ? "bg-[#FACF2D] text-black hover:bg-black hover:text-white" 
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                onClick={() => {
                  if (isStepValid()) {
                    setCurrentStep(currentStep + 1);
                  }
                }}
                disabled={!isStepValid()}
              >
                Continue
                <ChevronRight className="ml-2 w-5 h-5" />
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingForm;