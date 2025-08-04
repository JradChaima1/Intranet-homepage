import React from 'react';
import { motion } from 'framer-motion';

const ProjectsSection = ({ projects, titleRef, titleControls, gridRef, gridControls, containerVariants, cardVariants }) => (
  <section id="projects" className="min-h-screen snap-start py-24 bg-gradient-to-br from-[#23274a] to-[#2d3250] flex flex-col items-center justify-center">
    <motion.h2
      ref={titleRef}
      className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-12 drop-shadow-lg"
      initial="hidden"
      animate={titleControls}
      variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } }}
    >
      Project Updates
    </motion.h2>
    <motion.div
      ref={gridRef}
      className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full px-4"
      variants={containerVariants}
      initial="hidden"
      animate={gridControls}
    >
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-8 hover:scale-105 transition-transform duration-300"
          variants={cardVariants}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <h3 className="text-xl font-semibold text-white/90 mb-2">{project.title}</h3>
          <p className="text-white/70 mb-4">{project.description}</p>
          <div className="w-full bg-white/20 rounded-full h-2 mb-4">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${project.progress}%` }}
              transition={{ duration: 1.5, delay: index * 0.3 }}
            />
          </div>
          <p className="text-sm text-white/50">Progress: {project.progress}% • Due: {project.due}</p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default ProjectsSection;
