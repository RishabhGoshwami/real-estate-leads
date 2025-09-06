// src/components/HeroBanner.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import property6 from "../assets/background_01.jpg";
import property7 from "../assets/slider_background_01.jpg";

const HeroBanner = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const navigate = useNavigate();

  const images = [property6, property7];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrentIndex((prev) => (prev + 1) % images.length), 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!captchaToken) {
      alert("⚠️ Please complete the CAPTCHA!");
      setLoading(false);
      return;
    }

    const backendUrl = "https://real-estate-leads2.onrender.com/api/submit-lead";


    try {
      const response = await fetch(backendUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captchaToken }),
      });

      const result = await response.json();
      console.log("📩 Backend Response:", result);

      if (result.success) {
        setFormData({ name: "", email: "", phone: "" });
        setCaptchaToken(null);
        navigate("/thank-you");
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
    <section
      className="relative w-full min-h-screen overflow-auto" // min-h-screen + scrollable
      aria-label="Nirala World Hero Banner"
    >
      {/* Background Slider */}
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

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 md:px-8 lg:px-16 py-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2 drop-shadow-lg">
          <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent">
            Nirala Gateway
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white tracking-wide pt-2 mb-6 drop-shadow-md">
          Best Investment Opportunity
        </p>

        {/* Form Container */}
        <div className="bg-black/40 shadow-2xl rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 max-w-md sm:max-w-lg w-full border border-white/30 overflow-auto max-h-[85vh]">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">1 RK Studio Apartment</h2>
          <p className="text-md sm:text-lg md:text-xl text-yellow-300 font-bold mb-2">₹ 65 L - 1.2 Cr</p>
          <p className="text-sm sm:text-base text-white mb-1">📍 Sector-12, Greater Noida West</p>
          <p className="text-sm sm:text-base text-white mb-1">🏗 Completion: Apr, 2030</p>
          <p className="text-xs sm:text-sm text-black font-bold bg-green-400 px-2 py-1 rounded-full inline-block mb-4">
            ✅ RERA Approved: UPRERAPRJ531916
          </p>

          <div className="flex flex-wrap gap-2 justify-center mb-4">
            <span className="px-2 py-1 bg-yellow-300 text-black text-xs sm:text-sm font-semibold rounded-full">NEW LAUNCH</span>
            <span className="px-2 py-1 bg-blue-300 text-black text-xs sm:text-sm font-semibold rounded-full">High Price Appreciation</span>
            <span className="px-2 py-1 bg-green-300 text-black text-xs sm:text-sm font-semibold rounded-full">Units of Choice</span>
            <span className="px-2 py-1 bg-purple-300 text-black text-xs sm:text-sm font-semibold rounded-full">Easy Payment Plans</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 sm:p-4 border border-white/50 rounded-lg focus:ring-2 focus:ring-yellow-400 bg-transparent text-white placeholder-white"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 sm:p-4 border border-white/50 rounded-lg focus:ring-2 focus:ring-yellow-400 bg-transparent text-white placeholder-white"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              className="w-full p-3 sm:p-4 border border-white/50 rounded-lg focus:ring-2 focus:ring-yellow-400 bg-transparent text-white placeholder-white"
              required
            />

            <div className="flex justify-center">
              <ReCAPTCHA
                sitekey="6LdFqr4rAAAAANZ2E34czuNTdFJXSoBQXhKLQwYT"
                onChange={(token) => setCaptchaToken(token)}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 hover:scale-105 transition-transform duration-300 text-black rounded-xl shadow-lg disabled:opacity-50"
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
