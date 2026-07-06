"use client";

import { motion } from "framer-motion";
import RotatingText from "./RotatingText";

const SplashIntro = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#05060f] via-[#0a0d1f] to-black text-white overflow-hidden">
      {/* soft glow blobs */}
      <div className="absolute w-[420px] h-[420px] bg-indigo-600/20 rounded-full blur-[120px] -top-20 -left-20" />
      <div className="absolute w-[420px] h-[420px] bg-blue-500/20 rounded-full blur-[120px] bottom-0 right-0" />

      {/* Greeting */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-2xl md:text-3xl font-light text-gray-300 mb-3 z-10"
      >
        Hi, I'm{" "}
        <span className="font-bold text-white">Mauli Dudhat</span>
      </motion.h1>

      {/* Rotating role words */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="z-10 flex items-center justify-center w-full px-4"
      >
        <RotatingText
          texts={[
            "AI",
            "Full-Stack",
            "Machine Learning",
            "Competitive Programming",
            "Agentic AI",
          ]}
          rotationInterval={1600}
          splitBy="words"
          staggerDuration={0.04}
          staggerFrom="first"
          mainClassName="inline-flex flex-nowrap justify-center whitespace-nowrap px-4 sm:px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-xl text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold shadow-lg shadow-indigo-500/30 max-w-[92vw]"
          splitLevelClassName="whitespace-nowrap"
          elementLevelClassName="inline-block"
          auto
          loop
        />
      </motion.div>

      {/* Animated loading bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 w-52 h-[3px] bg-white/10 rounded-full overflow-hidden z-10"
      >
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-400 to-blue-400"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6.6, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-4 text-xs text-gray-500 tracking-[0.3em] uppercase z-10"
      >
        Loading Portfolio
      </motion.p>
    </div>
  );
};

export default SplashIntro;