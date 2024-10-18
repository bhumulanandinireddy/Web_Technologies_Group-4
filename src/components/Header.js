// Header.js
import React from 'react';
import './Header.css'; // Style for the header

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/literature-review">Literature Review</a></li>
          <li><a href="/other-page">Other Page</a></li>
          {/* Add other menu links here */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
