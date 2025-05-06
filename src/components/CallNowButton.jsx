'use client';

import { Phone, ArrowRight } from 'lucide-react';

export default function CallNowButton({ phoneNumber }) {
  const handleClick = () => {
    window.open(`tel:+91${phoneNumber}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center space-x-2 text-yellow-600 hover:text-yellow-700 font-medium"
    >
      <Phone className="w-5 h-5" />
      <span>Call Now</span>
      <ArrowRight className="w-4 h-4" />
    </button>
  );
}