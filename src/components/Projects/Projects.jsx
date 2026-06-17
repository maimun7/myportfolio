import "./Projects.css";
import Bmi from "../../assets/bmi.png"
import Dworld from "../../assets/dworld.png"
import Eduford from "../../assets/edu.png"
import Calculator from "../../assets/calculator.png"
import Dribbble from "../../assets/dribbble.png"

const PROJECTS = [
  {
    title: "Dribbble Web Application",
    link: "https://dribbble-frontend-seven.vercel.app/",
    desc: "A full-stack Dribbble-inspired web application built with React, JavaScript, and CSS on the frontend, and Java with Spring Boot on the backend. The platform allows users to create accounts, authenticate securely, browse creative design shots, like and save their favorite content, and manage their activity through a personalized dashboard. Powered by RESTful APIs and responsive design principles, the application delivers a seamless, interactive, and user-friendly experience across desktop and mobile devices.",
    tags: ["Spring Boot","Java","React","Javascript","REST API"],
    image: Dribbble
  },
  {
    title: "BMI Calculator",
    link: "https://bmiicalculatorrr.netlify.app/",
    desc: "A modern and responsive BMI Calculator web app that allows users to calculate their Body Mass Index instantly using height and weight inputs. Features real-time calculation, health category indicators, and a clean, user-friendly interface optimized for all devices.",
    // installs: "100k+ Installs",
    tags: ["React","CSS"],
    image: Bmi
  },
  {
    title: "Calculator App",
    link: "https://calculat0r-app-react.netlify.app/",
    desc: "A modern calculator application built with React and CSS, featuring a clean user interface, responsive layout, and smooth arithmetic operations for an interactive user experience.",
    
    tags: ["React","CSS"],
    image: Calculator
  },
  {
    title: "DwebWorld Landing Page",
    link: "https://dwebworld.netlify.app/",
    desc: "A modern and responsive landing page built with HTML, CSS, Bootstrap, and JavaScript, featuring a bold UI, clean layout, and high-converting call-to-action sections.",
    tags: ["JavaScript", "HTML", "CSS"],
    image: Dworld
  },
];

export default function Projects() {
  return (
    <div className="projects">
      <p className="section-label">Projects</p>

      <div className="projects-list">
        {PROJECTS.map((project) => (
          // <div className="project-item" key={project.title}>
          <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="project-item"
  key={project.title}
>
            <div className="project-thumbnail">
             <img
  src={project.image}
  alt={project.title}
  className="project-image"
/>
            </div>

            <div className="project-info">
              <a href={project.link} className="project-title">
                {project.title}
                <span className="arrow"> ↗</span>
              </a>

              <p className="project-desc">{project.desc}</p>

              
              {project.tags.length > 0 && (
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          {/* </div> */}
          </a>
        ))}
      </div>
    </div>
  );
}