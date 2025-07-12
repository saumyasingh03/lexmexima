import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MissionCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-primary-special text-white rounded-xl sm:rounded-2xl md:rounded-[1.5rem] p-6 sm:p-8 md:p-10 max-w-md shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-2xl font-serif sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-accent"
      >
        Our Mission
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed text-white/90"
      >
        Lax Maxima is dedicated to empowering communities through legal literacy,
        civic engagement, and leadership development, ensuring justice and knowledge for all.
      </motion.p>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="grid grid-cols-2 gap-4 mb-8"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-primary-dark/50 p-4 rounded-lg text-center backdrop-blur-sm hover:bg-primary-dark/70 transition-all duration-300"
        >
          <div className="text-accent text-3xl font-bold mb-2">10K+</div>
          <div className="text-sm font-medium text-white/90">People Reach</div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-primary-dark/50 p-4 rounded-lg text-center backdrop-blur-sm hover:bg-primary-dark/70 transition-all duration-300"
        >
          <div className="text-accent text-3xl font-bold mb-2">21+</div>
          <div className="text-sm font-medium text-white/90">Active States</div>
        </motion.div>
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-center sm:text-left"
      >
        <Link
          to="/about"
          className="group inline-flex items-center gap-2 bg-accent text-white hover:text-primary px-6 py-3 rounded-full text-sm font-medium hover:bg-white transition-all duration-300 hover:scale-105"
        >
          Our Story
          <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default MissionCard;
