import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import MissionCard from "./MissionCard";

// Animation Variants
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Typing Text Component - Memoized for better performance
const TypingText = React.memo(({ lines, className }) => {
  const [displayedText, setDisplayedText] = useState(["", ""]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const currentLine = lines[lineIndex];
    if (charIndex <= currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => {
          const newDisplayedText = [...prev];
          newDisplayedText[lineIndex] = currentLine.substring(0, charIndex);
          return newDisplayedText;
        });
        setCharIndex((prevCharIndex) => prevCharIndex + 1);
      }, 50); // Typing speed
      return () => clearTimeout(timeout);
    } else {
      // Line completed, move to next line or restart
      const lineDelay = setTimeout(() => {
        setLineIndex((prevLineIndex) => (prevLineIndex + 1) % lines.length);
        setCharIndex(0);
        if (lineIndex === lines.length - 1) {
          // Reset all lines if it's the last one to simulate full retype
          setDisplayedText(["", ""]);
        }
      }, 2000); // Delay before starting next line or restarting
      return () => clearTimeout(lineDelay);
    }
  }, [charIndex, lineIndex, lines]);

  return (
    <div className={className}>
      {lines.map((_, idx) => (
        <span key={idx} className="block">
          {displayedText[idx]}
          {idx === lineIndex && charIndex <= lines[lineIndex].length && (
            <span className="animate-blink">|</span>
          )}
        </span>
      ))}
    </div>
  );
});

const Hero = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, -100]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  const typingLines = [
    "Empowering Voices.",
    "Ensuring Justice.",
    "Building Leaders.",
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-accent">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/home/hero-bg.webp"
          alt="Abstract legal background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between container mx-auto px-4 py-16 text-white">
        {/* Left Content - Headline and CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center lg:text-left lg:w-1/2 mb-10 lg:mb-0"
          style={{ y: yText, opacity: opacityText }}
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-4 leading-tight"
          >
            Lax Maxima – <br />
            <span className="text-accent">
              <TypingText lines={typingLines} className="inline-block" />
            </span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            custom={1}
            className="text-lg sm:text-xl max-w-lg mx-auto lg:mx-0 mb-8"
          >
            A leading academy fostering comprehensive legal knowledge, civic
            leadership, and community empowerment across India.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            custom={2}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
          >
            <Link
              to="/projects"
              className="group relative px-8 py-3 bg-accent text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:text-accent"
            >
              <span className="relative z-10">Our Work</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Link>
            <Link
              to="/about"
              className="group relative px-8 py-3 border-2 border-white text-white hover:text-accent font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          custom={1}
          variants={fadeInUp}
          className="w-full lg:w-auto max-w-md mt-8 lg:mt-0 transform hover:scale-105 transition-transform duration-300"
        >
          <MissionCard />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;