import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProjectDetail from "./pages/ProjectDetail";
import AboutUs from './pages/AboutUs'
import ProjectsTabs from "./components/ProjectsTabs"; 
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      {/* Navbar will be visible on all pages */}
      <Navbar />
      <Routes>
        {/* Route for the homepage */}
        <Route path="/" element={<Home />} />
        {/* Route for a specific project detail page */}
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        {/* Route for the About Us page */}
        <Route path="/about-us" element={<AboutUs />} />
        {/* Route for the main projects listing page */}
        <Route path="/projects" element={<ProjectsTabs />} />
        {/* Route for the contact page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* Footer will be visible on all pages */}
      <Footer />
    </Router>
  )
}

export default App
