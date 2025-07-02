import Tilt from "react-parallax-tilt";
import RightContentWrapper from "./RightContentWrapper";
import { profiles } from "../constants/constants";
import ProfileCard from "./ProfileCard";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const AboutSection = () => {
  return (
    <RightContentWrapper>
      {/* Animated About Box */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.0} transitionSpeed={400}>
          <div className="bg-card section rounded-2xl border border-gray-700 p-6 text-white  transition section-glimmer">
            <h2 className="text-2xl font-bold mb-2 border-b border-gray-600 pb-1">About</h2>
            <p className="text-sm text-muted leading-relaxed">
              I’m a passionate developer with a deep interest in solving real-world problems using modern web technologies and DSA.
            </p>
            <p className="text-sm text-muted mt-2">
              🎯 MHT-CET: <strong>97.89</strong> | JEE: <strong>95.09</strong> | Solved <strong>700+</strong> LeetCode problems
            </p>
          </div>
        </Tilt>
      </motion.div>

    </RightContentWrapper>
  );
};

export default AboutSection;
