import React from 'react';
import { motion } from 'framer-motion';

const NewsSection = ({ news, titleRef, titleControls, gridRef, gridControls, containerVariants, cardVariants }) => (
  <section className="min-h-screen snap-start py-24 bg-gradient-to-br from-[#181c2f] to-[#23274a] flex flex-col items-center justify-center">
    <motion.h2
      ref={titleRef}
      className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-12 drop-shadow-lg"
      initial="hidden"
      animate={titleControls}
      variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } }}
    >
      Company News
    </motion.h2>
    <motion.div
      ref={gridRef}
      className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full px-4"
      variants={containerVariants}
      initial="hidden"
      animate={gridControls}
    >
      {news.map((item, index) => (
        <motion.div
          key={index}
          className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-8 hover:scale-105 transition-transform duration-300 border border-gray-100"
          variants={cardVariants}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <h3 className="text-xl font-semibold text-white/90 mb-3">{item.title}</h3>
          <p className="text-white/70 mb-4">{item.description}</p>
          <p className="text-sm text-white/50">{item.date}</p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default NewsSection;
