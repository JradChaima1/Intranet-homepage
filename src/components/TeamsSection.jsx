import React from 'react';
import { motion } from 'framer-motion';

const TeamsSection = ({ titleRef, titleControls, gridRef, gridControls, cardVariants }) => (
  <section id="teams" className="min-h-screen snap-start py-24 bg-gradient-to-br from-[#181c2f] to-[#23274a] flex flex-col items-center justify-center">
    <motion.h2
      ref={titleRef}
      className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-12 drop-shadow-lg"
      initial="hidden"
      animate={titleControls}
      variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } }}
    >
      Team Spotlight
    </motion.h2>
    <motion.div
      ref={gridRef}
      className="max-w-md mx-auto bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl p-12 rounded-3xl text-center hover:scale-105 transition-transform duration-300"
      initial="hidden"
      animate={gridControls}
      variants={cardVariants}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4 shadow-lg">
        AS
      </div>
      <h3 className="text-2xl font-semibold text-white/90 mb-2">Alice Smith</h3>
      <p className="text-white/70 mb-4">Senior Game Designer</p>
      <p className="text-white/50 mb-6">Leading innovative gameplay mechanics</p>
      <motion.button
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.97 }}
      >
        View Team Profile
      </motion.button>
    </motion.div>
  </section>
);

export default TeamsSection;
