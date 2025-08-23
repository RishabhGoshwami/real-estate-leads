import React from "react";
import { FaStore, FaUtensils, FaBuilding, FaBed } from "react-icons/fa";
import testimonialsBg from "../assets/testimonials_background.jpg"; // ✅ background image import

const projectComponents = [
  {
    title: "Retail Shops & Anchor Stores",
    floors: "Lower Ground to 2nd Floor",
    purpose:
      "To host a wide range of retail outlets and anchor stores, catering to both everyday shopping and premium brands.",
    design:
      "Spacious, open-floor layouts for tenant flexibility. High visibility and direct access from adjoining roads to boost foot traffic.",
    features:
      "Large-scale anchor stores on the Lower Ground floor to serve as crowd pullers and establish a strong retail destination.",
    icon: <FaStore className="text-green-600 text-4xl" />,
  },
  {
    title: "Restaurants",
    floors: "3rd Floor",
    purpose: "To offer fine dining options for a tranquil dining experience.",
    design:
      "Open, airy spaces with large windows to maximize natural light and offer scenic views. Green terraces provide an organic connection to nature.",
    features:
      "Landscaped outdoor seating areas for comfortable dining surrounded by greenery and urban vistas.",
    icon: <FaUtensils className="text-green-600 text-4xl" />,
  },
  {
    title: "Offices",
    floors: "5th to 8th Floors",
    purpose:
      "To provide modern workspaces for professionals, startups, and established businesses.",
    design:
      "Contemporary office layouts with high-speed elevators, energy-efficient HVAC systems, and flexible unit configurations.",
    features: "Approx. 132 office units to accommodate varied business needs.",
    icon: <FaBuilding className="text-green-600 text-4xl" />,
  },
  {
    title: "Studio Apartments",
    floors: "9th to 24th Floors",
    purpose:
      "To deliver modern urban living for professionals, small families, and city dwellers.",
    design:
      "Smartly designed studios focusing on space optimization, natural lighting, and modern aesthetics.",
    features:
      "Private Gym exclusively for residents & an In-house Restaurant for added convenience.",
    icon: <FaBed className="text-green-600 text-4xl" />,
  },
];

const FloorPlanSection = () => {
  return (
    <section
      id="floor-plan"
      className="relative py-16 px-6 md:px-12 bg-cover bg-center scroll-mt-20"
      style={{ backgroundImage: `url(${testimonialsBg})` }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold">
            Project <span className="text-green-400">Components</span>
          </h2>
          <p className="mt-3 max-w-3xl mx-auto text-lg text-gray-200">
            Discover thoughtfully planned spaces blending retail, dining, work,
            and modern urban living — all within one integrated development.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {projectComponents.map((component, idx) => (
            <div
              key={idx}
              className="bg-white/95 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                {component.icon}
                <h3 className="text-xl font-semibold text-gray-800">
                  {component.title}
                </h3>
              </div>
              <p className="text-sm text-gray-500 mb-2">
                <strong>Floors:</strong> {component.floors}
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
