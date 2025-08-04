import React from 'react';
import { motion } from 'framer-motion';

const AnnouncementsSection = ({ announcements, titleRef, titleControls, gridRef, gridControls, containerVariants, cardVariants }) => (
  <section id="announcements" className="min-h-screen snap-start py-24 bg-gradient-to-br from-[#23274a] to-[#2d3250] flex flex-col items-center justify-center">
    <motion.h2
      ref={titleRef}
      className="text-4xl font-extrabold text-center bg-gradient-to-r from-pink-400 via-yellow-400 to-purple-600 bg-clip-text text-transparent mb-12 drop-shadow-lg"
      initial="hidden"
      animate={titleControls}
      variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } }}
    >
      Announcements
    </motion.h2>
    <motion.div
      ref={gridRef}
      className="space-y-8 max-w-3xl w-full mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate={gridControls}
    >
      {announcements.map((announcement, index) => (
        <motion.div
          key={index}
          className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-8 flex items-center space-x-6 hover:scale-105 transition-transform duration-300 group"
          variants={cardVariants}
          whileHover={{ x: 5, scale: 1.02 }}
        >
          <div className={`w-14 h-14 bg-gradient-to-r ${announcement.color} rounded-full flex items-center justify-center text-white text-2xl shadow-lg`}>{announcement.icon}</div>
          <div>
            <h3 className="text-lg font-semibold text-white/90">{announcement.title}</h3>
            <p className="text-white/70">{announcement.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default AnnouncementsSection;
