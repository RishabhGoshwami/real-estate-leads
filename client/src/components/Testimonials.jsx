import React from "react";

const testimonials = [
  {
    name: "Ravi Sharma",
    feedback:
      "I booked a flat in Nirala Estate Phase 2 and the construction quality and project delivery exceeded my expectations.",
    location: "Greater Noida West",
    ariaLabel: "Ravi Sharma from Greater Noida West gives a positive review about Nirala Estate Phase 2."
  },
  {
    name: "Anita Verma",
    feedback:
      "Professional team and timely possession. Nirala World truly lives up to its reputation.",
    location: "Delhi NCR",
    ariaLabel: "Anita Verma from Delhi NCR praises Nirala World for professional service and timely possession."
  },
  {
    name: "Karan Mehta",
    feedback:
      "The entire process from booking to possession was smooth. Highly recommend Nirala projects.",
    location: "Ghaziabad",
    ariaLabel: "Karan Mehta from Ghaziabad gives a high recommendation for Nirala projects after a smooth booking process."
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="max-w-6xl mx-auto px-4">
        {/* SEO friendly heading */}
        <h2 id="testimonials-heading" className="text-3xl font-bold text-center mb-10">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
              aria-label={t.ariaLabel}
            >
              <p className="text-gray-700 italic mb-4">“{t.feedback}”</p>
              <hr className="my-2" />
              <p className="text-sm font-semibold">{t.name}</p>
              <p className="text-xs text-gray-500">{t.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
