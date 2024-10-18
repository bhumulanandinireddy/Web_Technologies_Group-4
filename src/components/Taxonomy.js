import React from 'react';
import './Taxonomy.css'; // Assuming you're going to create this CSS file

const Taxonomy = () => {
  return (
    <div className="taxonomy-container">
      <h1 className="taxonomy-title">Taxonomy</h1>
      <p className="taxonomy-description">
        This interactive taxonomy table summarizes the key aspects of the reviewed papers on DNS-over-HTTPS.
      </p>
      
      <div className="table-responsive">
        <table className="taxonomy-table">
          <thead>
            <tr>
              <th>Paper</th>
              <th>Problem</th>
              <th>Solution</th>
              <th>Approach</th>
              <th>Evaluation Methodology</th>
              <th>Security Mechanism</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="https://www.researchgate.net/publication/336660580_An_Empirical_Study_of_the_Cost_of_DNS-over-HTTPS">
                  An Empirical Study of the Cost of DNS-over-HTTPS
                </a>
              </td>
              <td>Performance overhead of DoH, latency, resource consumption.</td>
              <td>Performance analysis using real-world traffic.</td>
              <td>Empirical analysis with real-world DNS queries.</td>
              <td>Latency measurements, traffic analysis.</td>
              <td>DNS-over-HTTPS latency and resource usage.</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.researchgate.net/publication/343975426_A_Comprehensive_Study_of_DNS-over-HTTPS_Downgrade_Attack">
                  A Comprehensive Study of DNS-over-HTTPS Downgrade Attack
                </a>
              </td>
              <td>Vulnerabilities leading to downgrade attacks.</td>
              <td>Mitigation strategies for DoH downgrade attacks.</td>
              <td>Theoretical analysis and simulation.</td>
              <td>Simulation of attack scenarios.</td>
              <td>Prevention of downgrade attacks, encryption.</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.researchgate.net/publication/380161377_Comparative_analysis_of_DNS_over_HTTPS_detectors">
                  Comparative analysis of DNS over HTTPS detectors
                </a>
              </td>
              <td>Detection challenges of encrypted DoH traffic.</td>
              <td>Comparison of various detection methods.</td>
              <td>Empirical comparison using machine learning and traffic analysis.</td>
              <td>Detection performance benchmarking.</td>
              <td>Traffic classification and encrypted DNS detection.</td>
            </tr>
            <tr>
              <td>
                <a href="https://www.researchgate.net/publication/360645275_Summary_of_DNS_over_HTTPS_Abuse">
                  Summary of DNS over HTTPS Abuse
                </a>
              </td>
              <td>Abuse of DoH for bypassing security filters.</td>
              <td>Case study analysis and mitigation strategies.</td>
              <td>Qualitative review of DoH abuse cases.</td>
              <td>Review of misuse incidents and countermeasures.</td>
              <td>Abuse detection and filtering mechanisms.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Taxonomy;
