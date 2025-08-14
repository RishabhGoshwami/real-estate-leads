import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaPhone } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Who We Are", id: "about" },
  { name: "Amenities", id: "amenities" },
  { name: "Pricing Plans", id: "price-plan" },
  { name: "Layout & Floors", id: "floor-plan" },
  { name: "Brochure Download", id: "brochure" },

];

const Navbar = ({ openForm }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (link) => {
    // If Brochure → open form
    if (link.id === "brochure") {
      openForm();
    }
    // If Home → navigate to root page and scroll to top
    else if (link.id === "home") {
      if (location.pathname !== "/") {
        navigate("/");
        // Small delay to ensure page loads
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    // Other sections → scroll if element exists
    else {
      const element = document.getElementById(link.id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false); // Close mobile menu
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="sr-only">Nirala World</h1>
          <img src="/logo1.png" alt="Nirala World Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={() => handleScroll(link)}
              className={`text-gray-700 hover:text-blue-600 font-medium transition ${
                location.hash === `#${link.id}` ? "text-blue-600 font-bold" : ""
              }`}
            >
              {link.name}
            </button>
          ))}
          {/* Call button */}
          <a
            href="tel:+919990989295"
            className="hidden lg:flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition"
          >
            <FaPhone size={14} />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Menu Hamburger */}
        <div className="md:hidden flex items-center space-x-4">
          <a
            href="tel:+919990989295"
            className="bg-blue-600 text-white p-2 rounded-full md:hidden"
            aria-label="Call us now"
          >
            <FaPhone size={18} />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white border-t border-gray-200">
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={() => handleScroll(link)}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition py-2 px-3 rounded-lg"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
