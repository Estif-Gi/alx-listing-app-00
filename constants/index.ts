import { PropertyProps } from "@/interfaces";

// Replace example.com with real images if needed
export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: { state: "Seminyak", city: "Bali", country: "Indonesia" },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "https://example.com/image1.jpg",
    discount: ""
  },
  // ... (other property objects exactly as you posted)
];

export const FILTERS = [
  "Top Villa",
  "Self Checkin",
  "Luxury Villa",
  "Beachfront",
  "Mountain View",
  "Pet Friendly",
  "City Center"
];

export const HERO_BG = "/images/hero-bg.jpg";
