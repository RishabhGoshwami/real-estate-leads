import React, { useState } from "react";
import { FaFilePdf, FaMap, FaListAlt, FaVideo } from "react-icons/fa";
import PopupForm from "./PopupForm"; // ✅ popup form import
import PriceListPDF from "../assets/Price_List_Nirala_Gateway.pdf"; // ✅ pdf import

const DownloadSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  // ✅ Brochure / Floor Plan click pe popup form open
  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  return (
    <section
      id="download"
      className="py-16 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          <span className="text-green-600">Download</span> Section
        </h2>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg">
          Access all essential documents and walkthroughs for{" "}
          <strong>Nirala Gateway</strong>.
        </p>
      </div>

      {/* Download Icons Grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto">
        {/* Brochure */}
        <div
          onClick={handleOpenForm}
          className="flex flex-col items-center cursor-pointer bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
        >
          <FaFilePdf className="text-green-600 text-5xl mb-3" />
          <p className="font-semibold text-gray-800">Brochure</p>
        </div>

        {/* Floor Plan */}
        <div
          onClick={handleOpenForm}
          className="flex flex-col items-center cursor-pointer bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
        >
          <FaMap className="text-green-600 text-5xl mb-3" />
          <p className="font-semibold text-gray-800">Floor Plan</p>
        </div>

        {/* Pricelist & Payment Plan */}
        <a
          href={PriceListPDF}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
        >
          <FaListAlt className="text-green-600 text-5xl mb-3" />
          <p className="font-semibold text-gray-800">Pricelist & Payment Plan</p>
        </a>

        {/* Walkthrough */}
        <div
          onClick={handleOpenForm}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
        >
          <FaVideo className="text-green-600 text-5xl mb-3" />
          <p className="font-semibold text-gray-800">Walkthrough</p>
        </div>
      </div>

      {/* Popup Form */}
      <PopupForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};

export default DownloadSection;
