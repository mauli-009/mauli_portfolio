// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";
import RightContentWrapper from "./RightContentWrapper";
import { Typewriter } from "react-simple-typewriter";

const Navbar = () => {
  const navItems = ["Home", "Projects", "Feats", "Contact"];

  return (
    <RightContentWrapper>
      <nav className="w-full bg-background border-b border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-blue-400 text-xl font-bold">
            <Typewriter
              words={['Mauli.dev', 'Portfolio', 'Projects']}
              loop={0} // infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </h1>
          <ul className="flex gap-6 text-muted text-sm md:text-base">
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
        </div>
      </nav>
    </RightContentWrapper>
  );
};

export default Navbar;
