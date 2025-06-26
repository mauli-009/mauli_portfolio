// src/pages/Home.jsx
import AboutSection from "../components/AboutSection";
import SkillsSlider from "../components/SkillsSlider";
import ProjectSlider from "../components/ProjectSlider";

const Home = () => {
  return (
    <div className="flex flex-col gap-6">
      <AboutSection />
      <SkillsSlider />
      <ProjectSlider />
      {/* More content here */}
    </div>
  );
};

export default Home;
