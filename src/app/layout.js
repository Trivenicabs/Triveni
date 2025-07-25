import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import "@/styles/globals.css";
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: {
    default: 'Triveni Cabs - Reliable Taxi & Car Rental Services',
    template: '%s | Triveni Cabs'
  },
  description: 'Book car rental, taxi, tour packages with Triveni Cabs. Sedan ₹11/km, SUV ₹15/km, Tempo Traveller ₹24/km. Delhi, Mumbai, Agra, Manali tours. Professional drivers, AC vehicles, 24/7 support.',
  keywords: 'taxi service, car rental, cab booking, outstation taxi, local taxi, reliable transport, Triveni Cabs, car rental, taxi service, tour packages, cab booking, cheap car rental, best taxi service 2025, Delhi car rental, Mumbai taxi, Agra tour, Jaipur taxi, Manali tour package, Kashmir tour, Rajasthan tour, Chardham Yatra, sedan rental, SUV hire, tempo traveller booking, luxury bus rental, outstation taxi, local taxi, airport transfer, wedding car rental, corporate travel, AC vehicle booking, professional drivers, 24x7 support, online booking, instant booking, same day booking, vehicle rental India, travel services, tour guide, sightseeing tours, adventure tours, pilgrimage tours, honeymoon packages, family tours, group booking, verified drivers, GPS tracking, safe travel, reliable transport, competitive rates, transparent pricing, Triveni Cabs',
  authors: [{ name: 'Triveni Cabs - Car Rental & Tours' }],
  creator: 'Triveni Cabs Travel Services',
  publisher: 'Triveni Cabs India',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': '/',
      'hi-IN': '/',
    }
  },
  openGraph: {
    title: '🚗 Best Car Rental & Tour Packages 2025 | Triveni Cabs | Starting ₹11/km',
    description: '✅ Book sedan, SUV, tempo traveller, luxury bus online. Delhi, Mumbai, Agra, Manali tours. Professional drivers, AC vehicles, competitive rates. Call 7668570551',
    url: 'https://www.trivenicabs.in',
    siteName: 'Triveni Cabs - Car Rental & Tour Services',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Triveni Cabs - Best Car Rental & Tour Packages India 2025',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Car Rental & Tour Packages India | Triveni Cabs',
    description: 'Book sedan ₹11/km, SUV ₹15/km, tempo traveller online. Delhi, Mumbai, Manali tours. Professional service, competitive rates.',
    images: ['/images/twitter-image.jpg'],
    creator: '@trivenicabs',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#FACF2D' },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'theme-color': '#FACF2D',
    'msapplication-TileColor': '#FACF2D',
    'apple-mobile-web-app-title': 'Triveni Cabs',
    'application-name': 'Triveni Cabs',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}

        {/* Google Ads (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17336319883"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17336319883');
            `,
          }}
        />
        
        {/* Enhanced Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Triveni Cabs",
              "alternateName": "Triveni Car Rental Services",
              "image": [
                "https://www.trivenicabs.in/images/logo.png",
                "https://www.trivenicabs.in/images/car/sedan.jpeg",
                "https://www.trivenicabs.in/images/car/suv.jpeg"
              ],
              "description": "Best car rental, taxi service and tour packages in India. Sedan ₹11/km, SUV ₹15/km, Tempo Traveller ₹24/km. Professional drivers, AC vehicles, 24/7 support.",
              "url": "https://www.trivenicabs.in",
              "telephone": "+91-7668570551",
              "email": "info@trivenicabs.in",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressRegion": "India"
              },
              
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "priceRange": "₹₹",
              "currenciesAccepted": "INR",
              "paymentAccepted": "Cash, UPI, Credit Card, Debit Card",
              "serviceArea": [
                {
                  "@type": "State",
                  "name": "Delhi"
                },
                {
                  "@type": "State", 
                  "name": "Maharashtra"
                },
                {
                  "@type": "State",
                  "name": "Uttar Pradesh"
                },
                {
                  "@type": "State",
                  "name": "Rajasthan"
                },
                {
                  "@type": "State",
                  "name": "Himachal Pradesh"
                }
              ],
              "areaServed": "India",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Car Rental and Tour Packages",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Sedan Car Rental",
                      "description": "4 passenger sedan rental starting ₹11/km"
                    },
                    "price": "11",
                    "priceCurrency": "INR",
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "price": "11",
                      "priceCurrency": "INR",
                      "unitText": "per kilometer"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "SUV Car Rental",
                      "description": "6-7 passenger SUV rental starting ₹15/km"
                    },
                    "price": "15",
                    "priceCurrency": "INR",
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "price": "15", 
                      "priceCurrency": "INR",
                      "unitText": "per kilometer"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Tempo Traveller Rental", 
                      "description": "12-26 passenger tempo traveller starting ₹24/km"
                    },
                    "price": "24",
                    "priceCurrency": "INR",
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "price": "24",
                      "priceCurrency": "INR", 
                      "unitText": "per kilometer"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Manali Tour Package",
                      "description": "5 Days 4 Nights Manali tour from Mumbai"
                    },
                    "price": "9999",
                    "priceCurrency": "INR"
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Kashmir Tour Package",
                      "description": "5 Days 4 Nights Kashmir tour from Delhi"
                    },
                    "price": "16999",
                    "priceCurrency": "INR"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Rajasthan Tour Package", 
                      "description": "7 Days 6 Nights Rajasthan tour from Jaipur"
                    },
                    "price": "19999",
                    "priceCurrency": "INR"
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "500",
                "bestRating": "5",
                "worstRating": "1"
              },
              
            })
          }}
        />

        {/* Breadcrumb Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.trivenicabs.in"
                },
                {
                  "@type": "ListItem", 
                  "position": 2,
                  "name": "Services",
                  "item": "https://www.trivenicabs.in/services"
                },
                {
                  "@type": "ListItem",
                  "position": 3, 
                  "name": "Vehicles",
                  "item": "https://www.trivenicabs.in/vehicles"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Contact",
                  "item": "https://www.trivenicabs.in/contact"
                }
              ]
            })
          }}
        />

        {/* FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What are the car rental rates?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sedan rental starts at ₹11/km, SUV at ₹15/km, and Tempo Traveller at ₹24/km. All vehicles include professional drivers and are AC equipped."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which cities do you serve?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "We serve Delhi, Mumbai, Agra, Jaipur, Chandigarh, Shimla, Manali, Amritsar, and many other cities across India for both local and outstation trips."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How to book a cab online?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can book online through our website or call us at 7668570551 for instant booking. We provide 24/7 customer support and same-day booking."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What tour packages do you offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer tour packages to Manali (₹9,999), Kashmir (₹16,999), Rajasthan (₹19,999), Chardham Yatra (₹24,999), and other popular destinations with accommodation and sightseeing included."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        <div className="App min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow" role="main">
            {children}
          </main>
          <WhatsAppFloat phoneNumber="7668570551" />
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}