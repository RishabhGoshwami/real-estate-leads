import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaPhone } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", id: "home", href: "/" },
  { name: "Who We Are", id: "about", href: "/#about" },
  { name: "Amenities", id: "amenities", href: "/#amenities" },
  { name: "Pricing Plans", id: "Pricing-plan", href: "/#Pricing-Plan" },
  { name: "Layout & Floors", id: "floor-plan", href: "/#floor-plan" },
  { name: "Brochure Download", id: "brochure", href: "/#brochure" },
];

const Navbar = ({ openForm }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setActiveHash(location.hash);
  }, [location]);

  const handleClick = (link) => {
    if (link.id === "brochure") {
      openForm();
    } else if (link.id === "home") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(`/#${link.id}`);
      setTimeout(() => {
        const element = document.getElementById(link.id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="sr-only">Nirala World</h1>
          <a href="/">
            <img src={logo} alt="Nirala World Logo" className="h-10 w-auto" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(link)}
              className={`font-medium transition ${
                activeHash === `#${link.id}` || (link.id === "home" && activeHash === "")
                  ? "text-green-400 font-bold"
                  : "text-gray-200 hover:text-green-400"
              }`}
            >
              {link.name}
            </button>
          ))}

          {/* Call button */}
          <a
            href="tel:+919990989295"
            className="hidden lg:flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-full font-medium hover:bg-green-700 transition"
          >
            <FaPhone size={14} />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center space-x-4">
          <a
            href="tel:+919990989295"
            className="bg-green-600 text-white p-2 rounded-full"
            aria-label="Call us now"
          >
            <FaPhone size={18} />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-screen pb-4" : "max-h-0"
        } bg-gray-800 border-t border-gray-700`}
      >
        <div className="flex flex-col px-4 space-y-2">
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(link)}
              className={`w-full text-left py-2 px-3 rounded-lg transition ${
                activeHash === `#${link.id}` ? "text-green-400 font-bold" : "text-gray-200 hover:text-green-400"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
