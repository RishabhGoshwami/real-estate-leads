import React, { useState } from "react";
import property3 from "../assets/property3.jpg"; // ✅ apni image ka exact extension check kar lena

const AboutSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="about"
      className="py-16 px-6 md:px-12 bg-gray-50 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            About <span className="text-green-600">Nirala Gateway</span>
          </h2>

          <p className="text-gray-700 mb-2 leading-relaxed">
            <strong>Location:</strong> Sector 12, Greater Noida West
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            <strong>RERA No:</strong> UPRERAPRJ531916/06/2025
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Nirala Developers</strong> proudly presents{" "}
            <strong>Nirala Gateway</strong>, a premium commercial offering
            featuring modern studio apartments in the heart of{" "}
            <strong>Sector 12, Greater Noida West (Noida Extension)</strong>.
            This thoughtfully designed project—formerly known as Nirala Studio
            Apartments—offers fully-furnished studio units in sizes of{" "}
            <strong>600 sq. ft.</strong> and <strong>675 sq. ft.</strong>,
            catering perfectly to individuals, couples, professionals, and small
            families seeking a smart, stylish, and efficient living space.
          </p>

          {/* Conditionally Render Text */}
          {showMore && (
            <>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Nirala Gateway delivers an unbeatable blend of affordability,
                convenience, and long-term investment potential in one of the
                fastest-growing corridors of NCR. The project’s strategic
                location ensures seamless connectivity to major hubs,
                expressways, and upcoming metro stations, while offering
                essential amenities and vibrant urban infrastructure.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>"Nirala Gateway"</strong> is part of a larger commercial
                ecosystem anchored by <strong>Nirala High Street Mall</strong>,
                designed with world-class infrastructure to attract retail,
                entertainment, and office investors. The growing demand for
                high-quality commercial and residential developments in Sector
                12 Noida Extension makes this a lucrative choice for both
                end-users and investors.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                With flexible commercial spaces ideal for retail showrooms,
                boutique offices, cafes, or entertainment ventures, and the
                added benefit of assured rental income,{" "}
                <strong>Nirala Gateway Noida Extension</strong> stands out as a
                high-yield asset.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Whether you're looking to expand your business footprint or
                build a passive income portfolio,{" "}
                <strong>Nirala Gateway</strong> offers an unmatched opportunity
                in Greater Noida West’s dynamic real estate market. Modern
                design, strategic positioning, and assured returns make this the
                perfect gateway to prosperity.
              </p>
            </>
          )}

          {/* Show More / Less Button */}
          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-4 px-4 py-2 text-sm font-semibold text-green-600 border border-green-600 rounded-full hover:bg-green-600 hover:text-white transition"
          >
            {showMore ? "Show Less ▲" : "Show More ▼"}
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="relative">
          <img
            src={property3}
            alt="Nirala Gateway - Premium Studio Apartments and Commercial Spaces"
            className="rounded-2xl shadow-lg object-cover w-full h-full"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
