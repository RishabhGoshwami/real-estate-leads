import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 md:px-12 bg-gray-50 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            About <span className="text-green-600">Nirala World</span>
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Established in <strong>1996</strong>, <strong>Nirala World</strong> has been a trusted
            name in the <strong>real estate sector of NCR</strong>, delivering
            premium residential and commercial projects. With over two decades
            of expertise, we have redefined urban living by blending{" "}
            <strong>luxury, affordability, and modern infrastructure</strong>.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Guided by an experienced team of professionals, our mission is to
            create homes that reflect the aspirations of the emerging India.
            From <strong>luxury apartments</strong> to <strong>affordable housing</strong>,
            every project is designed with state-of-the-art architecture,
            premium amenities, and a sustainable green environment.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our core values — <strong>quality construction</strong>, timely
            delivery, transparency, and customer satisfaction — have made us a
            pioneer among leading developers. With projects at prime locations
            of NCR, <strong>Nirala World</strong> continues to shape the future
            of modern living.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="relative">
          <img
            src="https://dynamic.realestateindia.com/proj_images/project37145/projGal-4.jpg"
            alt="Nirala World Luxury Apartments in NCR with modern amenities"
            className="rounded-2xl shadow-lg object-cover w-full h-full"
            loading="lazy"
            fetchpriority="low"
          />
          {/* Optional Overlay for Style */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
