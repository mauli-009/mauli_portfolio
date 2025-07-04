import AboutSection from "../components/AboutSection";
import SkillsSlider from "../components/SkillsSlider";
import ProjectSlider from "../components/ProjectSlider";
import { motion } from "framer-motion";
import ProfileCardGrid from "../components/ProfileCardGrid ";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

const Home = () => {
  return (
    <motion.div
      className="flex flex-col gap-6"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <AboutSection />
      <ProfileCardGrid />
      <SkillsSlider />
      <ProjectSlider />
    </motion.div>
  );
};

export default Home;
