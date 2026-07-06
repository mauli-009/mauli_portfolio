import { Typewriter } from "react-simple-typewriter";
import RightContentWrapper from "./RightContentWrapper";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

// Each nav item maps to a section id on the single-page Home.
const navItems = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Achievements", id: "feats" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <RightContentWrapper>
      <nav className="w-full bg-background border-b border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Brand / Logo */}
          <h1 className="text-blue-400 text-xl font-bold whitespace-nowrap">
            <Typewriter
              words={["Mauli.dev", "Portfolio", "Projects"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </h1>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6 text-muted text-sm md:text-base">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className="hover:text-blue-300 transition"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Hamburger Icon */}
          <div className="md:hidden text-white text-2xl">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <ul className="flex flex-col items-start gap-4 px-6 pb-4 md:hidden text-muted text-sm bg-[#121212] border-t border-gray-700">
            {navItems.map((item) => (
              <li key={item.id} className="w-full">
                <button
                  onClick={() => handleScroll(item.id)}
                  className="hover:text-blue-300 transition"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </RightContentWrapper>
  );
};

export default Navbar;