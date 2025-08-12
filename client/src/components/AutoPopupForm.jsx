import React, { useState, useEffect } from 'react';

const AutoPopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', number: '' });

  // Pop-up को 5 सेकंड की देरी के बाद दिखाएँ
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const togglePopup = () => setIsOpen(!isOpen);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = formData;
    const message = `Hello, my name is ${name} and my number is ${number}.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919990989295?text=${encodedMessage}`, '_blank');
    togglePopup();
  };

  // Pop-up को सिर्फ़ तभी दिखाएँ जब isOpen true हो
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative animate-fade-in">
        <button
          onClick={togglePopup}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-2xl font-bold"
          aria-label="Close form"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">Nirala World Gateway</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="name" className="sr-only">Your Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            aria-required="true"
            className="w-full border px-4 py-2 rounded focus:outline-none"
          />
          <label htmlFor="number" className="sr-only">Your Number</label>
          <input
            id="number"
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Your Number"
            required
            aria-required="true"
            className="w-full border px-4 py-2 rounded focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Submit on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default AutoPopupForm;