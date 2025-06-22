import React from 'react';
import {images} from "./images.js";
import { motion } from "framer-motion";

const FrostedTextBgOutline = ({text}) => {
    return (
        <div
            className="frosted-container px-4 sm:px-6 lg:px-9 py-2 sm:py-3 lg:py-4 bg-white/10 rounded-full backdrop-blur-md inline-flex justify-start items-start gap-2.5 text-white"
            style={{
                border: '1px solid rgba(255, 255, 255, 1)',
            }}
        >
            <p className="font-[montserrat] text-xl sm:text-xl lg:text-2xl font-normal">
                {text}
            </p>
        </div>
    )
}

const HeroSection = () => {
    return <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[90vh] flex items-end justify-center overflow-hidden"
      >
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          src={images.hero}
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg font-serif">About Us</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-xl drop-shadow font-light">
              Nari Parcham began in 1999 as a small act of defiance in Jahruk, Uttar Pradesh. Founded by Dr. Qudsia Anjum, it created a space for women to speak the unspeakable—about domestic violence, caste humiliation, and unpaid care work. In a climate of fear and surveillance, these women raised their voices anyway.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-white/20 backdrop-blur-md rounded-lg p-6 mt-6 md:mt-0 md:ml-8 max-w-xs shadow-lg border border-white/30"
          >
            <h2 className="text-xl font-semibold text-white font-serif mb-2">Why We Exist: Feminism for the Margins</h2>
            <p className="text-white/90 text-sm mb-2">
              Nari Parcham exists to amplify the voices of women at the margins—Dalit, Muslim, Adivasi, queer, working-class—who are often ignored by mainstream feminism. We challenge structural oppression rooted in caste, religion, patriarchy, and poverty by creating spaces for women to share their stories, find solidarity, and reclaim power. Our feminism is grounded in lived realities, collective healing, and political resistance—not charity, but long-overdue justice.
            </p>
            <a href="#learn-more" className="text-lime-300 font-medium hover:text-lime-200 transition-colors duration-300 underline">Learn More →</a>
          </motion.div>
        </div>
      </motion.div>

}

export default HeroSection;