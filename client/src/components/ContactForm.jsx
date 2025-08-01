import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // yahan backend ya email logic add kar sakte ho
  };

  return (
    <section id="contact" className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-4">CONTACT US</h2>
          <p className="text-gray-600 mb-6">Schedule a visit</p>
          <p className="text-lg mb-2"><strong>Phone:</strong> <a href="tel:+918352086520" className="text-blue-600">+91 9990989295</a></p>
          <p className="text-lg mb-6"><strong>Email:</strong> <a href="mailto:sales@niralaworld.com" className="text-blue-600">sales@niralaworld.com</a></p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />
          <input
            type="tel"
            name="phone"
            placeholder="+91"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
