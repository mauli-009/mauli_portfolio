import { useNavigate } from "react-router-dom";
import { projects } from "../constants/constants";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";

const AllProjects = () => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`text-white transition-all duration-700 max-h-[85vh] overflow-y-auto custom-scrollbar px-2 ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="text-3xl font-bold mb-6">All Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
        {projects.map((project) => (
          <Tilt
            key={project.id}
            tiltMaxAngleX={6}
            tiltMaxAngleY={6}
            scale={1.02}
            transitionSpeed={400}
          >
            <div
              onClick={() => navigate(`/project/${project.id}`)}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-gray-700 p-5 rounded-xl shadow hover:scale-[1.02] transition cursor-pointer flex flex-col justify-between min-h-[240px] h-full"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted mb-4 line-clamp-3">{project.summary}</p>
              </div>
              <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow mt-auto w-max">
                View Details →
              </button>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
