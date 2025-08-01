import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProjectDetail from "./pages/ProjectDetail";
import ProjectDetails from './pages/ProjectDetails'
import AboutUs from './pages/AboutUs'
import ProjectsTabs from "./components/ProjectsTabs"; 
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/projects/:slug" element={<ProjectDetail />} />
         { <Route path="/about-us" element={<AboutUs />} /> }
        <Route path="/projects" element={<ProjectsTabs />} />
         <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
