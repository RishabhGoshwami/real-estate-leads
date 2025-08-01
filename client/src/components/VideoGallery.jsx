import React from "react";

const videos = [
  {
    title: "Corporate Video",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    title: "Project Walkthrough",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    title: "Customer Testimonials",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
];

const VideoGallery = () => {
  return (
    <section className="py-16 bg-gray-100" id="video-gallery">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Video Gallery</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
