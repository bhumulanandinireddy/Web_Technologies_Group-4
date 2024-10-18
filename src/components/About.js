import React from 'react';
import { FaBook, FaLink } from 'react-icons/fa';
import './About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-header">About the Project</h1>
      <p className="about-description">
        This survey paper focuses on <strong>DNS over HTTPS (DoH)</strong>, a modern protocol that enhances online privacy and security by encrypting DNS queries. The project aims to provide an in-depth analysis of DoH's impact on internet browsing, comparing it with traditional DNS methods, and exploring its role in reducing latency and improving security.
      </p>
      <p className="about-description">
        Through this research, our team evaluates current challenges such as implementation difficulties, compatibility issues, and privacy concerns, while also proposing solutions to enhance DoH's adoption in both consumer and enterprise networks.
      </p>

      <h2 className="subheader">
        <FaBook /> Project Details:
      </h2>
      <p className="project-details">
        Topic: <b>A Survey on DNS over HTTPS: Status, Challenges, Use Cases, and Open Issues</b>
      </p>
      <p className="about-description">
        This project highlights how DoH improves privacy, mitigates security risks, and optimizes DNS query performance, making it a significant technology for modern internet users.
      </p>

      <h2 className="subheader">
        <FaLink /> Links:
      </h2>
      <ul className="link-list">
        <li>
          <a href="https://github.com/kishore7860/Web_Technologies_Group-4" target="_blank" rel="noopener noreferrer">
            GitHub Code Repository
          </a>
        </li>
        <li>
          <a href="https://kishore7860.github.io/Web_Technologies_Group-4/" target="_blank" rel="noopener noreferrer">
            Project Website
          </a>
        </li>
      </ul>
    </div>
  );
};

export default About;
