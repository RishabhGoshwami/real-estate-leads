import React from "react";

import innerProjectsBg02 from "../assets/inner_projects_background_02.jpg";
import innerSlider01 from "../assets/inner_slider_01.jpg";

const Amenities = () => {
  return (
    <>
      {/* Section 1 - Workspaces */}
      <section
        className="relative py-20 px-6 md:px-12 bg-cover bg-center"
        style={{ backgroundImage: `url(${innerProjectsBg02})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <img
              src={innerProjectsBg02}
              alt="Premium Workspaces"
              className="rounded-2xl shadow-xl max-w-full h-auto transform hover:scale-105 transition duration-500 ease-in-out"
              loading="lazy"
            />
          </div>

          {/* Right Side - Text */}
          <div className="text-white space-y-4">
            <h3 className="text-green-400 text-sm font-semibold uppercase tracking-widest">
              Amenities
            </h3>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Premium Workspaces for Modern Businesses
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Elevate your work experience with <span className="text-green-400">state-of-the-art offices</span> 
              from the 5th to 8th floor. Designed for startups, professionals, and enterprises, 
              these plug-and-play spaces provide flexibility and functionality in one dynamic setup.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li><strong>Smart Design:</strong> Fully customizable office layouts.</li>
              <li><strong>Perks That Matter:</strong> High-speed elevators, 24x7 power backup, and a food court just steps away.</li>
              <li><strong>Grand Entry:</strong> A welcoming lobby designed to impress clients and visitors.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2 - Studio Apartments */}
      <section
        className="relative py-20 px-6 md:px-12 bg-cover bg-center"
        style={{ backgroundImage: `url(${innerSlider01})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/60 to-black/40"></div>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="text-white space-y-4 order-2 md:order-1">
            <h3 className="text-green-400 text-sm font-semibold uppercase tracking-widest">
              Amenities
            </h3>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Stylish Living Spaces for Urban Professionals
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Discover 450+ <span className="text-green-400">studio apartments</span> from the 9th to 24th floor, 
              designed for ambitious individuals seeking a lifestyle that matches their aspirations.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>Space-optimized layouts with premium interiors</li>
              <li>Ideal for young professionals, expats, and modern city dwellers</li>
              <li>Blend of comfort, style, and convenience</li>
            </ul>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center order-1 md:order-2">
            <img
              src={innerSlider01}
              alt="Contemporary Studio Apartments"
              className="rounded-2xl shadow-xl max-w-full h-auto transform hover:scale-105 transition duration-500 ease-in-out"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Amenities;
