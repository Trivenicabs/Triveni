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

      {/*  tempo traveller rentals */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl max-sm:text-2xl font-bold text-center mb-4">
          Tempo traveller rentals
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Experience luxury and comfort with our premium fleet of high-end
          vehicles
        </p>
        <CarSliderStandard
          cars={tempoTravellers}
          currentIndex={tempoIndex}
          setCurrentIndex={setTempoIndex}
          title="Luxury Cars"
        />
      </section>

      {/*  simple bus rentals */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl max-sm:text-2xl font-bold text-center mb-4">
          Luxury Bus rentals
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Experience luxury and comfort with our premium fleet of high-end
          vehicles
        </p>
        <CarSlider
          cars={luxuryBuses}
          currentIndex={luxuryBusIndex}
          setCurrentIndex={setLuxuryBusIndex}
          title="Luxury Bus"
        />
      </section>

      {/*  tempo traveller rentals */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl max-sm:text-2xl font-bold text-center mb-4">
          Simple Bus rentals
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Experience luxury and comfort with our premium fleet of high-end
          vehicles
        </p>
        <CarSliderStandard
          cars={simpleBuses}
          currentIndex={busIndex}
          setCurrentIndex={setBusIndex}
          title="Bus"
        />
      </section>
    </div>
  );
}

export default CarRentalSection;