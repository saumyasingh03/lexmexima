import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const GalleryCarousel = () => {
  const images = Array.from(
    { length: 18 },
    (_, i) => `/gallery_carousel/gi${i + 1}.webp`
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  var images1 = [
    images[7],
    images[3],
    images[2],
    images[4],
    images[1],
    images[5],
    // images[6],
  ];
  useEffect(() => {
    const updateMobile = () => setIsMobile(window.innerWidth < 640);
    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => window.removeEventListener("resize", updateMobile);
  }, []);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: isMobile ? 1 : 3, // 1 slide on mobile, 3 on desktop
      spacing: 15,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      // console.log("created", instanceRef.current);
    },
    updated() {
      // console.log("updated", instanceRef.current);
    },
  });

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-primary-special overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-lg font-medium text-accent mb-2">
            Visualizing Our Mission
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-serif text-primary-light mb-4">
            Lex Maxima's Journey in Pictures
          </h3>
          <p className="max-w-2xl mx-auto font-serif text-white/80">
            A vibrant collection of moments from our legal awareness workshops,
            civic leadership training, and community outreach efforts.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
          custom={0}
          className="navigation-wrapper relative mb-12"
        >
          <div ref={sliderRef} className="keen-slider rounded-xl shadow-lg">
            {images.map((src, idx) => (
              <div key={idx} className="keen-slider__slide">
                <img
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
          {instanceRef.current && (
            <>
              <ChevronLeft
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                className="absolute top-1/2 -translate-y-1/2 left-4 z-10 w-10 h-10 p-2 bg-white rounded-full shadow-md cursor-pointer text-accent hover:bg-gray-200 transition-colors"
              />
              <ChevronRight
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                className="absolute top-1/2 -translate-y-1/2 right-4 z-10 w-10 h-10 p-2 bg-white rounded-full shadow-md cursor-pointer text-accent hover:bg-gray-200 transition-colors"
              />
            </>
          )}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
          custom={1}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
        >
          {images1.map((src, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-xl ${
                index === 0 || index === 4 ? "col-span-2" : ""
              } ${index === 3 ? "col-start-2 col-span-2" : ""}
          ${index === 1 || index === 5 || index === 2 ? "col-span-1" : ""}`}
            >
              <img
                src={src}
                alt={`Agricultural image ${index + 1}`}
                className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
          custom={2}
          className="mt-8 text-center"
        >
          <Link
            to="/gallery"
            className="inline-flex items-center bg-accent text-white font-semibold px-6 py-3 rounded-full transition duration-300 hover:bg-white hover:text-primary"
          >
            View Full Gallery <span className="ml-1">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryCarousel;
