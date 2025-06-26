// src/components/Hero.jsx
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-background">
      {/* 🔄 Top-left Animation */}
      <motion.div
        className="absolute top-4 left-4 text-white text-sm"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        👋 Hello I am Mauli!
      </motion.div>

      {/* 💡 3D Tilt Card */}
      <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05}>
        <div className="bg-card p-8 rounded-2xl shadow-xl text-center">
          <motion.h1
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            Hey, I’m Mauli Dudhat 👨‍💻
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-muted"
          >
            Dsa Enthusiast • Web Developer • 3D Portfolio Maker
          </motion.p>
        </div>
      </Tilt>
    </section>
  );
};

export default Hero;
