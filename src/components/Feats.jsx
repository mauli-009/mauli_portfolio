import { motion } from "framer-motion";
import RightContentWrapper from "./RightContentWrapper";
import Tilt from "react-parallax-tilt";

const achievements = [
  {
    title: "CodeChef",
    score: "1430 max",
    subtitle: "2★ Star Coder",
    icon: "/assets/codechef.png",
  },
  {
    title: "LeetCode",
    score: "2025",
    subtitle: "1630 Current",
    icon: "/assets/leetcode.png",
  },

];

const Feats = () => {
  return (
    <RightContentWrapper>
      <h2 className="text-3xl font-bold mb-8">Achievements</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 overflow-hidden">
        {achievements.map((feat, idx) => (
          <Tilt
            key={idx}
            tiltMaxAngleX={7}
            tiltMaxAngleY={7}
            scale={1.02}
            transitionSpeed={500}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="border border-white/20 rounded-xl p-6 flex flex-col items-center bg-gray-900/80 backdrop-blur-md shadow-lg"
            >
              <img
                src={feat.icon}
                alt={feat.title}
                className="h-16 w-16 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-white">{feat.score}</h3>
              <p className="text-sm text-white/70">{feat.subtitle}</p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </RightContentWrapper>
  );
};

export default Feats;
