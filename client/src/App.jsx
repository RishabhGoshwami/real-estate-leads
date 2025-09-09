// src/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import AboutSection from "./components/AboutSection";
import LuxuryAmenities from "./components/LuxuryAmenities";
import FloorPlanSection from "./components/FloorPlanSection";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";
import PopupForm from "./components/PopupForm";
import FloatingButtons from "./components/FloatingButtons";
import Gateway from "./components/Gateway";
import LocationDetails from "./components/LocationDetails";
import SustainabilitySection from "./components/SustainabilitySection";
import Sector12 from "./components/Sector12";
import GallerySection from "./components/GallerySection";
import ThankYou from "./components/ThankYou";   // ✅ Page route se import
import Disclaimer from "./components/Disclaimer";

// 🔹 HomePage component (all sections together)
const HomePage = ({ openForm }) => (
  <>
    <Navbar openForm={() => openForm("contact")} />
    <HeroBanner openForm={() => openForm("brochure")} />
    <AboutSection />
    <DownloadSection openForm={() => openForm("brochure")} />
    <FloorPlanSection openForm={() => openForm("floorplan")} />
    <LuxuryAmenities />
    <Gateway />
    <LocationDetails />
    <SustainabilitySection />
    <Sector12 />
    <GallerySection />
    <FloatingButtons onEnquiryClick={() => openForm("contact")} />
    <Footer />
  </>
);

function App() {
  const [formType, setFormType] = useState(null);

  const handleOpenForm = (type) => setFormType(type);
  const handleCloseForm = () => setFormType(null);

  return (
    <>
      {/* Global Popup Form */}
      <PopupForm
        isOpen={!!formType}
        type={formType}
        onClose={handleCloseForm}
        triggerAutoPopup={() => handleOpenForm("auto")}
      />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage openForm={handleOpenForm} />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </>
  );
}

export default App;
