import AboutSection from "../components/AboutSection";
import SkillsSlider from "../components/SkillsSlider";
import ProjectSlider from "../components/ProjectSlider";
import ProfileCardGrid from "../components/ProfileCardGrid ";
import Skills from "./Skills";
import Education from "./Education";
import Feats from "../components/Feats";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <section id="about">
        <AboutSection />
        {/* <ProfileCardGrid /> */}
      </section>

      <section id="skills">
        <SkillsSlider />
        <Skills />
      </section>

      <section id="projects">
        <ProjectSlider />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="feats">
        {/* <Feats /> */}
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;