import React, { useState } from "react";
import PopupForm from "./PopupForm";

const floorPlans = [
  {
    title: "3 BHK Premium Apartment",
    area: "1897 Sq. Ft.",
    image: "https://niralaproject.in/nirala-estate-phase-4/images/floor/3bhk-1897-sq.ft.jpg",
  },
  {
    title: "3 BHK Contemporary Layout",
    area: "1535 Sq. Ft.",
    image: "https://www.niralagroup.co.in/nirala-estate-ph4/gallery/1535_3bhk_G.jpeg",
  },
  {
    title: "3 BHK Compact & Cozy",
    area: "1250 Sq. Ft.",
    image: "https://www.niralagroup.co.in/nirala-estate-ph5/gallery/1250_3bhk_C.jpeg",
  },
];

const FloorPlanSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section
      id="floor-plan"
      className="py-16 px-6 md:px-12 bg-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Explore <span className="text-green-600">Floor Plans</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Click on any floor plan to request the <strong>brochure</strong> and <strong>floor plan details</strong> directly on WhatsApp.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {floorPlans.map((plan, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden cursor-pointer group"
            onClick={() => setIsFormOpen(true)}
          >
            <img
              src={plan.image}
              alt={`${plan.title} - ${plan.area} - Nirala Estate`}
              className="w-full h-64 object-cover group-hover:blur-sm transition duration-300"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{plan.title}</h3>
              <p className="text-gray-600 mt-2">{plan.area}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Form Popup */}
      <PopupForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};

export default FloorPlanSection;
