import React from "react";

const testimonials = [
  {
    name: "Ravi Sharma",
    feedback:
      "I booked a flat in Nirala Estate Phase 2 and the construction quality and project delivery exceeded my expectations.",
    location: "Greater Noida West",
  },
  {
    name: "Anita Verma",
    feedback:
      "Professional team and timely possession. Nirala World truly lives up to its reputation.",
    location: "Delhi NCR",
  },
  {
    name: "Karan Mehta",
    feedback:
      "The entire process from booking to possession was smooth. Highly recommend Nirala projects.",
    location: "Ghaziabad",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100" id="testimonials">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
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
