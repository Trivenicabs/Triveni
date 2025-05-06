'use client';

import React, { useState } from "react";
import { Car, MapPin, Calendar, Clock, Plane, X } from "lucide-react";
import BookingTrip from "./BookingTrip";
import SuccessModal from "./SuccessModal";
import { vehiclesServices } from "../../utilis/data";

const CITIES = [
  "Delhi", "Agra", "Jaipur", "Haridwar", "Chandigarh", "Shimla",
  "Manali", "Amritsar", "Dehradun", "Rishikesh", "Jodhpur", 
  "Udaipur", "Ayodhya", "Ahmedabad"
];

export default function Trip() {
  const [tab, setTab] = useState("local");
  const [serviceType, setServiceType] = useState("oneWay");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [selectedCab, setSelectedCab] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  
  const [formData, setFormData] = useState({
    pickupPoint: "",
    pickupDate: "",
    pickupTime: "",
    destinationCity: "",
    terminalNumber: "",
    returnDate: "",
    hours: "2",
  });


  const tabs = [
    { id: "outstation", label: "Outstation", icon: Car },
    { id: "local", label: "Local", icon: Car },
    { id: "airport", label: "Airport", icon: Plane },
  ];

  const serviceTypes = {
    outstation: [
      { id: "oneWay", label: "One Way" },
      { id: "roundTrip", label: "Round Trip" },
      { id: "luxuryCar", label: "Luxury Car Rental" },
      { id: "tempoTraveller", label: "Tempo Traveller" },
      { id: "busesAC", label: "Buses AC Coach" },
    ],
    local: [
      { id: "oneWay", label: "One Way" },
      { id: "roundTrip", label: "Round Trip" },
      { id: "hourly", label: "Hourly Rental" },
      { id: "tourGuide", label: "Tour Guide" },
    ],
    airport: [
      { id: "oneWay", label: "Pick/Drop" },
      { id: "roundTrip", label: "Round Trip" },
      { id: "luxuryCar", label: "Luxury Transfer" },
    ],
  };

  // Filter vehicles based on service type
  const getFilteredVehicles = () => {
    switch (serviceType) {
      case "luxuryCar":
        return vehiclesServices.filter((vehicle) =>
          ["Sedan", "SUV"].includes(vehicle.type)
        );
      case "tempoTraveller":
        return vehiclesServices.filter(
          (vehicle) => vehicle.type === "Tempo Traveller"
        );
      case "busesAC":
        return vehiclesServices.filter((vehicle) =>
          ["Luxury Bus", "Bus"].includes(vehicle.type)
        );
      default:
        return vehiclesServices.filter((vehicle) =>
          ["Sedan", "SUV", "Tempo Traveller", "Luxury Bus", "Bus"].includes(vehicle.type)
        );
    }
  };

  const handleBookNow = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleConfirmBooking = () => {
    if (selectedCab) {
      setShowConfirmation(false);
      setBookingSuccess(true);
    }
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setSearchTerm(""); // Reset the search term after selection
  };
  
  const handleCityRemove = () => {
    setSelectedCity(null);
  };

  const filteredCities = CITIES.filter((city) =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const resetForm = () => {
    setFormData({
      pickupPoint: "",
      pickupDate: "",
      pickupTime: "",
      destinationCity: "",
      terminalNumber: "",
      returnDate: "",
      hours: "2",
    });
    setSelectedCab("");
  };

  // Function to render form fields based on tab and service type
  const renderFormFields = () => {
    const baseFields = (
      <>
        <div className="flex-1">
          <label className="block text-start text-[16px] tracking-[0.06rem] uppercase font-semibold text-gray-800 mb-2">
            YOUR LOCATION CITY
          </label>
      
          {selectedCity ? (
            <div className="inline-flex items-center bg-purple-600 text-white text-sm font-medium px-3 py-1.5 rounded-full">
              {selectedCity}
              <X
                className="w-4 h-4 ml-2 cursor-pointer text-white"
                onClick={handleCityRemove}
              />
            </div>
          ) : (
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search City"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-[250px] py-3 border-b-2 border-black bg-transparent focus:outline-none"
              />
              
              {searchTerm && filteredCities?.length > 0 && (
                <div className="absolute bg-white border w-[250px] mt-1 shadow-md max-h-48 overflow-y-auto z-10 rounded-md">
                  {filteredCities.map((city) => (
                    <div
                      key={city}
                      onClick={() => handleCitySelect(city)}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      {city}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex-1">
          <label className="block text-start text-[16px] tracking-[0.06rem] uppercase font-semibold text-gray-800 mb-2">
            Pickup Date
          </label>
          <div className="relative">
            <input
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleInputChange}
              className="w-full py-3 border-b-2 text-sm tracking-[0.06rem] border-black bg-transparent focus:outline-none pl-8"
            />
            <Calendar className="absolute left-0 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          </div>
        </div>

        <div className="flex-1">
          <label className="block text-start text-[16px] tracking-[0.06rem] uppercase font-semibold text-gray-800 mb-2">
            Pickup Time
          </label>
          <div className="relative">
            <input
              type="time"
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleInputChange}
              className="w-full py-3 border-b-2 text-sm tracking-[0.06rem] border-black bg-transparent focus:outline-none pl-8"
            />
            <Clock className="absolute left-0 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          </div>
        </div>
      </>
    );

    // Additional fields based on combinations
    const additionalFields = {
      // Outstation specific fields
      outstation: {
        oneWay: (
          <div className="flex-1">
            <label className="block text-start text-[16px] tracking-[0.06rem] uppercase font-semibold text-gray-800 mb-2">
              Destination City
            </label>
            <div className="relative">
              <input
                type="text"
                name="destinationCity"
                value={formData.destinationCity}
                onChange={handleInputChange}
                className="w-full py-3 border-b-2 text-sm tracking-[0.06rem] border-black bg-transparent focus:outline-none pl-8"
                placeholder="Enter destination city"
              />
              <MapPin className="absolute left-0 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>
          </div>
        ),
        roundTrip: (
          <>
            <div className="flex-1">
              <label className="block text-start text-[16px] tracking-[0.06rem] uppercase font-semibold text-gray-800 mb-2">
                Destination City
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="destinationCity"
                  value={formData.destinationCity}
                  onChange={handleInputChange}
                  className="w-full py-3 border-b-2 text-sm tracking-[0.06rem] border-black bg-transparent focus:outline-none pl-8"
                  placeholder="Enter destination city"
                />
                <MapPin className="absolute left-0 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-start text-[16px] tracking-[0.06rem] uppercase font-semibold text-gray-800 mb-2">
                Return Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleInputChange}
                  className="w-full py-3 border-b-2 text-sm tracking-[0.06rem] border-black bg-transparent focus:outline-none pl-8"
                />
                <Calendar className="absolute left-0 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              </div>
            </div>
          </>
        ),
        luxuryCar: (
          <div className="flex-1">
            <label className="block text-start text-[16px] tracking-[0.06rem] uppercase font-semibold text-gray-800 mb-2">
              Destination City
            </label>
            <div className="relative">
              <input
                type="text"
                name="destinationCity"
                value={formData.destinationCity}
                onChange={handleInputChange}
                className="w-full py-3 border-b-2 text-sm tracking-[0.06rem] border-black bg-transparent focus:outline-none pl-8"
                placeholder="Enter destination city"
              />
              <MapPin className="absolute left-0 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>
          </div>
        ),
        tempoTraveller: (
          <div className="flex-1">
            <label className="block text-start text-[16px] tracking-[0.06rem] uppercase font-semibold text-gray-800 mb-2">
              Destination City
            </label>
            <div className="relative">
              <input
                type="text"
                name="destinationCity"
                value={formData.destinationCity}
                onChange={handleInputChange}
                className="w-full py-3 border-b-2 text-sm tracking-[0.06rem] border-black bg-transparent focus:outline-none pl-8"
                placeholder="Enter destination city"
              />
              <MapPin className="absolute left-0 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>
          </div>
        ),
        busesAC: (
          <div className="flex-1">
            <label className="block text-start text-[16px] tracking-[0.06rem] uppercase font-semibold text-gray-800 mb-2">
              Destination City
            </label>
            <div className="relative">
              <input
                type="text"
                name="destinationCity"
                value={formData.destinationCity}
                onChange={handleInputChange}
                className="w-full py-3 border-b-2 text-sm tracking-[0.06rem] border-black bg-transparent focus:outline-none pl-8"
                placeholder="Enter destination city"
              />
              <MapPin className="absolute left-0 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>
          </div>
        ),
      },
      // Local specific fields
      local: {
        hourly: (
          <div className="flex-1">
            <label className="block text-start text-[16px] tracking-[0.06rem] uppercase font-semibold text-gray-800 mb-2">
              Number of Hours
            </label>
            <div className="relative">
              <select
                name="hours"
                value={formData.hours}
                onChange={handleInputChange}
                className="w-full py-3 border-b-2 text-sm tracking-[0.06rem] border-black bg-transparent focus:outline-none pl-8"
              >
                {[2, 4, 6, 8, 10, 12].map((hours) => (
                  <option key={hours} value={hours}>
                    {hours} Hours
                  </option>
                ))}
              </select>
              <Clock className="absolute left-0 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>
          </div>
        ),
        oneWay: (
          <div className="flex-1">
            <label className="block text-start text-[16px] tracking-[0.06rem] uppercase font-semibold text-gray-800 mb-2">
              Destination City
            </label>
            <div className="relative">
              <input
                type="text"
                name="destinationCity"
                value={formData.destinationCity}
                onChange={handleInputChange}
                className="w-full py-3 border-b-2 text-sm tracking-[0.06rem] border-black bg-transparent focus:outline-none pl-8"
                placeholder="Enter destination city"
              />
              <MapPin className="absolute left-0 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>
          </div>
        ),
        roundTrip: (
          <div className="flex-1">
            <label className="block text-start text-[16px] tracking-[0.06rem] uppercase font-semibold text-gray-800 mb-2">
              Destination City
            </label>
            <div className="relative">
              <input
                type="text"
                name="destinationCity"
                value={formData.destinationCity}
                onChange={handleInputChange}
                className="w-full py-3 border-b-2 text-sm tracking-[0.06rem] border-black bg-transparent focus:outline-none pl-8"
                placeholder="Enter destination city"
              />
              <MapPin className="absolute left-0 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>
          </div>
        ),
        tourGuide: (
          <div className="flex-1">
            <label className="block text-start text-[16px] tracking-[0.06rem] uppercase font-semibold text-gray-800 mb-2">
              Destination City
            </label>
            <div className="relative">
              <input
                type="text"
                name="destinationCity"
                value={formData.destinationCity}
                onChange={handleInputChange}
                className="w-full py-3 border-b-2 text-sm tracking-[0.06rem] border-black bg-transparent focus:outline-none pl-8"
                placeholder="Enter destination city"
              />
              <MapPin className="absolute left-0 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>
          </div>
        ),
      },
      // Airport specific fields
      airport: {
        oneWay: (
          <>
            <div className="flex-1">
              <label className="block text-start text-[16px] tracking-[0.06rem] uppercase font-semibold text-gray-800 mb-2">
                Terminal Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="terminalNumber"
                  value={formData.terminalNumber}
                  onChange={handleInputChange}
                  className="w-full py-3 border-b-2 text-sm tracking-[0.06rem] border-black bg-transparent focus:outline-none pl-8"
                  placeholder="Enter terminal number"
                />
                <Plane className="absolute left-0 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              </div>
            </div>
            <div className="flex-1">
              <label className="block text-start text-[16px] tracking-[0.06rem] uppercase font-semibold text-gray-800 mb-2">
                Destination City
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="destinationCity"
                  value={formData.destinationCity}
                  onChange={handleInputChange}
                  className="w-full py-3 border-b-2 text-sm tracking-[0.06rem] border-black bg-transparent focus:outline-none pl-8"
                  placeholder="Enter destination city"
                />
                <MapPin className="absolute left-0 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              </div>
            </div>
          </>
        ),
        luxuryCar: (
          <div className="flex-1">
            <label className="block text-start text-[16px] tracking-[0.06rem] uppercase font-semibold text-gray-800 mb-2">
              Destination City
            </label>
            <div className="relative">
              <input
                type="text"
                name="destinationCity"
                value={formData.destinationCity}
                onChange={handleInputChange}
                className="w-full py-3 border-b-2 text-sm tracking-[0.06rem] border-black bg-transparent focus:outline-none pl-8"
                placeholder="Enter destination city"
              />
              <MapPin className="absolute left-0 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>
          </div>
        ),
      },
    };

    return (
      <div className="flex flex-col lg:flex-row lg:items-end gap-6">
        {baseFields}
        {additionalFields[tab]?.[serviceType]}
        {(tab === "outstation" || tab === "airport") &&
          serviceType === "roundTrip"}
      </div>
    );
  };

  return (
    <div className="">
      {/* Trip Type Selection */}
      <div className="md:mx-[9rem]">
        <h2 className="text-3xl text-center tracking-[0.06rem] font-semibold pt-14 pb-12">
          Book Your Ride
        </h2>

        <div className="grid grid-cols-3 border border-gray-100 sm:grid-cols-3 mt-4">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => {
                setTab(id);
                setServiceType(serviceTypes[id][0].id);
              }}
              className={`flex border-r border-gray-100 items-center font-semibold text-lg tracking-[0.05rem] justify-center px-3 py-2 ${
                tab === id ? "bg-[#F9D02D]" : "bg-white"
              }`}
            >
              <Icon className="w-4 h-4 mr-2" />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Booking Form Fields */}
      <div className="w-full mx-auto p-6 bg-[#FFFCD1]">
        {/* Trip Type Option Selection */}
        <div className="mb-8 flex justify-center items-center w-fit mx-auto px-3">
          <h3 className="text-sm font-semibold tracking-[0.07rem] ">
            Trip Type:
          </h3>
          <div>
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-fit py-1.5 mx-3 px-2 rounded-lg text-sm tracking-[0.06rem] border-black bg-black text-white focus:outline-none"
            >
              {serviceTypes[tab].map(({ id, label }) => (
                <option key={id} value={id}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <form onSubmit={handleBookNow}>
          {renderFormFields()}
          <div className="flex items-center justify-center mt-8">
            <button
              type="submit"
              className="bg-black text-white rounded-md uppercase px-9 py-2 text-sm tracking-[0.06rem] hover:text-yellow-400 transition"
            >
              Book Now!
            </button>
          </div>
        </form>

        <BookingTrip
          isOpen={showConfirmation}
          onClose={() => setShowConfirmation(false)}
          bookingDetails={{
            tab,
            serviceType,
            serviceTypes,
            formData,
            selectedCity,
          }}
          cabTypes={getFilteredVehicles()} // Pass the filtered vehicles here
          selectedCab={selectedCab}
          setSelectedCab={setSelectedCab}
          onConfirm={handleConfirmBooking}
        />

        <SuccessModal
          isOpen={bookingSuccess}
          onClose={() => setBookingSuccess(false)}
          onReset={resetForm}
        />
      </div>
    </div>
  );
}