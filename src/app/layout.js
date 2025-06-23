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
  description: 'Book reliable taxi and car rental services with Triveni Cabs. Professional drivers, comfortable vehicles, and competitive rates for local and outstation trips.',
  keywords: 'taxi service, car rental, cab booking, outstation taxi, local taxi, reliable transport, Triveni Cabs',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Triveni Cabs - Reliable Taxi & Car Rental Services',
    description: 'Book reliable taxi and car rental services with Triveni Cabs. Professional drivers, comfortable vehicles, and competitive rates.',
    url: 'https://www.trivenicabs.in',
    siteName: 'Triveni Cabs',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Triveni Cabs - Reliable Transportation Services',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Triveni Cabs - Reliable Taxi & Car Rental Services',
    description: 'Book reliable taxi and car rental services with Triveni Cabs. Professional drivers, comfortable vehicles, and competitive rates.',
    images: ['/images/twitter-image.jpg'],
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
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Triveni Cabs",
              "image": "https://www.trivenicabs.in/images/logo.png",
              "description": "Reliable taxi and car rental services with professional drivers and comfortable vehicles.",
              "url": "https://www.trivenicabs.in",
              "telephone": "+91-7668570551",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday", 
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "priceRange": "$$",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 28.6139,
                  "longitude": 77.2090
                },
                "geoRadius": "500000"
              },
              "areaServed": "India",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Taxi and Car Rental Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Local Taxi Service"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Outstation Car Rental"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Airport Transfer"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        <div className="App min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
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