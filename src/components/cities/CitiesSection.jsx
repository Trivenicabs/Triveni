"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Car,
  Search,
  ChevronRight,
  ChevronLeft
} from "lucide-react";
import { cities } from "../../utilis/data";
import Link from "next/link";

const CitiesSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const regions = [...new Set(cities.map((city) => city.region))];

  const filteredCities = cities.filter((city) => {
    const matchesSearch = city.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesRegion =
      selectedRegion === "All" || city.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  const totalPages = Math.ceil(filteredCities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedCities = filteredCities.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50" aria-labelledby="cities-heading">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section*/}
        <header className="text-center mb-12">
          <span className="text-yellow-500 font-semibold mb-2 block" role="text" aria-label="Service coverage indicator">
            Our Taxi Service Coverage
          </span>
          <h3 id="cities-heading" className="text-2xl md:text-3xl font-bold mb-4">
            Cab Booking Available in Major Indian Cities
          </h3>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Experience reliable 24/7 taxi services in {cities.length}+
            cities across India with professional drivers and well-maintained vehicles
          </p>
        </header>

        {/* Search and Filter */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 justify-center items-center bg-white p-6 rounded-2xl shadow-lg" role="search" aria-label="City search and filter">
          <div className="relative w-full md:w-96">
            <label htmlFor="city-search" className="sr-only">Search for a city where we provide taxi service</label>
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
            <input
              id="city-search"
              type="text"
              placeholder="Search for a city..."
              className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-describedby="search-help"
            />
            <div id="search-help" className="sr-only">
              Search for cities where we provide taxi services
            </div>
          </div>
          <div className="relative w-full md:w-48">
            <label htmlFor="region-filter" className="sr-only">Filter by region</label>
            <select
              id="region-filter"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-50"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              aria-describedby="filter-help"
            >
              <option value="All">All Regions</option>
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
            <div id="filter-help" className="sr-only">
              Filter cities by geographical region
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6 flex justify-between items-center" role="status" aria-live="polite">
          <p className="text-gray-600" aria-label={`Showing ${startIndex + 1} to ${Math.min(startIndex + itemsPerPage, filteredCities.length)} of ${filteredCities.length} cities`}>
            Showing {startIndex + 1}-
            {Math.min(startIndex + itemsPerPage, filteredCities.length)} of{" "}
            {filteredCities.length} cities with taxi service
          </p>
          <p className="text-gray-600" aria-label={`Page ${currentPage} of ${totalPages || 1}`}>
            Page {currentPage} of {totalPages || 1}
          </p>
        </div>

        {/* City Grid */}
        <main role="main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label="Available cities for taxi service">
            {displayedCities.map((city, index) => (
              <article key={city.name} role="listitem" className="group">
                <Link
                  href={`/${city.name.toLowerCase()}`}
                  className="block h-full"
                  aria-label={`Book taxi service in ${city.name}, ${city.coverage}`}
                >
                  <div className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-yellow-400 overflow-hidden h-full">
                    {/* Card Header */}
                    <header className="px-6 py-4 border-b">
                      <h4 className="text-lg md:text-xl font-bold mb-1">{city.name} Taxi Service</h4>
                      <p className="text-gray-600 text-sm">{city.coverage}</p>
                    </header>
                    
                    {/* Card Content */}
                    <div className="px-6 py-3 flex justify-between items-center">
                      <div className="flex items-center">
                        <Car className="w-5 h-5 text-yellow-500 mr-2" aria-hidden="true" />
                        <span className="text-gray-600 text-sm" aria-label="24/7 service available">24/7 Available</span>
                      </div>
                      <div className="flex items-center text-black group-hover:text-yellow-600 transition-colors font-medium">
                        <span className="mr-1">Book Cab</span>
                        <ChevronRight className="w-4 h-4" aria-hidden="true" />
                      </div>
                    </div>
                    
                    {/* Popular Badge */}
                    {city.popularity === "high" && (
                      <div className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full" role="badge" aria-label="Popular destination">
                        Popular
                      </div>
                    )}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </main>

        {/* Pagination */}
        <nav className="mt-12 flex justify-center items-center gap-2" role="navigation" aria-label="Cities pagination">
          <button
            onClick={(e) => handlePageChange(e, currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg hover:bg-yellow-400 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
            aria-label="Go to previous page"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          </button>

          {Array.from({ length: totalPages || 1 }, (_, i) => i + 1).map((page) => {
            const isActive = page === currentPage;
            const isNearCurrent =
              Math.abs(page - currentPage) <= 1 ||
              page === 1 ||
              page === totalPages;

            if (!isNearCurrent && page !== 1 && page !== totalPages) {
              if (page === 2 || page === totalPages - 1)
                return <span key={page} aria-hidden="true">...</span>;
              return null;
            }

            return (
              <button
                key={page}
                onClick={(e) => handlePageChange(e, page)}
                className={`w-10 h-10 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-yellow-400 text-black font-bold"
                    : "hover:bg-gray-100"
                }`}
                aria-label={`Go to page ${page}`}
                aria-current={isActive ? "page" : undefined}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={(e) => handlePageChange(e, currentPage + 1)}
            disabled={currentPage === totalPages || totalPages === 0}
            className="p-2 rounded-lg hover:bg-yellow-400 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
            aria-label="Go to next page"
          >
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </nav>

        {/* Call to Action */}
        <aside className="mt-16 text-center">
          <Link 
            href="/check-availability" 
            className="inline-flex items-center bg-black text-white px-8 py-3 rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 gap-2"
            aria-label="Check taxi availability in your city"
          >
            Check Taxi Availability
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </aside>
      </div>
    </section>
  );
};

export default CitiesSection;