import React from "react";
import { FaRupeeSign, FaRoad, FaBuilding, FaTools, FaPercentage, FaInfoCircle } from "react-icons/fa";

const pricePlans = [
  {
    project: "NIRALA GATEWAY",
    plans: [
      {
        type: "Studio Apartment / Office",
        area: "Super Area (As per layout)",
        price: "₹ 12,500/- Per Sq. Ft.",
      },
    ],
  },
];

const PricePlanSection = () => {
  return (
    <section
      id="price-plan"
      className="py-16 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          <span className="text-green-600">Price Plan</span> Overview
        </h2>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg">
          Explore our <strong>Studio Apartments & Office Spaces</strong> at{" "}
          <strong>Nirala Gateway</strong>. Premium commercial units designed
          with modern infrastructure and excellent investment potential.
        </p>
      </div>

      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2">
        {pricePlans.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
              {project.project}
            </h3>

            <div className="space-y-4">
              {project.plans.map((plan, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-green-50 p-5 rounded-xl border border-green-100 hover:bg-green-100 transition"
                >
                  <div className="text-left">
                    <p className="font-semibold text-gray-800 text-lg">{plan.type}</p>
                    <p className="text-gray-600 text-sm">Rate on: {plan.area}</p>
                  </div>
                  <p className="mt-3 sm:mt-0 font-bold text-green-700 text-xl flex items-center gap-1">
                    <FaRupeeSign /> {plan.price.replace("₹ ", "")}
                  </p>
                </div>
              ))}
            </div>

            {/* Extra Notes from PDF */}
            <div className="mt-8 text-base text-gray-700 space-y-4">
              <p className="flex items-center gap-2">
                <FaRupeeSign className="text-green-600" />
                <strong>Pre Launch Price:</strong> ₹ 10,500/-* PSF
              </p>
              <p className="flex items-center gap-2">
                <FaRoad className="text-green-600" />
                <strong>PLC (Prime Location Charges):</strong> Main Road ₹600/- PSF | 80 Mtr Road ₹300/- PSF
              </p>
              <p className="flex items-center gap-2">
                <FaBuilding className="text-green-600" />
                <strong>Floor PLC:</strong> 9th–11th: ₹250/- | 12th–15th: ₹200/- | 16th–18th: ₹150/- |
                19th–20th: ₹100/- | 21st–22nd: ₹50/- | 23rd: NIL | 24th–50th: ₹50/-
              </p>
              <p className="flex items-center gap-2">
                <FaTools className="text-green-600" />
                <strong>IFMS:</strong> ₹100/- per Sq. Ft. (at possession)
              </p>
              <p className="flex items-center gap-2">
                <FaTools className="text-green-600" />
                <strong>Maintenance:</strong> ₹8/- per Sq. Ft. (1 Year advance at possession)
              </p>
              <p className="flex items-center gap-2">
                <FaPercentage className="text-green-600" />
                <strong>GST:</strong> 12% (Discounted 5%) → Net 7%
              </p>
              <p className="flex items-start gap-2 text-sm text-gray-500 italic">
                <FaInfoCircle className="text-green-500 mt-1" />
                *Price list & payment plan subject to change without notice.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricePlanSection;
