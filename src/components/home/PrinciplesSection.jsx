import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  ShieldCheck,
  HeartHandshake,
  BookOpen,
  Handshake,
  BadgeDollarSign,
} from "lucide-react"; // Import lucide icons

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

const TestimonialsSection = () => { // Renamed to PrinciplesSection for clarity
  const testimonials = [ // These are principles, not testimonials
    {
      heading: "Access for All",
      text: "Ensuring legal knowledge, education, and justice mechanisms are accessible to every individual, regardless of background.",
      icon: Users,
    },
    {
      text: "We believe in the transformative power of legal and civic education to foster informed citizens and capable leaders.",
      heading: "Empowerment Through Education",
      icon: ShieldCheck,
    },
    {
      text: "Upholding the highest standards of ethical conduct, transparency, and accountability in all our programs and interactions.",
      heading: "Integrity and Accountability",
      icon: HeartHandshake,
    },
    {
      text: "Prioritizing the needs, voices, and lived experiences of marginalized communities in shaping our legal and civic programs.",
      heading: "Community-Centric Approach",
      icon: BookOpen,
    },
    {
      text: "Fostering collaboration and mutual support among legal professionals, community leaders, and citizens for collective impact.",
      heading: "Collaboration for Change",
      icon: Handshake,
    },
    {
      text: "Utilizing modern tools, innovative methodologies, and creative strategies to advance justice and public policy advocacy.",
      heading: "Innovation in Advocacy",
      icon: BadgeDollarSign,
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 bg-primary text-white overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-90"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Headline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-lg font-medium text-white mb-2">Our Core Values</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            Pillars of Justice and Empowerment
          </h3>
          <p className="max-w-2xl mx-auto font-serif text-white/80">
            The foundational beliefs guiding Lax Maxima's mission to foster an
            equitable and just society through legal and civic leadership.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
          custom={1}
          className="grid grid-cols-2 md:grid-cols-3 md:grid-cols-3 gap-4 md:gap-7"
        >
          {testimonials.map((testimonial, index) => (
            <Card key={index} {...testimonial} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
          custom={2}
          className="mt-12 text-center"
        ></motion.div>
      </div>
    </section>
  );
};

const Card = ({ text, heading, icon: Icon, index }) => (
  <motion.div
    variants={fadeInUp}
    custom={index * 0.1}
    className="bg-white/10 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:bg-white/20 backdrop-blur-sm h-full flex flex-col"
  >
    <div className="flex flex-col items-center justify-start text-center h-full p-4">
      {Icon && <Icon className="text-accent w-12 h-12 mb-4" />} {/* Adjusted size */}
      <h4 className="text-xl font-bold font-serif mb-2">{heading}</h4>
      <p className="text-white/90 text-sm grow">{text}</p>
    </div>
  </motion.div>
);

export default TestimonialsSection; // Renamed to PrinciplesSection for clarity