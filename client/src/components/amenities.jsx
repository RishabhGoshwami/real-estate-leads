import React from "react";
import bg06 from "../assets/background_06.jpg";
import bg07 from "../assets/background_07.jpg";
import innerProjectsBg02 from "../assets/inner_projects_background_02.jpg";
import innerSlider01 from "../assets/inner_slider_01.jpg";

const Amenities = () => {
  return (
    <>
      {/* Section 1 */}
      <section
        className="relative py-20 px-6 md:px-12 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg06})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <img
              src={innerProjectsBg02}
              alt="Premium Workspaces"
              className="rounded-2xl shadow-lg max-w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Right Side - Text */}
          <div className="text-white">
            <h3 className="text-green-400 text-sm font-semibold uppercase tracking-wide mb-2">
              Amenities
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Work Where the Action is
            </h2>
            <p className="text-gray-200 mb-4 leading-relaxed">
              Premium workspaces from 5th to 8th floor designed for professionals, startups,
              and enterprises offering plug-and-play offices.
            </p>
            <p className="text-gray-200 mb-2">
              <strong>Smart Design:</strong> Office Units with customizable layouts.
            </p>
            <p className="text-gray-200 mb-2">
              <strong>Perks That Matter:</strong> high-speed elevators, 24x7 power backup, and a food court just an elevator ride away.
            </p>
            <p className="text-gray-200">
              <strong>First Impressions:</strong> impress clients with a lobby that makes for a grand entry.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section
        className="relative py-20 px-6 md:px-12 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg07})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Text */}
          <div className="text-white order-2 md:order-1">
            <h3 className="text-green-400 text-sm font-semibold uppercase tracking-wide mb-2">
              Amenities
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Contemporary Living for Urban Professionals
            </h2>
            <p className="text-gray-200 mb-4 leading-relaxed">
              450+ studio apartments from 9th to 24th floor designed for those aspiring for a lifestyle that reflects their status.
            </p>
            <p className="text-gray-200 mb-2">
              Space-efficient layouts with modern interiors
            </p>
            <p className="text-gray-200">
              Perfect for young professionals, expats, and urban dwellers.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center order-1 md:order-2">
            <img
              src={innerSlider01}
              alt="Contemporary Studio Apartments"
              className="rounded-2xl shadow-lg max-w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Amenities;
