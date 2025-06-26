// Personal Info\

import python from "../assets/python.png";
import git from "../assets/git.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";

export const personalInfo = {
  name: "Mauli Dudhat",
  role: "Full Stack Developer",
  phone: "+91 9356887280",
  email: "maulidudhat2004@gmail.com",
  location: "Pune, India",
  github: "https://github.com/mauli-009",
  leetcode: "https://leetcode.com/u/RecursiveMind_009/",
  resumeLink: "https://drive.google.com/file/d/13Kuf7hS25uXXg0t-YUG4cTV5VkLcSduJ/view", // You can update this later
};

// Skills (for slider)
export const skills = [
  { name: "Python", icon: python },
  { name: "Git", icon: git },
  { name: "React", icon: react },
  { name: "Node.js", icon: node },
  { name: "Tailwind", icon: tailwind },
];

// Education
export const education = [
  {
    degree: "B.Tech in Data Science",
    institute: "Vishwakarma Institute of Technology, Pune",
    duration: "2023–2027",
    gpa: "9.07 SGPA",
  },
  {
    degree: "HSC",
    institute: "DISHA Public School and Jr College, Wai",
    percentage: "75%",
  },
  {
    degree: "SSC",
    institute: "Madhyamik Vidyalaya, Tandulwadi",
    percentage: "98.60%",
  },
];

// Projects preview (for home)
export const projects = [
  {
    id: "unity-error-logger",
    title: "Unity Error Log Analyzer",
    summary: "AI-powered Unity error parser & debugging assistant",
    github: "https://github.com/mauli-009/Unity-Error-Handling-",
    live: "",
    description: `This project solves real-time debugging of Unity logs...

    ✅ AI-powered error classification  
    ✅ Stack trace parsing  
    ✅ GitHub Copilot + export

    It helps devs save 60%+ debugging time.`

    },
  {
    id: "brainwave-ui",
    title: "Brainwave AI Landing Page",
    summary: "SaaS landing UI built with React + Tailwind",
    github: "https://github.com/mauli-009/BrainWave-AI",
    live: "https://aiwb.netlify.app/",
  },



];
