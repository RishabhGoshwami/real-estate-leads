import React, { useState, useEffect } from 'react';

// This component displays a pop-up form after a 5-second delay.
// It uses Tailwind CSS for styling and focuses on accessibility and SEO.
const AutoPopupForm = () => {
  // 'isOpen' state controls the visibility of the popup.
  const [isOpen, setIsOpen] = useState(false);
  // 'formData' state stores the data from the form input fields.
  const [formData, setFormData] = useState({ name: '', number: '' });

  // This useEffect hook is used to show the popup after 5 seconds.
  // The empty dependency array [] ensures the timer runs only once.
  useEffect(() => {
    const timer = setTimeout(() => {
      // After 5 seconds, show the popup by setting the 'isOpen' state to true.
      setIsOpen(true);
    }, 5000); // 5000 milliseconds = 5 seconds

    // This is a cleanup function that clears the timer when the component unmounts.
    return () => clearTimeout(timer);
  }, []);

  // This function toggles the popup's visibility.
  const togglePopup = () => setIsOpen(!isOpen);

  // This function handles changes in the input fields.
  const handleChange = (e) => {
    // The spread operator (...) is used to preserve the previous state.
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // This function runs when the form is submitted.
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = formData;
    const message = `Hello, my name is ${name} and my number is ${number}.`;
    const encodedMessage = encodeURIComponent(message);

    // This opens a new tab with the WhatsApp API link.
    // The link uses a pre-filled message, which is good for user experience.
    window.open(`https://wa.me/919990989295?text=${encodedMessage}`, '_blank');

    // Closes the popup after the form is submitted.
    togglePopup();
  };

  // If 'isOpen' state is false, the component renders nothing.
  if (!isOpen) return null;

  return (
    // Pop-up's full-screen overlay for better focus.
    // Increased z-index to ensure it's always on top.
    <div
      className="fixed inset-0 flex items-center justify-center z-[100] bg-gray-900/75 transition-opacity duration-300 animate-fade-in"
      aria-modal="true"
      role="dialog"
      aria-labelledby="popup-heading"
    >
      {/* Pop-up container with improved styling and responsiveness */}
      <div className="bg-white p-8 sm:p-10 rounded-2xl w-11/12 max-w-lg relative shadow-2xl transform transition-transform duration-300 scale-100 animate-scale-up">
        {/* Close button with better contrast and hover effect for a modern feel */}
        <button
          onClick={togglePopup}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-3xl font-bold transition-colors"
          aria-label="Close form"
        >
          &times;
        </button>

        {/* Pop-up heading - A strong title is good for SEO and user clarity */}
        <h2 id="popup-heading" className="text-2xl font-bold text-gray-800 mb-2 text-center">
          Nirala World Gateway
        </h2>
        <p className="text-gray-600 mb-6 text-center text-sm sm:text-base">
          Contact us to find your dream home.
        </p>

        {/* The form itself with better styling and focus indicators */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name input field with proper labeling for accessibility */}
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
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
          />
          {/* Number input field */}
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
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
          />
          {/* Submit button with hover and focus effects */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Submit on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default AutoPopupForm;

