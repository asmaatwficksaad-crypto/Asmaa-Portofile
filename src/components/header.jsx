import React, { useState, useEffect } from "react";
import { LuSun, LuMoon, LuMenu, LuX } from "react-icons/lu";
import "./header.css";
import logo from "../img/back.png";

function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <h1>My profile</h1>
      </div>

      <nav className={`nav-container ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleScroll(e, item.id)}
                className={activeSection === item.id ? "active" : ""}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="contact">
        <button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <LuSun /> : <LuMoon />}
        </button>

        <button
          className="connect-btn"
          onClick={(e) => handleScroll(e, "contact")}
        >
          Let's connect
        </button>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <LuX /> : <LuMenu />}
        </button>
      </div>
    </header>
  );
}

export default Header;