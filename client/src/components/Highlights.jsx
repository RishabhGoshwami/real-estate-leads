import React from "react";

const Highlights = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Location Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Text Section */}
        <div className="text-gray-800 space-y-4">
          <p>
            The property enjoys outstanding accessibility and visibility, with prominent
            frontage on all sides – ideal for retail, commercial, and studio apartment development.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>PLOT AREA:</strong> 10,400 Sq.m.</li>
            <li><strong>LOCATION:</strong> C-07, Sector 12, Greater Noida West</li>
            <li><strong>ACCESS ROADS:</strong> 130m / 80m / 24m wide roads</li>
            <li><strong>Easy Access to Delhi and Surrounding Areas:</strong></li>
            <ul className="list-disc list-inside ml-5 space-y-2">
              <li>~10-minute drive to the upcoming Metro Station</li>
              <li>~15-minute drive to the Delhi-Meerut National Highway</li>
              <li>~40-minute drive to the upcoming Jewar Airport</li>
            </ul>
          </ul>
        </div>

        {/* Image Section */}
        <div>
          <img
            src="/property2.jpg"
            alt="Location Map"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Highlights;
