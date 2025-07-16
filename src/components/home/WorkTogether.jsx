import React from "react";
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

const WorkTogether = () => {
  return (
    <section className="relative bg-primary-special w-full overflow-hidden">
      <div className="relative z-20 container mx-auto px-4 py-16 md:py-24">
        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className="text-lg font-medium text-accent mb-2">
            Lex Maxima – Law, Justice & Civic Leadership Academy
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-serif text-primary-light mb-4">
            Justice. Knowledge. Voice For All.
          </h3>
          <p className="max-w-2xl mx-auto font-serif text-white/80">
            Empowering students from underserved areas for careers in law,
            judiciary, and civic leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-primary-dark/80 text-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-white/10"
          >
            <img
              src="/gallery/im14.jpg"
              alt="People studying legal documents"
              className="w-full h-52 md:h-64 object-cover"
            />
            <div className="p-6 flex flex-col grow">
              <h4 className="text-xl font-bold font-serif text-accent mb-3">
                "Know Your Rights" Interactive Guides
              </h4>
              <p className="text-white/80 mb-4 grow">
                Short, animated videos or infographics explaining fundamental
                rights with simple, relatable examples and "What if...?"
                scenarios.
              </p>
              <a
                href="https://forms.gle/QVgxw657fzfKUW9WA"
                className="text-accent font-medium hover:underline mt-auto"
              >
                Explore Guides →
              </a>
            </div>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-primary-dark/80 text-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-white/10"
          >
            <img
              src="/gallery_carousel/gi7.webp"
              alt="Judges and court staff"
              className="w-full h-52 md:h-64 object-cover"
            />
            <div className="p-6 flex flex-col grow">
              <h4 className="text-xl font-bold font-serif text-accent mb-3">
                "Meet Your Judiciary" Series
              </h4>
              <p className="text-white/80 mb-4 grow">
                Brief profiles and "A Day in the Life" overviews of judges,
                court staff, and legal aid volunteers to humanize the legal
                system.
              </p>
              <a
                href="https://forms.gle/QVgxw657fzfKUW9WA"
                className="text-accent font-medium hover:underline mt-auto"
              >
                Meet the Judiciary →
              </a>
            </div>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-primary-dark/80 text-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-white/10"
          >
            <img
              src="/home/about1.webp"
              alt="Ancient legal texts and modern media"
              className="w-full h-52 md:h-64 object-cover"
            />
            <div className="p-6 flex flex-col grow">
              <h4 className="text-xl font-bold font-serif text-accent mb-3">
                "Legal Lore & Local Legends" (Fact vs. Fiction)
              </h4>
              <p className="text-white/80 mb-4 grow">
                "Busting Legal Myths" series and comparisons of courtroom drama
                with Indian legal reality, engagingly correcting misinformation.
              </p>
              <a
                href="https://forms.gle/QVgxw657fzfKUW9WA"
                className="text-accent font-medium hover:underline mt-auto"
              >
                Debunk Myths →
              </a>
            </div>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-primary-dark/80 text-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-white/10"
          >
            <img
              src="/gallery/im14.jpg"
              alt="Flowchart illustrating a legal process"
              className="w-full h-52 md:h-64 object-cover"
            />
            <div className="p-6 flex flex-col grow">
              <h4 className="text-xl font-bold font-serif text-accent mb-3">
                "How Does Justice Work For You?" - Case Journey Simplified
              </h4>
              <p className="text-white/80 mb-4 grow">
                Infographics, flowcharts, and checklists to break down complex
                legal processes into easy-to-understand, actionable steps.
              </p>
              <a
                href="https://forms.gle/QVgxw657fzfKUW9WA"
                className="text-accent font-medium hover:underline mt-auto"
              >
                Understand the Journey →
              </a>
            </div>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-primary-dark/80 text-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-white/10"
          >
            <img
              src="/gallery_carousel/gi7.webp"
              alt="People sharing ideas"
              className="w-full h-52 md:h-64 object-cover"
            />
            <div className="p-6 flex flex-col grow">
              <h4 className="text-xl font-bold font-serif text-accent mb-3">
                "Your Voice Matters" - Public Engagement & Feedback
              </h4>
              <p className="text-white/80 mb-4 grow">
                Online suggestion box and "Ask a Judge/Lawyer" Q&A series to
                create channels for citizens to feel heard and connected.
              </p>
              <a
                href="https://forms.gle/QVgxw657fzfKUW9WA"
                className="text-accent font-medium hover:underline mt-auto"
              >
                Share Your Voice →
              </a>
            </div>
          </motion.div>

          <motion.div
            custom={5}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-primary-dark/80 text-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-white/10"
          >
            <img
              src="/home/about1.webp"
              alt="Digital interface for legal services"
              className="w-full h-52 md:h-64 object-cover"
            />
            <div className="p-6 flex flex-col grow">
              <h4 className="text-xl font-bold font-serif text-accent mb-3">
                "Digital Justice & E-Courts" - The Future is Now
              </h4>
              <p className="text-white/80 mb-4 grow">
                Explainer videos on checking case status online, e-filing, and
                virtual hearings, highlighting technological advancements in the
                judiciary.
              </p>
              <a
                href="https://forms.gle/QVgxw657fzfKUW9WA"
                className="text-accent font-medium hover:underline mt-auto"
              >
                Discover E-Courts →
              </a>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <a
            href="https://forms.gle/QVgxw657fzfKUW9WA"
            className="inline-block bg-accent text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-primary transition-colors"
          >
            Learn More →
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;
