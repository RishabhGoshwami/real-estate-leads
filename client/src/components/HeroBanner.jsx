import React from "react";
import property6 from "../assets/background_01.jpg"; // apna correct path check kar lo
import PopupForm from "./PopupForm"; // ✅ import popup form

const HeroBanner = ({ isOpen, openPopup, closePopup }) => {
  return (
    <section
      className="relative w-full h-[100vh] overflow-hidden"
      aria-label="Nirala World Hero Banner"
    >
      {/* Background Image */}
      <img
        src={property6}
        alt="Nirala World property"
        className="absolute w-full h-full object-cover"
        loading="eager"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
          Welcome to Your Dream Home
        </h1>

        {/* Property Info Box */}
        <div className="bg-white/40 backdrop-blur-md shadow-2xl rounded-2xl p-6 md:p-8 max-w-lg w-full mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
            1 RK Studio Apartment
          </h2>

          <p className="text-lg text-gray-800 font-bold mb-2">
            ₹ 65 L - 1.2 Cr
          </p>

          <p className="text-sm text-gray-700 mb-1">
            📍 Sector-12, Greater Noida West
          </p>
          <p className="text-sm text-gray-700 mb-1">
            🏗 Completion: Apr, 2030
          </p>
          <p className="text-sm text-green-700 font-medium mb-4">
            ✅ RERA Approved
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            <span className="px-3 py-1 bg-yellow-200 text-yellow-900 text-xs font-semibold rounded-full">
              NEW LAUNCH
            </span>
            <span className="px-3 py-1 bg-blue-200 text-blue-900 text-xs font-semibold rounded-full">
              High Price Appreciation
            </span>
            <span className="px-3 py-1 bg-green-200 text-green-900 text-xs font-semibold rounded-full">
              Units of Choice
            </span>
            <span className="px-3 py-1 bg-purple-200 text-purple-900 text-xs font-semibold rounded-full">
              Easy Payment Plans
            </span>
          </div>

          {/* CTA Button */}
          <button
            onClick={openPopup}
            className="w-full px-6 py-3 text-lg font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 
                       hover:scale-105 transform transition duration-300 
                       text-black rounded-xl shadow-lg"
          >
            📖 Request E-Brochure
          </button>
        </div>
      </div>

      {/* Popup Form */}
      <PopupForm isOpen={isOpen} onClose={closePopup} />
    </section>
  );
};

export default HeroBanner;
