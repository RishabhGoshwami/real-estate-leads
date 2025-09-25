import React, { useState } from "react";
import backgroundImg from "../assets/background_04.jpg";

const LocationDetails = () => {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", "d5f504e4-3e5a-4dda-8255-62123d25fe81");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setFormStatus("✅ Message sent successfully!");
      e.target.reset();
    } else {
      setFormStatus("❌ Failed to send. Please try again.");
    }
  };

  return (
    <div
      className="relative py-16 px-6 lg:px-20 text-white"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Form */}
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6">📩 Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-white/80 text-black focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-white/80 text-black focus:outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              required
              className="w-full p-3 rounded-lg bg-white/80 text-black focus:outline-none"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-white/80 text-black focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:opacity-90"
            >
              🚀 Send Message
            </button>
          </form>
          {formStatus && (
            <p className="mt-4 text-sm text-green-300">{formStatus}</p>
          )}
        </div>

        {/* Right: Google Map */}
        <div>
          <iframe
            title="Nirala Gateway Location"
            className="w-full h-[500px] rounded-xl shadow-lg"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.786842643626!2d77.4747558!3d28.5647563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef83fed3ee85%3A0xdd9959a0e2167730!2sNirala%20Gateway!5e0!3m2!1sen!2sin!4v1692877397000!5m2!1sen!2sin"
          />
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;
