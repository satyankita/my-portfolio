import { Mail, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

import { personalInfo } from "../data/personalInfo";

const socialLinks = [
  {
    label: "GitHub",
    href: personalInfo.githubUrl,
    icon: SiGithub,
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedinUrl,
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
];

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={label === "Email" ? undefined : "_blank"}
          rel={label === "Email" ? undefined : "noopener noreferrer"}
          aria-label={label}
          title={label}
          className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-violet-400 hover:text-violet-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-violet-500 dark:hover:text-violet-400"
        >
          <Icon size={18} />
          <span>{label}</span>
          {label !== "Email" && <ExternalLink size={13} />}
        </a>
      ))}
    </div>
  );
}