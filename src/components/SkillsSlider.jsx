import React from "react";
import Marquee from "react-fast-marquee";
import { skills } from "../constants/constants";
import Tilt from "react-parallax-tilt";
import RightContentWrapper from "./RightContentWrapper";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const SkillsSlider = () => {
  return (
    <RightContentWrapper>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Tilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          scale={0.98}
          transitionSpeed={400}
        >
          <div className="bg-card border border-gray-700 p-4 rounded-2xl shadow-md overflow-hidden hover:scale-[1.02] transition cursor-pointer section-glimmer">
            <h2 className="text-2xl font-bold mb-4 text-white">Skills</h2>
            <Marquee pauseOnHover speed={40} gradient={false}>
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="mx-4 flex flex-col items-center justify-center transition-transform duration-300"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-16 h-16 object-contain rounded-full border border-gray-500 shadow"
                  />
                  <p className="mt-2 text-sm text-muted">{skill.name}</p>
                </div>
              ))}
            </Marquee>
          </div>
        </Tilt>
      </motion.div>
    </RightContentWrapper>
  );
};

export default SkillsSlider;
