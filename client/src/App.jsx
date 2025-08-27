import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import AboutSection from "./components/AboutSection";
import LuxuryAmenities from "./components/LuxuryAmenities";
import FloorPlanSection from "./components/FloorPlanSection";
import PricePlanSection from "./components/DownloadSection";
import Footer from "./components/Footer";
// import ContactSection from "./components/ContactSection";
import PopupForm from "./components/PopupForm";
import AutoPopupForm from "./components/AutoPopupForm";
import FloatingButtons from "./components/FloatingButtons";
import Amenities from "./components/amenities";
import Gateway from "./components/Gateway";
import LocationDetails from "./components/LocationDetails";
import SustainabilitySection from "./components/SustainabilitySection";
import Sector12 from "./components/Sector12";
import GallerySection from "./components/GallerySection";


function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      {/* Navbar with open form */}
      <Navbar openForm={() => setIsFormOpen(true)} />

      {/* Hero Banner with brochure button */}
      <HeroBanner
        isOpen={isFormOpen}
        openPopup={() => setIsFormOpen(true)}
        closePopup={() => setIsFormOpen(false)}
      />

      {/* Auto popup form */}
      <AutoPopupForm />

      {/* Main sections */}
      <AboutSection />
      <PricePlanSection />
    
      <FloatingButtons />
      <FloorPlanSection openForm={() => setIsFormOpen(true)} />
      <Amenities />
      <LuxuryAmenities />
      <Gateway />
      <LocationDetails />
      <SustainabilitySection />
      <Sector12 />
      <GallerySection />

      {/* Popup form */}
      <PopupForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
