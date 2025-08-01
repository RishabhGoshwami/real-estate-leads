import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Install lucide-react or replace with SVG if not using

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">NIRALA WORLD</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about-us" className="hover:text-blue-600">About Us</Link>
          <Link to="/projects" className="text-gray-700 hover:text-blue-700 font-medium">Projects</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-blue-600"
          >
            About Us
          </Link>
          <Link
            to="/projects"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-blue-600"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-blue-600"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
