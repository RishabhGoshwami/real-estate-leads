import React from "react";
import background03 from "../assets/background_03.jpg"; // ✅ background image
import inner01 from "../assets/inner_01.png"; // ✅ right side image

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-12 scroll-mt-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${background03})` }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center text-white">
        {/* Left Side - Text */}
        <div>
          <h3 className="text-green-400 text-sm font-semibold uppercase tracking-wide mb-2">
            Project Overview
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Nirala Gateway
          </h2>
          <p className="text-lg font-medium mb-6">
            At C-07, Sector 12, Greater Noida West
          </p>

          <p className="text-gray-200 leading-relaxed mb-4">
            <strong>NIRALA GATEWAY</strong> is a commercial development designed
            to create a vibrant urban environment by integrating retail,
            restaurants, offices, and studio apartments within a single dynamic
            structure. The project offers a unique, multi-functional space that
            caters to diverse needs including business, leisure, and modern
            living.
          </p>

          <p className="text-gray-200 leading-relaxed">
            Strategically located on a prominent three-side open plot, the
            building will serve as an iconic landmark with excellent visibility
            and direct access from three major roads.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img
            src={inner01}
            alt="Nirala Gateway Inside View"
            className="rounded-2xl shadow-lg max-w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
