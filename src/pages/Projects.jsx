import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectsList from "../components/projects/ProjectsList";

const categories = [
  "All",
  "Education",
  "Agriculture",
  "Water",
  "Energy",
  "Innovation",
];

const projectData = [
  {
    id: 1,
    title: "Legal Awareness & Literacy",
    category: "Articles",
    color: "#a3b18a",
    description:
      "Educating citizens—especially marginalized groups—about their rights, laws, and legal procedures to empower informed action and decision-making.",
    image:
      "https://cdn-res.keymedia.com/cms/images/ca/120/0394_638738979179423742.png",
    location: "India",
        link: "/projects/1", 
  },
  {
    id: 2,
    title: "Access to Justice",
    category: "Innovation",
    color: "#3d4d2b",
    description:
      "Working to remove barriers (financial, linguistic, geographic, or systemic) that prevent people from seeking or receiving fair legal representation and outcomes.",
    image:
      "https://media.licdn.com/dms/image/v2/C4E12AQFIjHQPOvmf2w/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1588278176711?e=2147483647&v=beta&t=7guuX1EPHCbB1fQzS4tAdsLrQsNwL28KWm_NmF8cD0E",
    location: "India",
    link: "/projects/2"
  },
  {
    id: 3,
    title: "Judicial Reform & Accountability",
    category: "Education",
    color: "#a3b18a",
    description:
      "Advocating for transparent, timely, and ethical judicial processes, while addressing issues like case backlogs, corruption, and underrepresentation.",
    image:
      "https://www.lloydlawcollege.edu.in/images/LAW/blog/judicial-reforms-in-india.webp",
    location: "India",
    link: "/projects/3"
  },
  {
    id: 4,
    title: "Legal Aid & Pro Bono Services",
    category: "Innovation",
    color: "#3d4d2b",
    description:
      "Providing free or low-cost legal assistance to vulnerable populations through volunteer lawyers, law students, and paralegal networks.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7p00OCX5bvUTxw0JmUep5D9Nl05tuNWvJRA&s",
    location: "India",
    link: "/projects/4"
  },
  {
    id: 5,
    title: "Digital Justice & Legal Tech",
    category: "Education",
    color: "#a3b18a",
    description:
      "Leveraging technology to improve legal access—such as online grievance redressal systems, e-courts, digital case tracking, and mobile legal help apps.",
    image:
        "https://png.pngtree.com/thumb_back/fw800/background/20250512/pngtree-digital-justice-and-law-enforcement-image_17275251.jpg",
      location: "India",
      link: "/projects/4"
      
  },
];

const socialIcons = [
  {
    href: "#",
    label: "Twitter",
    icon: (
      <span role="img" aria-label="Twitter">
        🐦
      </span>
    ),
  },
  {
    href: "#",
    label: "Facebook",
    icon: (
      <span role="img" aria-label="Facebook">
        📘
      </span>
    ),
  },
  {
    href: "#",
    label: "Instagram",
    icon: (
      <span role="img" aria-label="Instagram">
        📸
      </span>
    ),
  },
  {
    href: "#",
    label: "LinkedIn",
    icon: (
      <span role="img" aria-label="LinkedIn">
        💼
      </span>
    ),
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header with panoramic image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full md:h-[420px] lg:h-[500px] flex items-end justify-center overflow-hidden"
      >
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          alt="Projects Hero"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80 z-10" />
        <div className="relative z-20 w-full max-w-6xl px-6 py-10 flex flex-col md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg font-serif">
              Articles
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-xl drop-shadow font-light">
              Explore our diverse range of impactful judicial initiatives, encompassing legal awareness, access to justice, judicial reforms, and digital legal services. Each program is crafted to strengthen the rule of law, uphold justice, and empower citizens through a fair and transparent legal system.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-white/20 backdrop-blur-md rounded-lg p-6 mt-10 md:mt-0 md:ml-8 md:max-w-xs shadow-lg border border-white/30"
          >
            <h2 className="text-xl font-semibold text-white mb-2 font-serif">
              What We Do
            </h2>
            <p className="text-white/90 text-sm mb-2">
            We educate, we advocate, we empower. But most importantly, we work to make justice accessible to all.
             Our judicial initiatives function independently—free from institutional funding or corporate influence. 
             It’s about citizens standing together, strengthening legal literacy, promoting accountability, 
            and building a justice system that is fair, transparent, and people-centered.
            </p>
            <a
               href="https://forms.gle/QVgxw657fzfKUW9WA"
                className="text-accent font-medium hover:underline mt-auto"
            >
              Learn More →
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Cards Grid ── */}
      <div className="flex-1 bg-white">
        <ProjectsList projects={projectData} />
      </div>
    </div>
  );
};

export default Projects;
