import React from 'react';

// Component Imports
import HeroBanner from "../components/HeroBanner";
import Highlights from "../components/Highlights";
import ProjectsTabs from "../components/ProjectsTabs";
import VideoSection from "../components/VideoSection";
import ChairmanMessage from "../components/ChairmanMessage";

import LatestBlogNews from "../components/LatestBlogNews";
import Testimonials from "../components/Testimonials";
import PopupForm from "../components/ContactForm";

import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
       
      {/* Hero Section */}
      <HeroBanner />
      

      {/* Highlights Section */}
      <Highlights />
      <PopupForm />

      {/* Projects Tabs */}
      <ProjectsTabs />

      {/* Video Promo Section */}
      <VideoSection />

      {/* Chairman's Message */}
      <ChairmanMessage />

     
      {/* Latest Blog & News */}
      <LatestBlogNews />
  

      {/* Testimonials Section */}
      <Testimonials />

     

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp & Call Buttons */}
      <FloatingButtons />
    </div>
  );
};

export default Home;
