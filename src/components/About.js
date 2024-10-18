import React, { useState } from 'react';
import { FaBook, FaLink } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faShieldAlt, faGlobe, faGavel, faLock, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './About.css';
import './Challenges.css'; // Import the CSS file for styling

const About = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="about-container">
      {/* About Section */}
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

      {/* Challenges Section */}
      <div className="challenges-and-trends">
        <h1 className="section-title">Challenges and Trends in DNS over HTTPS</h1>

        {/* Challenges Section */}
        <div className="section-header">
          <h2 className="section-title">Challenges in DNS over HTTPS</h2>
        </div>

        <div className="card">
          <h2 className="card-title" onClick={() => toggleSection('implementation')}>
            <FontAwesomeIcon icon={faCogs} className="icon" />
            <span className="card-header">Implementation Challenges</span>
            <span className="toggle-icon">{expandedSection === 'implementation' ? '−' : '+'}</span>
          </h2>
          {expandedSection === 'implementation' && (
            <div className="card-content">
              <ul>
                <li><strong>Backward Compatibility:</strong> Some legacy systems and devices may not support DoH, causing disruptions.</li>
                <li><strong>Configuration Complexity:</strong> DNS over HTTPS can be more difficult to configure than traditional DNS, especially in complex network environments.</li>
                <li><strong>Integration with Existing Systems:</strong> Incorporating DoH into current infrastructures, such as DNS servers and firewalls, requires considerable adjustments.</li>
              </ul>
            </div>
          )}
        </div>

        <div className="card">
          <h2 className="card-title" onClick={() => toggleSection('security')}>
            <FontAwesomeIcon icon={faShieldAlt} className="icon" />
            <span className="card-header">Security Vulnerabilities</span>
            <span className="toggle-icon">{expandedSection === 'security' ? '−' : '+'}</span>
          </h2>
          {expandedSection === 'security' && (
            <div className="card-content">
              <ul>
                <li><strong>Misconfigurations:</strong> Incorrect settings or vulnerabilities in DoH resolvers could lead to data leaks or MITM attacks.</li>
                <li><strong>DoH Hijacking:</strong> Attackers could attempt to hijack a DoH request to manipulate DNS responses.</li>
                <li><strong>Privacy Concerns:</strong> While DoH encrypts traffic, it raises concerns about large entities controlling DNS traffic data.</li>
              </ul>
            </div>
          )}
        </div>

        <div className="card">
          <h2 className="card-title" onClick={() => toggleSection('performance')}>
            <FontAwesomeIcon icon={faArrowUp} className="icon" />
            <span className="card-header">Performance Issues</span>
            <span className="toggle-icon">{expandedSection === 'performance' ? '−' : '+'}</span>
          </h2>
          {expandedSection === 'performance' && (
            <div className="card-content">
              <ul>
                <li><strong>Increased Latency:</strong> The encryption overhead could introduce slight delays compared to traditional DNS.</li>
                <li><strong>Content Delivery Networks (CDNs):</strong> Some content may not be delivered as quickly due to DoH’s encryption process, which bypasses local DNS caches.</li>
                <li><strong>Server Load:</strong> DoH may increase the load on servers as the system must handle encrypted requests, potentially slowing down response times.</li>
              </ul>
            </div>
          )}
        </div>

        {/* Trends Section */}
        <div className="section-header">
          <h2 className="section-title">Trends in DNS over HTTPS</h2>
        </div>

        <div className="card">
          <h2 className="card-title" onClick={() => toggleSection('adoption')}>
            <FontAwesomeIcon icon={faGlobe} className="icon" />
            <span className="card-header">Global Adoption</span>
            <span className="toggle-icon">{expandedSection === 'adoption' ? '−' : '+'}</span>
          </h2>
          {expandedSection === 'adoption' && (
            <div className="card-content">
              <ul>
                <li><strong>Growth in Adoption:</strong> Major organizations and browsers like Google, Mozilla, and Cloudflare have increasingly integrated DoH, enhancing its global acceptance.</li>
                <li><strong>User Privacy:</strong> The adoption trend is largely driven by the need for stronger privacy protections, which is becoming a key selling point.</li>
                <li><strong>Network Neutrality:</strong> Some ISPs are wary of DoH as it could bypass their local filtering systems, raising legal concerns.</li>
              </ul>
            </div>
          )}
        </div>

        <div className="card">
          <h2 className="card-title" onClick={() => toggleSection('regulation')}>
            <FontAwesomeIcon icon={faGavel} className="icon" />
            <span className="card-header">Regulatory Trends</span>
            <span className="toggle-icon">{expandedSection === 'regulation' ? '−' : '+'}</span>
          </h2>
          {expandedSection === 'regulation' && (
            <div className="card-content">
              <ul>
                <li><strong>Data Localization:</strong> Different regions may require DoH traffic to adhere to local laws regarding data storage and access.</li>
                <li><strong>Surveillance Resistance:</strong> Countries concerned with surveillance may impose regulations to control or prevent DoH adoption in favor of more traditional DNS monitoring.</li>
                <li><strong>Government Backlash:</strong> Some governments may take measures to block or restrict DoH as it undermines their control over network traffic.</li>
              </ul>
            </div>
          )}
        </div>

        <div className="card">
          <h2 className="card-title" onClick={() => toggleSection('privacy')}>
            <FontAwesomeIcon icon={faLock} className="icon" />
            <span className="card-header">Privacy Enhancements</span>
            <span className="toggle-icon">{expandedSection === 'privacy' ? '−' : '+'}</span>
          </h2>
          {expandedSection === 'privacy' && (
            <div className="card-content">
              <ul>
                <li><strong>Encryption at Scale:</strong> DoH enhances user privacy by hiding DNS queries from potential eavesdroppers, making it harder for third parties to track users.</li>
                <li><strong>Reduced Tracking:</strong> By masking DNS requests, DoH minimizes the tracking capabilities of ISPs, governments, and malicious entities.</li>
                <li><strong>Private Resolver Services:</strong> New privacy-focused DNS resolvers, like Cloudflare and Google DNS, offer DoH services that improve user privacy while browsing.</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
