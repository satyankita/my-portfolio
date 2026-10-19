import { useState } from "react";
import {
  Mail,
  Send,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

import SectionHeading from "../components/SectionHeading";
import { personalInfo } from "../data/personalInfo";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");

  const email = personalInfo.email || "your-email@example.com";
  const github = personalInfo.github || "https://github.com/satyankita";
  const linkedin =
    personalInfo.linkedin ||
    "https://linkedin.com/in/satyankita-s-ba5258377";

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));

    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!email || email === "your-email@example.com") {
      setError(
        "Please add your actual email in src/data/personalInfo.js first."
      );
      return;
    }

    const subject = encodeURIComponent(
      form.subject || `Portfolio inquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      `Hi Satyankita,\n\n${form.message}\n\nFrom: ${form.name}\nReply email: ${form.email}`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  const contactLinks = [
    {
      label: "Email",
      value: email,
      href: `mailto:${email}`,
      icon: Mail,
    },
    {
      label: "GitHub",
      value: "Explore my projects",
      href: github,
      icon: SiGithub,
    },
    {
      label: "LinkedIn",
      value: "Let's connect professionally",
      href: linkedin,
      icon: FaLinkedin,
    },
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-white px-5 py-24 dark:bg-gray-950 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Let's connect"
          title="Have a project in mind?"
          description="I'm open to internship opportunities, collaborations, and conversations about web development."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              Let's build something meaningful.
            </h3>

            <p className="mt-4 max-w-lg text-base leading-8 text-gray-600 dark:text-gray-400">
              Whether you're hiring for a frontend or full-stack internship,
              looking for a project collaborator, or simply want to connect,
              I'd love to hear from you.
            </p>

            <div className="mt-8 space-y-4">
              {contactLinks.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noreferrer"}
                  className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4 transition hover:border-violet-300 hover:bg-violet-50 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-violet-500/40 dark:hover:bg-violet-500/5 sm:p-5"
                >
                  <div className="rounded-xl bg-violet-100 p-3 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
                    <Icon size={22} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {label}
                    </p>

                    <p className="mt-1 break-words text-sm text-gray-500 dark:text-gray-400">
                      {value}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="shrink-0 text-gray-400 transition group-hover:text-violet-500"
                  />
                </a>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-xl bg-violet-50 p-4 dark:bg-violet-500/5">
              <CheckCircle2
                size={21}
                className="mt-0.5 shrink-0 text-violet-600 dark:text-violet-400"
              />

              <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                Interested in learning, contributing to real projects, and
                growing with a collaborative development team.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900 sm:p-8"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Send a message
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
              Fill in the details below to prepare an email.
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Your name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Your email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Internship opportunity / Collaboration"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me a little about your opportunity..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full resize-y rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm leading-6 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                />
              </div>

              {error && (
                <p
                  role="alert"
                  className="text-sm font-medium text-red-600 dark:text-red-400"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-500/20"
              >
                Prepare Email
                <Send size={17} />
              </button>

              <p className="text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
                Your email application opens with the message prepared. It
                does not send automatically.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}