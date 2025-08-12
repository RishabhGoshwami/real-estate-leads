import React from "react";

const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="text-3xl font-bold mb-8 text-center text-gray-800">
        Contact Us
      </h2>

      {/* Using a form with a method and action for better semantics */}
      <form className="space-y-6" action="#" method="POST" noValidate>
        <div>
          {/* Labels are associated with inputs for accessibility */}
          <label htmlFor="name" className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            aria-required="true"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            aria-required="true"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-1 font-medium">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., +91 99999 99999"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition w-full md:w-auto"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
