'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { LocateIcon, ChevronRight, X, Shield, Clock, Car, Users } from 'lucide-react';

export default function TouristSpotsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [touristSpots, setTouristSpots] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [cityName, setCityName] = useState("");

  // Fetch tourist spots data on component mount
  useEffect(() => {
    const fetchTouristSpots = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be an API call
        const data = await getTouristSpotsData();
        setTouristSpots(data);
        
        // Get the city from URL or default to first city
        const cityParam = searchParams.get('city');
        const cities = Object.keys(data);
        
        if (cityParam && cities.includes(cityParam)) {
          setCityName(cityParam);
        } else if (cities.length > 0) {
          setCityName(cities[0]);
          // Update URL with default city
          router.push(`/tourist-spots?city=${cities[0]}`, { scroll: false });
        }
      } catch (error) {
        console.error("Error fetching tourist spots:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTouristSpots();
  }, [searchParams, router]);

  // Handle city selection
  const handleCityChange = (city) => {
    setCityName(city);
    router.push(`/tourist-spots?city=${city}`, { scroll: false });
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading tourist spots...</p>
        </div>
      </div>
    );
  }

  // Get spots for selected city
  const citySpots = touristSpots[cityName] || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex mb-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="text-white hover:text-yellow-900">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 mx-1 text-white" />
                  <span className="text-white">Tourist Spots</span>
                </div>
              </li>
            </ol>
          </nav>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore Tourist Spots
          </h1>
          <p className="text-white text-lg max-w-2xl">
            Discover the most breathtaking destinations and plan your perfect adventure.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* City Selection */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Select a Destination</h2>
          <div className="flex flex-wrap gap-4">
            {Object.keys(touristSpots).map(city => (
              <button
                key={city}
                onClick={() => handleCityChange(city)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors 
                  ${city === cityName 
                    ? 'bg-yellow-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Tourist Spots Grid */}
        <div className="w-full mx-auto">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <LocateIcon className="w-6 h-6 text-yellow-500" />
            Popular Tourist Spots in {cityName}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {citySpots.map((spot) => (
              <div
                key={spot.name}
                className="rounded-xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={spot.image}
                    alt={`Image of ${spot.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{spot.name}</h3>
                  <p className="text-gray-600">
                    {spot.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vehicle Services Section */}
        <div className="mt-16 p-8 bg-white rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Our Vehicle Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <VehicleCard 
              title="Tempo Traveller"
              description="Perfect for small to medium groups. Available in 12-26 seater options."
              features={["Air Conditioning", "Push-back Seats", "Music System"]}
              link="/vehicles/tempo-traveller"
            />
            <VehicleCard 
              title="Bus"
              description="Ideal for large groups and corporate outings with all modern amenities."
              features={["Full AC", "Comfortable Seating", "Entertainment System"]}
              link="/vehicles/bus"
            />
            <VehicleCard 
              title="Luxury Bus"
              description="Premium travel experience with plush interiors and extra amenities."
              features={["Premium AC", "Plush Seating", "Entertainment", "Wi-Fi"]}
              link="/vehicles/luxury-bus"
            />
          </div>
        </div>
        
        {/* Tour Packages */}
        <div className="mt-16 p-8 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Popular Tour Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TourPackage 
              title={`${cityName} Local Sightseeing`}
              duration="1 Day"
              price="₹2,500 per person"
              highlights={["All Major Attractions", "Experienced Guide", "Lunch Included"]}
            />
            <TourPackage 
              title={`${cityName} Weekend Getaway`}
              duration="2 Days / 1 Night"
              price="₹5,500 per person"
              highlights={["Hotel Stay", "All Meals", "Transportation", "Guided Tours"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Vehicle Card Component
function VehicleCard({ title, description, features, link }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 mb-3">
        <Car className="w-5 h-5 text-yellow-500" />
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm">
            <Shield className="w-4 h-4 text-green-500" />
            {feature}
          </li>
        ))}
      </ul>
      <Link 
        href={link} 
        className="mt-4 inline-block bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-yellow-500 hover:text-black transition-colors"
      >
        View Details
      </Link>
    </div>
  );
}

// Tour Package Component
function TourPackage({ title, duration, price, highlights }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-4 h-4 text-yellow-500" />
        <span className="text-sm text-gray-600">{duration}</span>
        <Users className="w-4 h-4 text-yellow-500 ml-2" />
        <span className="text-sm text-gray-600">Min. 2 people</span>
      </div>
      <p className="font-bold text-lg mb-3">{price}</p>
      <h4 className="text-sm font-medium mb-2">Highlights:</h4>
      <ul className="space-y-1 mb-4">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <Shield className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
      <button 
        className="w-full bg-yellow-500 text-white px-4 py-2 rounded-md text-sm hover:bg-yellow-600 transition-colors"
        onClick={() => window.open('https://wa.me/917668570551', '_blank')}
      >
        Book Now
      </button>
    </div>
  );
}

// Data fetching function (would normally be an API call)
async function getTouristSpotsData() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    "Jaipur": [
      {
        name: "Amber Fort",
        description: "Historic fort overlooking Maota Lake, known for its artistic Hindu style elements with large ramparts, series of gates and cobbled paths.",
        image: "/images/tourist-spots/amber-fort.jpg"
      },
      {
        name: "Hawa Mahal",
        description: "The Palace of Winds is a five-story palace built in 1799 with a unique honeycomb facade of 953 small windows to allow royal ladies to observe street festivals.",
        image: "/images/tourist-spots/hawa-mahal.jpg"
      },
      {
        name: "City Palace",
        description: "A complex of courtyards, gardens and buildings, the impressive City Palace is right in the center of the Old City, a perfect blend of Rajasthani and Mughal architecture.",
        image: "/images/tourist-spots/city-palace.jpg"
      },
      {
        name: "Jantar Mantar",
        description: "An astronomical observation site built in the early 18th century that features the world's largest stone sundial and is a UNESCO World Heritage site.",
        image: "/images/tourist-spots/jantar-mantar.jpg"
      },
      {
        name: "Jal Mahal",
        description: "The Water Palace sits in the middle of Man Sagar Lake and appears to float on the water when the lake is full. The palace has a scenic view of the hills.",
        image: "/images/tourist-spots/jal-mahal.jpg"
      },
      {
        name: "Nahargarh Fort",
        description: "Standing on the edge of the Aravalli Hills, this fort offers breathtaking panoramic views of the Pink City and was originally built as a defense fortress.",
        image: "/images/tourist-spots/nahargarh-fort.jpg"
      }
    ],
    "Udaipur": [
      {
        name: "Lake Pichola",
        description: "Artificial fresh water lake created in 1362 AD, named after the nearby Picholi village. The lake houses several islands including Jag Niwas and Jag Mandir.",
        image: "/images/tourist-spots/lake-pichola.jpg"
      },
      {
        name: "City Palace",
        description: "Built over a period of nearly 400 years, the City Palace is a majestic architectural marvel towering over Lake Pichola with its balconies, towers and cupolas.",
        image: "/images/tourist-spots/udaipur-city-palace.jpg"
      },
      {
        name: "Sajjangarh Palace",
        description: "Also known as the Monsoon Palace, this hilltop royal residence offers spectacular views of the city's lakes, palaces and surrounding countryside.",
        image: "/images/tourist-spots/sajjangarh.jpg"
      },
      {
        name: "Jagdish Temple",
        description: "Built in 1651, this Indo-Aryan style temple dedicated to Lord Vishnu is a major monument in Udaipur with beautifully carved pillars, walls and ceilings.",
        image: "/images/tourist-spots/jagdish-temple.jpg"
      },
      {
        name: "Fateh Sagar Lake",
        description: "The second artificial lake of Udaipur, surrounded by hills and woods. The lake has three islands and is a popular recreational spot.",
        image: "/images/tourist-spots/fateh-sagar.jpg"
      },
      {
        name: "Saheliyon Ki Bari",
        description: "Garden of the Maidens, built for the royal ladies who came in princess's dowry. Features beautiful fountains, kiosks, marble pavilions and lotus pools.",
        image: "/images/tourist-spots/saheliyon-ki-bari.jpg"
      }
    ],
    "Jodhpur": [
      {
        name: "Mehrangarh Fort",
        description: "One of the largest forts in India, standing 400 feet above the city with impressive views. Houses several palaces, extensive courtyards and historic artifacts.",
        image: "/images/tourist-spots/mehrangarh-fort.jpg"
      },
      {
        name: "Jaswant Thada",
        description: "Royal cenotaph built in marble, commemorating Maharaja Jaswant Singh II. Known for its intricate carvings and peaceful setting with a multi-tiered garden.",
        image: "/images/tourist-spots/jaswant-thada.jpg"
      },
      {
        name: "Umaid Bhawan Palace",
        description: "One of the world's largest private residences, part of which is managed by Taj Hotels. Built between 1928 and 1943, displays a blend of eastern and western architectural influences.",
        image: "/images/tourist-spots/umaid-bhawan.jpg"
      },
      {
        name: "Clock Tower & Sardar Market",
        description: "Vibrant marketplace in the heart of the old city, centered around a prominent clock tower. Offers textiles, silver jewelry, handicrafts and spices.",
        image: "/images/tourist-spots/clock-tower.jpg"
      },
      {
        name: "Mandore Gardens",
        description: "Ancient town that was Marwar's capital before Jodhpur. Features cenotaphs of Jodhpur's rulers, a Hall of Heroes, temple and museum set in beautiful gardens.",
        image: "/images/tourist-spots/mandore-gardens.jpg"
      }
    ]
  };
}