// src/components/AutoPopupForm.jsx
import React, { useState, useEffect } from "react";
import BrochurePDF from "../assets/Nirala Gateway_99acres.pdf"; // ✅ Correct PDF import

const AutoPopupForm = ({ projectName = "Nirala Gateway" }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);

  // Auto open after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) {
      alert("⚠️ Please enter Name, Email and Phone Number.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "d5f504e4-3e5a-4dda-8255-62123d25fe81",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          project: projectName, // include project detail
          message: `Lead from Auto Popup Form for ${projectName}`,
          redirect: "", // optional: redirect after submission
        }),
      });

      const result = await response.json();
      console.log("📩 Web3Forms Response:", result);

      if (result.success) {
        alert("✅ Thank you! Brochure will be downloaded.");
        setFormData({ name: "", email: "", phone: "" });
        setShowPopup(false);

        // Trigger brochure download
        const link = document.createElement("a");
        link.href = BrochurePDF; // ✅ Correct PDF path
        link.download = `${projectName}-Brochure.pdf`;
        link.click();
      } else {
        alert("❌ Error: " + (result.message || "Something went wrong"));
      }
    } catch (err) {
      console.error("❌ Error submitting Web3Forms:", err);
      alert("Failed to submit details!");
    } finally {
      setLoading(false);
    }
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 relative animate-fadeIn">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
          onClick={() => setShowPopup(false)}
        >
          ✖
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-extrabold text-center mb-2 text-indigo-700">
          Download Brochure
        </h2>
        <p className="text-sm text-center text-gray-600 mb-6 italic">
          Just fill your <span className="font-semibold">Name</span>,{" "}
          <span className="font-semibold">Email</span> and{" "}
          <span className="font-semibold">Phone Number</span> to access the{" "}
          {projectName} brochure instantly.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Enter your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-transform transform hover:scale-105 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "📥 Download Now"}
          </button>
        </form>

        {/* Extra Line */}
        <p className="text-xs text-gray-400 text-center mt-4">
          * We respect your privacy. Your details are safe with us.
        </p>
      </div>
    </div>
  );
};

export default AutoPopupForm;
