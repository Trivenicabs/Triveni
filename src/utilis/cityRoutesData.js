// Complete cityRoutesData.js with calculated pricing based on per-km rates
// Sedan: ₹12/km, Ertiga: ₹15/km, Innova: ₹18/km, Tempo: ₹35/km, Bus: ₹55/km
// Updated: Tempo Traveller capacity: 25 guests, Luxury Bus capacity: 35 guests

export const cityRoutesData = {
  Delhi: [
    {
      destination: "Agra",
      distance: "230 km",
      time: "4-5 hours",
      description: "Visit the iconic Taj Mahal with our comfortable Delhi to Agra cab service.",
      tags: ["UNESCO World Heritage Site", "Same day return possible"],
      prices: [
        { vehicle: "Sedan", price: "₹2760", roundTrip: "₹5520" },
        { vehicle: "SUV Ertiga", price: "₹3450", roundTrip: "₹6900", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹4140", roundTrip: "₹8280", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹8050", roundTrip: "₹16100", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹12650", roundTrip: "₹25300", capacity: "35 guests" }
      ]
    },
    {
      destination: "Jaipur",
      distance: "280 km",
      time: "5-6 hours",
      description: "Explore the Pink City with our reliable Delhi to Jaipur taxi service.",
      tags: ["Golden Triangle tour", "Royal palaces"],
      prices: [
        { vehicle: "Sedan", price: "₹3360", roundTrip: "₹6720" },
        { vehicle: "SUV Ertiga", price: "₹4200", roundTrip: "₹8400", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹5040", roundTrip: "₹10080", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹9800", roundTrip: "₹19600", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹15400", roundTrip: "₹30800", capacity: "35 guests" }
      ]
    },
    {
      destination: "Haridwar",
      distance: "240 km",
      time: "4-5 hours",
      description: "Sacred journey to Haridwar, the gateway to the Himalayas.",
      tags: ["Holy Ganges", "Har Ki Pauri"],
      prices: [
        { vehicle: "Sedan", price: "₹2880", roundTrip: "₹5760" },
        { vehicle: "SUV Ertiga", price: "₹3600", roundTrip: "₹7200", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹4320", roundTrip: "₹8640", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹8400", roundTrip: "₹16800", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹13200", roundTrip: "₹26400", capacity: "35 guests" }
      ]
    },
    {
      destination: "Chandigarh",
      distance: "260 km",
      time: "4-5 hours",
      description: "Visit the beautiful planned city of Chandigarh with our premium cab service.",
      tags: ["Rock Garden", "Sukhna Lake"],
      prices: [
        { vehicle: "Sedan", price: "₹3120", roundTrip: "₹6240" },
        { vehicle: "SUV Ertiga", price: "₹3900", roundTrip: "₹7800", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹4680", roundTrip: "₹9360", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹9100", roundTrip: "₹18200", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹14300", roundTrip: "₹28600", capacity: "35 guests" }
      ]
    },
    {
      destination: "Shimla",
      distance: "350 km",
      time: "7-8 hours",
      description: "Experience the Queen of Hills with our comfortable Delhi to Shimla cab service.",
      tags: ["Hill Station", "Colonial Architecture"],
      prices: [
        { vehicle: "Sedan", price: "₹4200", roundTrip: "₹8400" },
        { vehicle: "SUV Ertiga", price: "₹5250", roundTrip: "₹10500", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹6300", roundTrip: "₹12600", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹12250", roundTrip: "₹24500", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹19250", roundTrip: "₹38500", capacity: "35 guests" }
      ]
    },
    {
      destination: "Manali",
      distance: "540 km",
      time: "12-14 hours",
      description: "Get a one side taxi for Manali with our Delhi to Manali taxi, at below cab fare:",
      tags: ["Adventure Sports", "Himalayan Views"],
      prices: [
        { vehicle: "Sedan", price: "₹6480", roundTrip: "₹12960" },
        { vehicle: "SUV Ertiga", price: "₹8100", roundTrip: "₹16200", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹9720", roundTrip: "₹19440", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹18900", roundTrip: "₹37800", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹29700", roundTrip: "₹59400", capacity: "35 guests" }
      ]
    },
    {
      destination: "Amritsar",
      distance: "450 km",
      time: "8-9 hours",
      description: "Get a one side drop at Amritsar, which is approx 450 km drive, & its fare is:",
      tags: ["Golden Temple", "Wagah Border"],
      prices: [
        { vehicle: "Sedan", price: "₹5400", roundTrip: "₹10800" },
        { vehicle: "SUV Ertiga", price: "₹6750", roundTrip: "₹13500", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹8100", roundTrip: "₹16200", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹15750", roundTrip: "₹31500", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹24750", roundTrip: "₹49500", capacity: "35 guests" }
      ]
    },
    {
      destination: "Dehradun",
      distance: "250 km",
      time: "5-6 hours",
      description: "Travel to the capital of Uttarakhand with our comfortable cab service.",
      tags: ["Educational Hub", "Gateway to Hills"],
      prices: [
        { vehicle: "Sedan", price: "₹3000", roundTrip: "₹6000" },
        { vehicle: "SUV Ertiga", price: "₹3750", roundTrip: "₹7500", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹4500", roundTrip: "₹9000", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹8750", roundTrip: "₹17500", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹13750", roundTrip: "₹27500", capacity: "35 guests" }
      ]
    },
    {
      destination: "Rishikesh",
      distance: "240 km",
      time: "5-6 hours",
      description: "Visit the Yoga Capital of the World with our reliable taxi service.",
      tags: ["Adventure Sports", "Spiritual Journey"],
      prices: [
        { vehicle: "Sedan", price: "₹2880", roundTrip: "₹5760" },
        { vehicle: "SUV Ertiga", price: "₹3600", roundTrip: "₹7200", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹4320", roundTrip: "₹8640", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹8400", roundTrip: "₹16800", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹13200", roundTrip: "₹26400", capacity: "35 guests" }
      ]
    },
    {
      destination: "Jodhpur",
      distance: "620 km",
      time: "10-12 hours",
      description: "Explore the Blue City with our long-distance cab service.",
      tags: ["Blue City", "Mehrangarh Fort"],
      prices: [
        { vehicle: "Sedan", price: "₹7440", roundTrip: "₹14880" },
        { vehicle: "SUV Ertiga", price: "₹9300", roundTrip: "₹18600", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹11160", roundTrip: "₹22320", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹21700", roundTrip: "₹43400", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹34100", roundTrip: "₹68200", capacity: "35 guests" }
      ]
    },
    {
      destination: "Udaipur",
      distance: "660 km",
      time: "11-13 hours",
      description: "Visit the City of Lakes with our premium cab service.",
      tags: ["City of Lakes", "Royal Heritage"],
      prices: [
        { vehicle: "Sedan", price: "₹7920", roundTrip: "₹15840" },
        { vehicle: "SUV Ertiga", price: "₹9900", roundTrip: "₹19800", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹11880", roundTrip: "₹23760", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹23100", roundTrip: "₹46200", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹36300", roundTrip: "₹72600", capacity: "35 guests" }
      ]
    },
    {
      destination: "Ayodhya",
      distance: "690 km",
      time: "12-14 hours",
      description: "Sacred journey to Ayodhya with our comfortable cab service.",
      tags: ["Religious Tourism", "Ram Janmabhoomi"],
      prices: [
        { vehicle: "Sedan", price: "₹8280", roundTrip: "₹16560" },
        { vehicle: "SUV Ertiga", price: "₹10350", roundTrip: "₹20700", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹12420", roundTrip: "₹24840", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹24150", roundTrip: "₹48300", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹37950", roundTrip: "₹75900", capacity: "35 guests" }
      ]
    },
    {
      destination: "Ahmedabad",
      distance: "950 km",
      time: "14-16 hours",
      description: "Long-distance travel to Gujarat's commercial capital.",
      tags: ["Commercial Hub", "Sabarmati Ashram"],
      prices: [
        { vehicle: "Sedan", price: "₹11400", roundTrip: "₹22800" },
        { vehicle: "SUV Ertiga", price: "₹14250", roundTrip: "₹28500", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹17100", roundTrip: "₹34200", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹33250", roundTrip: "₹66500", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹52250", roundTrip: "₹104500", capacity: "35 guests" }
      ]
    }
  ],

  Jaipur: [
    {
      destination: "Delhi",
      distance: "290 km",
      time: "5-6 hours",
      description: "Travel from Jaipur to Delhi with our comfortable cab service.",
      tags: ["Capital City", "Modern amenities"],
      prices: [
        { vehicle: "Sedan", price: "₹3480", roundTrip: "₹6960" },
        { vehicle: "SUV Ertiga", price: "₹4350", roundTrip: "₹8700", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹5220", roundTrip: "₹10440", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹10150", roundTrip: "₹20300", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹15950", roundTrip: "₹31900", capacity: "35 guests" }
      ]
    },
    {
      destination: "Agra",
      distance: "240 km",
      time: "4-5 hours",
      description: "Visit the iconic Taj Mahal from Jaipur with our reliable taxi service.",
      tags: ["Taj Mahal", "UNESCO World Heritage"],
      prices: [
        { vehicle: "Sedan", price: "₹2880", roundTrip: "₹5760" },
        { vehicle: "SUV Ertiga", price: "₹3600", roundTrip: "₹7200", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹4320", roundTrip: "₹8640", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹8400", roundTrip: "₹16800", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹13200", roundTrip: "₹26400", capacity: "35 guests" }
      ]
    },
    {
      destination: "Haridwar",
      distance: "430 km",
      time: "7-8 hours",
      description: "Sacred journey from Jaipur to Haridwar with our premium cab service.",
      tags: ["Holy Ganges", "Pilgrimage"],
      prices: [
        { vehicle: "Sedan", price: "₹5160", roundTrip: "₹10320" },
        { vehicle: "SUV Ertiga", price: "₹6450", roundTrip: "₹12900", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹7740", roundTrip: "₹15480", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹15050", roundTrip: "₹30100", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹23650", roundTrip: "₹47300", capacity: "35 guests" }
      ]
    },
    {
      destination: "Chandigarh",
      distance: "520 km",
      time: "8-9 hours",
      description: "Travel from Jaipur to the City Beautiful with our comfortable taxi service.",
      tags: ["Modern city", "Architecture"],
      prices: [
        { vehicle: "Sedan", price: "₹6240", roundTrip: "₹12480" },
        { vehicle: "SUV Ertiga", price: "₹7800", roundTrip: "₹15600", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹9360", roundTrip: "₹18720", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹18200", roundTrip: "₹36400", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹28600", roundTrip: "₹57200", capacity: "35 guests" }
      ]
    },
    {
      destination: "Shimla",
      distance: "580 km",
      time: "9-10 hours",
      description: "Experience the Queen of Hills from Jaipur with our reliable cab service.",
      tags: ["Hill Station", "Summer capital"],
      prices: [
        { vehicle: "Sedan", price: "₹6960", roundTrip: "₹13920" },
        { vehicle: "SUV Ertiga", price: "₹8700", roundTrip: "₹17400", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹10440", roundTrip: "₹20880", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹20300", roundTrip: "₹40600", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹31900", roundTrip: "₹63800", capacity: "35 guests" }
      ]
    },
    {
      destination: "Manali",
      distance: "750 km",
      time: "12-13 hours",
      description: "Adventure awaits in Manali from Jaipur with our premium taxi service.",
      tags: ["Adventure hub", "Snow activities"],
      prices: [
        { vehicle: "Sedan", price: "₹9000", roundTrip: "₹18000" },
        { vehicle: "SUV Ertiga", price: "₹11250", roundTrip: "₹22500", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹13500", roundTrip: "₹27000", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹26250", roundTrip: "₹52500", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹41250", roundTrip: "₹82500", capacity: "35 guests" }
      ]
    },
    {
      destination: "Amritsar",
      distance: "630 km",
      time: "10-11 hours",
      description: "Visit the Golden Temple from Jaipur with our comfortable cab service.",
      tags: ["Golden Temple", "Cultural heritage"],
      prices: [
        { vehicle: "Sedan", price: "₹7560", roundTrip: "₹15120" },
        { vehicle: "SUV Ertiga", price: "₹9450", roundTrip: "₹18900", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹11340", roundTrip: "₹22680", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹22050", roundTrip: "₹44100", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹34650", roundTrip: "₹69300", capacity: "35 guests" }
      ]
    },
    {
      destination: "Dehradun",
      distance: "460 km",
      time: "7-8 hours",
      description: "Travel from Jaipur to Dehradun, the capital of Uttarakhand.",
      tags: ["Educational hub", "Pleasant climate"],
      prices: [
        { vehicle: "Sedan", price: "₹5520", roundTrip: "₹11040" },
        { vehicle: "SUV Ertiga", price: "₹6900", roundTrip: "₹13800", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹8280", roundTrip: "₹16560", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹16100", roundTrip: "₹32200", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹25300", roundTrip: "₹50600", capacity: "35 guests" }
      ]
    },
    {
      destination: "Rishikesh",
      distance: "440 km",
      time: "7-8 hours",
      description: "Visit the Yoga Capital from Jaipur with our reliable taxi service.",
      tags: ["Yoga capital", "Adventure sports"],
      prices: [
        { vehicle: "Sedan", price: "₹5280", roundTrip: "₹10560" },
        { vehicle: "SUV Ertiga", price: "₹6600", roundTrip: "₹13200", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹7920", roundTrip: "₹15840", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹15400", roundTrip: "₹30800", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹24200", roundTrip: "₹48400", capacity: "35 guests" }
      ]
    },
    {
      destination: "Jodhpur",
      distance: "340 km",
      time: "6-7 hours",
      description: "Explore the Blue City from Jaipur with our premium cab service.",
      tags: ["Blue City", "Desert culture"],
      prices: [
        { vehicle: "Sedan", price: "₹4080", roundTrip: "₹8160" },
        { vehicle: "SUV Ertiga", price: "₹5100", roundTrip: "₹10200", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹6120", roundTrip: "₹12240", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹11900", roundTrip: "₹23800", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹18700", roundTrip: "₹37400", capacity: "35 guests" }
      ]
    },
    {
      destination: "Udaipur",
      distance: "380 km",
      time: "6-7 hours",
      description: "Visit the City of Lakes from Jaipur with our comfortable cab service.",
      tags: ["City of Lakes", "Royal palaces"],
      prices: [
        { vehicle: "Sedan", price: "₹4560", roundTrip: "₹9120" },
        { vehicle: "SUV Ertiga", price: "₹5700", roundTrip: "₹11400", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹6840", roundTrip: "₹13680", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹13300", roundTrip: "₹26600", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹20900", roundTrip: "₹41800", capacity: "35 guests" }
      ]
    },
    {
      destination: "Ayodhya",
      distance: "630 km",
      time: "10-11 hours",
      description: "Sacred journey from Jaipur to Ayodhya with our reliable taxi service.",
      tags: ["Religious Tourism", "Ram Janmabhoomi"],
      prices: [
        { vehicle: "Sedan", price: "₹7560", roundTrip: "₹15120" },
        { vehicle: "SUV Ertiga", price: "₹9450", roundTrip: "₹18900", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹11340", roundTrip: "₹22680", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹22050", roundTrip: "₹44100", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹34650", roundTrip: "₹69300", capacity: "35 guests" }
      ]
    },
    {
      destination: "Ahmedabad",
      distance: "650 km",
      time: "10-11 hours",
      description: "Long-distance travel from Jaipur to Gujarat's commercial capital.",
      tags: ["Commercial Hub", "Gujarati culture"],
      prices: [
        { vehicle: "Sedan", price: "₹7800", roundTrip: "₹15600" },
        { vehicle: "SUV Ertiga", price: "₹9750", roundTrip: "₹19500", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹11700", roundTrip: "₹23400", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹22750", roundTrip: "₹45500", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹35750", roundTrip: "₹71500", capacity: "35 guests" }
      ]
    }
  ],

  Chandigarh: [
    {
      destination: "Delhi",
      distance: "250 km",
      time: "4-5 hours",
      description: "Travel from Chandigarh to Delhi with our comfortable cab service.",
      tags: ["Capital City", "Business hub"],
      prices: [
        { vehicle: "Sedan", price: "₹3000", roundTrip: "₹6000" },
        { vehicle: "SUV Ertiga", price: "₹3750", roundTrip: "₹7500", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹4500", roundTrip: "₹9000", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹8750", roundTrip: "₹17500", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹13750", roundTrip: "₹27500", capacity: "35 guests" }
      ]
    },
    {
      destination: "Agra",
      distance: "410 km",
      time: "7-8 hours",
      description: "Visit the iconic Taj Mahal from Chandigarh with our reliable taxi service.",
      tags: ["Taj Mahal", "Mughal heritage"],
      prices: [
        { vehicle: "Sedan", price: "₹4920", roundTrip: "₹9840" },
        { vehicle: "SUV Ertiga", price: "₹6150", roundTrip: "₹12300", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹7380", roundTrip: "₹14760", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹14350", roundTrip: "₹28700", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹22550", roundTrip: "₹45100", capacity: "35 guests" }
      ]
    },
    {
      destination: "Jaipur",
      distance: "520 km",
      time: "8-9 hours",
      description: "Explore the Pink City from Chandigarh with our premium cab service.",
      tags: ["Pink City", "Rajasthani culture"],
      prices: [
        { vehicle: "Sedan", price: "₹6240", roundTrip: "₹12480" },
        { vehicle: "SUV Ertiga", price: "₹7800", roundTrip: "₹15600", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹9360", roundTrip: "₹18720", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹18200", roundTrip: "₹36400", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹28600", roundTrip: "₹57200", capacity: "35 guests" }
      ]
    },
    {
      destination: "Haridwar",
      distance: "190 km",
      time: "3-4 hours",
      description: "Sacred journey from Chandigarh to Haridwar with our comfortable taxi service.",
      tags: ["Holy Ganges", "Spiritual destination"],
      prices: [
        { vehicle: "Sedan", price: "₹2280", roundTrip: "₹4560" },
        { vehicle: "SUV Ertiga", price: "₹2850", roundTrip: "₹5700", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹3420", roundTrip: "₹6840", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹6650", roundTrip: "₹13300", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹10450", roundTrip: "₹20900", capacity: "35 guests" }
      ]
    },
    {
      destination: "Shimla",
      distance: "120 km",
      time: "2-3 hours",
      description: "Experience the Queen of Hills from Chandigarh with our reliable cab service.",
      tags: ["Hill Station", "Short drive"],
      prices: [
        { vehicle: "Sedan", price: "₹1440", roundTrip: "₹2880" },
        { vehicle: "SUV Ertiga", price: "₹1800", roundTrip: "₹3600", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹2160", roundTrip: "₹4320", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹4200", roundTrip: "₹8400", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹6600", roundTrip: "₹13200", capacity: "35 guests" }
      ]
    },
    {
      destination: "Manali",
      distance: "310 km",
      time: "6-7 hours",
      description: "Adventure awaits in Manali from Chandigarh with our premium taxi service.",
      tags: ["Adventure sports", "Mountain views"],
      prices: [
        { vehicle: "Sedan", price: "₹3720", roundTrip: "₹7440" },
        { vehicle: "SUV Ertiga", price: "₹4650", roundTrip: "₹9300", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹5580", roundTrip: "₹11160", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹10850", roundTrip: "₹21700", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹17050", roundTrip: "₹34100", capacity: "35 guests" }
      ]
    },
    {
      destination: "Amritsar",
      distance: "230 km",
      time: "4-5 hours",
      description: "Visit the Golden Temple from Chandigarh with our comfortable cab service.",
      tags: ["Golden Temple", "Sikh heritage"],
      prices: [
        { vehicle: "Sedan", price: "₹2760", roundTrip: "₹5520" },
        { vehicle: "SUV Ertiga", price: "₹3450", roundTrip: "₹6900", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹4140", roundTrip: "₹8280", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹8050", roundTrip: "₹16100", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹12650", roundTrip: "₹25300", capacity: "35 guests" }
      ]
    },
    {
      destination: "Dehradun",
      distance: "170 km",
      time: "3-4 hours",
      description: "Travel from Chandigarh to Dehradun, the capital of Uttarakhand.",
      tags: ["Educational hub", "Close proximity"],
      prices: [
        { vehicle: "Sedan", price: "₹2040", roundTrip: "₹4080" },
        { vehicle: "SUV Ertiga", price: "₹2550", roundTrip: "₹5100", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹3060", roundTrip: "₹6120", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹5950", roundTrip: "₹11900", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹9350", roundTrip: "₹18700", capacity: "35 guests" }
      ]
    },
    {
      destination: "Rishikesh",
      distance: "200 km",
      time: "4-5 hours",
      description: "Visit the Yoga Capital from Chandigarh with our reliable taxi service.",
      tags: ["Yoga capital", "River activities"],
      prices: [
        { vehicle: "Sedan", price: "₹2400", roundTrip: "₹4800" },
        { vehicle: "SUV Ertiga", price: "₹3000", roundTrip: "₹6000", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹3600", roundTrip: "₹7200", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹7000", roundTrip: "₹14000", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹11000", roundTrip: "₹22000", capacity: "35 guests" }
      ]
    },
    {
      destination: "Jodhpur",
      distance: "640 km",
      time: "10-11 hours",
      description: "Explore the Blue City from Chandigarh with our premium cab service.",
      tags: ["Blue City", "Desert culture"],
      prices: [
        { vehicle: "Sedan", price: "₹7680", roundTrip: "₹15360" },
        { vehicle: "SUV Ertiga", price: "₹9600", roundTrip: "₹19200", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹11520", roundTrip: "₹23040", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹22400", roundTrip: "₹44800", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹35200", roundTrip: "₹70400", capacity: "35 guests" }
      ]
    },
    {
      destination: "Udaipur",
      distance: "680 km",
      time: "11-12 hours",
      description: "Visit the City of Lakes from Chandigarh with our comfortable cab service.",
      tags: ["City of Lakes", "Royal heritage"],
      prices: [
        { vehicle: "Sedan", price: "₹8160", roundTrip: "₹16320" },
        { vehicle: "SUV Ertiga", price: "₹10200", roundTrip: "₹20400", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹12240", roundTrip: "₹24480", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹23800", roundTrip: "₹47600", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹37400", roundTrip: "₹74800", capacity: "35 guests" }
      ]
    },
    {
      destination: "Ayodhya",
      distance: "790 km",
      time: "12-13 hours",
      description: "Sacred journey from Chandigarh to Ayodhya with our reliable taxi service.",
      tags: ["Religious Tourism", "Ram Janmabhoomi"],
      prices: [
        { vehicle: "Sedan", price: "₹9480", roundTrip: "₹18960" },
        { vehicle: "SUV Ertiga", price: "₹11850", roundTrip: "₹23700", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹14220", roundTrip: "₹28440", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹27650", roundTrip: "₹55300", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹43450", roundTrip: "₹86900", capacity: "35 guests" }
      ]
    },
    {
      destination: "Ahmedabad",
      distance: "950 km",
      time: "14-15 hours",
      description: "Long-distance travel from Chandigarh to Gujarat's commercial capital.",
      tags: ["Commercial Hub", "Sabarmati Ashram"],
      prices: [
        { vehicle: "Sedan", price: "₹11400", roundTrip: "₹22800" },
        { vehicle: "SUV Ertiga", price: "₹14250", roundTrip: "₹28500", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹17100", roundTrip: "₹34200", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹33250", roundTrip: "₹66500", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹52250", roundTrip: "₹104500", capacity: "35 guests" }
      ]
    }
  ],

  Agra: [
    {
      destination: "Delhi",
      distance: "230 km",
      time: "4-5 hours",
      description: "Travel from Agra to Delhi with our comfortable cab service.",
      tags: ["Capital City", "Historical monuments"],
      prices: [
        { vehicle: "Sedan", price: "₹2760", roundTrip: "₹5520" },
        { vehicle: "SUV Ertiga", price: "₹3450", roundTrip: "₹6900", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹4140", roundTrip: "₹8280", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹8050", roundTrip: "₹16100", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹12650", roundTrip: "₹25300", capacity: "35 guests" }
      ]
    },
    {
      destination: "Jaipur",
      distance: "240 km",
      time: "4-5 hours",
      description: "Explore the Pink City from Agra with our reliable taxi service.",
      tags: ["Pink City", "Royal palaces"],
      prices: [
        { vehicle: "Sedan", price: "₹2880", roundTrip: "₹5760" },
        { vehicle: "SUV Ertiga", price: "₹3600", roundTrip: "₹7200", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹4320", roundTrip: "₹8640", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹8400", roundTrip: "₹16800", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹13200", roundTrip: "₹26400", capacity: "35 guests" }
      ]
    },
    {
      destination: "Haridwar",
      distance: "280 km",
      time: "5-6 hours",
      description: "Sacred journey from Agra to Haridwar, gateway to the Himalayas.",
      tags: ["Holy Ganges", "Spiritual journey"],
      prices: [
        { vehicle: "Sedan", price: "₹3360", roundTrip: "₹6720" },
        { vehicle: "SUV Ertiga", price: "₹4200", roundTrip: "₹8400", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹5040", roundTrip: "₹10080", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹9800", roundTrip: "₹19600", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹15400", roundTrip: "₹30800", capacity: "35 guests" }
      ]
    },
    {
      destination: "Chandigarh",
      distance: "410 km",
      time: "7-8 hours",
      description: "Travel from Agra to the beautiful planned city of Chandigarh.",
      tags: ["Planned City", "Modern architecture"],
      prices: [
        { vehicle: "Sedan", price: "₹4920", roundTrip: "₹9840" },
        { vehicle: "SUV Ertiga", price: "₹6150", roundTrip: "₹12300", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹7380", roundTrip: "₹14760", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹14350", roundTrip: "₹28700", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹22550", roundTrip: "₹45100", capacity: "35 guests" }
      ]
    },
    {
      destination: "Shimla",
      distance: "460 km",
      time: "8-9 hours",
      description: "Experience the Queen of Hills from Agra with our comfortable cab service.",
      tags: ["Hill Station", "Colonial charm"],
      prices: [
        { vehicle: "Sedan", price: "₹5520", roundTrip: "₹11040" },
        { vehicle: "SUV Ertiga", price: "₹6900", roundTrip: "₹13800", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹8280", roundTrip: "₹16560", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹16100", roundTrip: "₹32200", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹25300", roundTrip: "₹50600", capacity: "35 guests" }
      ]
    },
    {
      destination: "Manali",
      distance: "630 km",
      time: "11-12 hours",
      description: "Adventure awaits in Manali from Agra with our reliable taxi service.",
      tags: ["Adventure Sports", "Himalayan beauty"],
      prices: [
        { vehicle: "Sedan", price: "₹7560", roundTrip: "₹15120" },
        { vehicle: "SUV Ertiga", price: "₹9450", roundTrip: "₹18900", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹11340", roundTrip: "₹22680", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹22050", roundTrip: "₹44100", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹34650", roundTrip: "₹69300", capacity: "35 guests" }
      ]
    },
    {
      destination: "Amritsar",
      distance: "620 km",
      time: "10-11 hours",
      description: "Visit the Golden Temple from Agra with our premium cab service.",
      tags: ["Golden Temple", "Sikh heritage"],
      prices: [
        { vehicle: "Sedan", price: "₹7440", roundTrip: "₹14880" },
        { vehicle: "SUV Ertiga", price: "₹9300", roundTrip: "₹18600", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹11160", roundTrip: "₹22320", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹21700", roundTrip: "₹43400", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹34100", roundTrip: "₹68200", capacity: "35 guests" }
      ]
    },
    {
      destination: "Dehradun",
      distance: "300 km",
      time: "5-6 hours",
      description: "Travel from Agra to Dehradun, the capital of Uttarakhand.",
      tags: ["Educational hub", "Gateway to hills"],
      prices: [
        { vehicle: "Sedan", price: "₹3600", roundTrip: "₹7200" },
        { vehicle: "SUV Ertiga", price: "₹4500", roundTrip: "₹9000", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹5400", roundTrip: "₹10800", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹10500", roundTrip: "₹21000", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹16500", roundTrip: "₹33000", capacity: "35 guests" }
      ]
    },
    {
      destination: "Rishikesh",
      distance: "290 km",
      time: "5-6 hours",
      description: "Visit the Yoga Capital from Agra with our comfortable taxi service.",
      tags: ["Yoga capital", "River rafting"],
      prices: [
        { vehicle: "Sedan", price: "₹3480", roundTrip: "₹6960" },
        { vehicle: "SUV Ertiga", price: "₹4350", roundTrip: "₹8700", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹5220", roundTrip: "₹10440", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹10150", roundTrip: "₹20300", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹15950", roundTrip: "₹31900", capacity: "35 guests" }
      ]
    },
    {
      destination: "Jodhpur",
      distance: "420 km",
      time: "7-8 hours",
      description: "Explore the Blue City from Agra with our premium cab service.",
      tags: ["Blue City", "Mehrangarh Fort"],
      prices: [
        { vehicle: "Sedan", price: "₹5040", roundTrip: "₹10080" },
        { vehicle: "SUV Ertiga", price: "₹6300", roundTrip: "₹12600", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹7560", roundTrip: "₹15120", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹14700", roundTrip: "₹29400", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹23100", roundTrip: "₹46200", capacity: "35 guests" }
      ]
    },
    {
      destination: "Udaipur",
      distance: "460 km",
      time: "8-9 hours",
      description: "Visit the City of Lakes from Agra with our comfortable cab service.",
      tags: ["City of Lakes", "Royal heritage"],
      prices: [
        { vehicle: "Sedan", price: "₹5520", roundTrip: "₹11040" },
        { vehicle: "SUV Ertiga", price: "₹6900", roundTrip: "₹13800", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹8280", roundTrip: "₹16560", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹16100", roundTrip: "₹32200", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹25300", roundTrip: "₹50600", capacity: "35 guests" }
      ]
    },
    {
      destination: "Ayodhya",
      distance: "490 km",
      time: "8-9 hours",
      description: "Sacred journey from Agra to Ayodhya with our reliable taxi service.",
      tags: ["Religious Tourism", "Ram Janmabhoomi"],
      prices: [
        { vehicle: "Sedan", price: "₹5880", roundTrip: "₹11760" },
        { vehicle: "SUV Ertiga", price: "₹7350", roundTrip: "₹14700", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹8820", roundTrip: "₹17640", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹17150", roundTrip: "₹34300", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹26950", roundTrip: "₹53900", capacity: "35 guests" }
      ]
    },
    {
      destination: "Ahmedabad",
      distance: "750 km",
      time: "12-13 hours",
      description: "Long-distance travel from Agra to Gujarat's commercial capital.",
      tags: ["Commercial Hub", "Sabarmati Ashram"],
      prices: [
        { vehicle: "Sedan", price: "₹9000", roundTrip: "₹18000" },
        { vehicle: "SUV Ertiga", price: "₹11250", roundTrip: "₹22500", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹13500", roundTrip: "₹27000", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹26250", roundTrip: "₹52500", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹41250", roundTrip: "₹82500", capacity: "35 guests" }
      ]
    }
  ],

  Shimla: [
    {
      destination: "Delhi",
      distance: "360 km",
      time: "7-8 hours",
      description: "Travel from Shimla to Delhi with our comfortable cab service.",
      tags: ["Capital City", "Plains journey"],
      prices: [
        { vehicle: "Sedan", price: "₹4320", roundTrip: "₹8640" },
        { vehicle: "SUV Ertiga", price: "₹5400", roundTrip: "₹10800", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹6480", roundTrip: "₹12960", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹12600", roundTrip: "₹25200", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹19800", roundTrip: "₹39600", capacity: "35 guests" }
      ]
    },
    {
      destination: "Agra",
      distance: "460 km",
      time: "8-9 hours",
      description: "Visit the iconic Taj Mahal from Shimla with our reliable taxi service.",
      tags: ["Taj Mahal", "Heritage tour"],
      prices: [
        { vehicle: "Sedan", price: "₹5520", roundTrip: "₹11040" },
        { vehicle: "SUV Ertiga", price: "₹6900", roundTrip: "₹13800", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹8280", roundTrip: "₹16560", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹16100", roundTrip: "₹32200", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹25300", roundTrip: "₹50600", capacity: "35 guests" }
      ]
    },
    {
      destination: "Jaipur",
      distance: "580 km",
      time: "9-10 hours",
      description: "Explore the Pink City from Shimla with our premium cab service.",
      tags: ["Pink City", "Royal heritage"],
      prices: [
        { vehicle: "Sedan", price: "₹6960", roundTrip: "₹13920" },
        { vehicle: "SUV Ertiga", price: "₹8700", roundTrip: "₹17400", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹10440", roundTrip: "₹20880", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹20300", roundTrip: "₹40600", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹31900", roundTrip: "₹63800", capacity: "35 guests" }
      ]
    },
    {
      destination: "Haridwar",
      distance: "210 km",
      time: "4-5 hours",
      description: "Sacred journey from Shimla to Haridwar with our reliable cab service.",
      tags: ["Holy Ganges", "Pilgrimage"],
      prices: [
        { vehicle: "Sedan", price: "₹2520", roundTrip: "₹5040" },
        { vehicle: "SUV Ertiga", price: "₹3150", roundTrip: "₹6300", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹3780", roundTrip: "₹7560", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹7350", roundTrip: "₹14700", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹11550", roundTrip: "₹23100", capacity: "35 guests" }
      ]
    },
    {
      destination: "Chandigarh",
      distance: "120 km",
      time: "2-3 hours",
      description: "Travel from Shimla to Chandigarh with our comfortable taxi service.",
      tags: ["Planned city", "Short journey"],
      prices: [
        { vehicle: "Sedan", price: "₹1440", roundTrip: "₹2880" },
        { vehicle: "SUV Ertiga", price: "₹1800", roundTrip: "₹3600", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹2160", roundTrip: "₹4320", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹4200", roundTrip: "₹8400", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹6600", roundTrip: "₹13200", capacity: "35 guests" }
      ]
    },
    {
      destination: "Manali",
      distance: "250 km",
      time: "5-6 hours",
      description: "Adventure awaits in Manali from Shimla with our premium taxi service.",
      tags: ["Adventure hub", "Mountain route"],
      prices: [
        { vehicle: "Sedan", price: "₹3000", roundTrip: "₹6000" },
        { vehicle: "SUV Ertiga", price: "₹3750", roundTrip: "₹7500", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹4500", roundTrip: "₹9000", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹8750", roundTrip: "₹17500", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹13750", roundTrip: "₹27500", capacity: "35 guests" }
      ]
    },
    {
      destination: "Amritsar",
      distance: "350 km",
      time: "6-7 hours",
      description: "Visit the Golden Temple from Shimla with our comfortable cab service.",
      tags: ["Golden Temple", "Cultural tour"],
      prices: [
        { vehicle: "Sedan", price: "₹4200", roundTrip: "₹8400" },
        { vehicle: "SUV Ertiga", price: "₹5250", roundTrip: "₹10500", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹6300", roundTrip: "₹12600", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹12250", roundTrip: "₹24500", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹19250", roundTrip: "₹38500", capacity: "35 guests" }
      ]
    },
    {
      destination: "Dehradun",
      distance: "180 km",
      time: "3-4 hours",
      description: "Travel from Shimla to Dehradun with our reliable taxi service.",
      tags: ["Educational hub", "Valley journey"],
      prices: [
        { vehicle: "Sedan", price: "₹2160", roundTrip: "₹4320" },
        { vehicle: "SUV Ertiga", price: "₹2700", roundTrip: "₹5400", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹3240", roundTrip: "₹6480", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹6300", roundTrip: "₹12600", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹9900", roundTrip: "₹19800", capacity: "35 guests" }
      ]
    },
    {
      destination: "Rishikesh",
      distance: "200 km",
      time: "4-5 hours",
      description: "Visit the Yoga Capital from Shimla with our comfortable taxi service.",
      tags: ["Yoga capital", "Spiritual journey"],
      prices: [
        { vehicle: "Sedan", price: "₹2400", roundTrip: "₹4800" },
        { vehicle: "SUV Ertiga", price: "₹3000", roundTrip: "₹6000", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹3600", roundTrip: "₹7200", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹7000", roundTrip: "₹14000", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹11000", roundTrip: "₹22000", capacity: "35 guests" }
      ]
    },
    {
      destination: "Jodhpur",
      distance: "700 km",
      time: "11-12 hours",
      description: "Explore the Blue City from Shimla with our premium cab service.",
      tags: ["Blue City", "Desert culture"],
      prices: [
        { vehicle: "Sedan", price: "₹8400", roundTrip: "₹16800" },
        { vehicle: "SUV Ertiga", price: "₹10500", roundTrip: "₹21000", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹12600", roundTrip: "₹25200", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹24500", roundTrip: "₹49000", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹38500", roundTrip: "₹77000", capacity: "35 guests" }
      ]
    },
    {
      destination: "Udaipur",
      distance: "740 km",
      time: "12-13 hours",
      description: "Visit the City of Lakes from Shimla with our comfortable cab service.",
      tags: ["City of Lakes", "Royal heritage"],
      prices: [
        { vehicle: "Sedan", price: "₹8880", roundTrip: "₹17760" },
        { vehicle: "SUV Ertiga", price: "₹11100", roundTrip: "₹22200", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹13320", roundTrip: "₹26640", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹25900", roundTrip: "₹51800", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹40700", roundTrip: "₹81400", capacity: "35 guests" }
      ]
    },
    {
      destination: "Ayodhya",
      distance: "850 km",
      time: "13-14 hours",
      description: "Sacred journey from Shimla to Ayodhya with our reliable taxi service.",
      tags: ["Religious Tourism", "Ram Janmabhoomi"],
      prices: [
        { vehicle: "Sedan", price: "₹10200", roundTrip: "₹20400" },
        { vehicle: "SUV Ertiga", price: "₹12750", roundTrip: "₹25500", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹15300", roundTrip: "₹30600", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹29750", roundTrip: "₹59500", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹46750", roundTrip: "₹93500", capacity: "35 guests" }
      ]
    },
    {
      destination: "Ahmedabad",
      distance: "1010 km",
      time: "15-16 hours",
      description: "Long-distance travel from Shimla to Gujarat's commercial capital.",
      tags: ["Commercial Hub", "Sabarmati Ashram"],
      prices: [
        { vehicle: "Sedan", price: "₹12120", roundTrip: "₹24240" },
        { vehicle: "SUV Ertiga", price: "₹15150", roundTrip: "₹30300", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹18180", roundTrip: "₹36360", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹35350", roundTrip: "₹70700", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹55550", roundTrip: "₹111100", capacity: "35 guests" }
      ]
    }
  ],

  Dehradun: [
    {
      destination: "Delhi",
      distance: "250 km",
      time: "5-6 hours",
      description: "Travel from Dehradun to Delhi with our comfortable cab service.",
      tags: ["Capital City", "Fast highway"],
      prices: [
        { vehicle: "Sedan", price: "₹3000", roundTrip: "₹6000" },
        { vehicle: "SUV Ertiga", price: "₹3750", roundTrip: "₹7500", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹4500", roundTrip: "₹9000", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹8750", roundTrip: "₹17500", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹13750", roundTrip: "₹27500", capacity: "35 guests" }
      ]
    },
    {
      destination: "Agra",
      distance: "300 km",
      time: "5-6 hours",
      description: "Visit the iconic Taj Mahal from Dehradun with our reliable taxi service.",
      tags: ["Taj Mahal", "World wonder"],
      prices: [
        { vehicle: "Sedan", price: "₹3600", roundTrip: "₹7200" },
        { vehicle: "SUV Ertiga", price: "₹4500", roundTrip: "₹9000", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹5400", roundTrip: "₹10800", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹10500", roundTrip: "₹21000", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹16500", roundTrip: "₹33000", capacity: "35 guests" }
      ]
    },
    {
      destination: "Jaipur",
      distance: "460 km",
      time: "7-8 hours",
      description: "Explore the Pink City from Dehradun with our premium cab service.",
      tags: ["Pink City", "Desert culture"],
      prices: [
        { vehicle: "Sedan", price: "₹5520", roundTrip: "₹11040" },
        { vehicle: "SUV Ertiga", price: "₹6900", roundTrip: "₹13800", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹8280", roundTrip: "₹16560", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹16100", roundTrip: "₹32200", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹25300", roundTrip: "₹50600", capacity: "35 guests" }
      ]
    },
    {
      destination: "Haridwar",
      distance: "55 km",
      time: "1-2 hours",
      description: "Sacred journey from Dehradun to Haridwar with our comfortable taxi service.",
      tags: ["Holy Ganges", "Quick trip"],
      prices: [
        { vehicle: "Sedan", price: "₹660", roundTrip: "₹1320" },
        { vehicle: "SUV Ertiga", price: "₹825", roundTrip: "₹1650", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹990", roundTrip: "₹1980", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹1925", roundTrip: "₹3850", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹3025", roundTrip: "₹6050", capacity: "35 guests" }
      ]
    },
    {
      destination: "Chandigarh",
      distance: "170 km",
      time: "3-4 hours",
      description: "Travel from Dehradun to Chandigarh with our comfortable taxi service.",
      tags: ["Planned city", "Modern amenities"],
      prices: [
        { vehicle: "Sedan", price: "₹2040", roundTrip: "₹4080" },
        { vehicle: "SUV Ertiga", price: "₹2550", roundTrip: "₹5100", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹3060", roundTrip: "₹6120", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹5950", roundTrip: "₹11900", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹9350", roundTrip: "₹18700", capacity: "35 guests" }
      ]
    },
    {
      destination: "Shimla",
      distance: "180 km",
      time: "3-4 hours",
      description: "Experience the Queen of Hills from Dehradun with our reliable cab service.",
      tags: ["Hill Station", "Colonial charm"],
      prices: [
        { vehicle: "Sedan", price: "₹2160", roundTrip: "₹4320" },
        { vehicle: "SUV Ertiga", price: "₹2700", roundTrip: "₹5400", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹3240", roundTrip: "₹6480", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹6300", roundTrip: "₹12600", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹9900", roundTrip: "₹19800", capacity: "35 guests" }
      ]
    },
    {
      destination: "Manali",
      distance: "430 km",
      time: "8-9 hours",
      description: "Adventure awaits in Manali from Dehradun with our premium taxi service.",
      tags: ["Adventure Sports", "Mountain views"],
      prices: [
        { vehicle: "Sedan", price: "₹5160", roundTrip: "₹10320" },
        { vehicle: "SUV Ertiga", price: "₹6450", roundTrip: "₹12900", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹7740", roundTrip: "₹15480", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹15050", roundTrip: "₹30100", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹23650", roundTrip: "₹47300", capacity: "35 guests" }
      ]
    },
    {
      destination: "Amritsar",
      distance: "400 km",
      time: "7-8 hours",
      description: "Visit the Golden Temple from Dehradun with our comfortable cab service.",
      tags: ["Golden Temple", "Sikh heritage"],
      prices: [
        { vehicle: "Sedan", price: "₹4800", roundTrip: "₹9600" },
        { vehicle: "SUV Ertiga", price: "₹6000", roundTrip: "₹12000", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹7200", roundTrip: "₹14400", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹14000", roundTrip: "₹28000", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹22000", roundTrip: "₹44000", capacity: "35 guests" }
      ]
    },
    {
      destination: "Rishikesh",
      distance: "40 km",
      time: "1 hour",
      description: "Visit the Yoga Capital from Dehradun with our reliable taxi service.",
      tags: ["Yoga capital", "Very close"],
      prices: [
        { vehicle: "Sedan", price: "₹480", roundTrip: "₹960" },
        { vehicle: "SUV Ertiga", price: "₹600", roundTrip: "₹1200", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹720", roundTrip: "₹1440", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹1400", roundTrip: "₹2800", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹2200", roundTrip: "₹4400", capacity: "35 guests" }
      ]
    },
    {
      destination: "Jodhpur",
      distance: "620 km",
      time: "10-11 hours",
      description: "Explore the Blue City from Dehradun with our premium cab service.",
      tags: ["Blue City", "Desert culture"],
      prices: [
        { vehicle: "Sedan", price: "₹7440", roundTrip: "₹14880" },
        { vehicle: "SUV Ertiga", price: "₹9300", roundTrip: "₹18600", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹11160", roundTrip: "₹22320", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹21700", roundTrip: "₹43400", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹34100", roundTrip: "₹68200", capacity: "35 guests" }
      ]
    },
    {
      destination: "Udaipur",
      distance: "660 km",
      time: "11-12 hours",
      description: "Visit the City of Lakes from Dehradun with our comfortable cab service.",
      tags: ["City of Lakes", "Royal heritage"],
      prices: [
        { vehicle: "Sedan", price: "₹7920", roundTrip: "₹15840" },
        { vehicle: "SUV Ertiga", price: "₹9900", roundTrip: "₹19800", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹11880", roundTrip: "₹23760", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹23100", roundTrip: "₹46200", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹36300", roundTrip: "₹72600", capacity: "35 guests" }
      ]
    },
    {
      destination: "Ayodhya",
      distance: "750 km",
      time: "12-13 hours",
      description: "Sacred journey from Dehradun to Ayodhya with our reliable taxi service.",
      tags: ["Religious Tourism", "Ram Janmabhoomi"],
      prices: [
        { vehicle: "Sedan", price: "₹9000", roundTrip: "₹18000" },
        { vehicle: "SUV Ertiga", price: "₹11250", roundTrip: "₹22500", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹13500", roundTrip: "₹27000", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹26250", roundTrip: "₹52500", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹41250", roundTrip: "₹82500", capacity: "35 guests" }
      ]
    },
    {
      destination: "Ahmedabad",
      distance: "930 km",
      time: "14-15 hours",
      description: "Long-distance travel from Dehradun to Gujarat's commercial capital.",
      tags: ["Commercial Hub", "Sabarmati Ashram"],
      prices: [
        { vehicle: "Sedan", price: "₹11160", roundTrip: "₹22320" },
        { vehicle: "SUV Ertiga", price: "₹13950", roundTrip: "₹27900", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹16740", roundTrip: "₹33480", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹32550", roundTrip: "₹65100", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹51150", roundTrip: "₹102300", capacity: "35 guests" }
      ]
    }
  ],

  Rishikesh: [
    {
      destination: "Delhi",
      distance: "240 km",
      time: "5-6 hours",
      description: "Travel from Rishikesh to Delhi with our comfortable cab service.",
      tags: ["Capital City", "Expressway route"],
      prices: [
        { vehicle: "Sedan", price: "₹2880", roundTrip: "₹5760" },
        { vehicle: "SUV Ertiga", price: "₹3600", roundTrip: "₹7200", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹4320", roundTrip: "₹8640", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹8400", roundTrip: "₹16800", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹13200", roundTrip: "₹26400", capacity: "35 guests" }
      ]
    },
    {
      destination: "Agra",
      distance: "290 km",
      time: "5-6 hours",
      description: "Visit the iconic Taj Mahal from Rishikesh with our reliable taxi service.",
      tags: ["Taj Mahal", "Heritage journey"],
      prices: [
        { vehicle: "Sedan", price: "₹3480", roundTrip: "₹6960" },
        { vehicle: "SUV Ertiga", price: "₹4350", roundTrip: "₹8700", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹5220", roundTrip: "₹10440", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹10150", roundTrip: "₹20300", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹15950", roundTrip: "₹31900", capacity: "35 guests" }
      ]
    },
    {
      destination: "Jaipur",
      distance: "440 km",
      time: "7-8 hours",
      description: "Explore the Pink City from Rishikesh with our premium cab service.",
      tags: ["Pink City", "Cultural tour"],
      prices: [
        { vehicle: "Sedan", price: "₹5280", roundTrip: "₹10560" },
        { vehicle: "SUV Ertiga", price: "₹6600", roundTrip: "₹13200", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹7920", roundTrip: "₹15840", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹15400", roundTrip: "₹30800", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹24200", roundTrip: "₹48400", capacity: "35 guests" }
      ]
    },
    {
      destination: "Haridwar",
      distance: "25 km",
      time: "30 minutes",
      description: "Sacred journey from Rishikesh to Haridwar with our comfortable taxi service.",
      tags: ["Holy Ganges", "Very short trip"],
      prices: [
        { vehicle: "Sedan", price: "₹300", roundTrip: "₹600" },
        { vehicle: "SUV Ertiga", price: "₹375", roundTrip: "₹750", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹450", roundTrip: "₹900", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹875", roundTrip: "₹1750", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹1375", roundTrip: "₹2750", capacity: "35 guests" }
      ]
    },
    {
      destination: "Chandigarh",
      distance: "200 km",
      time: "4-5 hours",
      description: "Travel from Rishikesh to Chandigarh with our comfortable taxi service.",
      tags: ["Planned city", "Modern facilities"],
      prices: [
        { vehicle: "Sedan", price: "₹2400", roundTrip: "₹4800" },
        { vehicle: "SUV Ertiga", price: "₹3000", roundTrip: "₹6000", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹3600", roundTrip: "₹7200", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹7000", roundTrip: "₹14000", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹11000", roundTrip: "₹22000", capacity: "35 guests" }
      ]
    },
    {
      destination: "Shimla",
      distance: "200 km",
      time: "4-5 hours",
      description: "Experience the Queen of Hills from Rishikesh with our reliable cab service.",
      tags: ["Hill Station", "Mountain drive"],
      prices: [
        { vehicle: "Sedan", price: "₹2400", roundTrip: "₹4800" },
        { vehicle: "SUV Ertiga", price: "₹3000", roundTrip: "₹6000", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹3600", roundTrip: "₹7200", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹7000", roundTrip: "₹14000", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹11000", roundTrip: "₹22000", capacity: "35 guests" }
      ]
    },
    {
      destination: "Manali",
      distance: "410 km",
      time: "8-9 hours",
      description: "Adventure awaits in Manali from Rishikesh with our premium taxi service.",
      tags: ["Adventure Sports", "Himalayan beauty"],
      prices: [
        { vehicle: "Sedan", price: "₹4920", roundTrip: "₹9840" },
        { vehicle: "SUV Ertiga", price: "₹6150", roundTrip: "₹12300", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹7380", roundTrip: "₹14760", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹14350", roundTrip: "₹28700", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹22550", roundTrip: "₹45100", capacity: "35 guests" }
      ]
    },
    {
      destination: "Amritsar",
      distance: "380 km",
      time: "7-8 hours",
      description: "Visit the Golden Temple from Rishikesh with our comfortable cab service.",
      tags: ["Golden Temple", "Sikh heritage"],
      prices: [
        { vehicle: "Sedan", price: "₹4560", roundTrip: "₹9120" },
        { vehicle: "SUV Ertiga", price: "₹5700", roundTrip: "₹11400", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹6840", roundTrip: "₹13680", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹13300", roundTrip: "₹26600", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹20900", roundTrip: "₹41800", capacity: "35 guests" }
      ]
    },
    {
      destination: "Dehradun",
      distance: "40 km",
      time: "1 hour",
      description: "Travel from Rishikesh to Dehradun with our reliable taxi service.",
      tags: ["Educational hub", "Quick access"],
      prices: [
        { vehicle: "Sedan", price: "₹480", roundTrip: "₹960" },
        { vehicle: "SUV Ertiga", price: "₹600", roundTrip: "₹1200", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹720", roundTrip: "₹1440", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹1400", roundTrip: "₹2800", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹2200", roundTrip: "₹4400", capacity: "35 guests" }
      ]
    },
    {
      destination: "Jodhpur",
      distance: "600 km",
      time: "10-11 hours",
      description: "Explore the Blue City from Rishikesh with our premium cab service.",
      tags: ["Blue City", "Desert culture"],
      prices: [
        { vehicle: "Sedan", price: "₹7200", roundTrip: "₹14400" },
        { vehicle: "SUV Ertiga", price: "₹9000", roundTrip: "₹18000", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹10800", roundTrip: "₹21600", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹21000", roundTrip: "₹42000", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹33000", roundTrip: "₹66000", capacity: "35 guests" }
      ]
    },
    {
      destination: "Udaipur",
      distance: "640 km",
      time: "11-12 hours",
      description: "Visit the City of Lakes from Rishikesh with our comfortable cab service.",
      tags: ["City of Lakes", "Royal palaces"],
      prices: [
        { vehicle: "Sedan", price: "₹7680", roundTrip: "₹15360" },
        { vehicle: "SUV Ertiga", price: "₹9600", roundTrip: "₹19200", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹11520", roundTrip: "₹23040", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹22400", roundTrip: "₹44800", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹35200", roundTrip: "₹70400", capacity: "35 guests" }
      ]
    },
    {
      destination: "Ayodhya",
      distance: "730 km",
      time: "12-13 hours",
      description: "Sacred journey from Rishikesh to Ayodhya with our reliable taxi service.",
      tags: ["Religious Tourism", "Ram Janmabhoomi"],
      prices: [
        { vehicle: "Sedan", price: "₹8760", roundTrip: "₹17520" },
        { vehicle: "SUV Ertiga", price: "₹10950", roundTrip: "₹21900", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹13140", roundTrip: "₹26280", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹25550", roundTrip: "₹51100", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹40150", roundTrip: "₹80300", capacity: "35 guests" }
      ]
    },
    {
      destination: "Ahmedabad",
      distance: "910 km",
      time: "14-15 hours",
      description: "Long-distance travel from Rishikesh to Gujarat's commercial capital.",
      tags: ["Commercial Hub", "Sabarmati Ashram"],
      prices: [
        { vehicle: "Sedan", price: "₹10920", roundTrip: "₹21840" },
        { vehicle: "SUV Ertiga", price: "₹13650", roundTrip: "₹27300", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹16380", roundTrip: "₹32760", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹31850", roundTrip: "₹63700", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹50050", roundTrip: "₹100100", capacity: "35 guests" }
      ]
    }
  ]
};

// Basic cities with minimal route data
export const basicCityRoutes = {
  Haridwar: [
    {
      destination: "Delhi",
      distance: "240 km",
      time: "4-5 hours",
      description: "Travel from Haridwar to Delhi with our comfortable cab service.",
      tags: ["Capital City", "Express Highway"],
      prices: [
        { vehicle: "Sedan", price: "₹2880", roundTrip: "₹5760" },
        { vehicle: "SUV Ertiga", price: "₹3600", roundTrip: "₹7200", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹4320", roundTrip: "₹8640", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹8400", roundTrip: "₹16800", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹13200", roundTrip: "₹26400", capacity: "35 guests" }
      ]
    }
  ],
  
  Manali: [
    {
      destination: "Delhi",
      distance: "540 km", 
      time: "12-14 hours",
      description: "Travel from Manali to Delhi with our comfortable cab service.",
      tags: ["Capital City", "Long Distance"],
      prices: [
        { vehicle: "Sedan", price: "₹6480", roundTrip: "₹12960" },
        { vehicle: "SUV Ertiga", price: "₹8100", roundTrip: "₹16200", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹9720", roundTrip: "₹19440", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹18900", roundTrip: "₹37800", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹29700", roundTrip: "₹59400", capacity: "35 guests" }
      ]
    }
  ],

  Amritsar: [
    {
      destination: "Delhi",
      distance: "450 km",
      time: "8-9 hours", 
      description: "Travel from Amritsar to Delhi with our comfortable cab service.",
      tags: ["Capital City", "Highway Route"],
      prices: [
        { vehicle: "Sedan", price: "₹5400", roundTrip: "₹10800" },
        { vehicle: "SUV Ertiga", price: "₹6750", roundTrip: "₹13500", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹8100", roundTrip: "₹16200", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹15750", roundTrip: "₹31500", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹24750", roundTrip: "₹49500", capacity: "35 guests" }
      ]
    }
  ],

  Jodhpur: [
    {
      destination: "Delhi",
      distance: "620 km",
      time: "10-12 hours",
      description: "Travel from Jodhpur to Delhi with our comfortable cab service.",
      tags: ["Capital City", "Desert Route"],
      prices: [
        { vehicle: "Sedan", price: "₹7440", roundTrip: "₹14880" },
        { vehicle: "SUV Ertiga", price: "₹9300", roundTrip: "₹18600", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹11160", roundTrip: "₹22320", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹21700", roundTrip: "₹43400", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹34100", roundTrip: "₹68200", capacity: "35 guests" }
      ]
    }
  ],

  Udaipur: [
    {
      destination: "Delhi", 
      distance: "660 km",
      time: "11-13 hours",
      description: "Travel from Udaipur to Delhi with our comfortable cab service.",
      tags: ["Capital City", "Royal Route"],
      prices: [
        { vehicle: "Sedan", price: "₹7920", roundTrip: "₹15840" },
        { vehicle: "SUV Ertiga", price: "₹9900", roundTrip: "₹19800", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹11880", roundTrip: "₹23760", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹23100", roundTrip: "₹46200", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹36300", roundTrip: "₹72600", capacity: "35 guests" }
      ]
    }
  ],

  Ayodhya: [
    {
      destination: "Delhi",
      distance: "690 km", 
      time: "12-14 hours",
      description: "Travel from Ayodhya to Delhi with our comfortable cab service.",
      tags: ["Capital City", "Spiritual Route"],
      prices: [
        { vehicle: "Sedan", price: "₹8280", roundTrip: "₹16560" },
        { vehicle: "SUV Ertiga", price: "₹10350", roundTrip: "₹20700", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹12420", roundTrip: "₹24840", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹24150", roundTrip: "₹48300", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹37950", roundTrip: "₹75900", capacity: "35 guests" }
      ]
    }
  ],

  Ahmedabad: [
    {
      destination: "Delhi",
      distance: "950 km",
      time: "14-16 hours", 
      description: "Travel from Ahmedabad to Delhi with our comfortable cab service.",
      tags: ["Capital City", "Commercial Route"],
      prices: [
        { vehicle: "Sedan", price: "₹11400", roundTrip: "₹22800" },
        { vehicle: "SUV Ertiga", price: "₹14250", roundTrip: "₹28500", capacity: "6 guests" },
        { vehicle: "SUV Innova", price: "₹17100", roundTrip: "₹34200", capacity: "7 guests" },
        { vehicle: "Tempo Traveller", price: "₹33250", roundTrip: "₹66500", capacity: "25 guests" },
        { vehicle: "Bus", price: "₹52250", roundTrip: "₹104500", capacity: "35 guests" }
      ]
    }
  ]
};

// Combine main routes and basic routes
export const allCityRoutes = {
  ...cityRoutesData,
  ...basicCityRoutes
};


export const defaultRoutes = allCityRoutes;