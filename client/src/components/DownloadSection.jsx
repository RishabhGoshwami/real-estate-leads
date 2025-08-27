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

  const goToPrevPage = () => setPageNumber(pageNumber > 1 ? pageNumber - 1 : 1);
  const goToNextPage = () =>
    setPageNumber(pageNumber < numPages ? pageNumber + 1 : numPages);

  return (
    <section
      id="download"
      className="py-20 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white scroll-mt-20"
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          <span className="text-green-600">Download</span> Section
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
          Access all essential documents and walkthroughs for{" "}
          <strong>Nirala Gateway</strong>.
        </p>
      </div>

      {/* Download Icons Grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto mb-20">
        {[
          {
            id: "brochure",
            icon: <FaFilePdf className="text-green-600 text-5xl mb-3" />,
            title: "Brochure",
            badge: "PDF",
            action: () => handleOpenForm("brochure"),
          },
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
            link: PriceListPDF,
          },
          {
            id: "walkthrough",
            icon: <FaVideo className="text-green-600 text-5xl mb-3" />,
            title: "Walkthrough",
            action: () => handleOpenForm("walkthrough"),
          },
        ].map((item) =>
          item.link ? (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[180px] relative"
            >
              {item.icon}
              <p className="font-semibold text-gray-800 text-lg text-center">
                {item.title}
              </p>
            </a>
          ) : (
            <div
              key={item.id}
              onClick={item.action}
              className="group flex flex-col items-center justify-center cursor-pointer bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[180px] relative"
            >
              {item.icon}
              <p className="font-semibold text-gray-800 text-lg text-center">
                {item.title}
              </p>
              {item.badge && (
                <span className="absolute top-3 right-3 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </div>
          )
        )}
      </div>

      {/* ✅ Brochure Preview Section */}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
          Preview Brochure
        </h3>

        <div className="flex justify-center border rounded-lg shadow-inner p-4 bg-gray-50 overflow-hidden">
          <Document file={BrochurePDF} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} width={420} />
          </Document>
        </div>

        {/* Page Navigation */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={goToPrevPage}
            disabled={pageNumber === 1}
            className="px-4 py-2 bg-green-600 text-white rounded-full disabled:opacity-40 flex items-center gap-2 text-sm font-medium shadow-md hover:bg-green-700 transition"
          >
            <FaChevronLeft /> Prev
          </button>

          <p className="text-gray-700 font-medium text-base">
            Page {pageNumber} of {numPages}
          </p>

          <button
            onClick={goToNextPage}
            disabled={pageNumber === numPages}
            className="px-4 py-2 bg-green-600 text-white rounded-full disabled:opacity-40 flex items-center gap-2 text-sm font-medium shadow-md hover:bg-green-700 transition"
          >
            Next <FaChevronRight />
          </button>
        </div>
      </div>

      {/* ✅ RERA Details Card */}
      <div className=" mx-auto bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mt-20">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
          RERA Registration Details
        </h3>

        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-6">
          {/* Left Content */}
          <div className="space-y-2 text-gray-700 text-sm sm:text-base leading-relaxed">
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
            <div className="p-2 bg-gray-50 rounded-lg border shadow-sm">
              <img
                src={QRCodeImg}
                alt="RERA QR Code - Nirala Gateway"
                className="w-11 h-11 object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">Scan for Verification</p>
          </div>
        </div>
      </div>

      {/* Popup Form */}
      <PopupForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSuccess={handleFormSuccess}
      />
    </section>
  );
};

export default DownloadSection;
