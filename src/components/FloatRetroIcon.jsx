import { motion } from "framer-motion";

export default function FloatingRetroIcons() {
  const floatAnim = {
    y: [0, -15, 0],
    rotate: [0, 15, -15, 0],
  };

  const transition = {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  };

  return (
    <>
      {/* Pixel Heart */}
      <motion.div
        className="hidden md:block absolute top-12 left-8 text-pink-500 text-7xl select-none"
        animate={floatAnim}
        transition={transition}
        style={{ fontFamily: "'Press Start 2P', cursive" }} // optional pixel font
        aria-label="Pixel heart"
      >
        ❤️
      </motion.div>

      {/* Pixel Coin */}
      <motion.div
        className="hidden md:block absolute top-20 right-10 text-yellow-400 text-7xl select-none"
        animate={floatAnim}
        transition={{ ...transition, duration: 7 }}
        aria-label="Pixel coin"
      >
        🪙
      </motion.div>

      {/* Pixel Star */}
      <motion.div
        className="hidden md:block absolute bottom-24 left-16 text-yellow-300 text-7xl select-none"
        animate={floatAnim}
        transition={{ ...transition, duration: 5 }}
        aria-label="Pixel star"
      >
        ⭐
      </motion.div>

      {/* Another Star, smaller and slower */}
      <motion.div
        className="hidden md:block absolute bottom-16 right-20 text-yellow-200 text-xl select-none"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Pixel star"
      >
        ✨
      </motion.div>
    </>
  );
}
