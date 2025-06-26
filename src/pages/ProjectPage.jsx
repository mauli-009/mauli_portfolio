import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../constants/constants";
import { useEffect, useState } from "react";

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  if (!project) {
    return <div className="text-white text-xl p-6">⚠ Project not found.</div>;
  }

  return (
    <div
      className={`max-w-4xl mx-auto px-6 py-16 transition-all duration-700 ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h1 className="text-4xl font-bold text-white mb-2 text-center">{project.title}</h1>
      <div className="w-12 h-[2px] bg-blue-500 mx-auto mb-6" />

      {/* Scrollable Description Area */}
      <div className="text-white/80 text-base leading-relaxed space-y-4 max-h-[400px] overflow-y-auto custom-scrollbar bg-black/20 rounded-xl border border-gray-700 p-5">
        {project.description || "No detailed description provided yet."}
      </div>

      {/* GitHub / Live Demo Buttons */}
      <div className="flex gap-4 mt-8 flex-wrap">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-lg shadow text-sm"
          >
            View GitHub
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow text-sm"
          >
            Live Demo
          </a>
        )}
      </div>

      {/* Back Button */}
      <div className="mt-10">
        <button
          onClick={() => navigate("/projects")}
          className="text-sm bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-lg"
        >
          ← Back to All Projects
        </button>
      </div>
    </div>
  );
};

export default ProjectPage;
