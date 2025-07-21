// This is the Server Component
import { tourDetails } from "@/utilis/data";
import BookingForm from "@/components/BookingForm";

// SEO Keywords mapping for booking pages
const bookingSeoKeywords = {
  "manali-tour-from-mumbai": {
    primary: ["book Manali tour", "Manali booking", "Mumbai to Manali booking"],
    secondary: ["online Manali tour booking", "Himachal Pradesh tour booking", "book Rohtang Pass tour"],
    longTail: ["book Manali tour package online", "Mumbai to Manali tour booking form", "instant Manali tour confirmation"],
    booking: ["secure booking", "instant confirmation", "best price booking", "online tour reservation"]
  },
  "chardham-yatra-package": {
    primary: ["book Chardham Yatra", "Char Dham booking", "spiritual tour booking"],
    secondary: ["online Chardham booking", "pilgrimage tour booking", "Kedarnath Badrinath booking"],
    longTail: ["book complete Chardham Yatra online", "Delhi to Chardham booking form", "sacred tour booking India"],
    booking: ["pilgrimage booking", "spiritual journey booking", "temple tour reservation", "devotional tour booking"]
  },
  "shimla-from-mumbai": {
    primary: ["book Shimla tour", "Shimla booking", "Mumbai to Shimla booking"],
    secondary: ["hill station booking", "Queen of Hills booking", "colonial tour booking"],
    longTail: ["book Shimla package from Mumbai", "6 days Shimla tour booking", "heritage hill station booking"],
    booking: ["mountain tour booking", "hill station reservation", "scenic tour booking", "colonial architecture tour"]
  },
  "rajasthan-tour": {
    primary: ["book Rajasthan tour", "royal Rajasthan booking", "heritage tour booking"],
    secondary: ["palace tour booking", "desert tour booking", "cultural Rajasthan booking"],
    longTail: ["book royal Rajasthan package", "heritage palace tour booking", "complete Rajasthan tour booking"],
    booking: ["royal tour booking", "palace reservation", "heritage site booking", "cultural tour booking"]
  },
  "kashmir-tour": {
    primary: ["book Kashmir tour", "Kashmir valley booking", "Srinagar tour booking"],
    secondary: ["Dal Lake tour booking", "paradise booking", "houseboat booking Kashmir"],
    longTail: ["book Kashmir paradise tour", "valley of Kashmir booking online", "complete Kashmir tour booking"],
    booking: ["valley tour booking", "scenic Kashmir booking", "mountain tour reservation", "lake tour booking"]
  },
  "punjab-tour": {
    primary: ["book Punjab tour", "Golden Temple booking", "Punjab cultural booking"],
    secondary: ["Amritsar tour booking", "Sikh heritage booking", "Punjab culture booking"],
    longTail: ["book Golden Temple tour package", "Punjab cultural tour booking", "Amritsar heritage booking"],
    booking: ["cultural tour booking", "temple tour booking", "heritage Punjab booking", "spiritual Punjab tour"]
  }
};

// Generate static params for all tour packages
export async function generateStaticParams() {
  return Object.keys(tourDetails).map((slug) => ({
    slug: slug,
  }));
}

// Enhanced metadata generation for booking pages
export async function generateMetadata({ params }) {
  const { slug } = params;
  const packageInfo = tourDetails[slug];
  const keywords = bookingSeoKeywords[slug];
  
  if (!packageInfo) {
    return {
      title: "Booking Not Found | Triveni Cabs",
      description: "The requested booking page could not be found",
    };
  }

  // Create comprehensive meta description for booking page
  const metaDescription = `Book ${packageInfo.title} online with instant confirmation. Best rates at ${packageInfo.price} for ${packageInfo.duration}. Secure booking, 24/7 support, easy cancellation. Book your ${packageInfo.destination} tour from ${packageInfo.startingPoint} now!`;

  // Combine all keywords for meta keywords
  const allKeywords = keywords ? [
    ...keywords.primary,
    ...keywords.secondary,
    ...keywords.longTail,
    ...keywords.booking,
    "online tour booking",
    "instant confirmation",
    "secure payment",
    "tour reservation",
    "travel booking India",
    "Triveni Cabs booking",
    "holiday booking",
    "vacation packages",
    "tour package booking form"
  ].join(", ") : "";

  return {
    title: `Book ${packageInfo.title} Online | ${packageInfo.price} | Instant Confirmation | Triveni Cabs`,
    description: metaDescription,
    keywords: allKeywords,
    openGraph: {
      title: `Book ${packageInfo.title} - Instant Confirmation at ${packageInfo.price}`,
      description: metaDescription,
      images: [
        {
          url: packageInfo.image,
          width: 1200,
          height: 630,
          alt: `Book ${packageInfo.title} - ${packageInfo.destination} tour booking form`
        }
      ],
      type: 'website',
      locale: 'en_IN',
      siteName: 'Triveni Cabs'
    },
    twitter: {
      card: 'summary_large_image',
      title: `Book ${packageInfo.title} | ${packageInfo.price} | Instant Booking`,
      description: metaDescription,
      images: [packageInfo.image],
    },
    alternates: {
      canonical: `https://trivenicabs.com/tour-packages/${slug}/book`
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
    other: {
      'booking-page': 'true',
      'tour-package': packageInfo.title,
      'destination': packageInfo.destination,
      'price': packageInfo.price,
      'duration': packageInfo.duration
    }
  };
}

// Client-side tracking functions with enhanced events
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
      
      // Facebook Pixel tracking
      if (typeof fbq !== 'undefined') {
        fbq('track', 'InitiateCheckout', {
          content_name: packageTitle,
          content_category: 'Tour Package',
          content_ids: [tourSlug],
          value: 1,
          currency: 'INR'
        });
      }
    }
  };

  // Function to track form submissions
  window.trackTourFormSubmission = function(tourSlug, packageTitle, formData = {}) {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'tour_form_submit', {
        'event_category': 'tour_booking',
        'event_label': tourSlug,
        'tour_package': packageTitle,
        'page_type': 'booking_form',
        'form_type': 'booking_inquiry',
        'value': 1
      });
      
      // Enhanced conversion tracking
      gtag('event', 'generate_lead', {
        'event_category': 'tour_conversion',
        'event_label': tourSlug,
        'tour_package': packageTitle,
        'value': 1,
        'currency': 'INR'
      });
      
      // Facebook Pixel conversion
      if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead', {
          content_name: packageTitle,
          content_category: 'Tour Package',
          content_ids: [tourSlug],
          value: 1,
          currency: 'INR'
        });
      }
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
      
      // Enhanced page view tracking
      gtag('event', 'page_view', {
        'page_title': 'Book ' + packageTitle,
        'page_location': window.location.href,
        'content_group1': 'Booking Pages',
        'content_group2': 'Tour Packages'
      });
    }
  };

  // Function to track form field interactions
  window.trackFormFieldInteraction = function(tourSlug, fieldName) {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'form_field_interaction', {
        'event_category': 'form_engagement',
        'event_label': fieldName,
        'tour_package': tourSlug,
        'page_type': 'booking_form'
      });
    }
  };

  // Function to track booking abandonment
  window.trackBookingAbandonment = function(tourSlug, packageTitle) {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'booking_abandonment', {
        'event_category': 'tour_booking',
        'event_label': tourSlug,
        'tour_package': packageTitle,
        'page_type': 'booking_form'
      });
    }
  };

  // Track when user leaves the page (potential abandonment)
  window.addEventListener('beforeunload', function(e) {
    const urlParams = new URLSearchParams(window.location.search);
    const tourSlug = window.location.pathname.split('/')[2];
    if (tourSlug && !sessionStorage.getItem('booking_completed')) {
      if (window.trackBookingAbandonment) {
        window.trackBookingAbandonment(tourSlug, document.title);
      }
    }
  });
`;

// Server component for the booking page
export default function BookingPage({ params }) {
  const { slug } = params;
  const packageInfo = tourDetails[slug];
  const keywords = bookingSeoKeywords[slug];
  
  if (!packageInfo) {
    return <div className="text-center py-16">Package not found</div>;
  }

  // Generate JSON-LD structured data for booking page
  const bookingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Book ${packageInfo.title}`,
    "description": `Online booking form for ${packageInfo.title} tour package`,
    "url": `https://trivenicabs.com/tour-packages/${slug}/book`,
    "mainEntity": {
      "@type": "TourPackage",
      "name": packageInfo.title,
      "description": packageInfo.overview,
      "provider": {
        "@type": "TravelAgency",
        "name": "Triveni Cabs",
        "url": "https://trivenicabs.com",
        "telephone": "7668570551",
        "email": "info@trivenicabs.com"
      },
      "offers": {
        "@type": "Offer",
        "price": packageInfo.price.replace('₹', '').replace(',', ''),
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "validFrom": new Date().toISOString(),
        "url": `https://trivenicabs.com/tour-packages/${slug}/book`
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://trivenicabs.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Tour Packages",
          "item": "https://trivenicabs.com/tour-packages"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": packageInfo.title,
          "item": `https://trivenicabs.com/tour-packages/${slug}`
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Book Now",
          "item": `https://trivenicabs.com/tour-packages/${slug}/book`
        }
      ]
    },
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `https://trivenicabs.com/tour-packages/${slug}/book`,
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": `${packageInfo.title} Booking`
      }
    }
  };

  // FAQ structured data for booking page
  const bookingFAQData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How do I book ${packageInfo.title}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `You can book ${packageInfo.title} by filling out our online booking form or calling us at 7668570551. We provide instant confirmation and secure payment options.`
        }
      },
      {
        "@type": "Question", 
        "name": "What payment methods do you accept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept all major payment methods including credit cards, debit cards, UPI, net banking, and digital wallets for secure online booking."
        }
      },
      {
        "@type": "Question",
        "name": "Is my booking confirmed immediately?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you will receive instant booking confirmation via email and SMS with all tour details and contact information."
        }
      },
      {
        "@type": "Question",
        "name": `What is included in ${packageInfo.title}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${packageInfo.title} includes ${packageInfo.inclusions?.slice(0,3).join(', ')} and many more services. Check the complete inclusions list on our package page.`
        }
      }
    ]
  };
  
  return (
    <>
      {/* JSON-LD Structured Data for Booking Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bookingStructuredData)
        }}
      />
      
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bookingFAQData)
        }}
      />

      {/* Enhanced Analytics tracking script */}
      <script
        dangerouslySetInnerHTML={{
          __html: trackingScript
        }}
      />
      
      {/* Page view tracking with enhanced data */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              if (window.trackTourBookingPageView) {
                window.trackTourBookingPageView('${slug}', '${packageInfo.title}');
              }
              
              // Set booking page session
              sessionStorage.setItem('booking_page_visited', 'true');
              sessionStorage.setItem('booking_tour_slug', '${slug}');
              
              // Track time spent on booking page
              window.bookingPageStartTime = Date.now();
              
              // Enhanced ecommerce tracking
              if (typeof gtag !== 'undefined') {
                gtag('event', 'begin_checkout', {
                  'currency': 'INR',
                  'value': ${packageInfo.price.replace('₹', '').replace(',', '')},
                  'items': [{
                    'item_id': '${slug}',
                    'item_name': '${packageInfo.title}',
                    'item_category': 'Tour Package',
                    'item_category2': '${packageInfo.destination}',
                    'item_category3': '${packageInfo.category || 'Adventure'}',
                    'price': ${packageInfo.price.replace('₹', '').replace(',', '')},
                    'quantity': 1
                  }]
                });
              }
            });
            
            // Track time on page when leaving
            window.addEventListener('beforeunload', function() {
              if (window.bookingPageStartTime) {
                const timeSpent = Math.round((Date.now() - window.bookingPageStartTime) / 1000);
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'booking_page_time_spent', {
                    'event_category': 'engagement',
                    'event_label': '${slug}',
                    'value': timeSpent,
                    'custom_parameter': 'seconds'
                  });
                }
              }
            });
          `
        }}
      />

      {/* SEO-enhanced heading for booking page */}
      <div style={{ display: 'none' }}>
        <h1>Book {packageInfo.title} Online - Instant Confirmation</h1>
        <h2>Secure Booking Form for {packageInfo.destination} Tour Package</h2>
        <p>
          {keywords?.longTail?.[0] || `Book your ${packageInfo.title} with instant confirmation`}. 
          Best rates guaranteed at {packageInfo.price} for {packageInfo.duration}. 
          Secure payment, 24/7 support, easy cancellation policy.
        </p>
      </div>
      
      <BookingForm slug={slug} packageInfo={packageInfo} />
    </>
  );
}