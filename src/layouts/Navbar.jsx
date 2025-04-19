import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = ({ onThemeToggle }) => {
  const navItems = ["Home", "About", "Experience", "Projects", "Contact"];

  return (
    <nav className="sticky top-0 z-50 bg-beige dark:bg-primary shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left: Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/mohanvamsikrishna-y"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={20}
              className="text-black dark:text-beige hover:text-accent transition-colors"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ymvk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={20}
              className="text-black dark:text-beige hover:text-accent transition-colors"
            />
          </a>
        </div>

        {/* Center: Navigation Links */}
        <ul className="flex gap-6 text-sm font-medium text-primary dark:text-beige">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-accent transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Theme Toggle Button */}
        <button
          onClick={onThemeToggle}
          className="text-xs px-3 py-1 border rounded text-primary dark:text-beige border-primary dark:border-beige hover:bg-accent hover:text-white transition-colors"
        >
          {document.documentElement.classList.contains("dark") ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
