import { Code2, Lightbulb, Target, Users } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { personalInfo } from "../data/personalInfo";

const strengths = [
  {
    icon: Code2,
    title: "Development",
    description:
      "Building responsive and user-friendly web applications with modern web technologies.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Breaking problems into smaller steps and learning by building practical projects.",
  },
  {
    icon: Target,
    title: "Continuous Learning",
    description:
      "Improving my frontend and backend skills through consistent practice.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "Communicating respectfully, collaborating with others, and taking responsibility.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-gray-50 px-5 py-24 dark:bg-gray-900/40 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="A little about me"
          title="Turning Ideas Into Web Experiences"
          description="I enjoy learning, creating useful applications, and growing through real-world development challenges."
        />

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              My Journey
            </h3>

            <div className="mt-5 space-y-5 text-base leading-8 text-gray-600 dark:text-gray-400">
              <p>{personalInfo.bio}</p>

              <p>
                My development journey includes working with React, JavaScript,
                Node.js, Express, REST APIs, and databases. I enjoy connecting
                frontend interfaces with backend functionality to create
                complete web applications.
              </p>

              <p>
                Beyond coding, I value discipline, teamwork, and clear
                communication. I am interested in opportunities where I can
                contribute, learn from experienced developers, and build
                software that solves real problems.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700 dark:bg-violet-500/10 dark:text-violet-300">
                Curious Learner
              </span>

              <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700 dark:bg-violet-500/10 dark:text-violet-300">
                Team Player
              </span>

              <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700 dark:bg-violet-500/10 dark:text-violet-300">
                Growth Mindset
              </span>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {strengths.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-violet-500/50"
              >
                <div className="mb-5 inline-flex rounded-xl bg-violet-100 p-3 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
                  <Icon size={24} />
                </div>

                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  {title}
                </h4>

                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}