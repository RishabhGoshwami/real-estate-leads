import React, { useState } from "react";
import {
  FaFilePdf,
  FaMap,
  FaListAlt,
  FaVideo,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";
import PopupForm from "./PopupForm";
import PriceListPDF from "../assets/Price_List_Nirala_Gateway.pdf";
import QRCodeImg from "../assets/rera_qr.png";
import BrochurePDF from "../assets/Nirala Gateway_99acres.pdf";
import GalleryBg from "../assets/gallery_7.jpg"; // ✅ background image import

// ✅ PDF.js worker config
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const DownloadSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const handleOpenForm = (doc) => {
    setSelectedDoc(doc);
    setIsFormOpen(true);
  };

  const handleFormSuccess = () => {
    setIsFormOpen(false);
    if (selectedDoc === "brochure") {
      window.open(BrochurePDF, "_blank");
    }
    if (selectedDoc === "pricelist") {
      window.open(PriceListPDF, "_blank");
    }
    if (selectedDoc === "floorplan") {
      alert("Floor Plan will be available soon.");
    }
    if (selectedDoc === "walkthrough") {
      alert("Walkthrough video will be shared soon.");
    }
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const goToPrevPage = () => setPageNumber((p) => (p > 1 ? p - 1 : 1));
  const goToNextPage = () =>
    setPageNumber((p) => (p < numPages ? p + 1 : numPages));

  return (
    <section
      id="Pricing-plan"
      className="py-24 px-6 md:px-12 bg-cover bg-center bg-fixed scroll-mt-20"
      style={{ backgroundImage: `url(${GalleryBg})` }} // ✅ background apply
    >
      {/* Overlay for readability */}
      <div className="rounded-3xl p-6 md:p-12">
        {/* Heading */}
        
        {/* Download Icons Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto mb-20">
          {[
            {
              id: "floorplan",
              icon: <FaMap className="text-green-600 text-5xl mb-3" />,
              title: "Floor Plan",
              action: () => handleOpenForm("floorplan"),
            },
            {
              id: "pricelist",
              icon: <FaListAlt className="text-green-600 text-5xl mb-3" />,
              title: "Pricelist & Payment Plan",
              action: () => handleOpenForm("pricelist"),
            },
            {
              id: "walkthrough",
              icon: <FaVideo className="text-green-600 text-5xl mb-3" />,
              title: "Walkthrough",
              action: () => handleOpenForm("walkthrough"),
            },
          ].map((item) => (
            <div
              key={item.id}
              onClick={item.action}
              className="group flex flex-col items-center justify-center cursor-pointer bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 min-h-[180px]"
            >
              {item.icon}
              <p className="font-semibold text-gray-800 text-lg text-center mt-2">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* ✅ Brochure Preview Section */}
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Preview Brochure
          </h3>

          {/* PDF Viewer */}
          <div className="flex justify-center border rounded-xl shadow-inner p-4 bg-gray-50">
            <Document file={BrochurePDF} onLoadSuccess={onDocumentLoadSuccess}>
              <Page
                pageNumber={pageNumber}
                width={window.innerWidth < 768 ? 320 : 520}
              />
            </Document>
          </div>

          {/* Page Navigation */}
          {numPages && (
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={goToPrevPage}
                disabled={pageNumber === 1}
                className="px-4 py-2 bg-green-600 text-white rounded-full disabled:opacity-50 flex items-center gap-2 text-sm font-medium shadow-md hover:bg-green-700 transition"
              >
                <FaChevronLeft /> Prev
              </button>

              <p className="text-gray-700 font-medium text-base">
                Page {pageNumber} of {numPages}
              </p>

              <button
                onClick={goToNextPage}
                disabled={pageNumber === numPages}
                className="px-4 py-2 bg-green-600 text-white rounded-full disabled:opacity-50 flex items-center gap-2 text-sm font-medium shadow-md hover:bg-green-700 transition"
              >
                Next <FaChevronRight />
              </button>
            </div>
          )}

          {/* ✅ Download Brochure Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => handleOpenForm("brochure")}
              className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300"
            >
              <FaFilePdf className="text-xl" /> Download Brochure
            </button>
          </div>
        </div>

        {/* ✅ RERA Details Card */}
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-2xl border border-gray-200 mt-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            RERA Registration Details
          </h3>

          <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-6">
            {/* Left Content */}
            <div className="space-y-3 text-gray-700 text-base leading-relaxed">
              <p>
                <span className="font-semibold text-gray-900">Project:</span>{" "}
                Nirala Gateway
              </p>
              <p>
                <span className="font-semibold text-gray-900">RERA No:</span>{" "}
                UPRERAPRJ531916/06/2025
              </p>
              <p>
                <span className="font-semibold text-gray-900">Website:</span>{" "}
                <a
                  href="http://up-rera.in/projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-semibold hover:underline"
                >
                  up-rera.in/projects
                </a>
              </p>
            </div>

            {/* Right QR Code */}
            <div className="flex flex-col items-center">
              <div className="p-3 bg-gray-50 rounded-2xl border shadow-sm">
                <img
                  src={QRCodeImg}
                  alt="RERA QR Code - Nirala Gateway"
                  className="w-16 h-16 object-contain"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Scan for Verification
              </p>
            </div>
          </div>
        </div>

        {/* ✅ Popup Form */}
        <PopupForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onSuccess={handleFormSuccess}
        />
      </div>
    </section>
  );
};

export default DownloadSection;
