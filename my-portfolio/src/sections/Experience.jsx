import {
  GraduationCap,
  Users,
  Code2,
  CalendarDays,
} from "lucide-react";

import SectionHeading from "../components/SectionHeading";

const experiences = [
  {
    type: "Education",
    title: "Bachelor of Computer Applications (BCA)",
    organization: "Eternal University, Baru Sahib",
    period: "2025 – 2028",
    description:
      "Learning computer science fundamentals, programming, databases, and software development while building practical web development projects.",
    icon: GraduationCap,
  },
  {
    type: "Leadership",
    title: "Discipline Coordinator",
    organization: "Campus Leadership",
    period: "Add your actual dates",
    description:
      "Supporting campus discipline through respectful communication, fairness, teamwork, and accountability while helping maintain a positive learning environment.",
    icon: Users,
  },
  {
    type: "Projects",
    title: "Web Development Projects",
    organization: "Personal & Learning Projects",
    period: "Ongoing",
    description:
      "Building web applications using React, JavaScript, Node.js, Express, REST APIs, and databases to strengthen frontend and backend development skills.",
    icon: Code2,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-white px-5 py-24 dark:bg-gray-950 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="My journey so far"
          title="Education & Experience"
          description="My learning journey, leadership responsibilities, and practical development experience."
        />

        <div className="relative ml-3 border-l-2 border-violet-200 pl-7 dark:border-violet-500/30 sm:ml-6 sm:pl-10">
          {experiences.map(
            ({
              type,
              title,
              organization,
              period,
              description,
              icon: Icon,
            }) => (
              <article key={title} className="relative pb-10 last:pb-0">
                <div className="absolute -left-[43px] top-1 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-violet-600 text-white dark:border-gray-950 sm:-left-[57px]">
                  <Icon size={16} />
                </div>

                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition duration-300 hover:border-violet-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/70 dark:hover:border-violet-500/50 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700 dark:bg-violet-500/10 dark:text-violet-300">
                      {type}
                    </span>

                    <span className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                      <CalendarDays size={15} />
                      {period}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
                    {title}
                  </h3>

                  <p className="mt-2 font-medium text-violet-600 dark:text-violet-400">
                    {organization}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
                    {description}
                  </p>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}