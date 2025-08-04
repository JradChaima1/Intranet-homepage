import React from 'react';
import { motion } from 'framer-motion';

const MeetingsSection = ({ meetings, titleRef, titleControls, gridRef, gridControls, containerVariants, cardVariants }) => (
  <section id="meetings" className="min-h-screen snap-start pt-24 pb-12 bg-gradient-to-br from-[#181c2f] to-[#23274a] flex flex-col items-center justify-center">
    <motion.h2
      ref={titleRef}
      className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-12 drop-shadow-lg"
      initial="hidden"
      animate={titleControls}
      variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } }}
    >
      Upcoming Meetings
    </motion.h2>
    <motion.div
      ref={gridRef}
      className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full px-4"
      variants={containerVariants}
      initial="hidden"
      animate={gridControls}
    >
      {meetings.map((meeting, index) => (
        <motion.div
          key={index}
          className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-8 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/30 group"
          variants={cardVariants}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
              {meeting.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white/90">{meeting.title}</h3>
              <p className="text-white/60 text-sm">{meeting.date}</p>
              <div className="flex space-x-2 mt-2">
                {meeting.avatars.map((avatar, i) => (
                  <div key={i} className="w-9 h-9 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full flex items-center justify-center text-white text-xs font-medium border-2 border-white/30 shadow">
                    {avatar}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default MeetingsSection;
