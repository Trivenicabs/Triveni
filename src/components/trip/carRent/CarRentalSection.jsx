"use client";

import React, { useState } from "react";
import CarSlider from "./CarSlider";
import CarSliderStandard from "./CarSliderStandard";
import {
  luxuryBuses,
  luxuryCars,
  simpleBuses,
  standardCars,
  tempoTravellers,
} from "../../../utilis/data";

function CarRentalSection() {
  const [luxuryIndex, setLuxuryIndex] = useState(0);
  const [standardIndex, setStandardIndex] = useState(0);
  const [tempoIndex, setTempoIndex] = useState(0);
  const [luxuryBusIndex, setLuxuryBusIndex] = useState(0);
  const [busIndex, setBusIndex] = useState(0);

  return (
    <div>
      {/* Standard Car Rentals*/}
      <section className="py-16 max-w-7xl mx-auto px-4" aria-labelledby="standard-cars-heading">
        <header className="text-center mb-12">
          <h3 id="standard-cars-heading" className="text-3xl max-sm:text-2xl font-bold mb-4">
            Standard Car Rentals - Affordable Taxi Service
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our fleet of reliable and comfortable standard vehicles for your daily transportation needs
          </p>
        </header>
        <CarSliderStandard
          cars={standardCars}
          currentIndex={standardIndex}
          setCurrentIndex={setStandardIndex}
          title="Standard Cars"
        />
      </section>

      {/* Luxury Car Rentals */}
      <section className="py-16 max-w-7xl mx-auto px-4" aria-labelledby="luxury-cars-heading">
        <header className="text-center mb-12">
          <h3 id="luxury-cars-heading" className="text-3xl max-sm:text-2xl font-bold mb-4">
            Luxury Car Rentals - Premium Taxi Experience
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience luxury and comfort with our premium fleet of high-end vehicles and professional chauffeur service
          </p>
        </header>
        <CarSlider
          cars={luxuryCars}
          currentIndex={luxuryIndex}
          setCurrentIndex={setLuxuryIndex}
          title="Luxury Cars"
        />
      </section>

      {/* Tempo Traveller Rentals */}
      <section className="py-16 max-w-7xl mx-auto px-4" aria-labelledby="tempo-traveller-heading">
        <header className="text-center mb-12">
          <h3 id="tempo-traveller-heading" className="text-3xl max-sm:text-2xl font-bold mb-4">
            Tempo Traveller Rentals 
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Perfect for group travel and family trips with spacious, comfortable tempo travellers and experienced drivers
          </p>
        </header>
        <CarSliderStandard
          cars={tempoTravellers}
          currentIndex={tempoIndex}
          setCurrentIndex={setTempoIndex}
          title="Tempo Travellers"
        />
      </section>

      {/* Luxury Bus Rentals - Changed H2 to H3 */}
      <section className="py-16 max-w-7xl mx-auto px-4" aria-labelledby="luxury-bus-heading">
        <header className="text-center mb-12">
          <h3 id="luxury-bus-heading" className="text-3xl max-sm:text-2xl font-bold mb-4">
            Luxury Bus Rentals 
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience luxury group travel with our premium fleet of high-end buses equipped with modern amenities
          </p>
        </header>
        <CarSlider
          cars={luxuryBuses}
          currentIndex={luxuryBusIndex}
          setCurrentIndex={setLuxuryBusIndex}
          title="Luxury Buses"
        />
      </section>

      {/* Simple Bus Rentals - Changed H2 to H3 */}
      <section className="py-16 max-w-7xl mx-auto px-4" aria-labelledby="simple-bus-heading">
        <header className="text-center mb-12">
          <h3 id="simple-bus-heading" className="text-3xl max-sm:text-2xl font-bold mb-4">
            Standard Bus Rentals 
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Affordable and reliable bus rental service for large groups, events, and corporate transportation needs
          </p>
        </header>
        <CarSliderStandard
          cars={simpleBuses}
          currentIndex={busIndex}
          setCurrentIndex={setBusIndex}
          title="Standard Buses"
        />
      </section>
    </div>
  );
}

export default CarRentalSection;