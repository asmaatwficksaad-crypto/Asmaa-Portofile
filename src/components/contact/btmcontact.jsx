import React, { useState } from 'react';
import './contact.css';
import { GoDotFill } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";

function BtmContact() {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className='btmcontact'>
      <hr />
      <div className="top">
        <div className="left">
          <h2>Stay Updated</h2>
          <p>Subscribe to see my latest projects & articles.</p>
        </div>
        <div className="right">
          <input type='email' placeholder='Enter your Email' />
          <button type="button">Subscribe</button>
        </div>
      </div>
      <hr />
      <div className="btm">
        <div className="child">
          <div>
            <h1><GoDotFill /> Portfolio</h1>
          </div>
          <p>Full-Stack Developer building beautiful, responsive web experiences with modern front-end technologies.</p>
          <div className="icons">
            <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://www.facebook.com/your-facebook-profile" target="_blank" rel="noopener noreferrer">
              <SiFacebook />
            </a>
            <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
              <SiInstagram />
            </a>
            <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
              <IoLogoGithub />
            </a>
          </div>
        </div>

        <div className="child">
          <h2>Navigation</h2>
          <nav>
            <div className="nav-links">
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
            </div>
          </nav>
        </div>

        <div className="child">
          <h2>What I Do</h2>
          <p>Front-End Development</p>
          <p>Responsive Web Design</p>
          <p>React & Tailwind Projects</p>
          <p>UI / UX Implementation</p>
          <p>Component Architecture</p>
        </div>
      </div>
    </footer>
  );
}

export default BtmContact;