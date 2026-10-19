import { useState } from "react";
import { X, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-gray-50 px-5 py-24 dark:bg-gray-900/40 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Things I've built"
          title="Featured Projects"
          description="A selection of projects that help me practise frontend, backend, APIs, and application development."
        />

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            className="relative my-8 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-gray-200 bg-white p-7 dark:border-gray-800 dark:bg-gray-900 sm:p-9"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
              className="absolute right-5 top-5 rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <X size={21} />
            </button>

            <p className="mb-3 text-sm font-semibold text-violet-500">
              {selectedProject.status}
            </p>

            <h3
              id="project-dialog-title"
              className="pr-10 text-2xl font-bold text-gray-900 dark:text-white"
            >
              {selectedProject.title}
            </h3>

            <p className="mt-5 leading-7 text-gray-600 dark:text-gray-400">
              {selectedProject.description}
            </p>

            {selectedProject.features?.length > 0 && (
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Key Features
                </h4>

                <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {selectedProject.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-2">
              {(selectedProject.technologies ??
                selectedProject.techStack ??
                []).map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg bg-violet-100 px-3 py-2 text-sm text-violet-700 dark:bg-violet-500/10 dark:text-violet-300"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
                >
                  <SiGithub size={18} />
                  View Source Code
                </a>
              )}

              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700 transition hover:border-violet-500 hover:text-violet-600 dark:border-gray-700 dark:text-gray-200"
                >
                  Live Demo
                  <ExternalLink size={17} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}