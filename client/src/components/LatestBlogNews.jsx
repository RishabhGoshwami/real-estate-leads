import React from "react";

const blogs = [
  {
    title: "Nirala Estate Phase 2 – Possession Started",
    date: "July 24, 2025",
    image: "/blog1.jpg", // Place image in /public
    excerpt:
      "Nirala Estate Phase 2 has begun handing over homes to happy families. Get the full update.",
    link: "#",
  },
  {
    title: "Top Real Estate Projects in Greater Noida West",
    date: "June 18, 2025",
    image: "/blog2.jpg",
    excerpt:
      "Looking for the best housing in Noida Extension? Explore our most successful ongoing and upcoming projects.",
    link: "#",
  },
  {
    title: "Nirala World – 25 Years of Excellence",
    date: "May 12, 2025",
    image: "/blog3.jpg",
    excerpt:
      "Celebrating 25 years of trust and innovation in the real estate sector.",
    link: "#",
  },
];

const LatestBlogNews = () => {
  return (
    <section className="py-16 bg-white" id="blog-news">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Latest Blog and News
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{blog.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                <p className="text-gray-700 mb-3">{blog.excerpt}</p>
                <a
                  href={blog.link}
                  className="text-blue-600 font-medium hover:underline"
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
