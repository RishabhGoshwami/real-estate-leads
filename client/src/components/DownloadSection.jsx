import React, { useState } from "react";
import { FaFilePdf, FaMap, FaListAlt, FaVideo, FaQrcode } from "react-icons/fa";
import PopupForm from "./PopupForm"; 
import PriceListPDF from "../assets/Price_List_Nirala_Gateway.pdf"; 
import QRCodeImg from "../assets/rera_qr.png"; // ✅ apna QR code image yaha add karo

const DownloadSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

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
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto mb-12">
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

        {/* Pricelist */}
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
          className="flex flex-col items-center cursor-pointer bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
        >
          <FaVideo className="text-green-600 text-5xl mb-3" />
          <p className="font-semibold text-gray-800">Walkthrough</p>
        </div>
      </div>

      {/* ✅ RERA Details Section */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          RERA Registration Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Text Info */}
          <div>
            <p className="text-gray-700 mb-2">
              <strong>Project:</strong> Nirala Gateway
            </p>
            <p className="text-gray-700 mb-2">
              <strong>RERA No:</strong> UPRERAPRJ531916
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Valid Till:</strong> 06/2025
            </p>
            <p className="text-gray-700">
              <strong>RERA Website:</strong>{" "}
              <a
                href="http://up-rera.in/projects"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-semibold hover:underline"
              >
                http://up-rera.in/projects
              </a>
            </p>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center">
            <FaQrcode className="text-green-600 text-5xl mb-3 hidden" />
            <img
              src={QRCodeImg}
              alt="RERA QR Code - Nirala Gateway"
              className="w-32 h-32 object-contain"
              loading="lazy"
            />
            <p className="text-sm text-gray-500 mt-2">Scan for RERA Verification</p>
          </div>
        </div>
      </div>

      {/* Popup Form */}
      <PopupForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};

export default DownloadSection;
