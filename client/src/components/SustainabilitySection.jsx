import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/inner_01a.jpg";
import img2 from "../assets/inner_02a.jpg";
import img3 from "../assets/inner_03a.jpg";

export default function SustainabilitySection() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8 py-12 bg-gray-50">
      {/* Left Content */}
      <div>
        <h2 className="text-2xl font-bold mb-4">ELEGANT FINISHES</h2>
        <ul className="space-y-4 text-gray-700">
          <li>
            <strong>Energy Efficiency:</strong> High-performance glazing, LED
            lighting, and intelligent temperature control systems.
          </li>
          <li>
            <strong>Green Roofs & Terraces:</strong> Aid in stormwater
            management, improve air quality, and reduce the urban heat island
            effect.
          </li>
          <li>
            <strong>Sustainable Materials:</strong> Eco-conscious construction
            methods to reduce environmental impact.
          </li>
        </ul>
      </div>

      {/* Right Slider */}
      <div className="w-full flex justify-center">
        <Slider {...settings} className="w-64 h-64">
          {/* Slide 1 */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-64 h-64 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden">
              <img
                src={img1}
                alt="Energy Efficiency"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-center font-semibold text-black">
              Energy Efficiency
            </p>
          </div>

          {/* Slide 2 */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-64 h-64 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden">
              <img
                src={img2}
                alt="Green Roofs & Terraces"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-center font-semibold text-black">
              Green Roofs & Terraces
            </p>
          </div>

          {/* Slide 3 */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-64 h-64 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden">
              <img
                src={img3}
                alt="Sustainable Materials"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-center font-semibold text-black">
              Sustainable Materials
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
}
