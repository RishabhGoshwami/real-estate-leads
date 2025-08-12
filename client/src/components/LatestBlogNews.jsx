import React from "react";
import property1 from '../assets/property1.jpg?w=800&format=webp'
import property3 from '../assets/property3.jpg?w=800&format=webp'
import property6 from '../assets/property6.jpg?w=800&format=webp'
const blogs = [
  {
    title: "Nirala Estate Phase 2 – Possession Started",
    date: "July 24, 2025",
    image: property1, // Place image in /public
    alt: "Image of Nirala Estate Phase 2 apartment complex.",
    excerpt:
      "Nirala Estate Phase 2 has begun handing over homes to happy families. Get the full update.",
    link: "/blog/nirala-estate-phase-2-possession",
  },
  {
    title: "Top Real Estate Projects in Greater Noida West",
    date: "June 18, 2025",
    image: property3,
    alt: "Image of a modern real estate project in Greater Noida West.",
    excerpt:
      "Looking for the best housing in Noida Extension? Explore our most successful ongoing and upcoming projects.",
    link: "/blog/top-real-estate-projects-greater-noida-west",
  },
  {
    title: "Nirala World – 25 Years of Excellence",
    date: "May 12, 2025",
    image: property6,
    alt: "Image of Nirala World logo celebrating 25 years of excellence.",
    excerpt:
      "Celebrating 25 years of trust and innovation in the real estate sector.",
    link: "/blog/nirala-world-25-years",
  },
];

const LatestBlogNews = () => {
  return (
    <section className="py-16 bg-white" id="blog-news" aria-labelledby="blog-news-heading">
      <div className="max-w-7xl mx-auto px-4">
        {/* SEO friendly heading */}
        <h2 id="blog-news-heading" className="text-3xl font-bold text-center mb-10">
          Latest Blog and News from Nirala World
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={blog.image}
                alt={blog.alt}
                className="w-full h-52 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{blog.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                <p className="text-gray-700 mb-3">{blog.excerpt}</p>
                <a
                  href={blog.link}
                  className="text-blue-600 font-medium hover:underline"
                  aria-label={`Read more about ${blog.title}`}
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogNews;
