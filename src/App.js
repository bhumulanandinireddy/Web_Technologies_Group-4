import React from 'react';
import Home from './components/Home';
import About from './components/About';
import LiteratureReview from './components/LiteratureReview';
import Taxonomy from './components/Taxonomy';
import Challenges from './components/Challenges';
import Members from './components/Members';
import References from './components/References';
import WebSocketClient from './components/WebSocketClient'; 
import './App.css';

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <button onClick={() => scrollToSection('overview')}>Overview</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('about')}>About</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('literature')}>Literature Review</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('taxonomy')}>Taxonomy</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('challenges')}>Challenges & Open Issues</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('members')}>Group Members</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('references')}>References</button>
          </li>
        </ul>
      </nav>

      <div className="content">
        <section id="overview">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="literature">
          <LiteratureReview />
        </section>
        <section id="taxonomy">
          <Taxonomy />
        </section>
        <section id="challenges">
          <Challenges />
        </section>
        <section id="members">
          <Members />
        </section>
        <section id="references">
          <References />
        </section>
      </div>
      
      {/* Include the WebSocketClient component below the main content */}
      <WebSocketClient />
    </div>
  );
}

export default App;
