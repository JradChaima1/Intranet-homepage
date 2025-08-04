import React from 'react';
import { motion } from 'framer-motion';

const QuickLinksSection = ({ quickLinks, titleRef, titleControls, gridRef, gridControls, containerVariants, cardVariants }) => (
  <section className="min-h-screen snap-start pt-24 flex flex-col items-center justify-center">
    <motion.h2
      ref={titleRef}
      className="text-4xl font-extrabold text-center bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg mb-10"
      initial="hidden"
      animate={titleControls}
      variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } }}
    >
      Quick Links
    </motion.h2>
    <div className="w-full h-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-full blur-md mb-10" />
    <motion.div
      ref={gridRef}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl w-full px-4"
      variants={containerVariants}
      initial="hidden"
      animate={gridControls}
    >
      {quickLinks.map((link, index) => (
        <motion.div
          key={index}
          className={`bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-10 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-pink-500/30 group relative overflow-hidden`}
          variants={cardVariants}
          whileHover={{ scale: 1.08, y: -8 }}
          whileTap={{ scale: 0.97 }}
        >
          <div className={`text-5xl mb-4 drop-shadow-lg group-hover:animate-bounce`}>{link.icon}</div>
          <h3 className="text-2xl font-bold tracking-wide drop-shadow bg-gradient-to-r from-pink-400 via-yellow-400 to-purple-400 bg-clip-text text-transparent">{link.title}</h3>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default QuickLinksSection;
