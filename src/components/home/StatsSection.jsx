import React, { useRef, useState, useEffect } from "react";
import {
  FaBalanceScale,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaUsersCog,
  FaHandshake,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {

   
  
    icon: <FaBalanceScale className="text-primary text-3xl md:text-4xl" />,
    number: 1,
    label: "Supreme Court",
  },
  {
     icon: <FaChalkboardTeacher className="text-primary text-3xl md:text-4xl" />,
    number: 43,
    label: "High Courts",
  },
  {
icon: <FaUserGraduate className="text-primary text-3xl md:text-4xl" />,
    number: 688,
    label: "District Courts",
    isMillion: true,
  },
  {
     icon: <FaUsersCog className="text-primary text-3xl md:text-4xl" />,
    number: 52 ,
    label: "Million pending cases",
  },
  {
    icon: <FaHandshake className="text-primary text-3xl md:text-4xl" />,
    number: 40,
    label: "Million Case Every Year",

  },
];

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

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  return (
    <section className="bg-primary-special py-16 sm:py-20 md:py-24" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Headline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-lg font-medium text-accent mb-2">Our Reach</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-serif text-primary-light mb-4">
            Quantifying Our Commitment to Justice
          </h3>
          <p className="max-w-2xl mx-auto font-serif text-white/80">
            Discover the measurable impact of Lex Maxima in legal education,
            civic engagement, and community empowerment.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={i}
              className="flex flex-col items-center p-4 sm:p-6 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 shadow-md hover:shadow-xl transition-all"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="bg-white p-3 sm:p-4 rounded-full mb-4 shadow-md"
              >
                {stat.icon}
              </motion.div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">
                {startCount ? (
                  <CountUp
                    start={0}
                    end={stat.number}
                    duration={2.5}
                    separator=","
                    suffix={stat.isMillion ? "+" : "+"}
                  />
                ) : (
                  `0+`
                )}
              </div>
              <div className="text-sm sm:text-base text-white/80 font-medium mt-2 text-center">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          custom={stats.length}
          className="mt-12 text-center"
        >
          <a
            href="https://forms.gle/QVgxw657fzfKUW9WA"
            className="inline-block bg-accent text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-primary transition-colors"
          >
            Get Involved →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
