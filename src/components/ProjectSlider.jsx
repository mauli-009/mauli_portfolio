import { useNavigate } from "react-router-dom";
import { projects } from "../constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Tilt from "react-parallax-tilt";
import RightContentWrapper from "./RightContentWrapper";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const ProjectSlider = () => {
  const navigate = useNavigate();

  return (
    <RightContentWrapper>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={0.98} transitionSpeed={400}>
          <div className="relative bg-card border border-gray-700 p-6 rounded-2xl shadow-md section-glimmer overflow-hidden">
            <h2 className="text-2xl font-bold mb-6 text-white">Featured Projects</h2>

            <Swiper
              modules={[Navigation, Pagination]}
              navigation={true}
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={1}
              className="relative"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="bg-gradient-to-br from-[#141414] to-[#1c1c1c] border border-gray-600 rounded-xl px-6 py-5 text-white shadow-xl min-h-[220px] flex flex-col justify-center items-center relative">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-muted mb-3">{project.summary}</p>
                    </div>

                    <button
                      onClick={() => navigate(`/project/${project.id}`)}
                      className="mt-4 inline-flex items-center gap-2 bg-[#4f46e5] hover:bg-[#4338ca] text-white text-sm font-semibold px-5 py-2 rounded-full transition w-fit hover:cursor-pointer"
                    >
                      Discover {project.title} →
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Tilt>
      </motion.div>
    </RightContentWrapper>
  );
};

export default ProjectSlider;
