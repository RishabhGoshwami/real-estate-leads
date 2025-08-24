import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 👉 Adjust the relative paths below based on where this file lives.
// If this file is at: src/components/Sector12.jsx and images are at: src/assets/
// then ../assets/... is correct. If your structure is different, update paths accordingly.
import imgOne from "../assets/inner_01_02.png";
import imgTwo from "../assets/inner_slider_01.jpg";

const Sector12 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // Uncomment to enable autoplay
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <section className="w-full bg-white py-12 px-6 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
            Why Invest in Sector 12 Greater Noida West?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Investing in a property in Noida Extension offers a compelling opportunity for
            both home buyers and investors, given its location, connectivity, and
            infrastructure developments. Here’s an in-depth look at what makes this area so
            appealing.
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Strategic Location</h3>
          <p className="text-gray-600 leading-relaxed">
            Set in the centre of Greater Noida West, Sector 12 is easily accessible to the
            major urban centres: Noida, Greater Noida, Ghaziabad, and Delhi. Its central
            positioning heightens its attraction to families and professionals alike since it
            offers a suburban lifestyle with accessibility to the bustling metropolitan.
          </p>
        </div>

        {/* Right Image Slider */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Slider {...settings}>
            <div>
              <img
                src={imgOne}
                alt="Sector 12 — streetscape and residences"
                className="w-full h-[350px] md:h-[420px] object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>
            <div>
              <img
                src={imgTwo}
                alt="Sector 12 — community and amenities"
                className="w-full h-[350px] md:h-[420px] object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Sector12;
