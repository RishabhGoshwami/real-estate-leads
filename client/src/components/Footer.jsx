import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1e293b] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Nirala World</h3>
          <p className="text-sm">
            Building trust since 1996. Delivering high-quality residential
            spaces in NCR.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="/projects" className="hover:text-blue-400">Projects</a></li>
            <li><a href="/about-us" className="hover:text-blue-400">About Us</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact Info</h4>
          <ul className="text-sm space-y-1">
            <li>📍 Noida Extension, UP</li>
            <li>📞 +91 9990989295</li>
            <li>📧 info@niralaworld.com</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-3 text-xl">
            <a href="#" className="hover:text-blue-400"><FaFacebook /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
            <a href="#" className="hover:text-red-500"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-sm border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Nirala World. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
