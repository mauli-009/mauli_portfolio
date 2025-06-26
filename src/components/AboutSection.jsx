// src/components/AboutSection.jsx
import Tilt from "react-parallax-tilt";
import RightContentWrapper from "./RightContentWrapper";

const AboutSection = () => {
  return (
    <RightContentWrapper>
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      scale={1.0}
      transitionSpeed={400}
    >
     <div className="bg-card section rounded-2xl border overflow-x-hidden   border-gray-700 p-6 text-white hover:scale-[0.98] transition cursor-pointer section-glimmer">

        <h2 className="text-2xl font-bold mb-2 border-b border-gray-600 pb-1">About</h2>
        <p className="text-sm text-muted leading-relaxed">
          I’m a passionate developer with a deep interest in solving real-world problems using modern web technologies and DSA.
        </p>
        <p className="text-sm text-muted mt-2">
          🎯 MHT-CET: <strong>97.89</strong> | JEE: <strong>95.09</strong> | Solved <strong>700+</strong> LeetCode problems
        </p>
      </div>
    </Tilt>
    </RightContentWrapper>
  );
};

export default AboutSection;
