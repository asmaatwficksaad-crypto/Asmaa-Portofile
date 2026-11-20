import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./grades.css";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Grades() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillsData = [
    { title: "HTML5", percentage: 98, color: "#e056fd" },
    { title: "CSS3", percentage: 95, color: "#f368e0" },
    { title: "JavaScript", percentage: 92, color: "#be2edd" },
    { title: "React.js", percentage: 95, color: "#ff14f3" },
    { title: "Tailwind", percentage: 90, color: "#45aaf2" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="skills-content" id="skills" ref={sectionRef}>
      <div className="skills-top">
        <h3>Technical Expertise</h3>
        <h1>Front-End Skills</h1>
        <div className="skills-divider"></div>
        <p>The front-end technologies I use to build modern, responsive web experiences.</p>
      </div>

      <div className="skills-section">
        <Swiper
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          breakpoints={{
            0: { slidesPerView: 1, slidesPerGroup: 1 },
            640: { slidesPerView: 2, slidesPerGroup: 2 },
            1024: { slidesPerView: 3, slidesPerGroup: 3 },
          }}
        >
          {skillsData.map((skill, index) => {
            const currentPercentage = isVisible ? skill.percentage : 0;

            return (
              <SwiperSlide key={index}>
                <div className="skill-card">
                  <div
                    className={`circle-progress ${isVisible ? 'animated' : ''}`}
                    style={{
                      '--skill-color': skill.color,
                      '--current-percent': `${currentPercentage}%`,
                      background: `conic-gradient(${skill.color} 0% ${currentPercentage}%, var(--progress-track) ${currentPercentage}% 100%)`,
                      boxShadow: `0 0 15px ${skill.color}40`
                    }}
                  >
                    <div className="inner-circle">
                      <span>{skill.percentage}%</span>
                    </div>
                  </div>
                  <h3>{skill.title}</h3>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Grades;