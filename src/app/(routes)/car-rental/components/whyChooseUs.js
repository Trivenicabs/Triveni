import { Car, CheckCircle, Clock } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Rental Service</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-white rounded-xl shadow-lg">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Car className="w-8 h-8 text-black" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Premium Fleet</h3>
          <p className="text-gray-600">Well-maintained vehicles from leading brands, regularly serviced and sanitized for your comfort and safety.</p>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-lg">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="w-8 h-8 text-black" />
          </div>
          <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
          <p className="text-gray-600">Round-the-clock customer support to assist you with any queries or concerns during your rental period.</p>
        </div>
        <div className="text-center p-6 bg-white rounded-xl shadow-lg">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-black" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Flexible Rentals</h3>
          <p className="text-gray-600">Choose from daily, weekly, or monthly rental options with transparent pricing and no hidden charges.</p>
        </div>
      </div>
    </div>
  );
}