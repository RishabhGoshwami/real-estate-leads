import React, { useState } from "react";
import backgroundImg from "../assets/background_04.jpg";
import img1 from "../assets/inner_slider_04.jpg";
import img2 from "../assets/inner_slider_03.jpg";

const LocationDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2];

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div
      className="relative py-16 px-6 lg:px-20 text-white"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
       <div>
            <iframe
              title="Nirala Gateway Location"
              className="w-full h-80 rounded-xl shadow-lg"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.786842643626!2d77.4747558!3d28.5647563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef83fed3ee85%3A0xdd9959a0e2167730!2sNirala%20Gateway!5e0!3m2!1sen!2sin!4v1692877397000!5m2!1sen!2sin"
            />
          </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-6">
        {/* Image Slider */}
        <div className="relative w-full h-[400px] overflow-hidden rounded-2xl shadow-lg">
          <img
            src={images[currentIndex]}
            alt="Location view"
            className="w-full h-full object-cover transition-all duration-700"
          />
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
          >
            ❯
          </button>
        </div>

        {/* Location Content + Map */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold uppercase">Location Details</h2>
          <p className="text-lg">
            The property enjoys outstanding accessibility and visibility, with
            prominent frontage on all sides—ideal for retail, commercial, and
            studio apartment development.
          </p>
          <ul className="space-y-2 text-lg">
            <li>
              <strong>PLOT AREA:</strong> 10,400 Sq.m.
            </li>
            <li>
              <strong>LOCATION:</strong> C-07, Sector 12, Greater Noida West
            </li>
            <li>
              <strong>ACCESS ROADS:</strong> 130 m / 80 m / 24 m wide roads
            </li>
          </ul>
          <h3 className="text-2xl font-semibold">
            Easy Access to Delhi & Surrounding Areas
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>~10-minute drive to the upcoming Metro Station.</li>
            <li>~15-minute drive to the Delhi-Meerut National Highway.</li>
            <li>~40-minute drive to the upcoming Jewar Airport.</li>
          </ul>

          {/* Embedded Google Map */}
         
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
