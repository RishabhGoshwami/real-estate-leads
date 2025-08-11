import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// ✅ WebP optimized imports (Vite ImageTools)
import property1 from "../assets/property1.jpg?w=1920&format=webp";
import property6 from "../assets/property6.jpg?w=1920&format=webp";
import property3 from "../assets/property3.jpg?w=1920&format=webp";

const HeroBanner = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const number = formData.get("user_number");

    const message = `New Property Inquiry:
Name: ${name}
Email: ${email}
Number: ${number}`;

    const whatsappNumber = "9990989295";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
    setLoading(false);
    formRef.current.reset();
  };

  return (
    <section className="relative w-full h-[90vh]" aria-label="Nirala World Hero Banner">
      {/* Background Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={false}
        navigation={false}
        className="absolute top-0 left-0 w-full h-full"
      >
        {[property1, property6, property3].map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full relative">
              <img
                src={src}
                alt={`Premium Property Banner ${index + 1} - Nirala World`}
                // loading="lazy"
                className="w-full h-full object-cover brightness-75"
                fetchpriority="high"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-20 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10">
        {/* Left Info */}
        <div className="max-w-lg text-white space-y-3 bg-black/50 p-6 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold">
            Nirala World Gateway
          </h2>
          <p className="text-lg">At Sector 12 Noida Extension</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Directly Accessible from 130 Mtr. Road</li>
            <li>Proper 1 BHK Studio</li>
            <li>Fully Furnished Studio</li>
          </ul>
          <p className="text-lg font-semibold">
            Launch Price:{" "}
            <span className="text-yellow-300">₹ 67.5 Lacs*</span>
          </p>
        </div>

        {/* Right Form */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-md mt-6 md:mt-0">
          <h2 className="text-xl font-bold mb-4">Send Us A Message</h2>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              aria-label="Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              aria-label="Your Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              name="user_number"
              placeholder="Your Number"
              required
              aria-label="Your Number"
              pattern="[0-9]{10}"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition"
            >
              {loading ? "Sending..." : "Send on WhatsApp"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
