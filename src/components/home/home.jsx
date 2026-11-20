import React from 'react';
import { Link } from 'react-router-dom';
import { GoDotFill } from "react-icons/go";
import Typewriter from 'typewriter-effect';
import { FaReact, FaLinkedinIn } from 'react-icons/fa';
import { SiFacebook, SiInstagram } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import "./home.css";

function Home() {
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
    <div className='continer'>
      <div className="left">
        <div className="topbtn">
          <GoDotFill /> <h2>Available for opportunities</h2>
        </div>

        <div className="text">
          <h1>
            Hi! I'm <span className='name'>Asmaa</span> Saad
          </h1>
          <h2>
            <Typewriter
              options={{
                strings: ['Front-End Developer', 'Full-Stack Developer', 'React Developer'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </h2>
          <p>
            Crafting beautiful, responsive web applications with modern front-end technologies. Passionate about clean code, elegant UI, and delightful user experiences.
          </p>

          <div className="links">
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

        <div className="btns">
          <Link  className='primary-btn' onClick={(e) => handleScroll(e, "contact")}>View My Projects</Link>
          <Link to="/contact" className='secondary-btn'>Get In Touch</Link>
        </div>
      </div>

      <div className="right relative w-full max-w-sm mx-auto select-none font-mono">
        <div className="react absolute -top-2 right-2 z-10 flex items-center gap-1.5 bg-[var(--header-bg)] border border-[var(--border-pink)] text-[var(--accent-pink)] text-xs font-semibold px-3 py-1 rounded-full shadow-sm backdrop-blur-md">
          <FaReact className="animate-spin-slow text-[var(--accent-pink)]" />
          <span>React Dev</span>
        </div>

        <div className="code-card-wrapper rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] overflow-hidden text-sm">
          <div className="code-card-header flex items-center px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444] inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#eab308] inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] inline-block" />
            </div>
            <span className="ml-4 text-xs font-medium text-[var(--text-color)] opacity-60">Asmaa.jsx</span>
          </div>

          <div className="p-4 leading-relaxed font-mono text-xs sm:text-sm">
            <div>
              <span className="text-[var(--accent-pink)]">const</span>{' '}
              <span className="text-[#38bdf8]">developer</span>{' '}
              <span className="text-[var(--text-color)]">=</span>{' '}
              <span className="text-[#eab308]">&#123;</span>
            </div>

            <div className="pl-5 mt-1">
              <span className="opacity-60">name:</span>{' '}
              <span className="text-[#4ade80]">"Asmaa Saad"</span>
              <span className="opacity-60">,</span>
            </div>

            <div className="pl-5">
              <span className="opacity-60">role:</span>{' '}
              <span className="text-[#4ade80]">"Front-End Dev"</span>
              <span className="opacity-60">,</span>
            </div>

            <div className="pl-5">
              <span className="opacity-60">stack:</span>{' '}
              <span className="text-[#eab308]">[</span>
            </div>

            <div className="pl-10">
              <span className="text-[#4ade80]">"HTML"</span>
              <span className="opacity-60">, </span>
              <span className="text-[#4ade80]">"CSS"</span>
              <span className="opacity-60">,</span>
            </div>

            <div className="pl-10">
              <span className="text-[#4ade80]">"JavaScript"</span>
              <span className="opacity-60">, </span>
              <span className="text-[#4ade80]">"React"</span>
              <span className="opacity-60">,</span>
            </div>

            <div className="pl-10">
              <span className="text-[#4ade80]">"Tailwind"</span>
            </div>

            <div className="pl-5">
              <span className="text-[#eab308]">]</span>
            </div>

            <div>
              <span className="text-[#eab308]">&#125;</span>
            </div>

            <div className="mt-3 opacity-70 flex items-center gap-1.5 text-[11px]">
              <span>&gt;</span>
              <span className="text-[var(--accent-pink)]">ready_to_build</span>
              <span>()</span>
              <span className="text-[#4ade80]">✓</span>
            </div>
          </div>
        </div>

        <div className="react absolute -bottom-2 left-2 z-10 bg-[var(--header-bg)] border border-[var(--border-pink)] text-[var(--accent-pink)] text-xs font-semibold px-3 py-1 rounded-full shadow-sm backdrop-blur-md">
          <span>UI / UX</span>
        </div>
      </div>
    </div>
  );
}

export default Home;