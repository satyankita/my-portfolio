import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";

export default function ProjectCard({ project, onViewDetails }) {
  const technologies = project.technologies ?? project.techStack ?? [];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-violet-400 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">
      <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-blue-500/20">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="px-6 text-center">
            <span className="text-4xl font-bold text-violet-500">
              {project.title.slice(0, 2).toUpperCase()}
            </span>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Project Preview
            </p>
          </div>
        )}

        {project.status && (
          <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-white/90 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-900/90 dark:text-white">
            {project.status}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {project.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => onViewDetails?.(project)}
            className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700"
          >
            View Details
            <ArrowUpRight size={16} />
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              title="View on GitHub"
              className="rounded-lg border border-gray-200 p-2.5 text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              <SiGithub size={18} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}