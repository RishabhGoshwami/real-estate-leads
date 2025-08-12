import React, { useState } from 'react';

const VideoSection = () => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const videoId = "GtsqEwdArFk"; // Unique YouTube video ID
  const videoTitle = "Nirala World - Our Vision"; // Descriptive title for accessibility

  const handleClick = () => {
    setIsIframeLoaded(true);
  };

  return (
    <section className="w-full py-10 bg-gray-100" aria-labelledby="video-heading">
      <div className="max-w-6xl mx-auto px-4">
        <h2 id="video-heading" className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
          Our Vision at Nirala World
        </h2>

        <div
          className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg cursor-pointer"
          onClick={handleClick}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => { if(e.key === 'Enter') handleClick(); }}
          aria-label={`Load and play video: ${videoTitle}`}
        >
          {/* Show thumbnail and play button until the video is loaded */}
          {!isIframeLoaded ? (
            <>
              <img
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt={`${videoTitle} - Video Thumbnail`}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
              />
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                bg-black bg-opacity-50 rounded-full p-4 transition-all hover:bg-opacity-75"
              >
                {/* Play icon in SVG format */}
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 84 84"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="42" cy="42" r="42" fill="currentColor" />
                  <polygon points="33,27 58,42 33,57" fill="black" />
                </svg>
              </div>
            </>
          ) : (
            /* Load iframe only after user interaction */
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              src={`https://www.youtube.com/embed/${videoId}?start=64&autoplay=1&mute=1&loop=1&playlist=${videoId}`}
              title={videoTitle}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
