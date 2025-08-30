import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import AboutSection from "./components/AboutSection";
import LuxuryAmenities from "./components/LuxuryAmenities";
import FloorPlanSection from "./components/FloorPlanSection";
import DownloadSection from "./components/DownloadSection"; // 🔹 fixed naming
import Footer from "./components/Footer";
import PopupForm from "./components/PopupForm";
import AutoPopupForm from "./components/AutoPopupForm";
import FloatingButtons from "./components/FloatingButtons";
import Gateway from "./components/Gateway";
import LocationDetails from "./components/LocationDetails";
import SustainabilitySection from "./components/SustainabilitySection";
import Sector12 from "./components/Sector12";
import GallerySection from "./components/GallerySection";

function App() {
  // 🔹 Single state to track form type
  const [formType, setFormType] = useState(null);

  // 🔹 Open specific form
  const handleOpenForm = (type) => setFormType(type);
  const handleCloseForm = () => setFormType(null);

  return (
    <>
      {/* Navbar with open form */}
      <Navbar openForm={() => handleOpenForm("contact")} />

      {/* Hero Banner with brochure button */}
      <HeroBanner openForm={() => handleOpenForm("brochure")} />

      {/* Auto popup form */}
      <AutoPopupForm openForm={() => handleOpenForm("auto")} />

      {/* Main sections */}
      <AboutSection />
      <DownloadSection openForm={() => handleOpenForm("brochure")} />
      <FloatingButtons openForm={() => handleOpenForm("contact")} />
      <FloorPlanSection openForm={() => handleOpenForm("floorplan")} />
      
      <LuxuryAmenities />
      <Gateway />
      <LocationDetails />
      <SustainabilitySection />
      <Sector12 />
      <GallerySection />

      {/* Popup form controlled centrally */}
      <PopupForm 
        isOpen={!!formType} 
        type={formType} 
        onClose={handleCloseForm} 
      />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
