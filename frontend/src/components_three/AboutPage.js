// AboutPage.js

import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <section className="intro-section">
        <h1>About Us</h1>
        <p>Welcome to Our College!</p>
      </section>
      <section className="history-section">
        <h2>Our History</h2>
        <p>Provide a brief overview of the college's history, including founding year, milestones, and significant achievements.</p>
      </section>
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>Explain the college's mission statement and its commitment to providing quality education and fostering personal and intellectual growth.</p>
      </section>
      <section className="values-section">
        <h2>Our Values</h2>
        <ul>
          <li>Value 1: Description of the value</li>
          <li>Value 2: Description of the value</li>
          <li>Value 3: Description of the value</li>
          {/* Add more values as needed */}
        </ul>
      </section>
    </div>
  );
}

export default AboutPage;
