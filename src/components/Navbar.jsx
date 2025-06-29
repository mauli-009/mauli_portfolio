import { NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import RightContentWrapper from "./RightContentWrapper";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // For hamburger icon

const Navbar = () => {
  const navItems = ["Home", "Projects", "Feats", "Contact"];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <RightContentWrapper>
      <nav className="w-full bg-background border-b border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Brand / Logo */}
          <h1 className="text-blue-400 text-xl font-bold whitespace-nowrap">
            <Typewriter
              words={['Mauli.dev', 'Portfolio', 'Projects']}
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
              <li key={item}>
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-400 font-semibold border-b-2 border-blue-400 pb-1"
                      : "hover:text-blue-300 transition"
                  }
                >
                  {item}
                </NavLink>
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
              <li key={item} className="w-full">
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-400 font-semibold"
                      : "hover:text-blue-300 transition"
                  }
                  onClick={() => setMenuOpen(false)} // Close on select
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </RightContentWrapper>
  );
};

export default Navbar;
