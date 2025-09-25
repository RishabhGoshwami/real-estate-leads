import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (link) => {
    if (link.id.startsWith("/")) {
      navigate(link.id);
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(link.id);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 150);
      } else {
        const element = document.getElementById(link.id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
        else window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };


  

  return (
    <footer className="relative bg-gradient-to-t from-gray-900 via-gray-800 to-gray-700 text-white">
     
       

         

         

        {/* SEO Keywords Section */}
        <div className="text-gray-400 text-xs px-6 md:px-20 pb-6 leading-relaxed">
          <p>
            Looking for <strong>commercial project in Greater Noida West</strong>? 
            Explore premium <strong>office space for sale in Greater Noida West</strong> with world-class amenities. 
            We also offer <strong>commercial retail space for sale</strong> and 
            <strong> commercial shops in Greater Noida West</strong> ideal for investment. 
            Discover affordable <strong>retail shops for sale in Greater Noida West</strong> and premium 
            <strong> commercial spaces in Greater Noida West</strong> tailored for businesses and investors.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="text-gray-400 text-xs px-6 md:px-20 py-6 leading-relaxed border-t border-gray-700 space-y-3">
          <p>The information provided on this website is for general guidance only and does not constitute an offer or contract. Prices and availability are subject to change without prior notice. Project ID: UPRERAPRJ531916/06/2025</p>
          <p>Images and visuals are for illustration purposes and may differ from actual construction. This website functions as an authorized marketing partner and may share customer details with RERA-registered brokers for necessary processing.</p>
          <p>By submitting your details on this site, you agree to our Privacy Policy and Terms of Use.</p>
          <p>For the most accurate and updated details, please connect directly with our official sales team.</p>
        </div>

        {/* Bottom Bar */}
        <div className="text-center text-xs text-gray-500 border-t border-gray-700 py-4">
          © {new Date().getFullYear()} Property Expert Realtor Pvt. Ltd. (RERA ID: UPRERAAGT23257).<br />
          Authorized Channel Partner for Nirala Gateway (Project RERA ID: UPRERAPRJ531916).
        </div>
    </footer>
  );
};

export default Footer;
