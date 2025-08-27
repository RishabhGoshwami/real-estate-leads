import React from "react";

import inner01 from "../assets/inner_01.png"; 

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-12 scroll-mt-20 bg-cover bg-center"
      
    >
      {/* Overlay with gradient for better readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/40"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center text-white">
        
        {/* Left Side - Text */}
        <div className="space-y-5">
          <h3 className="text-green-400 text-sm font-semibold uppercase tracking-widest">
            About the Project
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Welcome to <span className="text-green-400">Nirala Gateway</span>
          </h2>
          <p className="text-lg font-medium text-gray-200">
            Prime Location: C-07, Sector 12, Greater Noida West
          </p>

          <p className="text-gray-300 leading-relaxed">
            <strong>Nirala Gateway</strong> is a next-generation commercial hub
            that blends <span className="text-green-400">retail spaces</span>, 
            <span className="text-green-400"> fine dining</span>, modern 
            <span className="text-green-400"> offices</span>, and 
            <span className="text-green-400"> studio apartments</span> under one
            vibrant ecosystem. Designed to be more than just a marketplace, it
            redefines convenience and lifestyle with a perfect mix of work, 
            leisure, and living.
          </p>

          <p className="text-gray-300 leading-relaxed">
            With its strategic three-side open plot and direct connectivity to 
            major roads, the project is set to become a landmark destination, 
            offering unmatched visibility and accessibility.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
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
