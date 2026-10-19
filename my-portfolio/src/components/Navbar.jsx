import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Beyond Code", href: "#beyond-code" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ darkMode, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200/70 bg-white/85 backdrop-blur-xl dark:border-gray-800/70 dark:bg-gray-950/85">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white"
        >
          <span className="rounded-lg bg-violet-600 p-2 text-white">
            <Code2 size={20} />
          </span>

          <span>
            Satyankita<span className="text-violet-500">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition hover:text-violet-500 dark:text-gray-300"
            >
              {link.label}
            </a>
          ))}

          <ThemeToggle
            darkMode={darkMode}
            onToggle={onToggleTheme}
          />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle
            darkMode={darkMode}
            onToggle={onToggleTheme}
          />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="rounded-lg border border-gray-200 p-2 text-gray-700 dark:border-gray-700 dark:text-gray-200"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-5 py-4 dark:border-gray-800 dark:bg-gray-950 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-violet-500/10 hover:text-violet-500 dark:text-gray-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}