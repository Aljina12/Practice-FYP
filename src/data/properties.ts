import type { Property } from "../types/property";

import img1 from "../assets/img 1.png";
import img2 from "../assets/img 2.png";
import img3 from "../assets/img 3.png";
import img4 from "../assets/img 4.png";
import img5 from "../assets/img 5.png";
import img6 from "../assets/img 6.png";
import img7 from "../assets/img 7.png";
import img8 from "../assets/img 8.png";
import img9 from "../assets/img 9.png";
import img10 from "../assets/img 10.png";

export const properties: Property[] = [
  {
    id: 1,
    name: "Nordic Retreat with Sauna",
    location: "Norway",
    description:
      "Immerse yourself in the beauty of the Nordic landscape at this sleek and stylish cabin.",
    image: img1,
    price: 250,
    rating: 4.9,
    bedrooms: 2,
    guests: 3,
    superhost: true,
    country: "Norway",
    type: "Cabin",
  },

  {
    id: 2,
    name: "Cabin with Private Sauna",
    location: "Finland",
    description:
      "Get away from it all at this secluded cabin tucked away in the heart of the Nordic wilderness.",
    image: img2,
    price: 170,
    rating: 4.9,
    bedrooms: 2,
    guests: 4,
    superhost: true,
    country: "Finland",
    type: "Cabin",
  },

  {
    id: 3,
    name: "Cozy Cabin in the Woods",
    location: "Sweden",
    description:
      "Escape to this charming cabin nestled in the heart of the Nordic wilderness.",
    image: img3,
    price: 180,
    rating: 4.7,
    bedrooms: 2,
    guests: 3,
    superhost: false,
    country: "Sweden",
    type: "Cabin",
  },

  {
    id: 4,
    name: "Charming Cabin with Lake Access",
    location: "Norway",
    description:
      "Enjoy the best of both worlds with this charming Nordic cabin located near a beautiful lake.",
    image: img4,
    price: 150,
    rating: 4.9,
    bedrooms: 1,
    guests: 2,
    superhost: true,
    country: "Norway",
    type: "Cabin",
  },

  {
    id: 5,
    name: "Log Cabin with Fireplace",
    location: "Finland",
    description:
      "Experience the charm of a traditional Nordic log cabin with modern amenities.",
    image: img5,
    price: 99,
    rating: 4.9,
    bedrooms: 1,
    guests: 2,
    superhost: false,
    country: "Finland",
    type: "Cabin",
  },

  {
    id: 6,
    name: "Cabin with Mountain Views",
    location: "Switzerland",
    description:
      "Soak in the stunning mountain views from this beautiful Nordic-style cabin.",
    image: img6,
    price: 225,
    rating: 4.8,
    bedrooms: 2,
    guests: 5,
    superhost: true,
    country: "Switzerland",
    type: "Cabin",
  },

  {
    id: 7,
    name: "Modern Nordic House",
    location: "Sweden",
    description:
      "A modern Nordic-style house surrounded by beautiful forests and peaceful landscapes.",
    image: img7,
    price: 210,
    rating: 4.8,
    bedrooms: 3,
    guests: 5,
    superhost: true,
    country: "Sweden",
    type: "House",
  },

  {
    id: 8,
    name: "Peaceful Mountain Cabin",
    location: "Norway",
    description:
      "Stay in a peaceful mountain cabin surrounded by incredible landscapes.",
    image: img8,
    price: 195,
    rating: 4.7,
    bedrooms: 2,
    guests: 4,
    superhost: false,
    country: "Norway",
    type: "Cabin",
  },

  {
    id: 9,
    name: "Traditional Nordic Home",
    location: "Finland",
    description:
      "A traditional Nordic home with a cozy interior and beautiful natural surroundings.",
    image: img9,
    price: 160,
    rating: 4.8,
    bedrooms: 2,
    guests: 4,
    superhost: true,
    country: "Finland",
    type: "House",
  },

  {
    id: 10,
    name: "Luxury Mountain Retreat",
    location: "Switzerland",
    description:
      "Relax in this beautiful mountain retreat with stunning views and modern facilities.",
    image: img10,
    price: 300,
    rating: 5.0,
    bedrooms: 3,
    guests: 6,
    superhost: true,
    country: "Switzerland",
    type: "Villa",
  },
];