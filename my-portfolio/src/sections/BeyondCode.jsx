import {
  Users,
  HeartHandshake,
  BookOpen,
  Target,
  ArrowUpRight,
} from "lucide-react";

import SectionHeading from "../components/SectionHeading";

const activities = [
  {
    icon: Users,
    title: "Leadership & Responsibility",
    description:
      "Developing leadership skills through campus responsibilities, coordination, teamwork, and respectful communication.",
    tag: "Leadership",
  },
  {
    icon: HeartHandshake,
    title: "Social Impact",
    description:
      "Participated in a village-level Social Action Project focused on girls' education and the importance of learning opportunities.",
    tag: "Community",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Learning new technologies, practising development concepts, and improving through hands-on projects and feedback.",
    tag: "Growth",
  },
  {
    icon: Target,
    title: "Discipline & Teamwork",
    description:
      "Valuing consistency, fairness, accountability, and collaboration while working toward shared goals.",
    tag: "Mindset",
  },
];

export default function BeyondCode() {
  return (
    <section
      id="beyond-code"
      className="scroll-mt-24 bg-gray-50 px-5 py-24 dark:bg-gray-900/40 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="More than development"
          title="Beyond Code"
          description="The values, experiences, and interests that shape how I learn, collaborate, and contribute."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map(({ icon: Icon, title, description, tag }) => (
            <article
              key={title}
              className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="rounded-xl bg-violet-100 p-3 text-violet-600 transition duration-300 group-hover:scale-110 dark:bg-violet-500/10 dark:text-violet-400">
                  <Icon size={24} />
                </div>

                <ArrowUpRight
                  size={19}
                  className="text-gray-400 transition group-hover:text-violet-500"
                />
              </div>

              <span className="mb-3 text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                {tag}
              </span>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-gray-600 dark:text-gray-400">
                {description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-violet-200 bg-violet-50 p-7 text-center dark:border-violet-500/20 dark:bg-violet-500/5 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
            What drives me
          </p>

          <h3 className="mx-auto mt-4 max-w-3xl font-serif text-2xl font-bold leading-relaxed text-gray-900 dark:text-white sm:text-3xl">
            Learn continuously. Build thoughtfully. Grow together.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
            I believe strong technical skills become more valuable when
            combined with empathy, responsibility, and a willingness to learn
            from others.
          </p>
        </div>
      </div>
    </section>
  );
}