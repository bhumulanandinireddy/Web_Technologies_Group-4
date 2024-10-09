import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import LiteratureReview from './components/LiteratureReview';
import Taxonomy from './components/Taxonomy';
import Challenges from './components/Challenges';
import Members from './components/Members';
import References from './components/References';
import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><NavLink exact="true" to="/" activeClassName="active">Overview</NavLink></li>
            <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
            <li><NavLink to="/literature" activeClassName="active">Literature Review</NavLink></li>
            <li><NavLink to="/taxonomy" activeClassName="active">Taxonomy</NavLink></li>
            <li><NavLink to="/challenges" activeClassName="active">Challenges & Open Issues</NavLink></li>
            <li><NavLink to="/members" activeClassName="active">Group Members</NavLink></li>
            <li><NavLink to="/references" activeClassName="active">References</NavLink></li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/literature" element={<LiteratureReview />} />
            <Route path="/taxonomy" element={<Taxonomy />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/members" element={<Members />} />
            <Route path="/references" element={<References />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;