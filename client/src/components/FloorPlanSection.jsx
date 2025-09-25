import React from "react";
import { FaStore, FaUtensils, FaBuilding, FaBed } from "react-icons/fa";
import floorBg from "../assets/background_02.jpg"; // ✅ yaha aapka background image import

const projectComponents = [
  {
    title: "Retail Shops & Anchor Stores",
    floors: "Lower Ground to 2nd Floor",
    purpose:
      "A vibrant retail destination designed to bring together everyday essentials and premium lifestyle brands under one roof.",
    design:
      "Open, flexible layouts with maximum frontage and easy road access to ensure high visibility and seamless footfall.",
    features:
      "Large anchor stores on the Lower Ground floor act as key attractions, driving traffic across the retail zone.",
    icon: <FaStore className="text-green-500 text-4xl" />,
  },
  {
    title: "Restaurants",
    floors: "3rd Floor",
    purpose:
      "An elevated dining hub offering a mix of fine dining, casual eateries, and culinary experiences.",
    design:
      "Spacious interiors with floor-to-ceiling windows for natural light, complemented by lush green terrace extensions.",
    features:
      "Beautifully landscaped outdoor seating spaces that provide a refreshing dining atmosphere amidst urban energy.",
    icon: <FaUtensils className="text-green-500 text-4xl" />,
  },
  {
    title: "Offices",
    floors: "5th to 8th Floors",
    purpose:
      "Smart business workspaces designed for startups, professionals, and established enterprises.",
    design:
      "Flexible configurations with energy-efficient HVAC, advanced infrastructure, and high-speed elevator access.",
    features:
      "Over 130 modern office units tailored to suit diverse business requirements.",
    icon: <FaBuilding className="text-green-500 text-4xl" />,
  },
  {
    title: "Studio Apartments",
    floors: "9th to 24th Floors",
    purpose:
      "Modern living crafted for professionals and urban residents seeking style and convenience.",
    design:
      "Space-optimized layouts with abundant natural light, premium finishes, and elegant aesthetics.",
    features:
      "Exclusive resident-only gym and an in-house restaurant, creating a self-sufficient lifestyle hub.",
    icon: <FaBed className="text-green-500 text-4xl" />,
  },
];

const FloorPlanSection = () => {
  return (
    <section
      id="floor-plan"
      className="relative py-20 px-6 md:px-12 scroll-mt-20"
      style={{
        backgroundImage: `url(${floorBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Project <span className="text-green-400">Components</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
            Explore a thoughtfully designed ecosystem combining shopping, dining,
            workspaces, and modern living — all within one landmark destination.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {projectComponents.map((component, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 duration-500 p-8 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                {component.icon}
                <h3 className="text-xl font-bold text-gray-800">
                  {component.title}
                </h3>
              </div>
              <p className="text-sm text-gray-500 mb-2">
                <strong className="text-gray-700">Floors:</strong> {component.floors}
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Purpose:</strong> {component.purpose}
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Design:</strong> {component.design}
              </p>
              <p className="text-gray-700">
                <strong>Special Features:</strong> {component.features}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloorPlanSection;
