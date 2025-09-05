// src/components/HeroBanner.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import property6 from "../assets/background_01.jpg";
import property7 from "../assets/slider_background_01.jpg";

const HeroBanner = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 🔑 CRM authentication key
  const authKey = "VndsbUlpKzhKdWpEbEZNSUNva2t1UT09";

  // 🔹 Slider images
  const images = [property6, property7];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Direct CRM API call (no meta fetch)
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "d5f504e4-3e5a-4dda-8255-62123d25fe81", // ✅ Your API Key
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: "Lead from Nirala Gateway Website", // extra field
      }),
    });

    const result = await response.json();

    if (result.success) {
      setFormData({ name: "", email: "", phone: "" });
      navigate("/thank-you"); // ✅ redirect
    } else {
      alert("❌ Error: " + (result.message || "Something went wrong"));
    }
  } catch (error) {
    console.error("❌ Error submitting form:", error);
    alert("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="relative w-full h-screen overflow-hidden" aria-label="Nirala World Hero Banner">
      {/* Background Images (Sliding) */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`background-${index}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)]">
          <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent">
            Nirala Gateway
          </span>
        </h1>

        <p className="text-lg md:text-2xl font-semibold text-white tracking-wide pt-2 mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Best Investment Opportunity
        </p>

        {/* Property Info Box + Form */}
        <div className="bg-black/35 shadow-2xl rounded-2xl p-6 md:p-8 max-w-lg w-full border border-white/40">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
            1 RK Studio Apartment
          </h2>

          <p className="text-lg text-yellow-300 font-bold mb-2">₹ 65 L - 1.2 Cr</p>
          <p className="text-sm text-white mb-1">📍 Sector-12, Greater Noida West</p>
          <p className="text-sm text-white mb-1">🏗 Completion: Apr, 2030</p>
          <p className="text-sm text-black font-bold bg-green-400 px-3 py-1 rounded-full inline-block mb-4">
            ✅ RERA Approved: UPRERAPRJ531916
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            <span className="px-3 py-1 bg-yellow-300 text-black text-xs font-semibold rounded-full">NEW LAUNCH</span>
            <span className="px-3 py-1 bg-blue-300 text-black text-xs font-semibold rounded-full">
              High Price Appreciation
            </span>
            <span className="px-3 py-1 bg-green-300 text-black text-xs font-semibold rounded-full">Units of Choice</span>
            <span className="px-3 py-1 bg-purple-300 text-black text-xs font-semibold rounded-full">
              Easy Payment Plans
            </span>
          </div>

          {/* CRM Integrated Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border border-white/50 rounded-lg focus:ring-2 focus:ring-yellow-400 bg-transparent text-white placeholder-white"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border border-white/50 rounded-lg focus:ring-2 focus:ring-yellow-400 bg-transparent text-white placeholder-white"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              className="w-full p-3 border border-white/50 rounded-lg focus:ring-2 focus:ring-yellow-400 bg-transparent text-white placeholder-white"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 text-lg font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 hover:scale-105 transition-transform duration-300 text-black rounded-xl shadow-lg disabled:opacity-50"
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
