import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (link) => {
    if (link.id.startsWith("/")) {
      // Route navigation
      navigate(link.id);
    } else {
      // Scroll to section
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

  // SVG Icons
  const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
  const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="h-5 w-5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
  const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="h-5 w-5">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </svg>
  );
  const YoutubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="h-5 w-5">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2A51 51 0 0 0 12 4.17a51 51 0 0 0-8.62.25 2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.5a29 29 0 0 0 .54 5.08 2.78 2.78 0 0 0 1.94 2 51 51 0 0 0 9.5-.25 51 51 0 0 0 9.5.25 2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 11.5a29 29 0 0 0-.46-5.08z"></path>
      <polygon points="10 8 16 11.5 10 15 10 8"></polygon>
    </svg>
  );

  return (
    <footer className="relative bg-gradient-to-t from-gray-900 via-gray-800 to-gray-700 text-white">
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10">
        <div className="py-12 max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-3">Nirala World</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              Trusted developer since 1996. Delivering premium residential & commercial projects across NCR with a focus on quality and timely delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "Who We Are" },
                { id: "amenities", label: "Amenities" },
                { id: "price-plan", label: "Pricing Plans" },
                { id: "floor-plan", label: "Layout & Floors" },
                { id: "/disclaimer", label: "Disclaimer" },
              ].map((link) => (
                <li key={link.id}>
                  <button onClick={() => handleLinkClick(link)} className="hover:text-green-400 transition">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Contact Info</h4>
            <address className="not-italic text-sm text-gray-300 space-y-1">
              <p>📍 Noida Extension, Uttar Pradesh</p>
              <p>📞 +91 9990989295</p>
              <p>📧 info@niralaworld.org</p>
            </address>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1GXvDdtHU6/" className="hover:text-blue-400 transition"><FacebookIcon /></a>
              <a href="https://www.instagram.com/propertyexpertrealtors?igsh=MWh4c3N0NGMwbGw1NA==" className="hover:text-pink-500 transition"><InstagramIcon /></a>
              <a href="https://twitter.com/nirala_world" className="hover:text-sky-400 transition"><TwitterIcon /></a>
              <a href="https://youtube.com/@propertyexpertrealtors?si=CinG5e80OwYdNhSM" className="hover:text-red-500 transition"><YoutubeIcon /></a>
            </div>
          </div>
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
      </div>
    </footer>
  );
};

export default Footer;
