// First file: src/app/(routes)/destinations/page.js
import { destinations, phoneNumber } from '@/utilis/data';
import ClientDestinationTabs from './client-components';

export const metadata = {
  title: 'Discover Amazing Destinations | Travel Explorer',
  description: 'Explore handpicked destinations with exclusive packages and unforgettable experiences',
  keywords: 'travel destinations, vacation packages, tourist spots',
};

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/about/about_banner.jpg"
            alt="Destinations Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </div>
        <div className="relative h-full mx-auto px-4 flex flex-col justify-center">
          <h1 className="text-3xl max-sm:text-[25px] md:text-4xl tracking-[0.06rem] font-bold text-white mb-6 animate-fade-in">
            Discover Amazing Destinations
          </h1>
          <p className="text-xl max-sm:text-[15px] text-center text-gray-200 tracking-[0.06rem] mb-8">
            Explore handpicked destinations with exclusive packages and unforgettable experiences
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-yellow-500 max-sm:text-sm max-sm:px-2.5 max-sm:py-2 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors">
              Explore Now
            </button>
            <button className="px-8 py-3 bg-white/10 max-sm:text-sm max-sm:px-2.5 max-sm:py-2 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm">
              View Packages
            </button>
          </div>
        </div>
      </div>

      {/* Client-side Navigation Tabs and Content */}
      <ClientDestinationTabs />
    </div>
  );
}