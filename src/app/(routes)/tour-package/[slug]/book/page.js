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

// Server component for the booking page
export default function BookingPage({ params }) {
  const { slug } = params;
  const packageInfo = tourDetails[slug];
  
  if (!packageInfo) {
    return <div className="text-center py-16">Package not found</div>;
  }
  
  return <BookingForm slug={slug} packageInfo={packageInfo} />;
}