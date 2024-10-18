import React, { useState } from 'react';
import './LiteratureReview.css'; // Import the updated CSS

const literatureData = [
  {
    "id": "paper1",
    "title": "Paper 1: An Empirical Study of the Cost of DNS-over-HTTPS",
    "content": [
      {
        "sectionTitle": "Problem Definition",
        "text": "DoH introduces additional resource consumption, impacting network efficiency and performance."
      },
      {
        "sectionTitle": "Solution Approach",
        "text": "The paper evaluates the operational costs associated with DoH, focusing on latency and bandwidth consumption."
      },
      {
        "sectionTitle": "Methodology",
        "text": "The study uses real-world experiments to measure DoH performance metrics and resource utilization."
      },
      {
        "sectionTitle": "Conclusion",
        "text": "DoH has performance costs, but these can be mitigated with optimizations in infrastructure and configuration."
      }
    ]
  },
  {
    "id": "paper2",
    "title": "Paper 2: A Comprehensive Study of DNS-over-HTTPS Downgrade Attack",
    "content": [
      {
        "sectionTitle": "Problem Definition",
        "text": "DoH can be vulnerable to downgrade attacks, where attackers force the use of unencrypted DNS."
      },
      {
        "sectionTitle": "Solution Approach",
        "text": "The paper investigates the mechanics of DNS-over-HTTPS downgrade attacks and proposes mitigation strategies."
      },
      {
        "sectionTitle": "Methodology",
        "text": "The study presents an analysis of attack vectors and simulates downgrade attacks in various network environments."
      },
      {
        "sectionTitle": "Conclusion",
        "text": "While DoH provides enhanced privacy, it is vulnerable to downgrade attacks unless specific safeguards are implemented."
      }
    ]
  },

  {
    id: 'paper3',
    title: 'Paper 3: Decentralized DNS over HTTPS: Challenges and Opportunities',
    content: [
      {
        sectionTitle: 'Problem Definition',
        text: "Centralized DNS over HTTPS (DoH) services face potential risks like a single point of failure, which could expose users to privacy risks or attacks targeting centralized DoH resolvers."
      },
      {
        sectionTitle: 'Solution Approach',
        text: "The paper discusses decentralizing DoH by distributing DNS resolution across multiple servers. This would enhance security, improve reliability, and reduce dependence on a single entity."
      },
      {
        sectionTitle: 'Methodology',
        text: "The study explores decentralized DoH infrastructure by analyzing current approaches and the benefits they offer. It looks at security improvements and challenges in deploying a decentralized DNS system."
      },
      {
        sectionTitle: 'Conclusion',
        text: "A decentralized DNS over HTTPS could improve privacy and reliability, but it introduces implementation challenges. The paper advocates for further research on scalable and secure decentralization strategies."
      }
    ]
  },
  {
    id: 'paper4',
    title: 'Paper 4: Evaluating DoH Performance on Mobile Networks',
    content: [
      {
        sectionTitle: 'Problem Definition',
        text: "Mobile networks, with their limited bandwidth and higher latency, are particularly sensitive to performance optimizations. DoH may increase DNS resolution times on mobile devices, affecting user experience."
      },
      {
        sectionTitle: 'Solution Approach',
        text: "The study investigates DoH performance on mobile networks, focusing on latency, bandwidth usage, and battery consumption. It compares DoH performance to traditional DNS in mobile environments."
      },
      {
        sectionTitle: 'Methodology',
        text: "Through controlled experiments, the paper evaluates DoH latency and performance on various mobile devices and network conditions. It also measures the impact of DoH on mobile network resources."
      },
      {
        sectionTitle: 'Conclusion',
        text: "DoH introduces performance overhead on mobile networks but offers improvements in privacy. The study suggests that mobile-specific optimizations are necessary to balance performance and privacy."
      }
    ]
  },
  {
    id: 'paper5',
    title: 'Paper 5: DNS over HTTPS and Its Impact on Internet Censorship',
    content: [
      {
        sectionTitle: 'Problem Definition',
        text: "In regions with restricted access to certain domains, DNS censorship can prevent users from accessing desired content. Traditional DNS can be easily manipulated to block access to these domains."
      },
      {
        sectionTitle: 'Solution Approach',
        text: "The paper explores how DNS over HTTPS (DoH) can bypass DNS-based censorship by encrypting DNS queries, thus preventing ISPs and other entities from intercepting and blocking DNS requests."
      },
      {
        sectionTitle: 'Methodology',
        text: "The authors examine the effectiveness of DoH in bypassing censorship by conducting case studies in countries with high censorship levels. They analyze the success rate of DoH in accessing blocked content."
      },
      {
        sectionTitle: 'Conclusion',
        text: "DoH can bypass DNS censorship, but the implementation may be blocked by governments or censorship systems. The paper recommends further research on circumventing such censorship mechanisms while ensuring privacy."
      }
    ]
  },
  {
    id: 'paper6',
    title: 'Paper 6: DoH Adoption and Its Role in Privacy Laws',
    content: [
      {
        sectionTitle: 'Problem Definition',
        text: "The adoption of DNS over HTTPS (DoH) raises legal questions around data protection and privacy, particularly in regions governed by privacy laws like the GDPR and CCPA."
      },
      {
        sectionTitle: 'Solution Approach',
        text: "This paper examines the intersection of DoH adoption and privacy laws, focusing on how DoH complies with regulations such as the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA)."
      },
      {
        sectionTitle: 'Methodology',
        text: "The study surveys DoH adoption practices and evaluates their compatibility with privacy laws. It includes an analysis of how DoH service providers handle user data and whether their practices align with regulatory requirements."
      },
      {
        sectionTitle: 'Conclusion',
        text: "DoH offers significant privacy benefits, but its adoption raises concerns about compliance with privacy laws. The paper calls for standardized guidelines to ensure that DoH providers meet legal privacy requirements."
      }
    ]
  },
  {
    id: 'paper6',
    title: 'Paper 6: An Analysis of DNS over HTTPS Traffic in Different Network Environments',
    content: [
      {
        sectionTitle: 'Problem Definition',
        text: "The behavior of DoH under various network conditions is not well understood."
      },
      {
        sectionTitle: 'Solution Approach',
        text: "This paper analyzes DoH performance in different environments, including mobile, residential, and corporate networks."
      },
      {
        sectionTitle: 'Methodology',
        text: "Experimental analysis involving the collection of real-world network traces and simulations of different network topologies."
      },
      {
        sectionTitle: 'Conclusion',
        text: "DoH can perform well in diverse network environments, but its performance varies significantly based on network conditions."
      }
    ]
  },
  {
    id: 'paper7',
    title: 'Paper 7: DNS over HTTPS: Privacy versus Performance',
    content: [
      {
        sectionTitle: 'Problem Definition',
        text: "There is a trade-off between privacy and performance when implementing DoH."
      },
      {
        sectionTitle: 'Solution Approach',
        text: "The paper explores the trade-off between the security enhancements of DoH and its impact on performance."
      },
      {
        sectionTitle: 'Methodology',
        text: "Comparative benchmarks of DoH with traditional DNS and DNS over TLS, including latency and throughput measurements."
      },
      {
        sectionTitle: 'Conclusion',
        text: "While DoH offers strong privacy improvements, it comes at the cost of performance degradation."
      }
    ]
  },
  {
    id: 'paper8',
    title: 'Paper 8: Towards Decentralized DNS over HTTPS',
    content: [
      {
        sectionTitle: 'Problem Definition',
        text: "Centralized DoH resolvers could lead to privacy concerns as a few entities control DNS traffic."
      },
      {
        sectionTitle: 'Solution Approach',
        text: "Proposes the implementation of decentralized DoH infrastructure to distribute DNS resolution."
      },
      {
        sectionTitle: 'Methodology',
        text: "A simulation study comparing decentralized versus centralized DoH architecture with respect to performance and privacy."
      },
      {
        sectionTitle: 'Conclusion',
        text: "Decentralization can mitigate privacy risks associated with centralized DoH providers, but it poses challenges related to scalability."
      }
    ]
  },
  {
    id: 'paper9',
    title: 'Paper 9: DNS over HTTPS: Assessing Privacy Implications',
    content: [
      {
        sectionTitle: 'Problem Definition',
        text: "Despite the encryption, DoH may still allow DNS providers to track user activities."
      },
      {
        sectionTitle: 'Solution Approach',
        text: "The paper discusses the privacy implications of DoH, focusing on DNS provider logging and potential data leakage."
      },
      {
        sectionTitle: 'Methodology',
        text: "Privacy analysis of DNS provider logs and comparison of the privacy practices of different DoH providers."
      },
      {
        sectionTitle: 'Conclusion',
        text: "DoH improves user privacy but requires better provider transparency and logging policies to fully protect users."
      }
    ]
  },
  {
    "id": "paper10",
    "title": "Paper 10: A Lightweight Double-Stage Scheme to Identify Malicious DNS over HTTPS Traffic Using a Hybrid Learning Approach",
    "content": [
      {
        "sectionTitle": "Problem Definition",
        "text": "Detecting malicious DoH traffic is challenging due to encryption and large traffic volumes."
      },
      {
        "sectionTitle": "Solution Approach",
        "text": "Proposes a double-stage detection system using hybrid machine learning techniques."
      },
      {
        "sectionTitle": "Methodology",
        "text": "The system first filters traffic before applying deep learning for anomaly detection."
      },
      {
        "sectionTitle": "Conclusion",
        "text": "The hybrid approach enhances detection accuracy while reducing computational complexity, making it suitable for real-time applications."
      }
    ]
  },
  {
    "id": "paper11",
    "title": "Paper 11: The Impact of Domain Name Server (DNS) over Hypertext Transfer Protocol Secure (HTTPS) on Cyber Security: Limitations, Challenges, and Detection Techniques",
    "content": [
      {
        "sectionTitle": "Problem Definition",
        "text": "DoH complicates traditional cybersecurity measures by masking DNS traffic."
      },
      {
        "sectionTitle": "Solution Approach",
        "text": "Reviews limitations and presents various detection techniques for DoH."
      },
      {
        "sectionTitle": "Methodology",
        "text": "A review of literature addressing DoH's impact on security and different detection strategies."
      },
      {
        "sectionTitle": "Conclusion",
        "text": "DoH introduces challenges but can be managed with advanced detection mechanisms."
      }
    ]
  },
  {
    "id": "paper12",
    "title": "Paper 12: Fingerprinting DNS over HTTPS (DoH)",
    "content": [
      {
        "sectionTitle": "Problem Definition",
        "text": "Identifying DoH traffic from other encrypted traffic is difficult."
      },
      {
        "sectionTitle": "Solution Approach",
        "text": "Proposes fingerprinting methods to identify DoH based on traffic characteristics."
      },
      {
        "sectionTitle": "Methodology",
        "text": "Analyzes packet features and uses statistical models for identification."
      },
      {
        "sectionTitle": "Conclusion",
        "text": "Fingerprinting can be effective in detecting DoH traffic, aiding in network security monitoring."
      }
    ]
  },
  {
    "id": "paper13",
    "title": "Paper 12: Insights into DoH: Traffic Classification for DNS over HTTPS in an Encrypted Network",
    "content": [
      {
        "sectionTitle": "Problem Definition",
        "text": "Encrypted DNS traffic (DoH) makes traffic classification difficult."
      },
      {
        "sectionTitle": "Solution Approach",
        "text": "Discusses classification techniques to identify DoH traffic."
      },
      {
        "sectionTitle": "Methodology",
        "text": "Uses machine learning classifiers based on traffic attributes."
      },
      {
        "sectionTitle": "Conclusion",
        "text": "Classification using machine learning can enhance detection capabilities for encrypted DoH traffic."
      }
    ]
  },
  {
    "id": "paper14",
    "title": "Paper 14: DNS over HTTPS Traffic Analysis and Detection",
    "content": [
      {
        "sectionTitle": "Problem Definition",
        "text": "The widespread adoption of DoH poses risks to network monitoring and security."
      },
      {
        "sectionTitle": "Solution Approach",
        "text": "Examines traffic analysis and detection techniques tailored for DoH."
      },
      {
        "sectionTitle": "Methodology",
        "text": "Analyzes DoH traffic characteristics and proposes detection strategies."
      },
      {
        "sectionTitle": "Conclusion",
        "text": "Effective detection of DoH traffic is critical for maintaining network security and privacy controls."
      }
    ]
  },

  {
    "id": "paper15",
    "title": "Paper 15: Detecting DNS over HTTPS based data exfiltration",
    "content": [
      {
        "sectionTitle": "Problem Definition",
        "text": "Data exfiltration via DNS over HTTPS (DoH) can bypass traditional monitoring systems."
      },
      {
        "sectionTitle": "Solution Approach",
        "text": "The paper proposes a method to detect exfiltration over DoH by analyzing encrypted DNS traffic."
      },
      {
        "sectionTitle": "Methodology",
        "text": "The authors evaluate traffic patterns to identify suspicious DoH requests."
      },
      {
        "sectionTitle": "Conclusion",
        "text": "While DoH enhances privacy, it also creates a new avenue for stealthy data exfiltration, requiring specialized detection techniques."
      }
    ]
  },
  {
    "id": "paper16",
    "title": "Paper 16: Detecting Malicious DNS over HTTPS Traffic Using Machine Learning",
    "content": [
      {
        "sectionTitle": "Problem Definition",
        "text": "Identifying malicious DoH traffic is challenging due to encryption."
      },
      {
        "sectionTitle": "Solution Approach",
        "text": "Machine learning algorithms are employed to detect anomalies in DoH traffic."
      },
      {
        "sectionTitle": "Methodology",
        "text": "The paper uses machine learning to classify traffic patterns indicative of malicious activity."
      },
      {
        "sectionTitle": "Conclusion",
        "text": "Machine learning offers promising results in detecting DoH-related threats despite encryption."
      }
    ]
  },
  {
    "id": "paper17",
    "title": "Paper 17: Analysis of Well-Known DNS over HTTPS Resolvers",
    "content": [
      {
        "sectionTitle": "Problem Definition",
        "text": "The security and performance of DoH resolvers need evaluation."
      },
      {
        "sectionTitle": "Solution Approach",
        "text": "The study analyzes major DoH resolvers to assess their effectiveness."
      },
      {
        "sectionTitle": "Methodology",
        "text": "It examines various DoH resolvers, their privacy policies, and performance metrics."
      },
      {
        "sectionTitle": "Conclusion",
        "text": "Not all DoH resolvers are created equal, and some may still compromise user privacy."
      }
    ]
  },
  {
    "id": "paper18",
    "title": "Paper 18: Collection of datasets with DNS over HTTPS traffic",
    "content": [
      {
        "sectionTitle": "Problem Definition",
        "text": "Lack of publicly available datasets for DoH traffic."
      },
      {
        "sectionTitle": "Solution Approach",
        "text": "The paper introduces a collection of DoH traffic datasets."
      },
      {
        "sectionTitle": "Methodology",
        "text": "It compiles datasets from different DoH resolvers to facilitate research."
      },
      {
        "sectionTitle": "Conclusion",
        "text": "These datasets provide a valuable resource for further DoH research."
      }
    ]
  },
  {
    "id": "paper19",
    "title": "Paper 19: DoH Insight: Detecting DNS over HTTPS by Machine Learning",
    "content": [
      {
        "sectionTitle": "Problem Definition",
        "text": "Detecting DoH is difficult due to the encryption and lack of visibility."
      },
      {
        "sectionTitle": "Solution Approach",
        "text": "A machine-learning framework is proposed to identify DoH traffic."
      },
      {
        "sectionTitle": "Methodology",
        "text": "The study applies a classification-based approach using traffic patterns."
      },
      {
        "sectionTitle": "Conclusion",
        "text": "Machine learning can efficiently detect DoH traffic patterns despite the challenges of encryption."
      }
    ]
  },
    {
      "id": "paper20",
      "title": "Paper 20: DNS over HTTPS for Privacy-Aware Applications",
      "content": [
        {
          "sectionTitle": "Problem Definition",
          "text": "Privacy-aware applications need to secure DNS queries to prevent tracking."
        },
        {
          "sectionTitle": "Solution Approach",
          "text": "This paper suggests best practices for integrating DoH into privacy-aware applications."
        },
        {
          "sectionTitle": "Methodology",
          "text": "Survey of privacy-aware applications and evaluation of their DNS query handling."
        },
        {
          "sectionTitle": "Conclusion",
          "text": "Implementing DoH in privacy-centric applications can significantly reduce user tracking."
        }
      ]
    },
    {
      "id": "paper21",
      "title": "Paper 21: Impact of DNS over HTTPS on Ad-Blocking Technologies",
      "content": [
        {
          "sectionTitle": "Problem Definition",
          "text": "DoH can interfere with ad-blocking technologies that rely on DNS query filtering."
        },
        {
          "sectionTitle": "Solution Approach",
          "text": "Investigates how DoH impacts the effectiveness of DNS-based ad-blockers and suggests alternatives."
        },
        {
          "sectionTitle": "Methodology",
          "text": "Evaluation of DNS-based ad-blockers before and after DoH implementation."
        },
        {
          "sectionTitle": "Conclusion",
          "text": "While DoH can bypass traditional DNS-based ad-blocking methods, newer techniques can counteract this."
        }
      ]
    },
    {
      "id": "paper22",
      "title": "Paper 22: DNS over HTTPS: A Performance Evaluation",
      "content": [
        {
          "sectionTitle": "Problem Definition",
          "text": "DoH can slow down DNS resolution times, affecting user experience."
        },
        {
          "sectionTitle": "Solution Approach",
          "text": "The paper presents performance metrics for DoH and compares it with traditional DNS."
        },
        {
          "sectionTitle": "Methodology",
          "text": "Experimental setup to measure the DNS resolution times and overhead introduced by DoH."
        },
        {
          "sectionTitle": "Conclusion",
          "text": "DoH introduces latency but can be optimized to achieve performance parity with traditional DNS."
        }
      ]
    },
    {
      "id": "paper23",
      "title": "Paper 23: DoH and the Future of Internet Privacy",
      "content": [
        {
          "sectionTitle": "Problem Definition",
          "text": "With the rise of surveillance and tracking, the future of internet privacy is uncertain."
        },
        {
          "sectionTitle": "Solution Approach",
          "text": "Discusses how DoH contributes to improving privacy in a highly monitored internet."
        },
        {
          "sectionTitle": "Methodology",
          "text": "A study of DoH adoption rates and its impact on internet privacy standards."
        },
        {
          "sectionTitle": "Conclusion",
          "text": "DoH is an essential tool for improving privacy, but its impact depends on broader adoption and regulatory oversight."
        }
      ]
    },

    {
  "id": "paper24",
  "title": "Paper 24: Detection of Tunneling in DNS over HTTPS",
  "content": [
    {
      "sectionTitle": "Problem Definition",
      "text": "DNS over HTTPS (DoH) can be used for tunneling malicious or unauthorized traffic, making it challenging to detect such activities."
    },
    {
      "sectionTitle": "Solution Approach",
      "text": "The paper presents methods for detecting DNS tunneling traffic over DoH by analyzing traffic patterns and anomalies."
    },
    {
      "sectionTitle": "Methodology",
      "text": "The approach involves analyzing DNS over HTTPS traffic and implementing detection mechanisms using statistical and machine-learning techniques."
    },
    {
      "sectionTitle": "Conclusion",
      "text": "Effective tunneling detection is crucial for securing networks, but it requires advanced techniques to manage DoH’s encryption and evade traditional detection methods."
    }
  ]
}

];

const LiteratureReview = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleToggleContent = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <div className="literature-review">
      <h2>Literature Review on DNS over HTTPS</h2>
      {literatureData.map((item) => (
        <div key={item.id} className="literature-item">
          <div className="literature-header" onClick={() => handleToggleContent(item.id)}>
            <h3>{item.title}</h3>
          </div>
          {selectedId === item.id && (
            <div className="literature-content">
              {item.content.map((para, index) => (
                <div key={index}>
                  <h4>{para.sectionTitle}</h4>
                  <p>{para.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LiteratureReview;
