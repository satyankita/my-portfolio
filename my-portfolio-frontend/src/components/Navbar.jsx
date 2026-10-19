
import { useEffect, useState } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function closeMenu() {
    setMenuOpen(false);
  }

  function toggleMenu() {
    setMenuOpen((previousState) => !previousState);
  }

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === 'dark' ? 'light' : 'dark'
    );
  }

  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <a
          className="navbar__logo"
          href="#home"
          aria-label="SSD - Home"
          onClick={closeMenu}
        >
          <span className="navbar__logo-mark">SSD</span>
          <span className="navbar__logo-line" />
        </a>

        {/* Navigation links */}
        <nav
          id="main-navigation"
          className={`navbar__links ${
            menuOpen ? 'navbar__links--open' : ''
          }`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              className="navbar__link"
              href={link.href}
              key={link.label}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          <a
            className="navbar__mobile-cta"
            href="#contact"
            onClick={closeMenu}
            style={{ color: '#0f766e' }}

          >
            Let's Talk <span aria-hidden="true">↗</span>
          </a>
        </nav>

        {/* Dark / Light Mode Button */}
        <button
          className="navbar__theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${
            theme === 'dark' ? 'light' : 'dark'
          } mode`}
          title={`Switch to ${
            theme === 'dark' ? 'light' : 'dark'
          } mode`}
        >
          <span aria-hidden="true">
            {theme === 'dark' ? '☀' : '☾'}
          </span>
        </button>

        {/* Let's Talk Button */}
        <a className="navbar__cta" href="#contact">
          Let's Talk
          <span aria-hidden="true">↗</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className={`navbar__toggle ${
            menuOpen ? 'navbar__toggle--active' : ''
          }`}
          type="button"
          aria-label={
            menuOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
