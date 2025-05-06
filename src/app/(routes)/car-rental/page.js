import Image from 'next/image';
import { ChevronRight } from "lucide-react";
import RentalProcess from "./components/rentalProcess";
import WhyChooseUs from "./components/whyChooseUs";
import Others from "./components/others";
import CarRentalSection from "./components/carRentalSection";

export const metadata = {
  title: 'Car Rental Services | Rent Your Dream Car',
  description: 'Choose from our premium fleet of standard and luxury vehicles. Easy booking, flexible rental options, and 24/7 customer support.',
  keywords: 'car rental, luxury cars, standard cars, bus rental, tempo traveller',
};

export default function CarRentalPage() {
  return (
    <div className="min-h-screen">
      <nav
        className="relative bg-cover bg-center bg-no-repeat py-20 md:py-40"
        aria-label="Breadcrumb"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/car-rental-concept-illustration_114360-9267.jpg?t=st=1737048092~exp=1737051692~hmac=8d3ca1128993507d9b56eab5580bce690d44b72a3b065699080f42144ec69b0f&w=740')",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="/" className="text-white hover:text-yellow-600">
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center font-semibold">
                <ChevronRight className="w-4 h-4 mx-2 text-white" />
                <span className="text-yellow-400 text-lg md:text-xl">
                  Rent Cars
                </span>
              </div>
            </li>
          </ol>
          <h1 className="text-2xl md:text-3xl font-bold text-white mt-6 md:mt-8">
            Rent Your Dream Car, Drive in Comfort.{" "}
          </h1>
        </div>
      </nav>

      <div className="bg-gradient-to-b from-white to-[#FFFCD1]">
        <CarRentalSection />
        <RentalProcess />
        <WhyChooseUs />

        {/* Other sections */}
        <Others />
      </div>
    </div>
  );
}