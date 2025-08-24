import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import footerBg from "../assets/footer_background.jpg";

// SVG Icons
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);
const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2A51 51 0 0 0 12 4.17a51 51 0 0 0-8.62.25 2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.5a29 29 0 0 0 .54 5.08 2.78 2.78 0 0 0 1.94 2 51 51 0 0 0 9.5-.25 51 51 0 0 0 9.5.25 2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 11.5a29 29 0 0 0-.46-5.08z"></path>
    <polygon points="10 8 16 11.5 10 15 10 8"></polygon>
  </svg>
);

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id) => {
    if (id === "home") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 "></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="py-10 max-w-7xl mx-auto px-4 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Nirala World</h3>
            <p className="text-sm">
              Trusted developer since 1996. Creating premium residential & commercial spaces in NCR.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li><button onClick={() => handleScroll("home")} className="hover:text-blue-400">Home</button></li>
              <li><button onClick={() => handleScroll("about")} className="hover:text-blue-400">Who We Are</button></li>
              <li><button onClick={() => handleScroll("amenities")} className="hover:text-blue-400">Amenities</button></li>
              <li><button onClick={() => handleScroll("price-plan")} className="hover:text-blue-400">Pricing Plans</button></li>
              <li><button onClick={() => handleScroll("floor-plan")} className="hover:text-blue-400">Layout & Floors</button></li>
              <li><button onClick={() => handleScroll("contact")} className="hover:text-blue-400">Get in Touch</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Contact Info</h4>
            <ul className="text-sm space-y-1">
              <li>📍 Noida Extension, UP</li>
              <li>📞 +91 9990989295</li>
              <li>📧 info@niralaworld.org</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-3 text-xl">
              <a href="https://www.facebook.com/niralaworldpvtltd/" className="hover:text-blue-400"><FacebookIcon /></a>
              <a href="https://www.instagram.com/nirala_world/" className="hover:text-pink-500"><InstagramIcon /></a>
              <a href="https://twitter.com/nirala_world" className="hover:text-sky-400"><TwitterIcon /></a>
              <a href="https://www.youtube.com/@niralaworld9165" className="hover:text-red-500"><YoutubeIcon /></a>
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="text-gray-300 text-xs px-6 md:px-20 py-6 leading-relaxed border-t border-gray-600">
          <p>
            The content presented on this website is solely for informational purposes and does not constitute a service offer. Prices mentioned here are subject to change without prior notification, and the availability of the listed properties is not assured. Images showcased are illustrative and may not precisely represent the actual properties. Kindly be advised that this website operates as an authorized marketing partner. For necessary processing, we may share data with Real Estate Regulatory Authority (RERA) registered brokers/companies. Additionally, updates and information may be sent to the registered mobile number or email ID. All rights reserved. This website's content, design, and data are protected by copyright and other intellectual property rights. Unauthorized use or reproduction of the content may be subject to legal repercussions. For precise and current information on services, pricing, availability, or any other details, we recommend you contact us directly via the provided contact information on this website. We appreciate your visit.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="text-center text-sm text-gray-400 border-t border-gray-700 py-4 ">
          © {new Date().getFullYear()} Nirala World. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
