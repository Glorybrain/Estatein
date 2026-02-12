import {
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";
import { BuildingStorefrontIcon, TableCellsIcon } from "@heroicons/react/24/solid";

export type Amenity = {
  label: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type Property = {
  id: string;
  title: string;
  location: string;
  price: string;
  images: string[];
  description: string;

  excerpt: string;
  imageSrc: string;
  imageAlt?: string;
  amenities: Amenity[];

  type: "apartment" | "house" | "villa" | "cottage" | "penthouse" | "mansion";
  sizeSqft: number;
  yearBuilt: number;
};

export const PROPERTIES: Property[] = [
  {
    id: "seaside-serenity-villa",
    title: "Seaside Serenity Villa",
    location: "Malibu, California",
    price: "$1,250,000",
    type: "villa",
    sizeSqft: 4200,
    yearBuilt: 2021,
    excerpt:
      "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
    description:
      "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood with modern finishes, ample natural light, and a serene outdoor space.",
    imageSrc: "/properties/pd-1.png",
    imageAlt: "Seaside Serenity Villa",
    images: [
      "/properties/pd-1.png",
      "/properties/pd-2.png",
      "/properties/pd-3.png",
      "/properties/pd-4.png",
      "/properties/pd-5.png",
      "/properties/pd-6.png",
      "/properties/pd-7.png",
      "/properties/pd-8.png",
      "/properties/pd-9.png",
      "/properties/pd-10.png",
    ],
    amenities: [
      { label: "4-Bedroom", icon: BuildingOfficeIcon },
      { label: "3-Bathroom", icon: BuildingStorefrontIcon },
      { label: "Villa", icon: TableCellsIcon },
    ],
  },

  {
    id: "metropolitan-haven",
    title: "Metropolitan Haven",
    location: "New York, USA",
    price: "$650,000",
    type: "apartment",
    sizeSqft: 1450,
    yearBuilt: 2018,
    excerpt: "Modern apartment in the heart of the city with great views...",
    description:
      "Immerse yourself in the energy of the city. This modern apartment offers open-plan living, sleek finishes, and easy access to key hotspots.",
    imageSrc: "/properties/pd-2.png",
    imageAlt: "Metropolitan Haven",
    images: [
      "/properties/pd-2.png",
      "/properties/pd-3.png",
      "/properties/pd-4.png",
      "/properties/pd-5.png",
      "/properties/pd-6.png",
      "/properties/pd-7.png",
      "/properties/pd-8.png",
      "/properties/pd-9.png",
      "/properties/pd-10.png",
      "/properties/pd-1.png",
    ],
    amenities: [
      { label: "2-Bedroom", icon: BuildingOfficeIcon },
      { label: "2-Bathroom", icon: BuildingStorefrontIcon },
      { label: "Apartment", icon: TableCellsIcon },
    ],
  },

  {
    id: "rustic-retreat-cottage",
    title: "Rustic Retreat Cottage",
    location: "Colorado, USA",
    price: "$350,000",
    type: "cottage",
    sizeSqft: 2100,
    yearBuilt: 2015,
    excerpt: "Cozy countryside cottage nestled amidst rolling hills...",
    description:
      "Find tranquility in the countryside. This charming cottage combines rustic character with comfortable modern touches and scenic surroundings.",
    imageSrc: "/properties/pd-3.png",
    imageAlt: "Rustic Retreat Cottage",
    images: [
      "/properties/pd-3.png",
      "/properties/pd-4.png",
      "/properties/pd-5.png",
      "/properties/pd-6.png",
      "/properties/pd-7.png",
      "/properties/pd-8.png",
      "/properties/pd-9.png",
      "/properties/pd-10.png",
      "/properties/pd-1.png",
      "/properties/pd-2.png",
    ],
    amenities: [
      { label: "3-Bedroom", icon: BuildingOfficeIcon },
      { label: "2-Bathroom", icon: BuildingStorefrontIcon },
      { label: "Cottage", icon: TableCellsIcon },
    ],
  },

  {
    id: "skyline-luxury-penthouse",
    title: "Skyline Luxury Penthouse",
    location: "Dubai, UAE",
    price: "$2,450,000",
    type: "penthouse",
    sizeSqft: 5200,
    yearBuilt: 2023,
    excerpt:
      "An ultra-modern penthouse offering breathtaking skyline views and premium finishes...",
    description:
      "Experience elevated living in this luxurious penthouse featuring floor-to-ceiling glass walls, private terrace access, smart home integration, and world-class amenities.",
    imageSrc: "/properties/pd-4.png",
    imageAlt: "Skyline Luxury Penthouse",
    images: [
      "/properties/pd-4.png",
      "/properties/pd-5.png",
      "/properties/pd-6.png",
      "/properties/pd-7.png",
      "/properties/pd-8.png",
      "/properties/pd-9.png",
      "/properties/pd-10.png",
      "/properties/pd-1.png",
      "/properties/pd-2.png",
      "/properties/pd-3.png",
    ],
    amenities: [
      { label: "5-Bedroom", icon: BuildingOfficeIcon },
      { label: "4-Bathroom", icon: BuildingStorefrontIcon },
      { label: "Penthouse", icon: TableCellsIcon },
    ],
  },

  {
    id: "lakeside-modern-mansion",
    title: "Lakeside Modern Mansion",
    location: "Geneva, Switzerland",
    price: "$3,800,000",
    type: "mansion",
    sizeSqft: 8500,
    yearBuilt: 2020,
    excerpt:
      "A breathtaking lakeside mansion blending modern architecture with serene waterfront views...",
    description:
      "This exclusive lakeside mansion offers expansive glass walls, a private dock, infinity pool, home cinema, and luxury spa facilities.",
    imageSrc: "/properties/pd-5.png",
    imageAlt: "Lakeside Modern Mansion",
    images: [
      "/properties/pd-5.png",
      "/properties/pd-6.png",
      "/properties/pd-7.png",
      "/properties/pd-8.png",
      "/properties/pd-9.png",
      "/properties/pd-10.png",
      "/properties/pd-1.png",
      "/properties/pd-2.png",
      "/properties/pd-3.png",
      "/properties/pd-4.png",
    ],
    amenities: [
      { label: "6-Bedroom", icon: BuildingOfficeIcon },
      { label: "5-Bathroom", icon: BuildingStorefrontIcon },
      { label: "Mansion", icon: TableCellsIcon },
    ],
  },
];

