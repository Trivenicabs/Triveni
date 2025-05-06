'use client';

import { useState } from "react";
import CarSlider from "./carSlider";
import CarSliderStandard from "./carSliderStandard";
import {
  luxuryBuses,
  luxuryCars,
  simpleBuses,
  standardCars,
  tempoTravellers,
} from "@/utilis/data";

export default function CarRentalSection() {
  const [luxuryIndex, setLuxuryIndex] = useState(0);
  const [standardIndex, setStandardIndex] = useState(0);
  const [tempoIndex, setTempoIndex] = useState(0);
  const [luxuryBusIndex, setLuxuryBusIndex] = useState(0);
  const [busIndex, setBusIndex] = useState(0);

  return (
    <div>
      {/* standard car rentals */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl max-sm:text-2xl font-bold text-center mb-4">
          Standard Car Rentals
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Choose from our fleet of reliable and comfortable standard vehicles
        </p>
        <CarSliderStandard
          cars={standardCars}
          currentIndex={standardIndex}
          setCurrentIndex={setStandardIndex}
          title="Standard Cars"
        />
      </section>

      {/* luxury car rentals */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl max-sm:text-2xl font-bold text-center mb-4">
          Luxury Car Rentals
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Experience luxury and comfort with our premium fleet of high-end
          vehicles
        </p>
        <CarSlider
          cars={luxuryCars}
          currentIndex={luxuryIndex}
          setCurrentIndex={setLuxuryIndex}
          title="Luxury Cars"
        />
      </section>

      {/* tempo traveller rentals */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl max-sm:text-2xl font-bold text-center mb-4">
          Tempo Traveller Rentals
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Perfect for group travel with spacious and comfortable vehicles
        </p>
        <CarSliderStandard
          cars={tempoTravellers}
          currentIndex={tempoIndex}
          setCurrentIndex={setTempoIndex}
          title="Tempo Travellers"
        />
      </section>

      {/* luxury bus rentals */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl max-sm:text-2xl font-bold text-center mb-4">
          Luxury Bus Rentals
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Premium buses for corporate events, tours, and large group transport
        </p>
        <CarSlider
          cars={luxuryBuses}
          currentIndex={luxuryBusIndex}
          setCurrentIndex={setLuxuryBusIndex}
          title="Luxury Buses"
        />
      </section>

      {/* simple bus rentals */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl max-sm:text-2xl font-bold text-center mb-4">
          Standard Bus Rentals
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Reliable and affordable buses for all your group transportation needs
        </p>
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