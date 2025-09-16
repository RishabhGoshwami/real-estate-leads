import React, { useState, useEffect } from "react";

const AutoPopupForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
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

    if (!formData.name || !formData.phone) {
      alert("⚠️ Please enter your Name and Phone Number.");
      return;
    }

    setLoading(true);

    try {
      const backendUrl =
        "https://real-estate-leads2.onrender.com/api/submit-lead";

      const response = await fetch(backendUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: "", // optional CRM field
          budget: "", // optional CRM field
          source: "AutoPopup", // ✅ taaki pata chale ki lead auto popup se aayi hai
        }),
      });

      const result = await response.json();
      console.log("📩 AutoPopup Backend Response:", result);

      if (result.success) {
        alert("✅ Thank you! Brochure will be downloaded.");
        setFormData({ name: "", phone: "" });
        setShowPopup(false);

        // Trigger brochure download
        const link = document.createElement("a");
        link.href = "/assets/Nirala Gateway_99acres.pdf"; // ✅ apna pdf path
        link.download = "NiralaGateway-Brochure.pdf";
        link.click();
      } else {
        alert("❌ Error: " + (result.message || "Something went wrong"));
      }
    } catch (err) {
      console.error("❌ Error submitting auto popup form:", err);
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
          Just fill your <span className="font-semibold">Name</span> and{" "}
          <span className="font-semibold">Phone Number</span> to access the
          Nirala Gateway brochure instantly.
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
