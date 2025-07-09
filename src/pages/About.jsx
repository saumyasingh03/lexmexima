import React from "react";
import { motion } from "framer-motion";
import { images } from "../components/about/images.js";
import HeroSection from "../components/about/HeroSection.jsx";
import Description1 from "../components/about/Description1.jsx";
import Description2 from "../components/about/Description2.jsx";
import StatsSection from "../components/about/StatsSection.jsx";
import GalleryCarousel from "../components/about/Gallery.jsx";

const fadeInUpVariant = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const About = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUpVariant}
        className="container mx-auto py-20 px-4 md:px-8 max-w-7xl"
      >
        <h2 className="text-center text-3xl sm:text-4xl font-serif md:text-5xl font-bold text-primary mb-4">
         Rewriting the Future of Justice.
         Rising Beyond Barriers.
        </h2>
        <p className=" text-center text-gray-600 max-w-3xl font-serif mx-auto text-sm sm:text-base">
          Lax Maxima builds a new generation of legal and civic leaders—youth from underserved communities who carry their truths,
           their struggles, and their strength into every courtroom and council.
          Where the system once excluded, they now lead—with purpose, power, and a vision for a just tomorrow.
        </p>
      </motion.div>
      <section className="relative w-full">
        <motion.div
          className="md:mb-15 lg:mb-28"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariant}
        >
          <Description1 />
          <Description2 />
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariant}
        >
          <StatsSection />
        </motion.div>

        <motion.div
          className="pt-40"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariant}
        >
          <GalleryCarousel />
        </motion.div>
      </section>
    </div>
  );
};

export default About;
