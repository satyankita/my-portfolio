import {
  ArrowDown,
  ArrowRight,
  Download,
  Sparkles,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

import { personalInfo } from "../data/personalInfo";
import SocialLinks from "../components/SocialLinks";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white px-5 pb-16 pt-32 dark:bg-gray-950 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 top-24 h-80 w-80 rounded-full bg-violet-400/15 blur-3xl" />
        <div className="absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-fuchsia-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700 dark:border-violet-500/30 dark:bg-violet-500/10 dark:text-violet-300">
            <Sparkles size={16} />
            {personalInfo.availability}
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
            Hello, I'm
          </p>

          <h1 className="max-w-3xl font-serif text-5xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
            {personalInfo.name}
            <span className="text-violet-600">.</span>
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-violet-600 dark:text-violet-400 sm:text-3xl">
            {personalInfo.title}
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
            {personalInfo.tagline}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-violet-600/20 transition duration-300 hover:-translate-y-1 hover:bg-violet-700"
            >
              Explore My Work
              <ArrowRight size={18} />
            </a>

            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3.5 font-semibold text-gray-800 transition duration-300 hover:-translate-y-1 hover:border-violet-500 hover:text-violet-600 dark:border-gray-700 dark:text-gray-200 dark:hover:text-violet-400"
            >
              <Download size={18} />
              View Resume
            </a>
          </div>

          <div className="mt-8">
            <SocialLinks />
          </div>

          <div className="mt-10 flex items-center gap-5 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <SiGithub size={17} />
              GitHub
            </span>
            <span className="flex items-center gap-2">
              <FaLinkedin size={17} />
              LinkedIn
            </span>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md">
          <div className="relative mx-auto aspect-[4/5] max-h-[520px] overflow-hidden rounded-[2rem] border border-violet-200 bg-gradient-to-br from-violet-100 via-white to-fuchsia-100 p-3 shadow-2xl shadow-violet-500/10 dark:border-gray-800 dark:from-violet-950 dark:via-gray-900 dark:to-fuchsia-950">
            <div className="flex h-full items-center justify-center overflow-hidden rounded-[1.5rem] bg-white/60 dark:bg-gray-950/40">
              {personalInfo.photoUrl ? (
                <img
                  src={personalInfo.photoUrl}
                  alt={personalInfo.name}
                  className="h-full w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              ) : (
                <div className="px-8 text-center">
                  <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-violet-600 text-5xl font-bold text-white shadow-xl">
                    {personalInfo.name
                      .split(" ")
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join("")}
                  </div>

                  <p className="mt-6 text-lg font-semibold text-gray-800 dark:text-white">
                    Building with curiosity.
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    Learning, creating, and growing one project at a time.
                  </p>
                </div>
              )}
            </div>

            <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/50 bg-white/90 p-4 shadow-lg backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/90">
              <p className="text-xs font-medium uppercase tracking-widest text-violet-600 dark:text-violet-400">
                Current Focus
              </p>
              <p className="mt-1 font-semibold text-gray-900 dark:text-white">
                Full-Stack Web Development
              </p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 animate-bounce text-gray-400 transition hover:text-violet-600 md:block"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}