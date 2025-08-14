import React, { useState } from "react";

const PopupForm = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  if (!isOpen) return null;

  // WhatsApp link
  const whatsappLink = `https://wa.me/919990989295?text=Hello%2C%20My%20name%20is%20${encodeURIComponent(
    name
  )}%20and%20my%20mobile%20number%20is%20${encodeURIComponent(
    mobile
  )}.%20I%20am%20interested%20in%20the%20Brochure%20and%20Floor%20Plan.`;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          aria-label="Close form"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Request Brochure & Floor Plan
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          Please fill in your details below. Our team will reach out to you shortly.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.open(whatsappLink, "_blank");
          }}
          className="flex flex-col space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobile}
            required
            onChange={(e) => setMobile(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="bg-green-600 text-white rounded-lg px-4 py-2 font-medium hover:bg-green-700 transition"
          >
            Submit & WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
