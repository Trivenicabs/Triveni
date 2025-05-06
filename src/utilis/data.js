import {
    Car,
    Clock,
    CreditCard,
    MapPin,
    Package,
    Phone,
    Users,
  } from "lucide-react";
  
  export const tourDetails = {
    "manali-tour-from-mumbai": {
      title: "Manali Tour from Mumbai",
      price: "₹9,999",
      duration: "5 Days 4 Nights",
      image: "/images/packages/manali.jpg",
      startingPoint: "Mumbai",
      destination: "Manali",
      departureDate: "Weekly",
      category: "Adventure",
      overview:
        "Experience the charm of Manali with our adventure-packed package. Enjoy breathtaking views, thrilling activities, and serene landscapes.",
      inclusions: [
        "Travel by AC bus from Mumbai",
        "3-star accommodation for 4 nights",
        "Breakfast and dinner",
        "Sightseeing with a local guide",
        "All taxes included",
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Mumbai to Manali",
          details: "Overnight bus journey to Manali.",
        },
        {
          day: "Day 2",
          title: "Explore Manali",
          details: "Visit Hadimba Temple, Mall Road, and more.",
        },
        {
          day: "Day 3",
          title: "Solang Valley",
          details: "Adventure sports and scenic spots.",
        },
        {
          day: "Day 4",
          title: "Rohtang Pass",
          details: "Snow activities and local experiences.",
        },
        {
          day: "Day 5",
          title: "Return to Mumbai",
          details: "Depart for Mumbai in the evening.",
        },
      ],
      highlights: [
        "Snow-covered Rohtang Pass",
        "Solang Valley adventures",
        "Local cultural experiences",
      ],
      accommodation: {
        name: "Manali Heights Hotel",
        rating: "3 Star",
        amenities: ["WiFi", "Restaurant", "Room service"],
      },
    },
    "chardham-yatra-package": {
      title: "Chardham Yatra Package",
      price: "₹24,999",
      duration: "12 Days 11 Nights",
      image: "/images/packages/chardham.jpg",
      startingPoint: "Delhi",
      destination: "Chardham",
      departureDate: "Monthly",
      category: "Pilgrimage",
      overview:
        "Embark on a spiritual journey to the four sacred shrines of Uttarakhand with our Chardham Yatra package.",
      inclusions: [
        "Travel by AC bus",
        "Accommodation in deluxe hotels",
        "All meals included",
        "Temple visits and special darshan",
        "Experienced tour guide",
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Delhi to Haridwar",
          details: "Drive to Haridwar, evening Ganga Aarti.",
        },
        {
          day: "Day 2-4",
          title: "Yamunotri and Gangotri",
          details: "Visit sacred temples and explore the region.",
        },
        {
          day: "Day 5-6",
          title: "Kedarnath",
          details: "Trek and visit Kedarnath temple.",
        },
        {
          day: "Day 7-8",
          title: "Badrinath",
          details: "Temple visit and sightseeing.",
        },
        {
          day: "Day 9-12",
          title: "Return to Delhi",
          details: "Leisurely return journey.",
        },
      ],
      highlights: [
        "Sacred temples",
        "Cultural experiences",
        "Scenic mountain views",
      ],
      accommodation: {
        name: "Pilgrim Lodge",
        rating: "4 Star",
        amenities: ["Restaurant", "WiFi", "Local assistance"],
      },
    },
    "shimla-from-mumbai": {
      title: "Shimla from Mumbai",
      price: "₹14,999",
      duration: "6 Days 5 Nights",
      image: "/images/packages/manali.jpg",
      startingPoint: "Mumbai",
      destination: "Shimla",
      departureDate: "Weekly",
      category: "Adventure",
      overview:
        "Escape to the scenic hills of Shimla, experiencing colonial charm and natural beauty.",
      inclusions: [
        "Travel by AC bus",
        "3-star accommodation",
        "Breakfast and dinner",
        "Local sightseeing tours",
        "Professional guide",
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Mumbai to Shimla",
          details: "Travel to Shimla, evening at leisure.",
        },
        {
          day: "Day 2",
          title: "Shimla Sightseeing",
          details: "Visit Mall Road, Christ Church, and The Ridge.",
        },
        {
          day: "Day 3",
          title: "Kufri Excursion",
          details: "Day trip to Kufri, enjoy scenic views and activities.",
        },
        {
          day: "Day 4",
          title: "Naldehra",
          details: "Visit Naldehra, enjoy golf course and surroundings.",
        },
        {
          day: "Day 5",
          title: "Local Experiences",
          details: "Optional activities, local market exploration.",
        },
        {
          day: "Day 6",
          title: "Return to Mumbai",
          details: "Departure for Mumbai.",
        },
      ],
      highlights: [
        "Colonial architecture",
        "Scenic mountain views",
        "Mall Road shopping",
      ],
      accommodation: {
        name: "Shimla Heritage Resort",
        rating: "3 Star",
        amenities: ["WiFi", "Restaurant", "Mountain view"],
      },
    },
    "rajasthan-tour": {
      title: "Rajasthan Tour",
      price: "₹19,999",
      duration: "7 Days 6 Nights",
      image: "/images/packages/rajasthan.jpg",
      startingPoint: "Jaipur",
      destination: "Rajasthan",
      departureDate: "Weekly",
      category: "Cultural",
      overview:
        "Explore the royal heritage and vibrant culture of Rajasthan with our comprehensive tour package.",
      inclusions: [
        "Travel by AC bus",
        "4-star accommodation",
        "Breakfast and dinner",
        "Local sightseeing tours",
        "Professional guide",
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Jaipur Arrival",
          details: "Welcome to Jaipur, check-in and leisure.",
        },
        {
          day: "Day 2",
          title: "Jaipur Sightseeing",
          details: "Visit Amber Fort, Hawa Mahal, and City Palace.",
        },
        {
          day: "Day 3",
          title: "Pushkar",
          details: "Explore the Brahma Temple and Pushkar Lake.",
        },
        {
          day: "Day 4",
          title: "Jodhpur",
          details: "Visit Mehrangarh Fort and Umaid Bhawan Palace.",
        },
        {
          day: "Day 5",
          title: "Udaipur",
          details: "Discover Lake Pichola, City Palace, and more.",
        },
        {
          day: "Day 6",
          title: "Mount Abu",
          details: "Visit Dilwara Temples and enjoy scenic views.",
        },
        {
          day: "Day 7",
          title: "Return to Jaipur",
          details: "Leisure time and departure.",
        },
      ],
      highlights: [
        "Amber Fort in Jaipur",
        "Lake Pichola in Udaipur",
        "Dilwara Temples in Mount Abu",
      ],
      accommodation: {
        name: "Royal Heritage Hotel",
        rating: "4 Star",
        amenities: ["WiFi", "Restaurant", "Swimming pool"],
      },
    },
    "kashmir-tour": {
      title: "Kashmir Tour",
      price: "₹16,999",
      duration: "5 Days 4 Nights",
      image: "/images/packages/kashmir.jpg",
      startingPoint: "Delhi",
      destination: "Kashmir",
      departureDate: "Monthly",
      category: "Nature",
      overview:
        "Experience the stunning beauty of Kashmir's landscapes and vibrant culture with this exclusive package.",
      inclusions: [
        "Flights: Delhi - Srinagar - Delhi",
        "Deluxe hotel accommodation",
        "Breakfast and dinner",
        "Shikara ride in Dal Lake",
        "Local sightseeing tours",
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Delhi to Srinagar",
          details: "Flight to Srinagar and hotel check-in.",
        },
        {
          day: "Day 2",
          title: "Gulmarg Day Trip",
          details: "Explore scenic Gulmarg, cable car ride optional.",
        },
        {
          day: "Day 3",
          title: "Pahalgam Excursion",
          details: "Enjoy the serene valleys and Lidder River.",
        },
        {
          day: "Day 4",
          title: "Srinagar Sightseeing",
          details: "Visit Mughal Gardens, Dal Lake, and local markets.",
        },
      ],
      accommodation: {
        name: "Deluxe Hotel",
        rating: 4.5,
        amenities: [
          "Free Wi-Fi",
          "Room service",
          "Heated rooms",
          "Complimentary toiletries",
          "Scenic views",
        ],
      },
    },
    "punjab-tour": {
      title: "Punjab Tour",
      price: "₹10,999",
      duration: "3 Days 2 Nights",
      image:
        "https://t3.ftcdn.net/jpg/03/11/74/00/360_F_311740081_PL7ftGHnZL7JMBQpigswigY2xFwSRHJg.jpg",
      startingPoint: "Delhi",
      destination: "Punjab",
      departureDate: "Monthly",
      category: "Cultural",
      overview:
        "Explore the vibrant culture, rich history, and warm hospitality of Punjab with our comprehensive tour package.",
      inclusions: [
        "Travel by AC bus",
        "3-star accommodation",
        "Breakfast and dinner",
        "Local sightseeing tours",
        "Professional guide",
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Delhi to Amritsar",
          details: "Travel to Amritsar, evening visit to Golden Temple.",
        },
        {
          day: "Day 2",
          title: "Amritsar Sightseeing",
          details: "Visit Jallianwala Bagh, Wagah Border ceremony.",
        },
        {
          day: "Day 3",
          title: "Return to Delhi",
          details: "Explore local markets, return journey.",
        },
      ],
      highlights: [
        "Golden Temple",
        "Wagah Border ceremony",
        "Punjabi cuisine and culture",
      ],
      accommodation: {
        name: "Punjab Heritage Hotel",
        rating: "3 Star",
        amenities: ["WiFi", "Restaurant", "Local assistance"],
      },
    },
  };
  
  export const tourPackages = [
    {
      title: "Manali Tour from Mumbai",
      price: "₹9,999",
      duration: "5 Days 4 Nights",
      image: "/images/packages/manali.jpg",
      startingPoint: "Mumbai",
      destination: "Manali",
      departureDate: "Weekly",
      category: "Adventure",
    },
    {
      title: "Chardham Yatra Package",
      price: "₹24,999",
      duration: "12 Days 11 Nights",
      image: "/images/packages/chardham.jpg",
      startingPoint: "Delhi",
      destination: "Chardham",
      departureDate: "Monthly",
      category: "Pilgrimage",
    },
    {
      title: "Shimla from Mumbai",
      price: "₹14,999",
      duration: "6 Days 5 Nights",
      image: "/images/packages/manali.jpg",
      startingPoint: "Mumbai",
      destination: "Shimla",
      departureDate: "Weekly",
      category: "Adventure",
    },
    {
      title: "Rajasthan Tour",
      price: "₹19,999",
      duration: "7 Days 6 Nights",
      image: "/images/packages/rajasthan.jpg",
      startingPoint: "Jaipur",
      destination: "Rajasthan",
      departureDate: "Weekly",
      category: "Cultural",
    },
    {
      title: "Kashmir Tour",
      price: "₹16,999",
      duration: "5 Days 4 Nights",
      image: "/images/packages/kashmir.jpg",
      startingPoint: "Delhi",
      destination: "Kashmir",
      departureDate: "Monthly",
      category: "Nature",
    },
    {
      title: "Punjab Tour",
      price: "₹10,999",
      duration: "3 Days 2 Nights",
      image:
        "https://media.istockphoto.com/id/478673422/photo/golden-temple-amritsar.jpg?s=612x612&w=0&k=20&c=LvdukkiiqHZmQxOTjf9UPGHcWldxaFLIZc8k2FEFxfM=",
      startingPoint: "Delhi",
      destination: "Punjab",
      departureDate: "Monthly",
      category: "Cultural",
    },
  ];
  
  export const features = [
    {
      icon: Car,
      title: "Quality Fleet",
      description: "Modern, well-maintained vehicles for your comfort and safety",
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Round-the-clock availability for all your travel needs",
    },
    {
      icon: MapPin,
      title: "Wide Coverage",
      description: "Serving major cities and tourist destinations nationwide",
    },
    {
      icon: Phone,
      title: "Easy Booking",
      description: "Quick and hassle-free reservation process",
    },
  ];
  
  export const services = [
    {
      icon: <Car className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Vehicles",
      description: "Wide range of comfortable and reliable vehicles",
      items: ["Luxury Bus", "SUV", "Sedan", "Tempo Traveller", "Bus"],
    },
    {
      icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Tour Guide",
      description: "Expert guides for an enriching experience",
      items: [
        "Local Experts",
        "Multilingual Guides",
        "Cultural Insights",
        "Custom Tours",
      ],
    },
    {
      icon: <Package className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Tour Packages",
      description: "Curated experiences for every traveler",
      items: [
        "City Tours",
        "Adventure Trips",
        "Cultural Tours",
        "Weekend Getaways",
      ],
    },
  ];
  
  export const vehiclesServices = [
    {
      type: "Sedan",
      image: "/images/car/car1.png",
      seating: "4 passengers",
      rating: "4.9",
      reviews: "128",
      perKm: "₹11/km",
      driverCharges: "₹500 (Per Day)",
      perDayLimit: "250km",
      cancellationCharge: "₹500",
      facilities: ["AC", "Music System", "Charging Point", "First Aid Kit"],
      bestFor: ["Small families", "Business trips", "Airport transfers"],
    },
    {
      type: "SUV",
      image: "/images/car/car2.png",
      seating: "6-7 passengers",
      perKm: "₹15/km",
      rating: "4.8",
      reviews: "120",
      driverCharges: "₹500 (Per Day)",
      perDayLimit: "250km",
      cancellationCharge: "₹500",
      facilities: [
        "AC",
        "Music System",
        "Charging Point",
        "Extra Legroom",
        "Luggage Space",
      ],
      bestFor: ["Large families", "Group tours", "Long distance"],
    },
    {
      type: "Tempo Traveller",
      image: "/images/car/tempo_traveller.jpeg",
      seating: "12-26 passengers",
      perKm: "₹24/km",
      rating: "4.7",
      reviews: "110",
      driverCharges: "₹500 (Per Day)",
      cancellationCharge: "₹500",
      perDayLimit: "250km",
      facilities: [
        "AC",
        "Push-back Seats",
        "LCD TV",
        "Audio System",
        "Charging Points",
      ],
      bestFor: ["Tourist groups", "Corporate events", "Wedding parties"],
    },
    {
      type: "Luxury Bus",
      image: "/images/car/luxury_bus.jpeg",
      seating: "30-55 passengers",
      perKm: "₹30/km",
      rating: "4.7",
      reviews: "102",
      driverCharges: "₹500 (Per Day)",
      cancellationCharge: "₹500",
      perDayLimit: "250km",
      facilities: [
        "AC",
        "Push-back Seats",
        "LCD TV",
        "Audio System",
        "Washroom",
        "Refrigerator",
      ],
      bestFor: ["Large groups", "Extended tours", "Luxury travel"],
    },
    {
      type: "Bus",
      image:
        "https://res.cloudinary.com/dnreeobav/image/fetch/c_scale,q_30,w_350,f_auto/l_text:Arial_20_bold:TrucksBuses.com,x_70,y_100,co_rgb:ffffff/https://www.trucksbuses.com/uploads/Ashok%20Leyland%20Lynx%20Smart%2028%20Seater%20Staff%20Bus.jpg",
      seating: "28-35 passengers",
      perKm: "₹35/km",
      rating: "4.8",
      reviews: "95",
      driverCharges: "₹500 (Per Day)",
      cancellationCharge: "₹500",
      perDayLimit: "250km",
      facilities: [
        "AC",
        "Push-back Seats",
        "LCD TV",
        "Audio System",
        "Charging Points",
      ],
      bestFor: ["Mid-sized groups", "Short tours", "Corporate outings"],
    },
  ];
  
  export const vehicleDetails = [
    {
      id: "1",
      type: "Sedan",
      image: "/images/car/sedan.jpeg",
      gallery: [
        "/images/car/sedan.jpeg",
        "/images/car/sedan-interior.jpeg",
        "/images/car/sedan-side.jpeg",
        "/images/car/sedan-back.jpeg",
      ],
      rating: "4.9",
      reviews: "128",
      seating: "4 passengers",
      perKm: "₹11/km",
      driverCharges: "₹500 (Per Day)",
      cancellationCharge: "₹500",
      perDayLimit: "250km",
      facilities: ["AC", "Music System", "Charging Point", "First Aid Kit"],
      description:
        "Compact and comfortable, ideal for small families, business trips, and airport transfers.",
      features: [
        "24/7 Roadside Assistance",
        "Comprehensive Insurance",
        "Professional Chauffeur",
        "Regular Sanitization",
        "Flexible Booking",
      ],
      localSightseeing: [
        {
          duration: "8 hours",
          distance: "80 km",
          price: "₹1600",
          inclusive: ["Fuel", "Driver allowance", "Vehicle charges"],
        },
        {
          duration: "12 hours",
          distance: "120 km",
          price: "₹2600",
          inclusive: ["Fuel", "Driver allowance", "Vehicle charges"],
        },
      ],
    },
    {
      id: "2",
      type: "SUV",
      image: "/images/car/suv.jpeg",
      gallery: [
        "/images/car/suv.jpeg",
        "/images/car/suv2.jpeg",
        "/images/car/suv-interior.jpeg",
        "/images/car/suv-side.jpeg",
        "/images/car/suv-back.jpeg",
      ],
      rating: "4.8",
      reviews: "120",
      seating: "6-7 passengers",
      perKm: "₹15/km",
      driverCharges: "₹500 (Per Day)",
      cancellationCharge: "₹500",
      perDayLimit: "250km",
  
      facilities: [
        "AC",
        "Music System",
        "Charging Point",
        "Extra Legroom",
        "Luggage Space",
      ],
      description:
        "Spacious and powerful, perfect for large families, group tours, and long-distance travel.",
      features: [
        "24/7 Roadside Assistance",
        "Comprehensive Insurance",
        "Professional Chauffeur",
        "Regular Sanitization",
        "Flexible Booking",
      ],
      localSightseeing: [
        {
          duration: "8 hours",
          distance: "80 km",
          price: "₹2500",
          inclusive: ["Fuel", "Driver allowance", "Vehicle charges"],
        },
        {
          duration: "12 hours",
          distance: "120 km",
          price: "₹3500",
          inclusive: ["Fuel", "Driver allowance", "Vehicle charges"],
        },
      ],
    },
    {
      id: "3",
      type: "Tempo-Traveller",
      image: "/images/car/tempo.jpeg",
      gallery: [
        "/images/car/tempo.jpeg",
        "https://www.tempotravellerhire.in/jap/media/uploads/12seaterluxury-tempo-interior2.jpg",
        "/images/car/tempo-side.jpeg",
        "/images/car/tempo-side2.jpeg",
        "/images/car/tempo-side3.jpeg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFpzFksSAyFrqw0y2Y7N-FAqx4k9alCfbOYQ&s",
        "https://media-cdn.tripadvisor.com/media/photo-s/0f/33/ec/c1/11-seater-deluxe-1x1.jpg",
      ],
      rating: "4.7",
      reviews: "110",
      seating: "12-15 passengers",
      perKm: "₹24/km",
      driverCharges: "₹500 (Per Day)",
      cancellationCharge: "₹500",
      perDayLimit: "250km",
  
      facilities: [
        "AC",
        "Push-back Seats",
        "LCD TV",
        "Audio System",
        "Charging Points",
      ],
      description:
        "Comfortable and spacious for tourist groups, corporate events, and wedding parties.",
      features: [
        "24/7 Roadside Assistance",
        "Comprehensive Insurance",
        "Professional Chauffeur",
        "Regular Sanitization",
        "Flexible Booking",
      ],
      localSightseeing: [
        {
          duration: "8 hours",
          distance: "80 km",
          price: "₹6000",
          inclusive: ["Fuel", "Driver allowance", "Vehicle charges"],
        },
        {
          duration: "12 hours",
          distance: "120 km",
          price: "₹7500",
          inclusive: ["Fuel", "Driver allowance", "Vehicle charges"],
        },
      ],
    },
    {
      id: "4",
      type: "Luxury-Bus",
      image: "/images/car/luxury.jpeg",
      gallery: [
        "/images/car/luxury.jpeg",
        "/images/car/luxury_bus.jpeg",
        "/images/car/luxury_bus2.jpeg",
        "https://jcbl.com/jcbl-images/products/luxury/luxury-6.jpg",
        "https://t4.ftcdn.net/jpg/06/67/56/53/360_F_667565388_5jyKNCXSA2CtHLJ81GOQeXn1JxPG0zfD.jpg",
        "https://i.ytimg.com/vi/nNs9_GNVUc8/maxresdefault.jpg",
      ],
      rating: "4.7",
      reviews: "102",
      seating: "30-35 passengers",
      perKm: "₹35/km",
      driverCharges: "₹500 (Per Day)",
      cancellationCharge: "₹500",
      perDayLimit: "250km",
  
      facilities: [
        "AC",
        "Push-back Seats",
        "LCD TV",
        "Audio System",
        "Washroom",
        "Refrigerator",
      ],
      description:
        "Premium comfort for large groups, extended tours, and luxurious travel.",
      features: [
        "24/7 Roadside Assistance",
        "Comprehensive Insurance",
        "Professional Chauffeur",
        "Regular Sanitization",
        "Flexible Booking",
      ],
      localSightseeing: [
        {
          duration: "8 hours",
          distance: "80 km",
          price: "₹8000",
          inclusive: ["Fuel", "Driver allowance", "Vehicle charges"],
        },
        {
          duration: "12 hours",
          distance: "120 km",
          price: "₹10000",
          inclusive: ["Fuel", "Driver allowance", "Vehicle charges"],
        },
      ],
    },
    {
      id: "5",
      type: "Bus",
      image: "/images/car/bus.jpeg",
      gallery: [
        "/images/car/bus.jpeg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2v64_aDPkGaFBs8hhxpKmIgoph3Otjq1Ledf7v0mRRfVu0rej-7QPhn-xv-C14MPYVas&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxd7F8MrnyV1atHeu2tOUooxQTTbjOvUmTfiL1T2k2CV4lB7uUydxz5otQQgYSI3cD4ag&usqp=CAU",
        "https://wallpapers.com/images/hd/white-inter-city-bus-side-view-6refu1h9jk3cyy4x.jpg",
        "https://www.shutterstock.com/image-photo/big-bus-interior-inside-seats-600nw-1736961494.jpg",
      ],
      rating: "4.8",
      reviews: "95",
      seating: "28 passengers",
      perKm: "₹30/km",
      driverCharges: "₹500 (Per Day)",
      cancellationCharge: "₹500",
      perDayLimit: "250km",
  
      facilities: [
        "AC",
        "Push-back Seats",
        "LCD TV",
        "Audio System",
        "Charging Points",
        "Luggage Space",
      ],
      description:
        "A convenient choice for mid-sized groups, corporate outings, and short tours.",
      features: [
        "24/7 Roadside Assistance",
        "Comprehensive Insurance",
        "Professional Chauffeur",
        "Regular Sanitization",
        "Flexible Booking",
      ],
      localSightseeing: [
        {
          duration: "8 hours",
          distance: "80 km",
          price: "₹7000",
          inclusive: ["Fuel", "Driver allowance", "Vehicle charges"],
        },
        {
          duration: "12 hours",
          distance: "120 km",
          price: "₹9000",
          inclusive: ["Fuel", "Driver allowance", "Vehicle charges"],
        },
      ],
    },
  ];
  
  export const bookingSteps = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Choose Vehicle",
      description:
        "Select the perfect vehicle based on your group size and requirements",
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Book & Pay",
      description: "Secure your booking with easy online payment options",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Confirmation",
      description: "Receive instant booking confirmation and driver details",
    },
  ];
  
  export const destinations = [
    {
      city: "Mumbai",
      tagline: "City of Dreams",
      description:
        "Experience the vibrant culture and modern lifestyle of India's financial capital",
      rating: 4.8,
      reviews: 1250,
      spots: [
        {
          name: "Gateway of India",
          image: "/images/spots/gateway.jpg",
          description: "Historic arch monument",
        },
        {
          name: "Marine Drive",
          image: "/images/spots/marinedrive.jpg",
          description: "Sea-facing promenade",
        },
        {
          name: "Elephanta Caves",
          image: "/images/spots/elephanta.jpg",
          description: "Ancient cave temples",
        },
      ],
      packages: [
        {
          name: "Mumbai Heritage Walk",
          duration: "2 Days",
          highlights: ["Guided tours", "Local cuisine", "Heritage sites"],
          price: "₹7,999",
          image: "/images/destinations/mumbai.jpg",
        },
        {
          name: "Mumbai City Explorer",
          duration: "3 Days",
          highlights: ["Bollywood tour", "Street food", "Night safari"],
          price: "₹12,999",
          image: "/images/home/banner2.jpg",
        },
      ],
      heroImage: "/images/destinations/mumbai.jpg",
      gallery: [
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
      ],
    },
    {
      city: "Delhi",
      tagline: "Heart of India",
      description:
        "Discover the perfect blend of history and modernity in India's capital",
      rating: 4.7,
      reviews: 1480,
      spots: [
        {
          name: "Red Fort",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Red_Fort_3.jpg/800px-Red_Fort_3.jpg",
          description: "Mughal-era fortress",
        },
        {
          name: "Qutub Minar",
          image:
            "https://media.gettyimages.com/id/165204592/photo/qutub-minar-delhi-india.jpg?s=612x612&w=0&k=20&c=YvFLPmQmlgCyX7RGZA1VpKctdC6QsChINzLSMDPNI9k=",
          description: "UNESCO heritage site",
        },
        {
          name: "India Gate",
          image:
            "https://media.gettyimages.com/id/522675372/photo/india-gate-a-national-monument-is-a-massive-red-sandstone-arch-and-the-indian-armys-tomb-of.jpg?s=612x612&w=0&k=20&c=YPBiK0nvpg0XvryE2PEfJp0gpLCXfPjoyQvRPgTQl8A=",
          description: "War memorial",
        },
      ],
      packages: [
        {
          name: "Delhi Historical Tour",
          duration: "2 Days",
          highlights: ["Monument visits", "Cultural shows", "Local markets"],
          price: "₹6,999",
          image: "/images/about/about_banner.jpg",
        },
        {
          name: "Delhi Food & Culture",
          duration: "3 Days",
          highlights: ["Food walks", "Art galleries", "Shopping"],
          price: "₹10,999",
          image: "/images/destinations/delhi.jpg",
        },
      ],
      heroImage: "/images/destinations/delhi.jpg",
      gallery: [
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
      ],
    },
  ];
  
  export const cities = [
    {
      name: "Delhi",
      region: "North India",
      coverage: "NCR Region",
      popularity: "high",
    },
    {
      name: "Agra",
      region: "North India",
      coverage: "City + 50km radius",
      popularity: "high",
    },
    {
      name: "Jaipur",
      region: "North India",
      coverage: "Pink City Area",
      popularity: "high",
    },
    {
      name: "Haridwar",
      region: "North India",
      coverage: "Temple Circuit",
      popularity: "medium",
    },
    {
      name: "Chandigarh",
      region: "North India",
      coverage: "Tri-city Area",
      popularity: "medium",
    },
    {
      name: "Shimla",
      region: "North India",
      coverage: "Hill Station Tours",
      popularity: "high",
    },
    {
      name: "Manali",
      region: "North India",
      coverage: "Adventure Routes",
      popularity: "high",
    },
    {
      name: "Amritsar",
      region: "North India",
      coverage: "Golden Temple Area",
      popularity: "medium",
    },
    {
      name: "Dehradun",
      region: "North India",
      coverage: "Valley Region",
      popularity: "medium",
    },
    {
      name: "Rishikesh",
      region: "North India",
      coverage: "Spiritual Circuit",
      popularity: "high",
    },
    {
      name: "Jodhpur",
      region: "North India",
      coverage: "Blue City Area",
      popularity: "medium",
    },
    {
      name: "Udaipur",
      region: "North India",
      coverage: "Lake City Region",
      popularity: "high",
    },
    {
      name: "Ayodhya",
      region: "North India",
      coverage: "Temple City",
      popularity: "high",
    },
    {
      name: "Ahmedabad",
      region: "West India",
      coverage: "City + Suburbs",
      popularity: "medium",
    },
  ];
  
  export const cityDetails = {
    Delhi: {
      cabs: {
        types: ["Bus", "Sedan", "SUV", "Tempo Traveller", "Luxury Bus"],
        features: ["AC", "GPS Tracking", "24/7 Support", "Clean Interior"],
        capacity: "1-6 passengers depending on cab type",
      },
      coverage: {
        fullCoverage: [
          "Connaught Place",
          "South Delhi",
          "Dwarka",
          "Noida",
          "Gurgaon",
        ],
        limitedCoverage: ["Far North Delhi", "Outer Ring Areas"],
        restricted: ["Interstate without permit"],
      },
      facilities: {
        payment: ["Cash", "UPI", "Credit Card", "Corporate Billing"],
        booking: ["App", "Website", "Phone", "Corporate Desk"],
        support: "24/7 Customer Service",
      },
      safetyFeatures: [
        "Real-time GPS tracking",
        "SOS emergency button",
        "Driver verification",
        "Mask mandate",
        "Regular sanitization",
      ],
      popularRoutes: [
        "Airport - City Center",
        "Delhi - Gurgaon",
        "Delhi - Noida",
        "Interstate Tours",
      ],
      peakHours: {
        morning: "7 AM - 10 AM",
        evening: "5 PM - 9 PM",
        surcharge: "1.2x - 1.5x normal fare",
      },
    },
    Agra: {
      cabs: {
        types: ["Bus", "Sedan", "SUV", "Tempo Traveller", "Luxury Bus"],
        features: ["AC", "Tourist Assistance", "Clean Interior"],
        capacity: "1-5 passengers depending on cab type",
      },
      coverage: {
        fullCoverage: ["Taj Mahal", "Agra Fort", "City Center"],
        limitedCoverage: ["Rural Areas within 50 km radius"],
        restricted: ["Interstate without permit"],
      },
      facilities: {
        payment: ["Cash", "UPI", "Credit Card"],
        booking: ["App", "Website", "Phone"],
        support: "24/7 Customer Support",
      },
      safetyFeatures: [
        "Real-time GPS tracking",
        "Driver verification",
        "Mask mandate",
        "Regular sanitization",
      ],
      popularRoutes: ["Taj Mahal - City Center", "Agra - Delhi", "Agra - Jaipur"],
      peakHours: {
        morning: "8 AM - 11 AM",
        evening: "4 PM - 8 PM",
        surcharge: "1.1x - 1.4x normal fare",
      },
    },
    Jaipur: {
      cabs: {
        types: ["Bus", "Sedan", "SUV", "Tempo Traveller", "Luxury Bus"],
        features: ["AC", "GPS Tracking", "Tour Guide Assistance"],
        capacity: "1-6 passengers depending on cab type",
      },
      coverage: {
        fullCoverage: ["Pink City Area", "Amber Fort", "City Center"],
        limitedCoverage: ["Rural Areas outside Jaipur"],
        restricted: ["Interstate without permit"],
      },
      facilities: {
        payment: ["Cash", "UPI", "Credit Card"],
        booking: ["App", "Website", "Phone"],
        support: "24/7 Customer Support",
      },
      safetyFeatures: [
        "Real-time GPS tracking",
        "Driver verification",
        "Mask mandate",
        "Regular sanitization",
      ],
      popularRoutes: ["Jaipur - Amber Fort", "Jaipur - Delhi", "Jaipur - Agra"],
      peakHours: {
        morning: "9 AM - 12 PM",
        evening: "5 PM - 9 PM",
        surcharge: "1.2x - 1.5x normal fare",
      },
    },
    Haridwar: {
      cabs: {
        types: ["Bus", "Sedan", "SUV", "Tempo Traveller", "Luxury Bus"],
        features: ["AC", "Driver Assistance"],
        capacity: "1-5 passengers depending on cab type",
      },
      coverage: {
        fullCoverage: ["Temple Circuit", "City Center"],
        limitedCoverage: ["Outer Town Areas"],
        restricted: ["Interstate without permit"],
      },
      facilities: {
        payment: ["Cash", "UPI"],
        booking: ["App", "Phone"],
        support: "24/7 Support",
      },
      safetyFeatures: [
        "Real-time GPS tracking",
        "Mask mandate",
        "Driver verification",
      ],
      popularRoutes: [
        "Haridwar - Rishikesh",
        "Haridwar - Dehradun",
        "Temple Circuit Tours",
      ],
      peakHours: {
        morning: "6 AM - 9 AM",
        evening: "5 PM - 8 PM",
        surcharge: "1.1x - 1.3x normal fare",
      },
    },
    Chandigarh: {
      cabs: {
        types: ["Bus", "Sedan", "SUV", "Tempo Traveller", "Luxury Bus"],
        features: ["AC", "Clean Cabs", "GPS"],
        capacity: "1-5 passengers depending on cab type",
      },
      coverage: {
        fullCoverage: ["Tri-city Area", "Sector 17", "Rock Garden"],
        limitedCoverage: ["Outer Rural Areas"],
        restricted: ["Interstate without permit"],
      },
      facilities: {
        payment: ["Cash", "UPI", "Card"],
        booking: ["App", "Phone"],
        support: "24/7 Support",
      },
      safetyFeatures: ["GPS Tracking", "Driver Verification", "Mask Mandate"],
      popularRoutes: [
        "Chandigarh - Mohali",
        "Chandigarh - Panchkula",
        "Chandigarh - Delhi",
      ],
      peakHours: {
        morning: "8 AM - 10 AM",
        evening: "6 PM - 9 PM",
        surcharge: "1.1x - 1.4x normal fare",
      },
    },
    Shimla: {
      cabs: {
        types: ["Bus", "Sedan", "SUV", "Tempo Traveller", "Luxury Bus"],
        features: ["AC", "Snow-Ready Tires", "Driver Expertise in Hill Driving"],
        capacity: "1-6 passengers depending on cab type",
      },
      coverage: {
        fullCoverage: ["Mall Road", "Jakhoo Temple", "Kufri"],
        limitedCoverage: ["Remote Mountain Areas"],
        restricted: ["Interstate without permit"],
      },
      facilities: {
        payment: ["Cash", "UPI", "Credit Card"],
        booking: ["App", "Phone"],
        support: "24/7 Customer Support",
      },
      safetyFeatures: [
        "Real-time GPS tracking",
        "Driver verification",
        "Mask mandate",
        "Hill-specific driving guidelines",
      ],
      popularRoutes: ["Shimla - Kufri", "Shimla - Chandigarh", "Shimla - Manali"],
      peakHours: {
        morning: "9 AM - 11 AM",
        evening: "5 PM - 7 PM",
        surcharge: "1.2x - 1.5x normal fare",
      },
    },
    Manali: {
      cabs: {
        types: ["Bus", "Sedan", "SUV", "Tempo Traveller", "Luxury Bus"],
        features: ["AC", "Snow Chains", "Local Guide Assistance"],
        capacity: "1-6 passengers depending on cab type",
      },
      coverage: {
        fullCoverage: ["Mall Road", "Solang Valley", "Rohtang Pass"],
        limitedCoverage: ["Remote Villages"],
        restricted: ["Interstate without permit"],
      },
      facilities: {
        payment: ["Cash", "UPI", "Credit Card"],
        booking: ["App", "Website", "Phone"],
        support: "24/7 Customer Support",
      },
      safetyFeatures: [
        "Real-time GPS tracking",
        "Driver verification",
        "Snow safety gear",
        "Mask mandate",
      ],
      popularRoutes: [
        "Manali - Rohtang Pass",
        "Manali - Kasol",
        "Manali - Chandigarh",
      ],
      peakHours: {
        morning: "8 AM - 10 AM",
        evening: "4 PM - 6 PM",
        surcharge: "1.3x - 1.6x normal fare",
      },
    },
    Amritsar: {
      cabs: {
        types: ["Bus", "Sedan", "SUV", "Tempo Traveller", "Luxury Bus"],
        features: ["AC", "Driver Expertise", "Clean Interior"],
        capacity: "1-6 passengers depending on cab type",
      },
      coverage: {
        fullCoverage: ["Golden Temple", "Wagah Border", "Jallianwala Bagh"],
        limitedCoverage: ["Rural Areas"],
        restricted: ["Interstate without permit"],
      },
      facilities: {
        payment: ["Cash", "UPI", "Credit Card"],
        booking: ["App", "Website", "Phone"],
        support: "24/7 Customer Support",
      },
      safetyFeatures: [
        "Real-time GPS tracking",
        "Driver verification",
        "Mask mandate",
        "Sanitization protocols",
      ],
      popularRoutes: [
        "Amritsar - Golden Temple",
        "Amritsar - Chandigarh",
        "Amritsar - Delhi",
      ],
      peakHours: {
        morning: "8 AM - 11 AM",
        evening: "5 PM - 8 PM",
        surcharge: "1.2x - 1.4x normal fare",
      },
    },
    Dehradun: {
      cabs: {
        types: ["Bus", "Sedan", "SUV", "Tempo Traveller", "Luxury Bus"],
        features: ["AC", "Driver Expertise", "GPS Navigation"],
        capacity: "1-6 passengers depending on cab type",
      },
      coverage: {
        fullCoverage: ["Clock Tower", "Rajpur Road", "Mussoorie Road"],
        limitedCoverage: ["Outer Rural Areas"],
        restricted: ["Interstate without permit"],
      },
      facilities: {
        payment: ["Cash", "UPI", "Credit Card"],
        booking: ["App", "Phone"],
        support: "24/7 Customer Support",
      },
      safetyFeatures: [
        "Real-time GPS tracking",
        "Driver verification",
        "Mask mandate",
        "Sanitization protocols",
      ],
      popularRoutes: [
        "Dehradun - Mussoorie",
        "Dehradun - Rishikesh",
        "Dehradun - Haridwar",
      ],
      peakHours: {
        morning: "7 AM - 10 AM",
        evening: "5 PM - 8 PM",
        surcharge: "1.1x - 1.3x normal fare",
      },
    },
    Rishikesh: {
      cabs: {
        types: ["Bus", "Sedan", "SUV", "Tempo Traveller", "Luxury Bus"],
        features: ["AC", "Driver Assistance"],
        capacity: "1-5 passengers depending on cab type",
      },
      coverage: {
        fullCoverage: ["Laxman Jhula", "Ram Jhula", "Triveni Ghat"],
        limitedCoverage: ["Hilly Areas Beyond 50 km"],
        restricted: ["Interstate without permit"],
      },
      facilities: {
        payment: ["Cash", "UPI", "Credit Card"],
        booking: ["App", "Phone"],
        support: "24/7 Customer Support",
      },
      safetyFeatures: [
        "Real-time GPS tracking",
        "Mask mandate",
        "Driver verification",
      ],
      popularRoutes: [
        "Rishikesh - Haridwar",
        "Rishikesh - Dehradun",
        "Rishikesh - Mussoorie",
      ],
      peakHours: {
        morning: "6 AM - 9 AM",
        evening: "4 PM - 7 PM",
        surcharge: "1.1x - 1.3x normal fare",
      },
    },
    Jodhpur: {
      cabs: {
        types: ["Bus", "Sedan", "SUV", "Tempo Traveller", "Luxury Bus"],
        features: ["AC", "Driver Expertise in Desert Terrain"],
        capacity: "1-6 passengers depending on cab type",
      },
      coverage: {
        fullCoverage: ["Mehrangarh Fort", "Jaswant Thada", "Clock Tower"],
        limitedCoverage: ["Outer Desert Areas"],
        restricted: ["Interstate without permit"],
      },
      facilities: {
        payment: ["Cash", "UPI", "Credit Card"],
        booking: ["App", "Phone"],
        support: "24/7 Customer Support",
      },
      safetyFeatures: [
        "Real-time GPS tracking",
        "Driver verification",
        "Mask mandate",
        "Sanitization protocols",
      ],
      popularRoutes: [
        "Jodhpur - Osian",
        "Jodhpur - Jaisalmer",
        "Jodhpur - Udaipur",
      ],
      peakHours: {
        morning: "8 AM - 10 AM",
        evening: "5 PM - 7 PM",
        surcharge: "1.2x - 1.4x normal fare",
      },
    },
    Udaipur: {
      cabs: {
        types: ["Bus", "Sedan", "SUV", "Tempo Traveller", "Luxury Bus"],
        features: ["AC", "Driver Expertise in Hilly and Lake Areas"],
        capacity: "1-6 passengers depending on cab type",
      },
      coverage: {
        fullCoverage: ["City Palace", "Lake Pichola", "Fateh Sagar Lake"],
        limitedCoverage: ["Remote Hilly Areas"],
        restricted: ["Interstate without permit"],
      },
      facilities: {
        payment: ["Cash", "UPI", "Credit Card"],
        booking: ["App", "Website", "Phone"],
        support: "24/7 Customer Support",
      },
      safetyFeatures: [
        "Real-time GPS tracking",
        "Driver verification",
        "Mask mandate",
        "Sanitization protocols",
      ],
      popularRoutes: [
        "Udaipur - Mount Abu",
        "Udaipur - Jodhpur",
        "Udaipur - Jaipur",
      ],
      peakHours: {
        morning: "9 AM - 11 AM",
        evening: "4 PM - 6 PM",
        surcharge: "1.2x - 1.5x normal fare",
      },
    },
    Ayodhya: {
      cabs: {
        types: ["Bus", "Sedan", "SUV", "Tempo Traveller", "Luxury Bus"],
        features: ["AC", "Driver Knowledge of Religious Spots"],
        capacity: "1-5 passengers depending on cab type",
      },
      coverage: {
        fullCoverage: ["Ram Janmabhoomi", "Hanuman Garhi", "Kanak Bhawan"],
        limitedCoverage: ["Outer Rural Areas"],
        restricted: ["Interstate without permit"],
      },
      facilities: {
        payment: ["Cash", "UPI", "Credit Card"],
        booking: ["App", "Phone"],
        support: "24/7 Customer Support",
      },
      safetyFeatures: [
        "Real-time GPS tracking",
        "Driver verification",
        "Mask mandate",
        "Sanitization protocols",
      ],
      popularRoutes: [
        "Ayodhya - Faizabad",
        "Ayodhya - Lucknow",
        "Ayodhya - Varanasi",
      ],
      peakHours: {
        morning: "7 AM - 10 AM",
        evening: "5 PM - 7 PM",
        surcharge: "1.1x - 1.3x normal fare",
      },
    },
    Ahmedabad: {
      cabs: {
        types: ["Bus", "Sedan", "SUV", "Tempo Traveller", "Luxury Bus"],
        features: ["AC", "Driver Expertise", "GPS Navigation"],
        capacity: "1-6 passengers depending on cab type",
      },
      coverage: {
        fullCoverage: ["Sabarmati Ashram", "Kankaria Lake", "CG Road"],
        limitedCoverage: ["Outer Industrial Areas"],
        restricted: ["Interstate without permit"],
      },
      facilities: {
        payment: ["Cash", "UPI", "Credit Card"],
        booking: ["App", "Website", "Phone"],
        support: "24/7 Customer Support",
      },
      safetyFeatures: [
        "Real-time GPS tracking",
        "Driver verification",
        "Mask mandate",
        "Sanitization protocols",
      ],
      popularRoutes: [
        "Ahmedabad - Gandhinagar",
        "Ahmedabad - Vadodara",
        "Ahmedabad - Mount Abu",
      ],
      peakHours: {
        morning: "8 AM - 10 AM",
        evening: "6 PM - 8 PM",
        surcharge: "1.3x - 1.6x normal fare",
      },
    },
  };
  
  export const touristSpots = {
    Delhi: [
      {
        name: "Red Fort",
        description: "Historic Mughal fortress",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC095mZ7NIvlYwo3mSTY8MSKGit9_dv4FTbw&s",
      },
      {
        name: "Qutub Minar",
        description: "UNESCO World Heritage site",
        image:
          "https://media.gettyimages.com/id/165204592/photo/qutub-minar-delhi-india.jpg?s=612x612&w=0&k=20&c=YvFLPmQmlgCyX7RGZA1VpKctdC6QsChINzLSMDPNI9k=",
      },
      {
        name: "India Gate",
        description: "War memorial",
        image:
          "https://media.gettyimages.com/id/522675372/photo/india-gate-a-national-monument-is-a-massive-red-sandstone-arch-and-the-indian-armys-tomb-of.jpg?s=612x612&w=0&k=20&c=YPBiK0nvpg0XvryE2PEfJp0gpLCXfPjoyQvRPgTQl8A=",
      },
      {
        name: "Humayun's Tomb",
        description: "Magnificent Mughal architecture",
        image:
          "https://media.istockphoto.com/id/532703419/photo/humayuns-tomb-delhi-india.jpg?s=612x612&w=0&k=20&c=xLOQ5pzw0NJ-TSjhCmDViCygbE92coHOQREtRaYEqyI=",
      },
      {
        name: "Lotus Temple",
        description: "Modern architectural marvel",
        image:
          "https://media.istockphoto.com/id/487221269/photo/night-view-of-lotus-temple.jpg?s=612x612&w=0&k=20&c=Y6GASX6ZR0D2rqi3AeBCn574xhRPOz1ENiWp5dgmAXI=",
      },
    ],
    Agra: [
      {
        name: "Taj Mahal",
        description: "Wonder of the World",
        image:
          "https://media.istockphoto.com/id/519330110/photo/taj-mahal-agra-india-monument-of-love-in-blue-sky.jpg?s=612x612&w=0&k=20&c=Uma6Q7KduznA6jUKcSquFP1iHHiw8UXcZEYVLONrmaQ=",
      },
      {
        name: "Agra Fort",
        description: "UNESCO World Heritage site",
        image:
          "https://media.istockphoto.com/id/520840182/photo/red-fort-lal-qila-with-indian-flag-delhi-india.jpg?s=612x612&w=0&k=20&c=pOIkOX7dnJh2zwJhF9HrknY7kwYZtDgOd1n98wkHCKQ=",
      },
      {
        name: "Fatehpur Sikri",
        description: "Ancient city of victory",
        image:
          "https://media.istockphoto.com/id/827043866/photo/fatehpur-sikri-city.jpg?s=612x612&w=0&k=20&c=yHA0K62z-cCXMkxB2CEshzcisVzmMILqIv-AStGIFso=",
      },
      {
        name: "Akbar's Tomb",
        description: "Magnificent Mughal tomb",
        image:
          "https://media.istockphoto.com/id/1299476939/photo/tomb-of-akbar-the-great-in-sikandra-near-agra-uttar-pradesh-india.jpg?s=612x612&w=0&k=20&c=Vcbf603OxW9MDNrnTJUVegb-D_h0cBBQTTa8rqm-nz4=",
      },
    ],
    Jaipur: [
      {
        name: "Hawa Mahal",
        description: "Palace of Winds",
        image:
          "https://media.istockphoto.com/id/482557081/photo/hawa-mahal-jaipur-india.jpg?s=612x612&w=0&k=20&c=A6qCUjoNH74nXCkB07RNgK3eIt2mun8PgsLPw9dNkVI=",
      },
      {
        name: "Amber Fort",
        description: "Historic hilltop fortress",
        image:
          "https://media.istockphoto.com/id/469788052/photo/amer-fort-near-jaipur.jpg?s=612x612&w=0&k=20&c=Rsd9v_Ix39ce8U9QKo3UnWfEMG1DUq4hnzh3APPi3g8=",
      },
      {
        name: "City Palace",
        description: "Royal residence",
        image:
          "https://media.istockphoto.com/id/1744747131/photo/city-palace-jaipur-india.jpg?s=612x612&w=0&k=20&c=c9wj394FaZJyDw15IuzwHjzWDnExPik5zTvXGCaBOmY=",
      },
    ],
    Haridwar: [
      {
        name: "Har Ki Pauri",
        description: "Sacred bathing ghat",
        image:
          "https://media.istockphoto.com/id/1005227506/photo/har-ki-pauri-is-a-famous-ghat-on-the-banks-of-the-ganges-in-haridwar-india.jpg?s=612x612&w=0&k=20&c=QIBBZQaBiMKiR0i6AC-cYStVUTVssiiTu_buVEtFvJw=",
      },
      {
        name: "Mansa Devi Temple",
        description: "Hill-top temple",
        image:
          "https://media.istockphoto.com/id/166681127/photo/mansa-devi-temple.jpg?s=612x612&w=is&k=20&c=zoWiaFFOPwUx0yP4uam-Nn9oNb1KO-forpv_rtrPtYE=",
      },
    ],
    Chandigarh: [
      {
        name: "Rock Garden",
        description: "Unique sculpture park",
        image:
          "https://media.istockphoto.com/id/1407956379/photo/corner-of-ornamental-stony-garden-with-various-dwarf-coniferous-shrubs-and-deciduous-bushes.jpg?s=612x612&w=0&k=20&c=AmYgLOr2BgasewJE8lf_9gBKoM9qu0DqkQQ6yrafD6I=",
      },
      {
        name: "Sukhna Lake",
        description: "Artificial lake",
        image:
          "https://media.istockphoto.com/id/1203392697/photo/sukhna-lake-chandigarh-at-sunrise.jpg?s=612x612&w=0&k=20&c=rabpQw7KhWTbYm3W9dndtERzvAYAjqVhEM4eJBRGrRQ=",
      },
    ],
    Shimla: [
      {
        name: "Mall Road",
        description: "Main street shopping",
        image:
          "https://media.istockphoto.com/id/943758616/photo/mall-road-shimla.jpg?s=612x612&w=0&k=20&c=rQYc8H5J-D-bWy5LZWy-fCti7S1qzRGaa_gGY8VPuog=",
      },
      {
        name: "Ridge",
        description: "Large open space",
        image:
          "https://media.istockphoto.com/id/1475906590/photo/the-mall-ridge-road-shimla.jpg?s=612x612&w=0&k=20&c=Kl-9ytoFlBddMBiz6OrM5iRoLLiZ2u4ztrTrJPR4ek8=",
      },
    ],
    Manali: [
      {
        name: "Rohtang Pass",
        description: "Scenic mountain pass",
        image:
          "https://media.istockphoto.com/id/1442248596/photo/lahaul-valley-in-himalayas-himachal-pradesh-india.jpg?s=612x612&w=0&k=20&c=5zTO8ChI2EXwKjrj4PFPJ3oKV93ydlyjDCymxzjlYZI=",
      },
      {
        name: "Hadimba Temple",
        description: "Ancient wooden temple",
        image:
          "https://media.istockphoto.com/id/1334792935/photo/hidimba-devi-or-hadimba-temple-manali.jpg?s=612x612&w=0&k=20&c=zE3wvq8_V9tAfsRiG_6rcg8zv8K3czbyI2J5vUAuQa8=",
      },
    ],
    Amritsar: [
      {
        name: "Golden Temple",
        description: "Holiest Sikh shrine",
        image:
          "https://media.istockphoto.com/id/543179390/photo/golden-temple-the-main-sanctuary-of-sikhs-amritsar-india.jpg?s=612x612&w=0&k=20&c=s4bOWzg0e0ecBBPmuzIEShhrmMWFE16cnYlAZ7Nfdeg=",
      },
      {
        name: "Jallianwala Bagh",
        description: "Historic memorial",
        image:
          "https://media.istockphoto.com/id/469924336/photo/jallianwala-bagh-memorial.jpg?s=612x612&w=0&k=20&c=hlliyoRQA8t1Keivqn6vexVcLwFmrY1gZwwpAQsaBpc=",
      },
    ],
    Dehradun: [
      {
        name: "Robber's Cave",
        description: "Natural cave formation",
        image:
          "https://media.istockphoto.com/id/852876558/photo/tranquil-outdoor-fall-scene-in-oklahoma.jpg?s=612x612&w=0&k=20&c=hEc38LFHA90OyGyuPyLYRmUGfj6fbB_Vg28jWhkbrNY=",
      },
      {
        name: "Forest Research Institute",
        description: "Colonial architecture",
        image:
          "https://media.istockphoto.com/id/530805512/photo/forest-research-institute.jpg?s=612x612&w=0&k=20&c=bLPlUbaxDClXc_-xC94IKFu_N9zNusEpUeaIg3n9iKM=",
      },
    ],
    Rishikesh: [
      {
        name: "Laxman Jhula",
        description: "Iconic suspension bridge",
        image:
          "https://media.istockphoto.com/id/515802500/photo/bridge-in-rishikesh.jpg?s=612x612&w=0&k=20&c=Nt7T-FN_j1Glci2Y_yU6s-4HrsVF04VS6salIld6N8w=",
      },
      {
        name: "Beatles Ashram",
        description: "Historic meditation center",
        image:
          "https://media.istockphoto.com/id/1096528010/photo/maharishi-mahesh-yogi-ashram-in-rishikesh-northern-india.jpg?s=612x612&w=0&k=20&c=Hk8kIV5ozeggpF9ws4B3AWJbIrqKFwVIRW-lLgzMW5g=",
      },
    ],
    Jodhpur: [
      {
        name: "Mehrangarh Fort",
        description: "Massive hilltop fort",
        image:
          "https://media.istockphoto.com/id/805563154/photo/mehrangharh-fort-and-jaswant-thada-mausoleum-in-jodhpur-rajasthan-india.jpg?s=612x612&w=0&k=20&c=5r9UxPkz9mIkfAIFPLyTwqBQyqSO7mcAdQtcqGHOboA=",
      },
      {
        name: "Umaid Bhawan Palace",
        description: "Royal residence",
        image:
          "https://media.istockphoto.com/id/95524495/photo/umaid-bhawan-palace-jodhpur-rajasthan-india.jpg?s=612x612&w=0&k=20&c=HfHIeiDXJfiW-Q2JTzFIOrT8a3wroYecdJeU-nCt8XA=",
      },
    ],
    Udaipur: [
      {
        name: "City Palace",
        description: "Royal palace complex",
        image:
          "https://media.istockphoto.com/id/487804438/photo/jaipur-india-chandra-mahal-palace-within-the-city-palace.jpg?s=612x612&w=0&k=20&c=nMPsdxL9iCyKhDFHmh8cE2ItkC8gp7awos6pL_t076s=",
      },
      {
        name: "Lake Pichola",
        description: "Artificial freshwater lake",
        image:
          "https://media.istockphoto.com/id/1343698822/photo/udaipur-city-palace-beside-beautiful-lake-pichola-at-udaipur-rajasthan-india.jpg?s=612x612&w=0&k=20&c=i2Xvwz1tUVGEr3FKLam3jxNiyUSGEZ6e79zDSpoI96M=",
      },
    ],
    Ayodhya: [
      {
        name: "Ram Mandir",
        description: "Grand temple complex",
        image:
          "https://media.istockphoto.com/id/1450230477/photo/on-the-festival-of-deepawali-hindu-people-are-celebrating-deepotsav-in-ayodhya-uttar-pradesh.jpg?s=612x612&w=0&k=20&c=aONYbmPPKoYThK8KD1fSoYi-v-Y0coexCpacm5fEixw=",
      },
      {
        name: "Hanuman Garhi",
        description: "Historic temple",
        image:
          "https://media.istockphoto.com/id/2156027556/photo/statue-of-hanuman-in-shri-hanuman-garhi-temple.jpg?s=612x612&w=0&k=20&c=F5z2NoGVTnw7cq3Qglv_P4-pQ2__4ahj5ydVhu4nOUc=",
      },
    ],
    Ahmedabad: [
      {
        name: "Sabarmati Ashram",
        description: "Gandhi's residence",
        image:
          "https://media.istockphoto.com/id/2191721128/photo/sabarmati-gandhi-ashram-in-ahmedabad.jpg?s=612x612&w=0&k=20&c=qw9slkQQhuK19Z3uXL6WYIQNZCAGM_Ox7Cp9CNpXXgc=",
      },
      {
        name: "Adalaj Stepwell",
        description: "Historic water structure",
        image:
          "https://media.istockphoto.com/id/524006344/photo/adalaj-ki-vav.jpg?s=612x612&w=0&k=20&c=jt06dpxerICexezKYB_tlbuRThAQSdqVlt-xmjpXjkI=",
      },
    ],
  };
  
  export const touristSpotsDescrition = {
    Delhi: [
      {
        name: "Red Fort",
        description: "Historic Mughal fortress, symbol of India's independence, featuring red sandstone walls and impressive architecture.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC095mZ7NIvlYwo3mSTY8MSKGit9_dv4FTbw&s",
      },
      {
        name: "Qutub Minar",
        description: "UNESCO World Heritage site, a 73-meter tall minaret built in 1193 with intricate carvings and verses from the Quran.",
        image:
          "https://media.gettyimages.com/id/165204592/photo/qutub-minar-delhi-india.jpg?s=612x612&w=0&k=20&c=YvFLPmQmlgCyX7RGZA1VpKctdC6QsChINzLSMDPNI9k=",
      },
      {
        name: "India Gate",
        description: "War memorial built in honor of Indian soldiers who died in World War I, surrounded by lush gardens and fountains.",
        image:
          "https://media.gettyimages.com/id/522675372/photo/india-gate-a-national-monument-is-a-massive-red-sandstone-arch-and-the-indian-armys-tomb-of.jpg?s=612x612&w=0&k=20&c=YPBiK0nvpg0XvryE2PEfJp0gpLCXfPjoyQvRPgTQl8A=",
      },
      {
        name: "Humayun's Tomb",
        description: "Magnificent Mughal architecture and a precursor to the Taj Mahal, built in 1570 as the tomb of Emperor Humayun.",
        image:
          "https://media.istockphoto.com/id/532703419/photo/humayuns-tomb-delhi-india.jpg?s=612x612&w=0&k=20&c=xLOQ5pzw0NJ-TSjhCmDViCygbE92coHOQREtRaYEqyI=",
      },
      {
        name: "Lotus Temple",
        description: "Modern architectural marvel and a Bahá'í House of Worship, known for its lotus-shaped design and peaceful ambiance.",
        image:
          "https://media.istockphoto.com/id/487221269/photo/night-view-of-lotus-temple.jpg?s=612x612&w=0&k=20&c=Y6GASX6ZR0D2rqi3AeBCn574xhRPOz1ENiWp5dgmAXI=",
      },
    ],
    Agra: [
      {
        name: "Taj Mahal",
        description: "Wonder of the World, built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal. Famous for its white marble and symmetry.",
        image:
          "https://media.istockphoto.com/id/519330110/photo/taj-mahal-agra-india-monument-of-love-in-blue-sky.jpg?s=612x612&w=0&k=20&c=Uma6Q7KduznA6jUKcSquFP1iHHiw8UXcZEYVLONrmaQ=",
      },
      {
        name: "Agra Fort",
        description: "Massive 16th-century fortress of red sandstone, housing royal residences, mosques, and audience halls.",
        image:
          "https://media.istockphoto.com/id/520840182/photo/red-fort-lal-qila-with-indian-flag-delhi-india.jpg?s=612x612&w=0&k=20&c=pOIkOX7dnJh2zwJhF9HrknY7kwYZtDgOd1n98wkHCKQ=",
      },
      {
        name: "Fatehpur Sikri",
        description: "Ancient city built by Emperor Akbar in the 16th century, featuring impressive palaces, mosques, and courtyards.",
        image:
          "https://media.istockphoto.com/id/827043866/photo/fatehpur-sikri-city.jpg?s=612x612&w=0&k=20&c=yHA0K62z-cCXMkxB2CEshzcisVzmMILqIv-AStGIFso=",
      },
      {
        name: "Akbar's Tomb",
        description: "Final resting place of Emperor Akbar, showcasing unique Mughal architectural elements and intricate red sandstone work.",
        image:
          "https://media.istockphoto.com/id/1299476939/photo/tomb-of-akbar-the-great-in-sikandra-near-agra-uttar-pradesh-india.jpg?s=612x612&w=0&k=20&c=Vcbf603OxW9MDNrnTJUVegb-D_h0cBBQTTa8rqm-nz4=",
      },
    ],
    Jaipur: [
      {
        name: "Hawa Mahal",
        description: "Palace of Winds, built in 1799, known for its intricate latticework and 953 small windows designed to allow cool breezes.",
        image:
          "https://media.istockphoto.com/id/482557081/photo/hawa-mahal-jaipur-india.jpg?s=612x612&w=0&k=20&c=A6qCUjoNH74nXCkB07RNgK3eIt2mun8PgsLPw9dNkVI=",
      },
      {
        name: "Amber Fort",
        description: "Majestic hilltop fortress with stunning views of the surrounding hills, featuring large courtyards and a mirror palace.",
        image:
          "https://media.istockphoto.com/id/469788052/photo/amer-fort-near-jaipur.jpg?s=612x612&w=0&k=20&c=Rsd9v_Ix39ce8U9QKo3UnWfEMG1DUq4hnzh3APPi3g8=",
      },
      {
        name: "City Palace",
        description: "Grand royal residence with courtyards, museums, and beautifully decorated gates.",
        image:
          "https://media.istockphoto.com/id/1744747131/photo/city-palace-jaipur-india.jpg?s=612x612&w=0&k=20&c=c9wj394FaZJyDw15IuzwHjzWDnExPik5zTvXGCaBOmY=",
      },
    ],
    Chandigarh: [
      {
        name: "Rock Garden",
        description: "Unique sculpture park created from industrial and domestic waste, showcasing creativity and eco-friendly art.",
        image:
          "https://media.istockphoto.com/id/1407956379/photo/corner-of-ornamental-stony-garden.jpg?s=612x612&w=0&k=20&c=AmYgLOr2BgasewJE8lf_9gBKoM9qu0DqkQQ6yrafD6I=",
      },
      {
        name: "Sukhna Lake",
        description: "Artificial reservoir surrounded by walking paths and gardens, a popular spot for boating and relaxation.",
        image:
          "https://media.istockphoto.com/id/1203392697/photo/sukhna-lake-chandigarh-at-sunrise.jpg?s=612x612&w=0&k=20&c=rabpQw7KhWTbYm3W9dndtERzvAYAjqVhEM4eJBRGrRQ=",
      },
    ],
    Manali: [
      {
        name: "Rohtang Pass",
        description: "Scenic mountain pass located at 3,978 meters, offering breathtaking views of the Himalayas.",
        image:
          "https://media.istockphoto.com/id/1442248596/photo/lahaul-valley-in-himalayas.jpg?s=612x612&w=0&k=20&c=5zTO8ChI2EXwKjrj4PFPJ3oKV93ydlyjDCymxzjlYZI=",
      },
      {
        name: "Hadimba Temple",
        description: "Ancient temple dedicated to Hadimba Devi, known for its unique wooden architecture.",
        image:
          "https://media.istockphoto.com/id/1334792935/photo/hidimba-devi-or-hadimba-temple.jpg?s=612x612&w=0&k=20&c=zE3wvq8_V9tAfsRiG_6rcg8zv8K3czbyI2J5vUAuQa8=",
      },
    ],
  };
  
  
  export const luxuryCars = [
    {
      type: "Audi A6",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRV8aCYNPUmFRgfgzfz2MJeLQyEACmCpfWkg&s",
      seating: "4",
      perDay: "₹15,000",
      minDays: "3",
      securityDeposit: "10%",
      rating: "4.9",
      reviews: "124",
      popular: true,
      facilities: [
        "Chauffeur Driven",
        "Premium Interior",
        "Airport Transfer",
        "24/7 Support",
      ],
    },
    {
      type: "BMW 5 Series",
      image:
        "https://bmw.scene7.com/is/image/BMW/tit_brnze_g68_nlnch_tita_bro_4?wid=3000&hei=3000",
      seating: "4",
      perDay: "₹16,000",
      minDays: "3",
      securityDeposit: "10%",
      rating: "4.8",
      reviews: "98",
      facilities: [
        "Chauffeur Driven",
        "Premium Interior",
        "Airport Transfer",
        "24/7 Support",
      ],
    },
    {
      type: "Mercedes E-Class",
      image:
        "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/162929/e-class-exterior-right-front-three-quarter-33.jpeg?isig=0&q=80&q=80",
      seating: "4",
      perDay: "₹17,000",
      minDays: "3",
      securityDeposit: "10%",
      rating: "4.9",
      reviews: "156",
      facilities: [
        "Chauffeur Driven",
        "Premium Interior",
        "Airport Transfer",
        "24/7 Support",
      ],
    },
    {
      type: "Toyota Fortuner",
      image:
        "https://imgd.aeplcdn.com/370x208/n/cw/ec/44709/fortuner-exterior-right-rear-three-quarter.jpeg?q=80",
      seating: "7",
      perDay: "₹12,000",
      minDays: "2",
      securityDeposit: "10%",
      rating: "4.7",
      reviews: "203",
      facilities: [
        "Chauffeur Driven",
        "Spacious Interior",
        "Airport Transfer",
        "24/7 Support",
      ],
    },
  ];
  
  export const standardCars = [
    {
      type: "Dzire",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Swift-Dzire-Tour/8863/1717397917382/front-left-side-47.jpg",
      seating: "5",
      perDay: "₹2,500",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.5",
      reviews: "200",
      popular: true,
      facilities: ["Well Maintained", "AC", "GPS Tracking", "24/7 Support"],
    },
    {
      type: "Aura",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Aura/10126/1694588549389/front-left-side-47.jpg",
      seating: "5",
      perDay: "₹3,000",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.6",
      reviews: "142",
      popular: false,
      facilities: ["Well Maintained", "AC", "GPS Tracking", "24/7 Support"],
    },
    {
      type: "Ertiga",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Ertiga/10293/1697697779799/front-left-side-47.jpg",
      seating: "7",
      perDay: "₹4,000",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.7",
      reviews: "150",
      facilities: ["Well Maintained", "AC", "GPS Tracking", "24/7 Support"],
    },
    {
      type: "KIA Carens",
      image:
        "https://www.kia.com/content/dam/kia2/in/en/images/our-vehicles/carens/gallery/exterior/04.png",
      seating: "7",
      perDay: "₹4,400",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.7",
      reviews: "118",
      facilities: ["Well Maintained", "AC", "GPS Tracking", "24/7 Support"],
    },
    {
      type: "Innova Crysta",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Crysta/9612/1697698611076/front-left-side-47.jpg",
      seating: "7",
      perDay: "₹6,00",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.8",
      reviews: "425",
      facilities: ["Well Maintained", "AC", "GPS Tracking", "24/7 Support"],
    },
  ];
  
  export const tempoTravellers = [
    {
      type: "Tempo Traveller - 12",
      image: "/images/car/tempo_traveller.jpeg",
      seating: "12",
      perDay: "₹5,500",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.6",
      reviews: "95",
      facilities: ["AC", "Comfortable Seating", "GPS Tracking", "24/7 Support"]
    },
    {
      type: "Tempo Traveller - 16",
      image: "/images/car/tempo-front.jpeg",
      seating: "16",
      perDay: "₹6,000",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.7",
      reviews: "78",
      facilities: ["AC", "Comfortable Seating", "GPS Tracking", "24/7 Support"]
    },
    {
      type: "Tempo Traveller - 20",
      image: "/images/car/tempo-side.jpeg",
      seating: "20",
      perDay: "₹6,500",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.5",
      reviews: "62",
      facilities: ["AC", "Comfortable Seating", "GPS Tracking", "24/7 Support"]
    },
    {
      type: "Tempo Traveller - 26",
      image: "/images/car/tempo-side2.jpeg",
      seating: "26",
      perDay: "₹7,500",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.4",
      reviews: "53",
      facilities: ["AC", "Comfortable Seating", "GPS Tracking", "24/7 Support"]
    }
  ];
  
  export const luxuryBuses = [
    {
      type: "Luxury Bus - 35",
      image: "https://5.imimg.com/data5/AU/DW/MY-3525736/21740577_1735207289822745_777045808454716075_n.jpg",
      seating: "35",
      perDay: "₹18,000",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.6",
      reviews: "85",
      facilities: ["AC", "Comfortable Seats", "Entertainment System", "WiFi", "24/7 Support"]
    },
    {
      type: "Luxury Bus - 40",
      image: "https://media.istockphoto.com/id/1402780845/photo/caetano-levante.jpg?s=612x612&w=0&k=20&c=WDGvGvRHzbYmw2hciGn688dbtKBzkjCXUDTxytXtYgg=",
      seating: "40",
      perDay: "₹20,000",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.7",
      reviews: "72",
      facilities: ["AC", "Comfortable Seats", "Entertainment System", "WiFi", "24/7 Support"]
    },
    {
      type: "Luxury Bus - 45",
      image: "https://media.istockphoto.com/id/1189925691/photo/setra-s519hd.jpg?s=612x612&w=0&k=20&c=306VUyVDmK2TY3Qw9xCRtWwranpfgAvXxi25wbe5egs=",
      seating: "45",
      perDay: "₹22,000",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.8",
      reviews: "65",
      facilities: ["AC", "Comfortable Seats", "Entertainment System", "WiFi", "24/7 Support"]
    },
    {
      type: "Luxury Bus - 49",
      image: "https://media.istockphoto.com/id/124870370/photo/touring-america-ii.jpg?s=612x612&w=0&k=20&c=R4jc_JhLBKnxAc3xqYfT5HNKqGabXOIHIJ6u-7iKrdk=",
      seating: "49",
      perDay: "₹25,000",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.9",
      reviews: "58",
      facilities: ["AC", "Comfortable Seats", "Entertainment System", "WiFi", "24/7 Support"]
    },
    {
      type: "Luxury Bus - 55",
      image: "https://media.istockphoto.com/id/173002523/photo/sleek-red-bus.jpg?s=612x612&w=0&k=20&c=UNYSvPJwe5ebhpE4fX7q6asyeEPZTznET_gJqCdacHA=",
      seating: "55",
      perDay: "₹28,000",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.7",
      reviews: "47",
      facilities: ["AC", "Comfortable Seats", "Entertainment System", "WiFi", "24/7 Support"]
    }
  ];
  
  export const simpleBuses = [
    {
      type: "Simple Bus - 35",
      image: "https://res.cloudinary.com/dnreeobav/image/fetch/c_scale,q_30,w_350,f_auto/l_text:Arial_20_bold:TrucksBuses.com,x_70,y_100,co_rgb:ffffff/https://www.trucksbuses.com/uploads/Ashok%20Leyland%20Lynx%20Smart%2028%20Seater%20Staff%20Bus.jpg",
      seating: "35",
      perDay: "₹12,000",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.3",
      reviews: "95",
      facilities: ["Basic Seating", "Standard AC", "Basic Support"]
    },
    {
      type: "Simple Bus - 40",
      image: "https://4.imimg.com/data4/DE/EI/MY-26708523/skyline-school-bus-40.jpg",
      seating: "40",
      perDay: "₹14,000",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.4",
      reviews: "82",
      facilities: ["Basic Seating", "Standard AC", "Basic Support"]
    },
    {
      type: "Simple Bus - 45",
      image: "https://res.cloudinary.com/dnreeobav/image/fetch/c_scale,q_30,w_350,f_auto/l_text:Arial_20_bold:TrucksBuses.com,x_70,y_100,co_rgb:ffffff/https://www.trucksbuses.com/uploads/Ashok%20Leyland%20Lynx%20Smart%2028%20Seater%20Staff%20Bus.jpg",
      seating: "45",
      perDay: "₹16,000",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.5",
      reviews: "75",
      facilities: ["Basic Seating", "Standard AC", "Basic Support"]
    },
    {
      type: "Simple Bus - 49",
      image: "https://media.istockphoto.com/id/1616050163/photo/white-intercity-bus-in-the-parking-lot.jpg?s=612x612&w=0&k=20&c=jcP2YcXzYjFy1A1645zD27Dex54vDkQBjL-5AXVhdas=",
      seating: "49",
      perDay: "₹18,000",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.6",
      reviews: "68",
      facilities: ["Basic Seating", "Standard AC", "Basic Support"]
    },
    {
      type: "Simple Bus - 55",
      image: "https://5.imimg.com/data5/CM/YM/UG/SELLER-46827032/staff-bus-500x500.jpg",
      seating: "55",
      perDay: "₹20,000",
      minDays: "1",
      securityDeposit: "10%",
      rating: "4.4",
      reviews: "57",
      facilities: ["Basic Seating", "Standard AC", "Basic Support"]
    }
  ];
  
  export const phoneNumber = "7668570551";
  