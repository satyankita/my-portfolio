
import FloatingBackground from './components/FloatingBackground.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Projects from "./sections/Projects";

function App() {
  return (
    <main>
      <Navbar/>
      <Hero />
      <About />
      <Projects />
      <FloatingBackground />

      <section className="section">
        <div className="container">
          <p className="accent-text">MY PORTFOLIO</p>

          <h1 className="section-title">
            Building something{' '}
            <span className="accent-text">meaningful.</span>
          </h1>

          <p className="section-subtitle">
            Your new portfolio is being built. We will add the navigation,
            hero section, projects, skills, and animations step by step.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
