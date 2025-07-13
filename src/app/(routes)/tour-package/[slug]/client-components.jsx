'use client';

import React, { useEffect } from "react";
import Link from "next/link";

// Client-side component for the Book Now button
export const BookNowButton = ({ slug, packageTitle }) => {
  const handleBookNowClick = () => {
    // Track the Book Now button click
    if (typeof gtag !== 'undefined') {
      gtag('event', 'tour_book_now_click', {
        'event_category': 'tour_engagement',
        'event_label': slug,
        'tour_package': packageTitle,
        'button_location': 'package_details_sidebar',
        'page_type': 'tour_package_details',
        'value': 1
      });
    }
  };

  return (
    <Link href={`/tour-package/${slug}/book`}>
      <button
        onClick={handleBookNowClick}
        className="w-full mt-8 bg-[#FACF2D] text-black py-2 rounded-xl font-semibold text-lg
        hover:bg-black hover:text-white transition-colors shadow-lg"
      >
        Book Now
      </button>
    </Link>
  );
};

// Client component for tracking
export const TrackingProvider = ({ children, slug, packageTitle }) => {
  useEffect(() => {
    // Track page view
    if (typeof gtag !== 'undefined') {
      gtag('event', 'tour_package_view', {
        'event_category': 'tour_engagement',
        'event_label': slug,
        'tour_package': packageTitle,
        'page_type': 'tour_package_details',
        'value': 1
      });
    }
  }, [slug, packageTitle]);

  return <>{children}</>;
};

// Client component for itinerary tracking
export const ItineraryWrapper = ({ children, slug }) => {
  useEffect(() => {
    // Track itinerary view
    if (typeof gtag !== 'undefined') {
      gtag('event', 'itinerary_view', {
        'event_category': 'tour_engagement',
        'event_label': slug,
        'page_type': 'tour_package_details',
        'value': 1
      });
    }
  }, [slug]);

  return <>{children}</>;
};

// Client component for accommodation tracking
export const AccommodationWrapper = ({ children, slug, accommodationName }) => {
  useEffect(() => {
    // Track accommodation view
    if (typeof gtag !== 'undefined') {
      gtag('event', 'accommodation_view', {
        'event_category': 'tour_engagement',
        'event_label': slug,
        'accommodation_name': accommodationName,
        'page_type': 'tour_package_details',
        'value': 1
      });
    }
  }, [slug, accommodationName]);

  return <>{children}</>;
};