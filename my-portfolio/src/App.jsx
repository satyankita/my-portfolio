
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import BeyondCode from "./sections/BeyondCode";
import Contact from "./sections/Contact";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("portfolio-theme");
      return savedTheme ? savedTheme === "dark" : true;
    } catch {
      return true;
    }
  });

  useEffect(() => {
    const root = document.documentElement;

    root.setAttribute("data-theme", darkMode ? "dark" : "light");
    root.classList.toggle("dark", darkMode);

    try {
      localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
    } catch (error) {
      console.warn("Unable to save theme:", error);
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((current) => !current);
  };

  return (
    <div className="portfolio-app">
      <Navbar darkMode={darkMode} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <BeyondCode />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
