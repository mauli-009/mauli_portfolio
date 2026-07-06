import { useState } from "react";
import { projects } from "../constants/constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import RightContentWrapper from "./RightContentWrapper";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

const ProjectCard = ({ project, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      custom={index}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} scale={1.01} transitionSpeed={400}>
        <div className="relative bg-gradient-to-br from-[#1a1a1a]/90 to-[#111]/90 border border-gray-700 rounded-xl shadow-md overflow-hidden flex flex-col h-full">
          {/* Project image */}
          {project.image && (
            <div className="relative h-44 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-80"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent" />
            </div>
          )}

          <div className="p-5 flex flex-col flex-1">
            <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
            <p className="text-sm text-muted mb-3">{project.summary}</p>

            {/* Tech tags */}
            {project.tech && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-medium text-blue-300 bg-blue-500/10 border border-blue-500/30 px-2 py-[2px] rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            {/* Expandable bullet points */}
            {open && project.points && (
              <ul className="list-disc list-inside space-y-1 text-sm text-white/80 mb-4">
                {project.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            )}

            <div className="mt-auto flex items-center gap-3 pt-2">
              {project.points && (
                <button
                  onClick={() => setOpen((o) => !o)}
                  className="text-sm bg-[#4f46e5] hover:bg-[#4338ca] text-white px-4 py-2 rounded-full transition"
                >
                  {open ? "Show less" : "View details"}
                </button>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 hover:text-white text-xl"
                  title="GitHub"
                >
                  <FaGithub />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 hover:text-white text-xl"
                  title="Live Demo"
                >
                  <FiExternalLink />
                </a>
              )}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const ProjectSlider = () => {
  return (
    <RightContentWrapper>
      <div id="projects" className="relative bg-card border border-gray-700 p-6 rounded-2xl shadow-md section-glimmer">
        <h2 className="text-2xl font-bold mb-6 text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </RightContentWrapper>
  );
};

export default ProjectSlider;