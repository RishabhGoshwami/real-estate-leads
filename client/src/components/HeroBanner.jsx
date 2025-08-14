import React, { useState, useEffect } from "react";

const HeroBanner = () => {
  const images = [
    "https://www.niralaestate2.co.in/images/gallery/gallery7.jpg",
    "https://www.sikkagroups.in/blogs/wp-content/uploads/2023/11/1-2-1024x687.jpg",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000); // 5 seconds interval for the images to change

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden" aria-label="Nirala World Hero Banner">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Nirala World property, slide ${index + 1}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          loading="eager"
        />
      ))}
    </section>
  );
};

export default HeroBanner;
