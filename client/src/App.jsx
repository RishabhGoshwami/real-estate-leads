import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import AboutSection from "./components/AboutSection";
import LuxuryAmenities from "./components/LuxuryAmenities";
import FloorPlanSection from "./components/FloorPlanSection";
import PricePlanSection from "./components/PricePlanSection";
import Footer from "./components/Footer";
// import ContactSection from "./components/ContactSection";
import PopupForm from "./components/PopupForm";
import AutoPopupForm from "./components/AutoPopupForm";
import FloatingButtons from "./components/FloatingButtons";

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
      <FloatingButtons />
      <LuxuryAmenities />
      <PricePlanSection />
      <FloorPlanSection openForm={() => setIsFormOpen(true)} />

      {/* Popup form */}
      <PopupForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
