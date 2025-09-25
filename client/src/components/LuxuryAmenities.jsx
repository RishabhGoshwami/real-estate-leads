import React from "react";
import {
  FaUtensils,
  FaConciergeBell,
  FaParking,
  FaEye,
} from "react-icons/fa";
import { MdOutlineStoreMallDirectory, MdSecurity } from "react-icons/md";
import { GiEntryDoor, GiOfficeChair } from "react-icons/gi";

// ✅ amenities data
const amenities = [
  {
    name: "Fine Dining Restaurants",
    icon: <FaUtensils className="text-gray-700 text-4xl" />,
    desc: "Savor world-class cuisines in premium dining settings.",
  },
  {
    name: "Double Height Lobby for Studio Apartments",
    icon: <GiEntryDoor className="text-gray-700 text-4xl" />,
    desc: "Grand, spacious lobby area offering a luxurious welcome.",
  },
  {
    name: "Dedicated Restaurant for Studio Apartments",
    icon: <FaConciergeBell className="text-gray-700 text-4xl" />,
    desc: "Exclusive dining space catering to studio residents.",
  },
  {
    name: "Anchor Stores",
    icon: <MdOutlineStoreMallDirectory className="text-gray-700 text-4xl" />,
    desc: "Large anchor stores to attract premium footfall.",
  },
  {
    name: "Reception and Security",
    icon: <MdSecurity className="text-gray-700 text-4xl" />,
    desc: "24x7 security with reception services for assistance.",
  },
  {
    name: "Ample Parking Space",
    icon: <FaParking className="text-gray-700 text-4xl" />,
    desc: "Sufficient vehicle parking for residents and visitors.",
  },
  {
    name: "High Visibility of Shops",
    icon: <FaEye className="text-gray-700 text-4xl" />,
    desc: "Maximum exposure for retail units to enhance visibility.",
  },
  {
    name: "Professional Maintenance",
    icon: <GiOfficeChair className="text-gray-700 text-4xl" />,
    desc: "Well-managed upkeep by trained maintenance staff.",
  },
];

// ✅ colors array for cards (lighter shades for a white background)
const cardColors = [
  "bg-green-100",
  "bg-blue-100",
  "bg-purple-100",
  "bg-yellow-100",
  "bg-pink-100",
  "bg-indigo-100",
  "bg-red-100",
  "bg-teal-100",
];

const LuxuryAmenities = () => {
  return (
    <section
      id="amenities"
      className="py-16 px-6 md:px-12 bg-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold">
            Luxury <span className="text-green-600">Amenities</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
            Experience premium facilities curated to elevate your lifestyle,
            blending luxury, security, and convenience within one space.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 ${cardColors[index % cardColors.length]}`}
            >
              {amenity.icon}
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {amenity.name}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{amenity.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryAmenities;