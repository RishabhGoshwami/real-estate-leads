import React from 'react';

const AboutUs = () => {
  return (
    <div className="pt-24 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">About Us</h1>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Since inception in 1996, Nirala World has created new benchmarks in the domain of real estate and has earned a leading name in the constellation of elite developers. Led by a dynamic team of experienced professionals, the company aims to fulfill the aspirations of modern India for modern spaces.
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Development of luxurious residential apartments at affordable pricing is the main expertise of the company. Nirala World has successfully delivered many residential & commercial projects over nearly two decades of its journey.
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Quality construction, timely delivery, adherence to commitments, and customer satisfaction are the USPs of Nirala World. Strategically located in prime NCR areas, all projects boast state-of-the-art infrastructure with luxury amenities and green surroundings.
        </p>
        
        {/* Optional Image Section */}
        <div className="my-8">
          <img
            src="property6.jpg"
            alt="Nirala World projects"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Vision & Mission</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Nirala World aims to pioneer affordable luxury real estate projects that cater to the aspirations of modern India — combining innovation, quality, and transparency with customer-centric values.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Over 25 years of consistent excellence and trust.</li>
          <li>Quality construction with timely delivery.</li>
          <li>Green-certified developments and modern amenities.</li>
          <li>Strong presence across Noida & Noida Extension in the NCR.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Contact Us</h2>
        <p className="text-gray-700">For more details, reach us at:</p>
        <ul className="text-gray-700 space-y-1">
          <li>Office Address: Logix Infotech Park, Sector‑59, Noida, U.P., 201301</li>
          <li>Phone: +91 120 4823000</li>
          <li>Email: sales@niralaworld.com</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
