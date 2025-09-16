import React from "react";

// WhatsApp Icon
const WhatsappIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path d="M16 3C9.373 3 4 8.373 4 15c0 2.634.806 5.079 2.184 7.117L4 29l6.985-2.218A11.944 11.944 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm6.322 17.142c-.264.74-1.547 1.394-2.169 1.476-.561.074-1.24.105-3.01-.995-2.563-1.518-4.175-5.047-4.288-5.224-.112-.175-.91-1.392-.91-2.65 0-1.257.65-1.875.881-2.129.23-.253.501-.32.671-.32.17 0 .334 0 .48.003.153.004.36-.058.564.429.204.486.691 1.683.752 1.812.06.13.098.287.02.465-.078.177-.112.285-.226.445-.112.158-.236.353-.336.474-.112.132-.228.278-.094.55.136.274.604 1.098 1.292 1.774.892.867 1.635 1.148 1.91 1.277.28.127.444.108.607-.064.162-.172.697-.81.877-1.084.18-.274.36-.23.604-.138.244.092 1.542.728 1.809.861.27.133.449.198.515.31.066.111.066.641-.198 1.38z"/>
  </svg>
);

// Phone Icon
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const FloatingButtons = ({ onEnquiryClick }) => {
  return (
    <div
      className="fixed right-4 bottom-4 z-50 flex flex-col items-end space-y-3"
      aria-label="Floating contact buttons"
    >
      {/* Enquiry Now Button */}
      <button
        onClick={onEnquiryClick}
        aria-label="Enquiry Now"
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold 
                   transition duration-300 transform hover:scale-110"
      >
        Enquiry Now
      </button>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+919990989295"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 transform hover:scale-110"
      >
        <WhatsappIcon />
      </a>

      {/* Call Button */}
      <a
        href="tel:+919990989295"
        aria-label="Call us now"
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition duration-300 transform hover:scale-110"
      >
        <PhoneIcon />
      </a>
    </div>
  );
};

export default FloatingButtons;
