import React from 'react';
import { motion } from 'framer-motion';

const PerformanceSection = ({ chartData, titleRef, titleControls, gridRef, gridControls, containerVariants, cardVariants }) => (
  <section id="performance" className="min-h-screen snap-start py-24 bg-gradient-to-br from-[#23274a] to-[#181c2f] flex flex-col items-center justify-center">
    <motion.h2
      ref={titleRef}
      className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-12 drop-shadow-lg"
      initial="hidden"
      animate={titleControls}
      variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } }}
    >
      Studio Performance
    </motion.h2>
    <motion.div
      ref={gridRef}
      className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-12 max-w-3xl w-full mx-auto"
      initial="hidden"
      animate={gridControls}
      variants={containerVariants}
    >
      <h3 className="text-2xl font-semibold mb-8 text-white/90">Monthly Metrics</h3>
      <div className="flex items-end justify-center space-x-6 h-64">
        {chartData.map((bar, index) => (
          <motion.div
            key={index}
            className={`w-14 ${bar.color} rounded-t-lg shadow-lg`}
            variants={cardVariants}
            initial="hidden"
            animate={gridControls}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default PerformanceSection;
