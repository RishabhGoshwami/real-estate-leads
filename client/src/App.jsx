import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import AboutSection from "./components/AboutSection";
import LuxuryAmenities from "./components/LuxuryAmenities";
import FloorPlanSection from "./components/FloorPlanSection";
import PricePlanSection from "./components/PricePlanSection";
import Footer from "./components/Footer"
// import ContactSection from "./components/ContactSection";
import PopupForm from "./components/PopupForm";
import AutoPopupForm from "./components/AutoPopupForm";
import FloatingButtons from "./components/FloatingButtons";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <Navbar openForm={() => setIsFormOpen(true)} />
      <HeroBanner />
      <AutoPopupForm/>
      <AboutSection />
      <FloatingButtons/>
      <LuxuryAmenities />
       <PricePlanSection />
      <FloorPlanSection openForm={() => setIsFormOpen(true)} />
     
      {/* <ContactSection /> */}
      <PopupForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        <Footer/>
    </>
  );
}

export default App;
