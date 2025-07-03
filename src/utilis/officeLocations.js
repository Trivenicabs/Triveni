// officeLocations.js - Contains office location data for Triveni Cabs

export const officeLocations = {
  Delhi: {
    name: "Triveni Cabs Delhi",
    address: "Site 2, Industrial, S-65, Loni Rd, Block 9, Mohan Nagar, Sahibabad, Ghaziabad, Uttar Pradesh",
    pincode: "201007",
    fullAddress: "Site 2, Industrial, S-65, Loni Rd, Block 9, Mohan Nagar, Sahibabad, Ghaziabad, Uttar Pradesh 201007",
    landmark: "Loni Road",
    area: "Mohan Nagar, Sahibabad",
    contact: {
      phone: "7668570551",
      whatsapp: "7668570551"
    },
    timings: "24/7 Available"
  },

  Agra: {
    name: "Triveni Cabs Agra",
    address: "366, dandupura Tajganj Agra",
    pincode: "282006",
    fullAddress: "366, dandupura Tajganj Agra, 282006",
    landmark: "Tajganj",
    area: "Dandupura",
    contact: {
      phone: "7668570551",
      whatsapp: "7668570551"
    },
    timings: "24/7 Available"
  },

  Chandigarh: {
    name: "Triveni Cabs Chandigarh",
    address: "near Railway Station, Daria, Chandigarh",
    pincode: "160101",
    fullAddress: "near Railway Station, Daria, Chandigarh, 160101",
    landmark: "Near Railway Station",
    area: "Daria",
    contact: {
      phone: "7668570551",
      whatsapp: "7668570551"
    },
    timings: "24/7 Available"
  },
  
  Shimla: {
    name: "Triveni Cabs Shimla",
    address: "BCS, Saibu Niwas, Phase 3, New Shimla, Shimla, Himachal Pradesh",
    pincode: "171009",
    fullAddress: "BCS, Saibu Niwas, Phase 3, New Shimla, Shimla, Himachal Pradesh 171009",
    landmark: "Saibu Niwas",
    area: "Phase 3, New Shimla",
    contact: {
      phone: "7668570551",
      whatsapp: "7668570551"
    },
    timings: "24/7 Available"
  },
  
  Manali: {
    name: "Triveni Cabs Manali",
    address: "Near taxi stand 342, Manali, Siyal manali HP",
    pincode: "175131",
    fullAddress: "Near taxi stand 342, Manali, Siyal manali HP, 175131",
    landmark: "Near Taxi Stand 342",
    area: "Siyal Manali",
    contact: {
      phone: "7668570551",
      whatsapp: "7668570551"
    },
    timings: "24/7 Available"
  },
  
  Amritsar: {
    name: "Triveni Cabs Amritsar",
    address: "368 pheruman road, Shang nagar Rayya Punjab",
    pincode: "143112",
    fullAddress: "368 pheruman road, Shang nagar Rayya Punjab, 143112",
    landmark: "Pheruman Road",
    area: "Shang Nagar Rayya",
    contact: {
      phone: "7668570551",
      whatsapp: "7668570551"
    },
    timings: "24/7 Available"
  },
  
  Jaipur: {
    name: "Triveni Cabs Jaipur",
    address: "18/1 Raja park Adarsh Nagar, Raja park Jaipur",
    pincode: "302004",
    fullAddress: "18/1 Raja park Adarsh Nagar, Raja park Jaipur, 302004",
    landmark: "Raja Park",
    area: "Adarsh Nagar",
    contact: {
      phone: "7668570551",
      whatsapp: "7668570551"
    },
    timings: "24/7 Available"
  },
  
  Haridwar: {
    name: "Triveni Cabs Haridwar",
    address: "Rama Vihar colony jamalpur road, Shri ram vihar colony jwalapur, Uttrakhand",
    pincode: "249407",
    fullAddress: "Rama Vihar colony jamalpur road, Shri ram vihar colony jwalapur, Uttrakhand 249407",
    landmark: "Rama Vihar Colony",
    area: "Jwalapur",
    contact: {
      phone: "7668570551",
      whatsapp: "7668570551"
    },
    timings: "24/7 Available"
  },
  
  Dehradun: {
    name: "Triveni Cabs Dehradun",
    address: "Shop no 32 Doiwala Dehradun, Haridwar Dehradun highway, Dehradun",
    pincode: "248140",
    fullAddress: "Shop no 32 Doiwala Dehradun, Haridwar Dehradun highway, Dehradun 248140",
    landmark: "Haridwar Dehradun Highway",
    area: "Doiwala",
    contact: {
      phone: "7668570551",
      whatsapp: "7668570551"
    },
    timings: "24/7 Available"
  },
  
  Rishikesh: {
    name: "Triveni Cabs Rishikesh",
    address: "Near Laxman jhula, Behind temple of Mahadev, Rishikesh",
    pincode: "249302",
    fullAddress: "Near Laxman jhula, Behind temple of Mahadev, Rishikesh, 249302",
    landmark: "Near Laxman Jhula",
    area: "Behind Mahadev Temple",
    contact: {
      phone: "7668570551",
      whatsapp: "7668570551"
    },
    timings: "24/7 Available"
  }
};

// Helper function to get office by city name
export const getOfficeByCity = (cityName) => {
  return officeLocations[cityName] || null;
};

// Helper function to check if city has office
export const hasOffice = (cityName) => {
  return !!officeLocations[cityName];
};

// Helper function to get offices for route (origin and destination)
export const getRouteOffices = (originCity, destinationCity) => {
  const offices = {};
  
  if (hasOffice(originCity)) {
    offices.origin = officeLocations[originCity];
  }
  
  if (hasOffice(destinationCity)) {
    offices.destination = officeLocations[destinationCity];
  }
  
  return offices;
};

// Get all office locations
export const getAllOffices = () => {
  return Object.entries(officeLocations).map(([city, office]) => ({
    city,
    ...office
  }));
};