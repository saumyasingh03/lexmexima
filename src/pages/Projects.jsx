import React from "react";
import { motion } from "framer-motion";
import ProjectsList from "../components/projects/ProjectsList";

/* ─── WHAT-WE-DO CARDS (no category/location) ─── */
const projectData = [
  {
    id: 1,
    title: "Feminist Legal Literacy",
    description:
      "We run circle discussions where women decode the law—domestic violence legislation, labor rights, inheritance law, and more. Not top-down lectures, but shared learning through real stories.",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Voice Workshops",
    description:
      "We create safe, trust-based spaces where women learn to name their experiences and reclaim their narratives through storytelling, zines, community radio, and digital expression.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Domestic Violence Interventions",
    description:
      "We support survivors not just with legal pathways but also emotional processing, peer solidarity, and practical resources like shelter, childcare, and local networks of support.",
    image:
      "https://images.unsplash.com/photo-1526925539332-aa3b66e35444?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Political Education",
    description:
      "We engage in study circles that explore caste, patriarchy, capitalism, communalism, and how they intersect in everyday life. Women become not just aware, but politically equipped.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Skill With Soul",
    description:
      " We connect feminist values with vocational training. Not just jobs, but confidence. Not just entrepreneurship, but autonomy. All rooted in dignity, care, and solidarity.Our work does not chase visibility. We are not here for awards. We are here because women in India, especially at the margins, deserve more than slogans. They deserve power, presence, and peace.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
];

const Projects = () => (
  <div className="min-h-screen flex flex-col bg-white">
    {/* ── Hero ── */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-[340px] md:h-[420px] lg:h-[500px] flex items-end justify-center overflow-hidden"
    >
      <motion.img
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80 z-10" />
      <div className="relative z-20 w-full max-w-6xl px-6 py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg font-serif">
          What We Do
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-xl drop-shadow font-light">
         We train, we listen, we mobilize. But most importantly, we build collective feminist consciousness in places where it has long been denied.
Nari Parcham operates as a zero-funding project. No institutional dependencies. No CSR strings. Just women standing beside women, building knowledge that is relevant, bold, and life-affirming.

        </p>
      </div>
    </motion.div>

    {/* ── Cards Grid ── */}
    <div className="flex-1 bg-white">
      <ProjectsList projects={projectData} />
    </div>

    {/* ── Wavy Divider ── */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="relative w-full overflow-hidden"
      style={{ height: "80px", marginTop: "-40px" }}
    >
      <svg
        className="absolute bottom-0 left-0 w-full h-full"
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#3d4d2b"
          d="M0,0 C480,80 960,0 1440,80 L1440,80 L0,80 Z"
        />

export default Projects;
