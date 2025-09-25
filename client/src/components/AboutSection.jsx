import React from "react";
import inner01 from "../assets/inner_01.png";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 px-4 sm:px-6 md:px-12 scroll-mt-20 bg-white"
    >
      {/* Removed the dark gradient overlay for a clean white background */}
      
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center text-gray-800">
        {/* Left Side - Text */}
        <div className="space-y-5">
          <h3 className="text-teal-600 text-xs sm:text-sm font-semibold uppercase tracking-widest">
            About the Project
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug md:leading-tight">
            Welcome to <span className="text-teal-600">Nirala Gateway</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-medium text-gray-600">
            Prime Location: C-07, Sector 12, Greater Noida West
          </p>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            <strong>Nirala Gateway</strong> is a next-generation commercial hub
            that blends <span className="text-teal-600">retail spaces</span>,{" "}
            <span className="text-teal-600">fine dining</span>, modern{" "}
            <span className="text-teal-600">offices</span>, and{" "}
            <span className="text-teal-600">studio apartments</span> under one
            vibrant ecosystem. Designed to be more than just a marketplace, it
            redefines convenience and lifestyle with a perfect mix of work,
            leisure, and living.
          </p>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            With its strategic three-side open plot and direct connectivity to
            major roads, the project is set to become a landmark destination,
            offering unmatched visibility and accessibility.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center mt-8 md:mt-0">
          <img
            src={inner01}
            alt="Nirala Gateway Preview"
            className="rounded-2xl shadow-xl max-w-full h-auto transform hover:scale-105 transition duration-500 ease-in-out"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;