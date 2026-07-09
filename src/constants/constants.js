// Personal Info\


export const personalInfo = {
  name: "Mauli Dudhat",
  role: "Full Stack Developer || AI || Machine Learning",
  phone: "+91 9356887280",
  email: "maulidudhat2004@gmail.com",
  location: "Pune, India",
  github: "https://github.com/mauli-009",
  leetcode: "https://leetcode.com/u/RecursiveMind_009/",
  resumeLink: "https://drive.google.com/file/d/13Kuf7hS25uXXg0t-YUG4cTV5VkLcSduJ/view", // You can update this later
};

// Skills (for slider)
export const skills = [
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },

  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    icon: "https://img.icons8.com/nolan/512/express-js.png",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT30YZ6OxUYmrkohkH5iLGg2eIdN2rgWi9sJA&s",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "Postman",
    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
    name: "Vite",
    icon: "https://vitejs.dev/logo-with-shadow.png",
  },
  {
    name: "PyTorch",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },

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

// Projects (shown on the home page)
// NOTE: `tech` = tech-stack tags shown on the card.
//       `points` = bullet list shown in the expanded description.
//       `image` = path under /public/assets (see filenames below).
export const projects = [

  {
    id: "society-tracker",
    title: "Society Maintenance Tracker",
    summary: "Full-stack complaint-management platform for apartment societies with role-based workflows, photo uploads, and email notifications.",
    tech: ["Next.js", "Node.js", "Express", "MongoDB", "Cloudinary", "JWT"],
    github: "https://github.com/mauli-009/society-maintenance-tracker", // update if different
    live: "https://society-maintenance-tracker-two.vercel.app/", // add your live demo URL here
    image: "/assets/track_society.png",
    points: [
      "Built a role-based complaint-management system (resident/admin) with JWT authentication, where residents raise categorized complaints with photo evidence and track resolution progress in real time.",
      "Engineered an append-only status-history model embedded in each complaint document, recording every state transition with actor, timestamp, and notes to produce a tamper-evident audit trail across the Open → In Progress → Resolved lifecycle.",
      "Implemented configurable overdue detection computed on-read against an environment-driven threshold, surfacing neglected complaints at the top of the admin view with correct priority-weighted sorting.",
      "Integrated Cloudinary for streamed in-memory photo uploads and Resend for non-blocking, fire-and-forget email notifications on status changes and pinned important notices, alongside an aggregation-powered admin dashboard reporting complaints by status, category, and overdue count.",
    ],
  },
  {
    
    id: "elevatecv",
    title: "ElevateCV",
    summary: "Agentic AI resume builder with a three-tier microservices architecture.",
    tech: ["Next.js", "Node.js", "FastAPI", "MongoDB", "LangGraph", "LangChain"],
    github: "https://github.com/AnshulKale/AI-Resume-Builder-Main/tree/Mauli", // update if different
    live: "",
    image: "/assets/elevatecv.png",
    points: [
      "Engineered a production-grade agentic AI system using a three-tier microservices architecture for real-time resume generation.",
      "Designed LLM-powered pipelines leveraging RAG and contextual prompting to generate recruiter-optimized content.",
      "Built a scalable FastAPI inference service enabling efficient LLM interaction and independent horizontal scaling.",
      "Developed a secure API orchestration layer using Node.js with JWT-based authentication across distributed services.",
      "Achieved low-latency response times through improved API design and frontend rendering (sub-1.5s load).",
    ],
  },
  {
    id: "vyapar-ai",
    title: "Vyapar AI",
    summary: "Agentic data-analytics platform for natural-language querying over structured data.",
    tech: ["Groq LLM", "LangGraph", "MongoDB", "Python"],
    github: "https://github.com/mauli-009/VyaparAi", // update if different
    live: "",
    image: "/assets/vyapar.png",
    points: [
      "Developed an agentic AI analytics platform enabling natural-language querying over structured datasets without SQL.",
      "Architected a multi-agent LangGraph workflow handling intent extraction, semantic mapping, and aggregation pipelines.",
      "Implemented a semantic retrieval system using MongoDB with fuzzy matching and LLM-based disambiguation.",
      "Built a self-learning registry improving query accuracy by dynamically mapping evolving dataset schemas.",
      "Enabled complex analytics including aggregation, filtering, and time-based grouping via automated pipelines.",
    ],
  },
  {
    id: "techaeros",
    title: "TechAeros 3D Asset Marketplace",
    summary: "Full-stack marketplace for discovering and distributing 3D digital assets.",
    tech: ["Next.js", "Node.js", "MongoDB Atlas Search", "Tailwind CSS"],
    github: "https://github.com/AnshulKale/TechAerosWebsite/tree/Mauli-main", // update if different
    live: "https://www.techaeros.online/", // add your live demo URL here
    image: "/assets/techaeros.png",
    points: [
      "Architected a full-stack e-commerce marketplace with Next.js enabling seamless discovery, filtering, and distribution of 3D assets, scripts, and animations.",
      "Engineered an intelligent \"Search-to-Filter\" system using MongoDB Atlas Search with custom query-parsing rules that auto-apply contextual facet filters from natural search queries.",
      "Designed automated data synchronization via secure backend endpoints to keep product-catalog mutations and the search index consistent in real time.",
      "Constructed modular, reusable React UI components leveraging InstantSearch widgets for fast client-side pagination and real-time interactive results.",
    ],
  },
  {
    id: "fullstack-blog-app",
    title: "BlogIt",
    summary: "Modern blogging platform using React and Appwrite.",
    tech: ["React", "Appwrite", "Redux Toolkit", "Tailwind CSS"],
    github: "https://github.com/mauli-009/Blogit",
    live: "",
    image: "/assets/blog.jpg",
    points: [
      "React and Tailwind CSS for the frontend.",
      "Appwrite backend handling authentication, database, and file storage.",
      "Redux Toolkit for managing global state.",
      "Secure routing and JWT-based access control.",
      "Rich-text blog editor and post publishing system.",
    ],
  },
  {
    id: "unity-error-logger",
    title: "Unity Error Log Analyzer",
    summary: "AI-powered Unity error parser and debugging assistant.",
    tech: ["Python", "AI", "GitHub Copilot"],
    github: "https://github.com/mauli-009/Unity-Error-Handling-",
    live: "",
    image: "/assets/Unity.png",
    points: [
      "Parses Unity error logs and stack traces.",
      "Uses AI to classify and explain issues.",
      "Integrates with GitHub Copilot for suggestions.",
      "Export-friendly logs for team collaboration.",
    ],
  },
  {
    id: "brainwave-ui",
    title: "Brainwave AI Landing Page",
    summary: "SaaS landing UI built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/mauli-009/BrainWave-AI",
    live: "https://aiwb.netlify.app/",
    image: "/assets/Brainwave.png",
    points: [
      "Modern layout with hero, pricing, testimonials, and CTA sections.",
      "Built with React and styled using Tailwind CSS.",
      "Includes scroll-triggered animations and dark mode support.",
    ],
  },
];
export const profiles = [
  {
    platform: "LeetCode",
    stats: [
      "Solved 700+ problems",
      "Rating: 1850+",
      "Streak: 180+ days"
    ],
    image: "/assets/leetcode1.png",
    profileLink: "https://leetcode.com/RecursiveMind_009/"
  },

];


export const skillsExtended = [
  {
    name: "React",
    icon: "/assets/react.png",
    description: "Built multiple interactive SPAs, optimized with hooks and context.",
  },
  {
    name: "Node.js",
    icon: "/assets/node.png",
    description: "Developed REST APIs with Express and connected to MongoDB.",
  },

  {
    name: "Tailwind CSS",
    icon: "/assets/tailwind.png",
    description: "Designed modern UIs using utility-first CSS for responsive layouts.",
  },
  {
    name: "MongoDB",
    icon: "/assets/MongoDB.png",
    description: "Experience with NoSQL data models and Mongoose schema design.",
  },
  {
    name: "Express.js",
    icon: "/assets/express.png",
    description: "Created scalable backend routes, auth systems, and middleware.",
  },
  {
    name: "Python",
    icon: "/assets/python.png",
    description: "Used for data processing, automation, and ML model building.",
  },
  {
    name: "Git & GitHub",
    icon: "/assets/git.png",
    description: "Version control, team collaboration, and CI/CD workflows.",
  },
  {
    name: "C++",
    icon: "/assets/cpp.png",
    description: "Strong in DSA with 700+ problems solved across platforms.",
  },
  {
    name: "Cloudflare",
    icon: "/assets/Cloudflare.png",
    description: "Realtime DB, Auth, Hosting, used in full-stack apps.",
  },
  {
    name: "Next.js",
    icon: "/assets/Next.js.png",
    description: "SSR, file-based routing, optimized deployment for React apps.",
  },
 
  {
    name: "Vite.js",
    icon: "/assets/vite.png",
    description: "Fast bundler used with React + Tailwind for lightning dev.",
  },
  {
    name: "Redux",
    icon: "/assets/Redux.png",
    description: "Managed global state across complex React components.",
  },
  {
    name: "Agentic AI",
    icon: "/assets/agentic-ai.svg",
    description: "Built multi-agent systems with tool use, planning, and autonomous task execution.",
  },
  {
    name: "LangGraph",
    icon: "/assets/langgraph.svg",
    description: "Designed stateful multi-agent workflows for intent extraction and pipeline orchestration.",
  },
  {
    name: "LangChain",
    icon: "/assets/langchain.svg",
    description: "Composed LLM chains, prompts, and retrievers for production AI apps.",
  },
  {
    name: "RAG",
    icon: "/assets/rag.svg",
    description: "Retrieval-Augmented Generation with semantic search for grounded, contextual responses.",
  },
  {
    name: "LLMs",
    icon: "/assets/llms.svg",
    description: "Prompt engineering and integration with Groq, OpenAI, and open-source models.",
  },
  {
    name: "FastAPI",
    icon: "/assets/fastapi.svg",
    description: "Built scalable inference and REST services for LLM-powered backends.",
  },

];