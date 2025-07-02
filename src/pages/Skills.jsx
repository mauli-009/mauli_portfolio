import { skillsExtended } from "../constants/constants";
import RightContentWrapper from "../components/RightContentWrapper";

const Skills = () => {
  return (
    <RightContentWrapper>
    <div className="text-white">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skillsExtended.map((skill, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-gray-700 p-5 rounded-xl shadow hover:scale-[1.02] transition"
          >
            <img src={skill.icon} alt={skill.name} className="h-12 mb-3" />
            <h3 className="text-xl font-semibold">{skill.name}</h3>
            <p className="text-sm text-muted mt-1">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
    </RightContentWrapper>
  );
};

export default Skills;
