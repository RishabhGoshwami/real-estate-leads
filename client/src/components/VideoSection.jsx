import React from 'react'

const VideoSection = () => {
  return (
    <section className="w-full py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
          Our Vision
        </h2>

        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/GtsqEwdArFk?start=64&autoplay=1&mute=1&loop=1&playlist=GtsqEwdArFk"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
