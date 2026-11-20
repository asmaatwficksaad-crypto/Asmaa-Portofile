import React, { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import pro1 from '../../img/pro1.jpg';
import pro2 from '../../img/pro2.jpg';
import pro3 from '../../img/pro3.jpg';
import pro4 from '../../img/pro4.jpg';
import pro5 from '../../img/pro5.jpg';
import "./projects.css";

function Projects() {
    const allProjects = [
        { 
            id: 1, 
            title: "Real Madrid Fan Hub Sports Club Showcase", 
            paragraph: "A dedicated fan platform celebrating the legacy of Real Madrid...", 
            category: "web", 
            img: pro1, 
            btn: "View Project",
            githubLink: "https://github.com/asmaatwficksaad-crypto/RealMadrid_project1"
        },
        { 
            id: 2, 
            title: "SKY Travels Dynamic Travel & Booking Portal", 
            paragraph: "A sleek travel agency interface designed to showcase luxury vacation packages...", 
            category: "web", 
            img: pro2, 
            btn: "View Project",
            githubLink: "https://github.com/asmaatwficksaad-crypto/Travels-project2"
        },
        { 
            id: 3, 
            title: "CareClinic Modern Healthcare & Medical Platform", 
            paragraph: "A responsive healthcare portal created to streamline medical service discovery...", 
            category: "web", 
            img: pro3, 
            btn: "View Project",
            githubLink: "https://github.com/asmaatwficksaad-crypto/health-Project3"
        },
        { 
            id: 4, 
            title: "ChocoStore Interactive E-Commerce & Shopping Cart", 
            paragraph: "An interactive e-commerce web application for a boutique chocolate store...", 
            category: "web", 
            img: pro4, 
            btn: "View Project",
            githubLink: "https://github.com/asmaatwficksaad-crypto/chocolateStore-Project"
        },
        { 
            id: 5, 
            title: "Front-End Developer | Crafting Clean, Responsive Web Experiences", 
            paragraph: "I am a passionate Front-End Developer dedicated to transforming ideas...", 
            category: "proto", 
            img: pro5, 
            btn: "View Source",
            githubLink: "./"
        },
    ];

    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProjects = allProjects.filter((project) => {
        if (activeCategory === 'all') {
            return true;
        }
        return project.category === activeCategory;
    });

    return (
        <section className='projects-main' id="projects">
            <div className="projects-top">
                <h3>My Work</h3>
                <h1>Featured Projects</h1>
                <div className="projects-divider"></div>
                <p>Real-world applications built with modern technologies and best practices.</p>
            </div>

            <div className="filter-btns">
                <button 
                    className={activeCategory === 'all' ? 'active' : ''} 
                    onClick={() => setActiveCategory('all')}
                >
                    All Projects
                </button>
                <button 
                    className={activeCategory === 'web' ? 'active' : ''} 
                    onClick={() => setActiveCategory('web')}
                >
                    Web Apps
                </button>
                <button 
                    className={activeCategory === 'proto' ? 'active' : ''} 
                    onClick={() => setActiveCategory('proto')}
                >
                    Portfolio
                </button>
            </div>

            <div className="projects-grid">
                {filteredProjects.map((project) => (
                    <div className='project-card' key={project.id}>
                        <div className="img-container">
                            <img alt={project.title} src={project.img}/>
                            <div className="overlay">
                                <a 
                                    href={project.githubLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="overlay-btn"
                                >
                                    {project.btn} <FiExternalLink style={{ marginLeft: '6px' }} />
                                </a>
                            </div>
                        </div>
                        <div className="card-content">
                            <h3>{project.title}</h3>
                            <p>{project.paragraph}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;