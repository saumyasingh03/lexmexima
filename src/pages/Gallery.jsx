import React, { useEffect, useRef, useState } from "react";

const Gallery = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  // ✅ Actual filenames
  const filenames = [
    "im1.jpg",
    "im3.jpeg",
    "im6.jpg",
    "im7.jpg",
    "im8.jpg",
    "im12.jpg",
    "im13.jpg",
    "im14.jpg",
    "im15.jpg",
    "im16.jpg",
    "im17.jpg",
    "im23.jpeg",
    "im24.jpg",
    "im25.jpg",
    "im31.jpg",
    "im34.jpeg",
    "im35.jpeg",
    "im37.jpeg",
    "im38.jpg",
    "im39.jpg",
    "im42.jpg",
    "im45.jpeg",
    "im50.jpg",
    "im51.jpg",
    "im53.jpg",
    "im54.jpg",
    "im55.jpg",
    "im56.jpg",
    "im58.jpeg",
    "im59.jpg",
    "im60.jpg",
    "im61.jpg",
    "im62.jpg",
    "im63.jpg",
    "im66.jpg",
    "im67.jpg",
    "im68.jpg",
    "im69.jpg",
    "im70.jpg",
    "im71.jpg",
  ];

  const images = filenames.map((name) => `/gallery/${name}`);

  useEffect(() => {
    let scrollInterval;
    let isScrollingBack = false;
    let delayTimeout;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (isPaused || isScrollingBack) return;

        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;

        // If at bottom
        if (scrollTop + clientHeight >= scrollHeight - 1) {
          clearInterval(scrollInterval);
          isScrollingBack = true;

          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            isScrollingBack = false;
            startScrolling(); // restart scrolling after scroll-to-top
          }, 2000); // wait for 2 seconds before scrolling to top
        } else {
          window.scrollBy({ top: 1, behavior: "smooth" });
        }
      }, 30);
    };

    // Start scrolling only after 20 seconds
    if (!isPaused) {
      delayTimeout = setTimeout(() => {
        startScrolling();
      }, 2000); // 20 seconds delay
    }

    return () => {
      clearTimeout(delayTimeout);
      clearInterval(scrollInterval);
    };
  }, [isPaused]);

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[#202d1a] to-[#202d1a] text-white flex flex-col"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      ref={scrollRef}
    >
      {/* Masonry Gallery Grid */}
      <div className="flex-1 bg-[#5b5e5a] pt-12 pb-10 px-4 md:px-20">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-4">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Gallery ${idx + 1}`}
              className="w-full mb-4 rounded-xl shadow-lg break-inside-avoid"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
