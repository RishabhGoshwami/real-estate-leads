import React from "react";
import property2 from "../assets/property2.jpg?w=1920&format=webp"; // Optimized import

const Highlights = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Updated heading with SEO keywords */}
      <h2 className="text-3xl font-bold text-blue-900 mb-6">
        Nirala World Gateway: Location and Connectivity
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Text Section with improved SEO keywords */}
        <div className="text-gray-800 space-y-4">
          <p>
            This premium **commercial property in Greater Noida** enjoys outstanding accessibility and visibility, with prominent
            frontage on all sides – ideal for retail, commercial, and studio apartment development.
          </p>

          {/* List items are well-structured for readability */}
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>PLOT AREA:</strong> 10,400 Sq.m.
            </li>
            <li>
              <strong>LOCATION:</strong> C-07, Sector 12, Greater Noida West
            </li>
            <li>
              <strong>ACCESS ROADS:</strong> 130m / 80m / 24m wide roads
            </li>
            <li>
              <strong>Easy Access to Delhi and Surrounding Areas:</strong>
              {/* Nested list for better clarity */}
              <ul className="list-disc list-inside ml-5 space-y-2">
                <li>
                  ~10-minute drive to the upcoming Metro Station
                </li>
                <li>
                  ~15-minute drive to the Delhi-Meerut National Highway
                </li>
                <li>
                  ~40-minute drive to the upcoming Jewar Airport
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div>
          <img
            src={property2}
            alt="An aerial map showing the location of Nirala World Gateway at C-07, Sector 12, Greater Noida West, highlighting its proximity to main roads and surrounding areas."
            className="w-full h-auto rounded shadow-lg"
            loading="lazy"
            width="1920"
            height="1080"
          />
        </div>
      </div>
    </div>
  );
};

export default Highlights;
