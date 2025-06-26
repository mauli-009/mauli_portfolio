import Tilt from "react-parallax-tilt";
import { personalInfo } from "../constants/constants";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn, MdCalendarToday } from "react-icons/md";
import RightContentWrapper from "./RightContentWrapper";

const Sidebar = () => {
  return (
    <RightContentWrapper>
    <Tilt
      tiltMaxAngleX={2}
      tiltMaxAngleY={2}
      scale={1.01}
      transitionSpeed={400}
    >
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-gray-700 rounded-2xl shadow-xl p-6 h-[calc(100vh-10rem)] text-white flex flex-col items-center justify-between overflow-y-hidden overflow-x-hidden">

        {/* Profile Image */}
        <img
          src="src\assets\ProfilePhoto.jpg"
          alt="Profile"
          className="w-[140px] h-[140px] object-cover rounded-xl border-2 border-white shadow-md"
        />

        {/* Name and Role */}
        <div className="mt-4 text-center">
          <h2 className="text-xl font-bold">{personalInfo.name}</h2>
          <p className="text-muted text-sm">{personalInfo.role}</p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-3 mt-4 text-xl">
          <a href={personalInfo.github} target="_blank" className="hover:text-blue-400"><FaGithub /></a>
          <a href="#" className="hover:text-blue-400"><FaLinkedin /></a>
          <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
          <a href="#" className="hover:text-blue-400"><FaFacebook /></a>
          <a href="#" className="hover:text-blue-400"><FaInstagram /></a>
        </div>

        {/* Info Box */}
        <Tilt
      tiltMaxAngleX={2}
      tiltMaxAngleY={2}
      scale={1.01}
      transitionSpeed={400}
    >
        <div className="w-full mt-6 bg-black/30 border border-gray-600 rounded-lg px-4 py-4 text-sm space-y-2">
          <div className="flex items-center gap-2"><MdPhone className="text-lg" /> <span>{personalInfo.phone}</span></div>
          <div className="flex items-center gap-2"><MdEmail className="text-lg" /> <span>{personalInfo.email}</span></div>
          <div className="flex items-center gap-2"><MdLocationOn className="text-lg" /> <span>{personalInfo.location}</span></div>
          <div className="flex items-center gap-2"><MdCalendarToday className="text-lg" /> <span>7<sup>th</sup> October, 2004</span></div>
        </div>
        </Tilt>

        {/* Download CV */}
        <a
          href={personalInfo.resumeLink || "#"}
          className="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full flex items-center gap-2 shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M12 16.5l-4-4h2.5V3h3v9.5H16l-4 4z"/><path d="M20 18H4v2h16v-2z"/></svg>
          Download CV
        </a>
      </div>
    </Tilt>
    </RightContentWrapper>

  );
};

export default Sidebar;
