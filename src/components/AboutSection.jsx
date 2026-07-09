import Tilt from "react-parallax-tilt";
import RightContentWrapper from "./RightContentWrapper";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const highlights = [
  { label: "LeetCode Solved", value: "700+" },
  { label: "Max Rating", value: "1850+" },
  { label: "SGPA", value: "9.07" },
  { label: "MHT-CET", value: "97.89%" },
];

const AboutSection = () => {
  return (
    <RightContentWrapper>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.0} transitionSpeed={400}>
          <div className="bg-card section rounded-2xl border border-gray-700 p-6 text-white transition section-glimmer">
            <h2 className="text-2xl font-bold mb-3 border-b border-gray-600 pb-2">
              About Me
            </h2>

            <p className="text-sm text-muted leading-relaxed">
              I'm a <span className="text-blue-300 font-medium">Full-Stack &amp; AI developer</span> and
              a Data Science undergrad at VIT Pune, driven by building products that solve real problems.
              I work across the modern web stack — <span className="text-white/90">React, Next.js, Node.js,
              FastAPI</span> — and increasingly focus on <span className="text-blue-300 font-medium">agentic
              AI systems</span>, designing multi-agent workflows with LangGraph, LangChain, and RAG pipelines
              on top of LLMs.
            </p>

            <p className="text-sm text-muted leading-relaxed mt-3">
              My foundation is strong in <span className="text-white/90">Data Structures &amp; Algorithms</span> —
              700+ problems solved across LeetCode and CodeChef — which shapes how I approach clean,
              scalable, production-grade engineering. I enjoy the full journey: from architecting
              microservices to shipping polished, low-latency user experiences.
            </p>

            {/* Highlight stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="bg-black/30 border border-gray-600 rounded-lg px-3 py-3 text-center"
                >
                  <div className="text-lg font-bold text-blue-300">{h.value}</div>
                  <div className="text-[11px] text-muted mt-1">{h.label}</div>
                </div>
              ))}
            </div>

            {/* Focus tags */}
            <div className="flex flex-wrap gap-2 mt-5">
              {["Agentic AI", "LangGraph", "RAG", "Full-Stack", "Microservices", "DSA"].map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-medium text-blue-300 bg-blue-500/10 border border-blue-500/30 px-2 py-[3px] rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Tilt>
      </motion.div>
    </RightContentWrapper>
  );
};

export default AboutSection;