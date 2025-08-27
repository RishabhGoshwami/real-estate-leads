import React from "react";
import {
  FaUtensils,
  FaConciergeBell,
  FaParking,
  FaEye,
} from "react-icons/fa";
import { MdOutlineStoreMallDirectory, MdSecurity } from "react-icons/md";
import { GiEntryDoor, GiOfficeChair } from "react-icons/gi";
 // ✅ background image import

const amenities = [
  {
    name: "Fine Dining Restaurants",
    icon: <FaUtensils className="text-green-600 text-4xl" />,
    desc: "Savor world-class cuisines in premium dining settings.",
  },
  {
    name: "Double Height Lobby for Studio Apartments",
    icon: <GiEntryDoor className="text-green-600 text-4xl" />,
    desc: "Grand, spacious lobby area offering a luxurious welcome.",
  },
  {
    name: "Dedicated Restaurant for Studio Apartments",
    icon: <FaConciergeBell className="text-green-600 text-4xl" />,
    desc: "Exclusive dining space catering to studio residents.",
  },
  {
    name: "Anchor Stores",
    icon: <MdOutlineStoreMallDirectory className="text-green-600 text-4xl" />,
    desc: "Large anchor stores to attract premium footfall.",
  },
  {
    name: "Reception and Security",
    icon: <MdSecurity className="text-green-600 text-4xl" />,
    desc: "24x7 security with reception services for assistance.",
  },
  {
    name: "Ample Parking Space",
    icon: <FaParking className="text-green-600 text-4xl" />,
    desc: "Sufficient vehicle parking for residents and visitors.",
  },
  {
    name: "High Visibility of Shops",
    icon: <FaEye className="text-green-600 text-4xl" />,
    desc: "Maximum exposure for retail units to enhance visibility.",
  },
  {
    name: "Professional Maintenance",
    icon: <GiOfficeChair className="text-green-600 text-4xl" />,
    desc: "Well-managed upkeep by trained maintenance staff.",
  },
];

const LuxuryAmenities = () => {
  return (
    <section
      id="amenities"
      className="relative py-16 px-6 md:px-12 bg-cover bg-center scroll-mt-20"
      
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold">
            Luxury <span className="text-green-400">Amenities</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-200">
            Experience premium facilities curated to elevate your lifestyle,
            blending luxury, security, and convenience within one space.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white/95 p-6 rounded-2xl shadow hover:shadow-lg transition"
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
