// src/components/HeroBanner.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import property6 from "../assets/background_01.jpg"; // ✅ Ensure path is correct

const HeroBanner = () => {
  // 🔹 Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 🔹 Input change handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔹 Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "d5f504e4-3e5a-4dda-8255-62123d25fe81", // ✅ Web3Forms API Key
          ...formData,
        }),
      });

      const result = await response.json();

      // ✅ Form submit success
      if (result.success) {
        setFormData({ name: "", email: "", phone: "" }); // Clear form
        navigate("/thank-you"); // Redirect to ThankYou page
      } else {
        alert("❌ Error: " + result.message);
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      aria-label="Nirala World Hero Banner"
    >
      {/* Background Image */}
      <img
        src={property6}
        alt="Nirala World property"
        className="absolute w-full h-full object-cover"
        loading="eager"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
          Welcome to Your Dream Home
        </h1>

        {/* Property Info Box + Form */}
        <div className="bg-white/40 backdrop-blur-md shadow-2xl rounded-2xl p-6 md:p-8 max-w-lg w-full">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
            1 RK Studio Apartment
          </h2>

          <p className="text-lg text-gray-800 font-bold mb-2">
            ₹ 65 L - 1.2 Cr
          </p>
          <p className="text-sm text-gray-700 mb-1">
            📍 Sector-12, Greater Noida West
          </p>
          <p className="text-sm text-gray-700 mb-1">🏗 Completion: Apr, 2030</p>
          <p className="text-sm text-white font-bold bg-green-600 px-3 py-1 rounded-full inline-block mb-4">
            ✅ RERA Approved: UPRERAPRJ531916
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            <span className="px-3 py-1 bg-yellow-200 text-yellow-900 text-xs font-semibold rounded-full">
              NEW LAUNCH
            </span>
            <span className="px-3 py-1 bg-blue-200 text-blue-900 text-xs font-semibold rounded-full">
              High Price Appreciation
            </span>
            <span className="px-3 py-1 bg-green-200 text-green-900 text-xs font-semibold rounded-full">
              Units of Choice
            </span>
            <span className="px-3 py-1 bg-purple-200 text-purple-900 text-xs font-semibold rounded-full">
              Easy Payment Plans
            </span>
          </div>

          {/* ✅ Always Visible Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 text-lg font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 
                         hover:scale-105 transition-transform duration-300 
                         text-black rounded-xl shadow-lg disabled:opacity-50"
            >
              {loading ? "Submitting..." : "📖 Request E-Brochure"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
