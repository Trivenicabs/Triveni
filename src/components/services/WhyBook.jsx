import React from "react";
import { 
  ShieldCheck, 
  Clock, 
  DollarSign, 
  Award, 
  MapPin, 
  PhoneCall 
} from "lucide-react";

const WhyBook = () => {
  const reasons = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-yellow-400" />,
      title: "Safety Assured",
      description:
        "All our vehicles are regularly maintained and undergo strict safety checks. Our professional drivers are trained for safe driving.",
    },
    {
      icon: <Clock className="w-10 h-10 text-yellow-400" />,
      title: "24/7 Availability",
      description:
        "Our services are available round the clock. Book a ride anytime, anywhere - we're always ready to serve you.",
    },
    {
      icon: <DollarSign className="w-10 h-10 text-yellow-400" />,
      title: "Transparent Pricing",
      description:
        "No hidden charges or surprise fees. What you see is what you pay, with clear pricing displayed upfront.",
    },
    {
      icon: <Award className="w-10 h-10 text-yellow-400" />,
      title: "Experienced Drivers",
      description:
        "Our drivers are experienced professionals who know the roads well and provide courteous service throughout your journey.",
    },
    {
      icon: <MapPin className="w-10 h-10 text-yellow-400" />,
      title: "Extensive Coverage",
      description:
        "We operate in all major cities and tourist destinations across India, ensuring you have transportation wherever you go.",
    },
    {
      icon: <PhoneCall className="w-10 h-10 text-yellow-400" />,
      title: "Dedicated Support",
      description:
        "Our customer support team is always ready to assist you with any queries or concerns during your booking or journey.",
    },
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Book With Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We're committed to providing exceptional transportation services that prioritize your comfort, safety, and satisfaction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="flex items-center mb-4">
              {reason.icon}
              <h3 className="text-xl font-semibold ml-4">{reason.title}</h3>
            </div>
            <p className="text-gray-600">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyBook;