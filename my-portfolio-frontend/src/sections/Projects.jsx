
import { useState } from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Jira Clone",
    subtitle: "Project Management",
    image: "/images/projects/jira-clone.png",
    description:
      "A Jira-inspired project designed to practice issue tracking and project workflows through an interactive web interface.",
    details:
      "This project focuses on organizing work, viewing tasks, and managing project workflows. Explore the live version to see the implemented functionality.",
    features: [
      "Project and task management interface",
      "Issue tracking workflow",
      "Interactive board experience",
      "React component-based UI",
    ],
    technologies: ["React", "JavaScript", "CSS", "Git"],
    github: "https://github.com/satyankita/Jira-Clone",
    live: "https://jira-clone-t89w.vercel.app/",
  },
  {
    id: 2,
    number: "02",
    title: "CampusVoice",
    subtitle: "Campus Community Platform",
    image: "/images/projects/campusvoice.png",
    description:
      "A campus-focused application built to provide a digital space for campus-related communication and workflows.",
    details:
      "CampusVoice is part of my practical web development work. Visit the repository and live deployment to explore its actual implementation and available features.",
    features: [
      "Campus-focused user experience",
      "Structured web application interface",
      "Practical frontend development",
      "Deployed application and source code",
    ],
    technologies: ["React", "JavaScript", "Web Development"],
    github: "https://github.com/satyankita/CampusVoice",
    live: "https://campusvoice-frontend.vercel.app/",
  },
  {
    id: 3,
    number: "03",
    title: "Ask Gemini",
    subtitle: "AI-Powered Application",
    image: "/images/projects/ask-gemini.png",
    description:
      "An AI-powered web application that provides a user interface for submitting prompts and interacting with Gemini.",
    details:
      "This project explores connecting a web interface with a generative AI service. The source repository contains the implementation details.",
    features: [
      "Prompt-based interaction",
      "Gemini API integration",
      "Frontend and backend practice",
      "Deployed web application",
    ],
    technologies: ["JavaScript", "React", "Node.js", "Express", "Gemini API"],
    github: "https://github.com/satyankita/ask-gemini",
    live: "https://ask-gemini-taupe.vercel.app/",
  },
  {
    id: 4,
    number: "04",
    title: "Capstone Project",
    subtitle: "Web Development Project",
    image: "/images/projects/capstone-project.png",
    description:
      "A capstone project built as part of my hands-on learning journey in modern web application development.",
    details:
      "This project demonstrates practical work with a web application, including interface development and application structure. Open the live demo and repository to explore the implementation.",
    features: [
      "Practical project-based learning",
      "Component-based development",
      "Application routing and page structure",
      "Live deployment",
    ],
    technologies: ["React", "JavaScript", "CSS", "React Router"],
    github: "https://github.com/satyankita/Capstone-Project",
    live: "https://capstone-project-lkoa.vercel.app/",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects section" id="projects">
      <div className="projects__container">
        <header className="projects__header">
          <div>
            <p className="projects__eyebrow">MY WORK</p>
            <h2 className="projects__title">
              Featured <span>Projects.</span>
            </h2>
            <p className="projects__intro">
              A selection of projects I've built while learning,
              experimenting, and growing as a developer.
            </p>
          </div>

          <span className="projects__count">04 PROJECTS</span>
        </header>

        <div className="projects__grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-card__image-wrap">
                <img
                  className="project-card__image"
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    event.currentTarget.nextElementSibling.style.display =
                      "flex";
                  }}
                />

                <div className="project-card__image-placeholder">
                  <span>{project.number}</span>
                  <p>{project.title}</p>
                  <small>Project preview coming soon</small>
                </div>

                <span className="project-card__number">
                  {project.number}
                </span>
              </div>

              <div className="project-card__body">
                <p className="project-card__subtitle">
                  {project.subtitle}
                </p>

                <h3 className="project-card__title">{project.title}</h3>

                <p className="project-card__description">
                  {project.description}
                </p>

                <div className="project-card__tags">
                  {project.technologies.slice(0, 4).map((technology) => (
                    <span className="project-tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="project-tag">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="project-card__actions">
                  <a
                    className="project-button project-button--primary"
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo <span aria-hidden="true">↗</span>
                  </a>

                  <a
                    className="project-button project-button--secondary"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub <span aria-hidden="true">↗</span>
                  </a>
                </div>

                <button
                  className="project-card__details"
                  type="button"
                  onClick={() => setSelectedProject(project)}
                >
                  View Details <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        <p className="projects__footer">
          More projects are on the way. Stay tuned.
        </p>
      </div>

      {selectedProject && (
        <div
          className="project-modal__backdrop"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="project-modal__close"
              type="button"
              aria-label="Close project details"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

            <p className="projects__eyebrow">
              PROJECT {selectedProject.number}
            </p>

            <h2 id="project-modal-title" className="project-modal__title">
              {selectedProject.title}
            </h2>

            <p className="project-modal__subtitle">
              {selectedProject.subtitle}
            </p>

            <p className="project-modal__description">
              {selectedProject.details}
            </p>

            <h3>Project Highlights</h3>
            <ul className="project-modal__features">
              {selectedProject.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <h3>Technologies</h3>
            <div className="project-card__tags project-modal__tags">
              {selectedProject.technologies.map((technology) => (
                <span className="project-tag" key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            <div className="project-modal__actions">
              <a
                className="project-button project-button--primary"
                href={selectedProject.live}
                target="_blank"
                rel="noreferrer"
              >
                Open Live Demo ↗
              </a>

              <a
                className="project-button project-button--secondary"
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
              >
                View Source Code ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
