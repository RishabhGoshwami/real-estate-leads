import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PopupForm = ({ isOpen, onClose, onSuccess }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [budget, setBudget] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const backendUrl = "https://real-estate-leads2.onrender.com/api/submit-lead";

    try {
      const response = await fetch(backendUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone: mobile, budget }),
      });

      const result = await response.json();
      console.log("📩 Backend Response:", result);

      if (result.success) {
        if (onSuccess) onSuccess();
        setName("");
        setEmail("");
        setMobile("");
        setBudget("");
        onClose(); // popup close
        navigate("/thank-you"); // ✅ success पर redirect
      } else {
        alert("❌ Error: " + (result.message || "Something went wrong"));
      }
    } catch (err) {
      console.error("❌ Error submitting form:", err);
      alert("Failed to submit lead!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl font-semibold"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Interested to know more about Nirala Gateway?
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Fill in your details below and our sales team will get in touch with
          you shortly.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobile}
            required
            onChange={(e) => setMobile(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3"
          />
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            required
            className="border border-gray-300 rounded-lg px-4 py-3"
          >
            <option value="" disabled>
              Select Your Budget Range
            </option>
            <option value="65-75 L">₹65 L - ₹75 L</option>
            <option value="75-85 L">₹76 L - ₹85 L</option>
            <option value="85-95 L">₹86 L - ₹95 L</option>
            <option value="95-1 Cr">₹96 L - ₹1 Cr</option>
            <option value="Above 1 Cr">Above ₹1 Cr</option>
          </select>

          <p className="text-xs text-gray-500">
            By submitting this form, you agree to receive communication from our
            sales team.
          </p>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white rounded-lg px-4 py-3 font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
