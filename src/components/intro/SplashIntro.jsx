// src/components/SplashIntro.jsx
"use client";

import RotatingText from "./RotatingText";

const SplashIntro = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 text-white">
      <RotatingText
        texts={[
          "I am a Developer",
          "Competitive Programmer",
          "Machine Learning Enthusiast",
          "Web Engineer",
        ]}
        rotationInterval={1400}
        splitBy="words"
        elementLevelClassName="text-4xl md:text-6xl font-bold text-center"
        className="text-center"
        auto
        loop
      />
    </div>
  );
};

export default SplashIntro;
