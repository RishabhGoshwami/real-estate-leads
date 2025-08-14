import React from "react";
import {
  FaStore,
  FaHotTub,
  FaSpa,
  FaDumbbell,
  FaChild,
  FaSwimmer,
  FaOm,
} from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { MdSportsSoccer, MdCelebration, MdTheaterComedy } from "react-icons/md";

const amenities = [
  {
    name: "Premium Commercial Plaza",
    icon: <FaStore className="text-green-600 text-4xl" />,
    desc: "Modern retail & shopping spaces designed for convenience.",
  },
  {
    name: "Relaxing Jacuzzi",
    icon: <FaHotTub className="text-green-600 text-4xl" />,
    desc: "Luxury hydrotherapy experience for stress relief.",
  },
  {
    name: "Rejuvenating Spa",
    icon: <FaSpa className="text-green-600 text-4xl" />,
    desc: "Wellness treatments for complete mind-body relaxation.",
  },
  {
    name: "Fully-Equipped Gym",
    icon: <FaDumbbell className="text-green-600 text-4xl" />,
    desc: "State-of-the-art fitness centre for an active lifestyle.",
  },
  {
    name: "Kids Play Arena",
    icon: <FaChild className="text-green-600 text-4xl" />,
    desc: "Safe & fun play zone for children of all ages.",
  },
  {
    name: "Yoga & Meditation Pavilion",
    icon: <FaOm className="text-green-600 text-4xl" />,
    desc: "Peaceful space for inner calm and spiritual balance.",
  },
  {
    name: "Badminton Court",
    icon: <MdSportsSoccer className="text-green-600 text-4xl" />,
    desc: "Professional-grade court for sports enthusiasts.",
  },
  {
    name: "Elegant Banquet Hall",
    icon: <MdCelebration className="text-green-600 text-4xl" />,
    desc: "Spacious hall for celebrations & gatherings.",
  },
  {
    name: "Party Lawn",
    icon: <GiPartyPopper className="text-green-600 text-4xl" />,
    desc: "Open green space for outdoor parties & events.",
  },
  {
    name: "Infinity Swimming Pool",
    icon: <FaSwimmer className="text-green-600 text-4xl" />,
    desc: "Crystal-clear pool for leisure & exercise.",
  },
  {
    name: "Dedicated Kids Pool",
    icon: <FaSwimmer className="text-green-600 text-4xl" />,
    desc: "Safe shallow pool designed for young swimmers.",
  },
  {
    name: "Open-Air Theatre",
    icon: <MdTheaterComedy className="text-green-600 text-4xl" />,
    desc: "Enjoy movies & cultural events under the stars.",
  },
];

const LuxuryAmenities = () => {
  return (
    <section
      id="amenities"
      className="py-16 px-6 md:px-12 bg-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Luxury <span className="text-green-600">Amenities</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Experience world-class facilities designed to enhance your lifestyle,
          offering comfort, recreation, and wellness all within your community.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            {amenity.icon}
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              {amenity.name}
            </h3>
            <p className="mt-2 text-gray-600 text-sm">{amenity.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LuxuryAmenities;
