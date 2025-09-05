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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ CRM API POST request
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const apiUrl = "https://app.propertyexpertrealtors.com/api/getRecords.php";

    const params = new URLSearchParams();
    params.append("authentication_key", authKey);
    params.append("leads_full_name", formData.name);
    params.append("leads_phone_number", formData.phone);
    params.append("leads_alternate_phone", "");
    params.append("leads_email_id", formData.email);
    params.append("leads_gender", "");
    params.append("leads_type", "LEAD");
    params.append("leads_source", "Nirala Gateway");
    params.append("leads_re_source", "www.niralaworld.org");
    params.append("leads_entry_type", "Website");
    params.append("leads_projects_name", "Nirala Gateway");
    params.append("leads_remarks", "");
    params.append("leads_date_of_birth", "");
    params.append("budgets", "");
    params.append("location", "");
    params.append("duration", "");
    params.append("property_type", "");
    params.append("tags", "");

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      const text = await response.text();
      let result;
      try {
        result = JSON.parse(text);
      } catch {
        result = { success: false, message: text };
      }

      console.log("📩 API Response:", result);

      if (result.success || result.status === "success") {
        setFormData({ name: "", email: "", phone: "" });
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
    <section className="relative w-full h-screen overflow-hidden" aria-label="Nirala World Hero Banner">
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

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)]">
          <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent">
            Nirala Gateway
          </span>
        </h1>

        <p className="text-lg md:text-2xl font-semibold text-white tracking-wide pt-2 mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Best Investment Opportunity
        </p>

        <div className="bg-black/35 shadow-2xl rounded-2xl p-6 md:p-8 max-w-lg w-full border border-white/40">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">1 RK Studio Apartment</h2>
          <p className="text-lg text-yellow-300 font-bold mb-2">₹ 65 L - 1.2 Cr</p>
          <p className="text-sm text-white mb-1">📍 Sector-12, Greater Noida West</p>
          <p className="text-sm text-white mb-1">🏗 Completion: Apr, 2030</p>
          <p className="text-sm text-black font-bold bg-green-400 px-3 py-1 rounded-full inline-block mb-4">
            ✅ RERA Approved: UPRERAPRJ531916
          </p>

          <div className="flex flex-wrap gap-2 justify-center mb-6">
            <span className="px-3 py-1 bg-yellow-300 text-black text-xs font-semibold rounded-full">NEW LAUNCH</span>
            <span className="px-3 py-1 bg-blue-300 text-black text-xs font-semibold rounded-full">High Price Appreciation</span>
            <span className="px-3 py-1 bg-green-300 text-black text-xs font-semibold rounded-full">Units of Choice</span>
            <span className="px-3 py-1 bg-purple-300 text-black text-xs font-semibold rounded-full">Easy Payment Plans</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full p-3 border border-white/50 rounded-lg focus:ring-2 focus:ring-yellow-400 bg-transparent text-white placeholder-white" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full p-3 border border-white/50 rounded-lg focus:ring-2 focus:ring-yellow-400 bg-transparent text-white placeholder-white" required />
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone" className="w-full p-3 border border-white/50 rounded-lg focus:ring-2 focus:ring-yellow-400 bg-transparent text-white placeholder-white" required />
            <button type="submit" disabled={loading} className="w-full px-6 py-3 text-lg font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 hover:scale-105 transition-transform duration-300 text-black rounded-xl shadow-lg disabled:opacity-50">
              {loading ? "Submitting..." : "📖 Request E-Brochure"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
