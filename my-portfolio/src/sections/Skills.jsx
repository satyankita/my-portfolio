import { Code2, Server, Wrench, Database } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import skillsData from "../data/skills";

const skillCategories = [
  {
    key: "frontend",
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    icon: Code2,
  },
  {
    key: "backend",
    title: "Backend Development",
    description: "Creating APIs and working with server-side logic.",
    icon: Server,
  },
  {
    key: "tools",
    title: "Tools & Worz5kflow",
    description: "Tools I use to develop, test, and manage projects.",
    icon: Wrench,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-white px-5 py-24 dark:bg-gray-950 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="My technical toolkit"
          title="Skills & Technologies"
          description="Technologies and tools I use while building projects and strengthening my development skills."
        />

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map(({ key, title, description, icon: Icon }) => (
            <article
              key={key}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-400 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900/70"
            >
              <div className="mb-5 inline-flex rounded-xl bg-violet-100 p-3 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
                <Icon size={26} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                {description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {(skillsData[key] ?? []).map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Database size={17} className="text-violet-500" />
          Always learning and exploring new technologies.
        </div>
      </div>
    </section>
  );
}