
import './Hero.css';

import { Eye } from 'lucide-react';


function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__container">
        <div className="hero__content animate-fade-up">
          <div className="hero__availability">
            <span className="hero__availability-dot" />
            <span>Open to New Opportunities</span>
          </div>

          <p className="hero__eyebrow">HELLO, I'M</p>

          <h1 className="hero__title">
            <span className="hero__first-name">
              Satyankita Singh
            </span>
            <span className="hero__surname">Dhurve</span>
          </h1>

          <div className="hero__roles">
            <span className="hero__role-highlight">
              Full Stack Developer
            </span>
          </div>

          <p className="hero__description">
            I create thoughtful digital experiences that turn ideas
            into intuitive, engaging, and user-friendly web applications.
          </p>

          <p className="hero__tagline">
            Turning Ideas into{' '}
            <span className="accent-text">
              Meaningful Digital Experiences.
            </span>
          </p>

          <div className="hero__actions">
            <a className="btn btn-primary" href="#projects">
              Explore My Work <span aria-hidden="true">↗</span>
            </a>

            <a className="btn btn-secondary" href="#contact">
              Let's Connect
            </a>
          </div>

        
      
<a className="hero__resume" href="#resume">
  <span className="hero__resume-icon" aria-hidden="true">▤</span>
  <span>View Resume</span>
</a>


        </div>

        <div className="hero__visual animate-fade-in">
          <div className="hero__photo-frame">
            <div className="hero__photo-placeholder">
              <span className="hero__photo-initials">SSD</span>
              <span className="hero__photo-hint">
                Your photo goes here
              </span>
            </div>

            <span className="hero__corner hero__corner--top" />
            <span className="hero__corner hero__corner--bottom" />
          </div>

          <div className="hero__floating-card">
            <span className="hero__floating-icon">✳</span>
            <div>
              <p className="hero__floating-title">Always Learning</p>
              <p className="hero__floating-subtitle">
                Growing through every project
              </p>
            </div>
          </div>

          <span className="hero__orbit hero__orbit--one" />
          <span className="hero__orbit hero__orbit--two" />
        </div>
      </div>

      <a className="hero__scroll" href="#about">
        <span className="hero__scroll-line" />
        <span>SCROLL TO EXPLORE</span>
      </a>
    </section>
  );
}

export default Hero;
