import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import StarParticles from './StarParticle';
import FloatingRetroIcons from './FloatRetroIcon';
import { ModelScene } from './ModelScene';

const HeroSection = () => (
  <section id="home" className="min-h-screen snap-start w-screen pt-20 pb-12 overflow-hidden relative flex flex-col items-center justify-start">
    <StarParticles/>
    <FloatingRetroIcons />
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent tracking-wide drop-shadow-2xl mb-6 mt-4 text-center"
        initial={{opacity:0, y:40}}
        animate={{opacity:1, y:0}}
        transition={{duration:1, type:'spring'}}
      >
        <TypeAnimation
          sequence={[
            1000,
            "Welcome back, Jordan!",
            2000,
            "Launching dev mode...",
            2000,
            "Rendering creativity...!",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </motion.h1>
      <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-5xl mx-auto mt-4 h-[160px] sm:h-[260px] md:h-[340px] lg:h-[420px] xl:h-[480px]">
        <ModelScene />
      </div>
    </div>
  </section>
);

export default HeroSection;
