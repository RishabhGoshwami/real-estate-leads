import React, { useState } from "react";

const PopupForm = ({ isOpen, onClose, onSuccess }) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", "d5f504e4-3e5a-4dda-8255-62123d25fe81");
    formData.append("name", name);
    formData.append("mobile", mobile);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        // ✅ Instead of only closing, call success callback
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
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobile}
            required
            onChange={(e) => setMobile(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 text-white rounded-lg px-4 py-2 font-medium hover:bg-green-700 transition"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
