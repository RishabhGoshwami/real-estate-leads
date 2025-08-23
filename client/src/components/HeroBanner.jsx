import React from "react";
import property6 from "../assets/background_01.jpg"; // apna correct path check kar lo
import PopupForm from "./PopupForm"; // ✅ import popup form

const HeroBanner = ({ isOpen, openPopup, closePopup }) => {
  return (
    <section
      className="relative w-full h-[90vh] overflow-hidden"
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
      <div className="absolute inset-0 bg-black/30 bg-opacity-40"></div>

      {/* Text + Button */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-6">
          Welcome to Your Dream Home
        </h1>

        {/* Request E-Brochure Button */}
        <button
          onClick={openPopup} // ✅ open popup state from parent
          className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 
                     hover:scale-110 transform transition duration-300 
                     text-black rounded-full shadow-lg animate-bounce"
        >
          📖 Request E-Brochure
        </button>
      </div>

      {/* Popup Form Integration */}
      <PopupForm isOpen={isOpen} onClose={closePopup} />
    </section>
  );
};

export default HeroBanner;
