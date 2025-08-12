import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { FaPhone } from 'react-icons/fa'; // Added FaPhone icon

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Function to toggle mobile menu and handle focus for accessibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo with SEO-friendly heading */}
        <Link to="/" className="flex items-center space-x-2 group" aria-label="Home - Nirala World">
          {/* Using a screen-reader-only h1 for SEO */}
          <h1 className="sr-only">Nirala World - Home</h1>
          <img
            src="/logo1.png"
            alt="Nirala World Logo"
            className="h-10 w-auto"
            fetchpriority="high" // High priority for logo
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link 
            to="/" 
            className={`hover:text-blue-600 transition ${location.pathname === '/' ? 'text-blue-600 font-bold' : 'text-gray-700'}`}
            aria-current={location.pathname === '/' ? 'page' : undefined}
          >
            Home
          </Link>
          <Link 
            to="/about-us" 
            className={`hover:text-blue-600 transition ${location.pathname === '/about-us' ? 'text-blue-600 font-bold' : 'text-gray-700'}`}
            aria-current={location.pathname === '/about-us' ? 'page' : undefined}
          >
            About Us
          </Link>
          <Link 
            to="/projects" 
            className={`text-gray-700 hover:text-blue-700 font-medium transition ${location.pathname === '/projects' ? 'text-blue-600 font-bold' : 'text-gray-700'}`}
            aria-current={location.pathname === '/projects' ? 'page' : undefined}
          >
            Projects
          </Link>
          <Link 
            to="/contact" 
            className={`hover:text-blue-600 transition ${location.pathname === '/contact' ? 'text-blue-600 font-bold' : 'text-gray-700'}`}
            aria-current={location.pathname === '/contact' ? 'page' : undefined}
          >
            Contact
          </Link>
          {/* Added a call-to-action button for mobile users */}
          <a
            href="tel:+919990989295"
            className="hidden lg:flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition"
            aria-label="Call us now"
          >
            <FaPhone size={14} />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Call button for smaller screens */}
          <a
            href="tel:+919990989295"
            className="bg-blue-600 text-white p-2 rounded-full md:hidden"
            aria-label="Call us now"
          >
            <FaPhone size={18} />
          </a>
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 focus:outline-none"
            aria-label="Toggle mobile menu"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu" 
          className="md:hidden px-4 pb-4 space-y-2 bg-white border-t border-gray-200"
        >
          <Link
            to="/"
            onClick={toggleMobileMenu}
            className="block text-gray-700 hover:text-blue-600 transition py-2 px-3 rounded-lg"
            aria-current={location.pathname === '/' ? 'page' : undefined}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            onClick={toggleMobileMenu}
            className="block text-gray-700 hover:text-blue-600 transition py-2 px-3 rounded-lg"
            aria-current={location.pathname === '/about-us' ? 'page' : undefined}
          >
            About Us
          </Link>
          <Link
            to="/projects"
            onClick={toggleMobileMenu}
            className="block text-gray-700 hover:text-blue-600 transition py-2 px-3 rounded-lg"
            aria-current={location.pathname === '/projects' ? 'page' : undefined}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            onClick={toggleMobileMenu}
            className="block text-gray-700 hover:text-blue-600 transition py-2 px-3 rounded-lg"
            aria-current={location.pathname === '/contact' ? 'page' : undefined}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
