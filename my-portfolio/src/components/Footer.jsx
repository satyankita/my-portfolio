import { Mail, Heart } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/personalInfo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-8 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="text-center sm:text-left">
          <a
            href="#home"
            className="text-xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Satyankita<span className="text-violet-600">.</span>
          </a>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            © {currentYear} Satyankita Singh. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="rounded-full border border-slate-200 p-3 text-slate-600 transition-all duration-300 hover:border-violet-500 hover:bg-violet-50 hover:text-violet-600 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <SiGithub size={20} />
          </a>

          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="rounded-full border border-slate-200 p-3 text-slate-600 transition-all duration-300 hover:border-violet-500 hover:bg-violet-50 hover:text-violet-600 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            title="Email"
            className="rounded-full border border-slate-200 p-3 text-slate-600 transition-all duration-300 hover:border-violet-500 hover:bg-violet-50 hover:text-violet-600 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <Mail size={20} />
          </a>
        </div>

        <p className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
          Built with
          <Heart
            size={15}
            className="fill-rose-500 text-rose-500"
            aria-label="love"
          />
          using React
        </p>
      </div>
    </footer>
  );
}