import React, { useState } from "react";

const PopupForm = ({ isOpen, onClose, onSuccess }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [budget, setBudget] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", "d5f504e4-3e5a-4dda-8255-62123d25fe81");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("budget", budget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        if (onSuccess) onSuccess();
      } else {
        alert("Error: " + result.message);
      }
    } catch (err) {
      alert("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl font-semibold"
          aria-label="Close form"
        >
          ✕
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Interested to know more about Nirala Gateway?
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Fill in your details below and our sales team will get in touch with you shortly.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobile}
            required
            onChange={(e) => setMobile(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
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

          {/* Disclaimer */}
          <p className="text-xs text-gray-500">
            By submitting this form, you agree to receive communication from our
            sales team. Your information will be kept confidential and used only for inquiry purposes.
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
