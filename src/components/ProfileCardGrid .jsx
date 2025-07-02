// src/components/ProfileCardGrid.jsx
import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";
import { profiles } from "../constants/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const ProfileCardGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
      {profiles.map((profile, idx) => (
        <motion.div
          key={idx}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={idx}
        >
          <ProfileCard {...profile} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProfileCardGrid;
