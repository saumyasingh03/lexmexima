import React from "react";
import { Link } from "react-router-dom";
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

const ProjectsHighlight = () => {
  const projects = [
    {

      title: " Legal Awareness & Literacy",
      description:
        "Educating citizens—especially marginalized groups—about their rights, laws, and legal procedures to empower informed action and decision-making.",
      image: "/gallery/im1.jpg",
    },
    {
      title: "Access to Justice",
      description:
        "Working to remove barriers (financial, linguistic, geographic, or systemic) that prevent people from seeking or receiving fair legal representation and outcomes.",
      image: "/gallery/im3.jpg",
    },
    {
      title: "Judicial Reform & Accountability",
      description:
        "Advocating for transparent, timely, and ethical judicial processes, while addressing issues like case backlogs, corruption, and underrepresentation.",

      image: "/gallery/im24.jpg",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 bg-primary-special overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Headline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-lg font-medium text-accent mb-2">
            Our Initiatives
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-serif text-primary-light mb-4">
            Pioneering Justice Through Action
          </h3>
          <p className="max-w-2xl mx-auto font-serif text-white/80">
            Highlighting our commitment to legal empowerment, civic engagement,
            and community upliftment.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}
              custom={index}
              className="relative rounded-lg overflow-hidden shadow-lg group transform hover:scale-[1.02] transition-transform duration-300 ease-out"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover brightness-75 group-hover:brightness-90 transition-all duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/70 transition-opacity"></div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-serif">
                  {project.title}
                </h3>
                <p className="text-sm text-white/90 mb-4">
                  {project.description}
                </p>
                <Link
                  to="/projects"
                  className="inline-flex items-center mt-auto text-sm font-medium text-accent hover:text-white transition-colors"
                >
                  Learn More <span className="ml-1">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeInUp}
          custom={4}
          className="mt-10 text-center"
        >
          <Link to="/projects">
            <button className="bg-accent text-white font-semibold px-6 py-3 rounded-full transition duration-300 hover:bg-white hover:text-primary">
              View All Projects <span className="ml-1">→</span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsHighlight;
