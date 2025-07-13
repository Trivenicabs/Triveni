// This is the Server Component
import { tourDetails } from "@/utilis/data";
import BookingForm from "@/components/BookingForm";

// Generate static params for all tour packages
export async function generateStaticParams() {
  return Object.keys(tourDetails).map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for the booking page
export async function generateMetadata({ params }) {
  const { slug } = params;
  const packageInfo = tourDetails[slug];
  
  if (!packageInfo) {
    return {
      title: "Booking Not Found",
      description: "The requested booking page could not be found",
    };
  }

  return {
    title: `Book ${packageInfo.title} | Tour Package`,
    description: `Book your ${packageInfo.title} tour from ${packageInfo.startingPoint} to ${packageInfo.destination}`,
  };
}

// Client-side tracking functions
const trackingScript = `
  // Function to track WhatsApp booking clicks
  window.trackTourBookingClick = function(tourSlug, packageTitle, bookingType = 'whatsapp') {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'tour_booking_click', {
        'event_category': 'tour_booking',
        'event_label': tourSlug,
        'tour_package': packageTitle,
        'booking_type': bookingType,
        'page_type': 'booking_form',
        'value': 1
      });
    }
  };

  // Function to track form submissions
  window.trackTourFormSubmission = function(tourSlug, packageTitle) {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'tour_form_submit', {
        'event_category': 'tour_booking',
        'event_label': tourSlug,
        'tour_package': packageTitle,
        'page_type': 'booking_form',
        'value': 1
      });
    }
  };

  // Function to track page views
  window.trackTourBookingPageView = function(tourSlug, packageTitle) {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'tour_booking_page_view', {
        'event_category': 'tour_engagement',
        'event_label': tourSlug,
        'tour_package': packageTitle,
        'page_type': 'booking_form',
        'value': 1
      });
    }
  };
`;

// Server component for the booking page
export default function BookingPage({ params }) {
  const { slug } = params;
  const packageInfo = tourDetails[slug];
  
  if (!packageInfo) {
    return <div className="text-center py-16">Package not found</div>;
  }
  
  return (
    <>
      {/* Analytics tracking script */}
      <script
        dangerouslySetInnerHTML={{
          __html: trackingScript
        }}
      />
      
      {/* Page view tracking */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              if (window.trackTourBookingPageView) {
                window.trackTourBookingPageView('${slug}', '${packageInfo.title}');
              }
            });
          `
        }}
      />
      
      <BookingForm slug={slug} packageInfo={packageInfo} />
    </>
  );
}