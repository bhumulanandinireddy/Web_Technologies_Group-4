import React, { useState } from 'react';
import About from './components/About';
import LiteratureReview from './components/LiteratureReview';
import Taxonomy from './components/Taxonomy';
import Members from './components/Members';
import References from './components/References';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);  // Close the menu after selecting an option
  };

  return (
    <div className="App">
      {/* Header with website name and navigation bar */}
      <header className="navbar">
        <div className="nav-container">
          {/* Website title */}
          <a className="navbar-brand active" href="#/" onClick={() => scrollToSection('about')}>
            DNS over HTTPS Survey
          </a>

          {/* Hamburger icon */}
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          {/* Navigation Links */}
          <ul className={`navbar-nav ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <a className="nav-link active" href="#/" onClick={() => scrollToSection('about')}>About</a>
            </li>
            <li>
              <a className="nav-link" href="#/literature" onClick={() => scrollToSection('literature')}>Literature Review</a>
            </li>
            <li>
              <a className="nav-link" href="#/taxonomy" onClick={() => scrollToSection('taxonomy')}>Taxonomy</a>
            </li>
            <li>
              <a className="nav-link" href="#/members" onClick={() => scrollToSection('members')}>Group Members</a>
            </li>
            <li>
              <a className="nav-link" href="#/references" onClick={() => scrollToSection('references')}>References</a>
            </li>
          </ul>
        </div>
      </header>

      {/* Content Sections */}
      <div className="content">
        <section id="about">
          <About />
        </section>
        <section id="literature">
          <LiteratureReview />
        </section>
        <section id="taxonomy">
          <Taxonomy />
        </section>
        <section id="members">
          <Members />
        </section>
        <section id="references">
          <References />
        </section>
      </div>
    </div>
  );
}

export default App;
