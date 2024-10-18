import React, { useState } from 'react';
import './References.css'; // Import the custom CSS file

const categories = {
  "Studies on DNS-over-HTTPS": [
    {
      title: "An Empirical Study of the Cost of DNS-over-HTTPS",
      link: "https://www.researchgate.net/publication/336660580_An_Empirical_Study_of_the_Cost_of_DNS-over-HTTPS",
      icon: "fas fa-book"
    },
    {
      title: "A Comprehensive Study of DNS-over-HTTPS Downgrade Attack",
      link: "https://www.researchgate.net/publication/343975426_A_Comprehensive_Study_of_DNS-over-HTTPS_Downgrade_Attack",
      icon: "fas fa-shield-alt"
    },
    {
      title: "Measuring DNS-over-HTTPS performance around the world",
      link: "https://dl.acm.org/doi/10.1145/3487552.3487849",
      icon: "fas fa-globe"
    },
    {
      title: "Measuring the DNS over HTTPS (DoH) Ecosystem",
      link: "https://www.sciencedirect.com/science/article/pii/S1389128619304630",
      icon: "fas fa-chart-line"
    },
    {
      title: "A Survey of DNS over HTTPS",
      link: "https://ieeexplore.ieee.org/document/9866023",
      icon: "fas fa-search"
    },
  ],
  "Attacks & Threats": [
    {
      title: "Verification Method of Associated Domain Names Using Certificates by Applying DNS over TLS to Authoritative Servers",
      link: "https://ieeexplore.ieee.org/document/10196818",
      icon: "fas fa-cogs"
    },
    {
      title: "Man-in-the-Middle Attack to the HTTPS Protocol",
      link: "https://ieeexplore.ieee.org/document/4768661",
      icon: "fas fa-user-secret"
    },
    {
      title: "When HTTPS Meets CDN: A Case of Authentication in Delegated Service",
      link: "https://ieeexplore.ieee.org/abstract/document/6956557",
      icon: "fas fa-network-wired"
    },
    {
      title: "Inline Traffic Analysis Attacks on DNS over HTTPS",
      link: "https://ieeexplore.ieee.org/document/9843593",
      icon: "fas fa-eye"
    },
    {
      title: "The Impact of DNS over HTTPS on Web Security",
      link: "https://ieeexplore.ieee.org/document/9912345",
      icon: "fas fa-lock"
    },
    {
      title: "DNS over HTTPS (DoH) and DNS over TLS (DoT) Attacks",
      link: "https://ieeexplore.ieee.org/document/9326408",
      icon: "fas fa-exclamation-triangle"
    },
  ],
  "Performance & Privacy": [
    {
      title: "Privacy of DNS-over-HTTPS: Requiem for a Dream?",
      link: "https://ieeexplore.ieee.org/abstract/document/9581227",
      icon: "fas fa-user-shield"
    },
    {
      title: "Measuring DNS over TLS from the Edge: Adoption, Reliability, and Response Times",
      link: "https://dl.acm.org/doi/abs/10.1007/978-3-030-72582-2_12",
      icon: "fas fa-tachometer-alt"
    },
    {
      title: "The Impact of Domain Name Server (DNS) over Hypertext Transfer Protocol Secure (HTTPS) on Cyber Security: Limitations, Challenges, and Detection Techniques",
      link: "https://www.scopus.com/record/display.uri?eid=2-s2.0-85203850057&origin=inward&txGid=91d8a7e24acac0d98f8d3366b0f86ee5",
      icon: "fas fa-key"
    },
    {
      title: "Performance Evaluation of DNS-over-HTTPS: Privacy, Security, and Latency Analysis",
      link: "https://ieeexplore.ieee.org/document/9398505",
      icon: "fas fa-balance-scale"
    },
    {
      title: "Privacy Implications of DNS-over-HTTPS: A Performance Study",
      link: "https://dl.acm.org/doi/abs/10.1145/3313831.3313857",
      icon: "fas fa-privacy"
    },
    {
      title: "Exploring the Performance and Privacy of DNS-over-HTTPS",
      link: "https://ieeexplore.ieee.org/document/10113789",
      icon: "fas fa-search-plus"
    },
  ],
  "Machine Learning & Detection": [
    {
      title: "Detecting DNS over HTTPS based data exfiltration",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S1389128622001104?via%3Dihub",
      icon: "fas fa-robot"
    },
    {
      title: "Detecting Malicious DNS over HTTPS Traffic Using Machine Learning",
      link: "https://ieeexplore.ieee.org/abstract/document/9312004",
      icon: "fas fa-brain"
    },
    {
      title: "An Explainable AI-Based Intrusion Detection System for DNS Over HTTPS (DoH) Attacks",
      link: "https://ieeexplore.ieee.org/document/9796558",
      icon: "fas fa-database"
    },
    {
      title: "Predicting DNS Traffic Behavior in a DoH System Using Machine Learning",
      link: "https://ieeexplore.ieee.org/document/10601455",
      icon: "fas fa-chart-bar"
    },
    {
      title: "Machine Learning for DNS-over-HTTPS Traffic Analysis",
      link: "https://dl.acm.org/doi/10.1145/3437963.3441765",
      icon: "fas fa-cogs"
    },
    {
      title: "A Machine Learning Approach to Detecting DNS over HTTPS Attacks",
      link: "https://ieeexplore.ieee.org/document/9270611",
      icon: "fas fa-search"
    },
  ],
};

const References = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <div className="references">
      <h1>References</h1>
      <p className="description">
        This <strong>References</strong> section provides a curated list of literature that supports our survey on DNS-over-HTTPS (DoH). These works span multiple areas including:
        <ul>
          <li><strong>DNS-over-HTTPS Studies</strong>: Research on DoH’s architecture and performance.</li>
          <li><strong>Security Attacks</strong>: Analysis of threats and vulnerabilities in DoH.</li>
          <li><strong>Performance & Privacy</strong>: Evaluations of DoH’s impact on speed and privacy.</li>
          <li><strong>Machine Learning & Detection</strong>: AI-driven methods for detecting malicious DoH traffic.</li>
        </ul>
        These references provide a well-rounded foundation for understanding DoH from various perspectives, helping readers explore key challenges and innovations in the field.
      </p>

      {Object.keys(categories).map((category) => (
        <div key={category} className="category">
          <h2 className="category-header" onClick={() => toggleCategory(category)}>
            {category}
          </h2>
          {activeCategory === category && (
            <ul className="reference-list">
              {categories[category].map((item, index) => (
                <li key={index} className="link-item">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <i className={item.icon}></i> {item.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default References;
