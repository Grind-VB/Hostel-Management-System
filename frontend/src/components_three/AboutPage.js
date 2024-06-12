// AboutPage.js

import React from 'react';
import './AboutPage.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

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
      <footer className="footer">
        <div className="footer-content">
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope /> Mail at <a href="mailto:helpdesk@jammuuniversity.ac.in">helpdesk@jammuuniversity.ac.in</a> for further suggestions
            </div>
            <div className="contact-item">
              <FaPhone /> Phone Book <br />
              University Help Lines: 0191-2435248, 2435259, 2453544, 2453588
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt /> Address: <br />
              University of Jammu, Baba Saheb Ambedkar Road, Jammu Tawi (J&K)-180006 (INDIA)
            </div>
          </div>
          <div className="social-media">
            <h3>STAY CONNECTED</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /> Facebook</a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /> YouTube</a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /> Twitter</a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
            </div>
          </div>
          <div className="footer-note">
            University of Jammu, J & K. Copyright ©. All rights reserved.
            <br />
            Designed and maintained by Centre for IT ES&M.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AboutPage;
