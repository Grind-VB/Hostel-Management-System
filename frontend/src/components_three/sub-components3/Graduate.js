// Graduate.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Graduate.css'; // Import the CSS file
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Graduate() {
  return (
    <div className="graduate">
      <h2>Graduate Admissions</h2>
      <p>Welcome to the Graduate Admissions Page. Here, you can find all the information you need to apply to our graduate programs.</p>
      <h3>Admissions Process</h3>
      <p>The admissions process for graduate programs typically involves submitting an application, providing academic transcripts, letters of recommendation, and sometimes standardized test scores like the GRE or GMAT. Our admissions team is available to assist you throughout the process.</p>
      <h3>Programs Offered</h3>
      <p>We offer a wide range of graduate programs across various disciplines, including Arts, Science, Engineering, Business, and more. Explore our programs to find the right fit for your academic and career goals.</p>
      <h3>Research Opportunities</h3>
      <p>As a graduate student, you'll have access to cutting-edge research opportunities and state-of-the-art facilities. Collaborate with renowned faculty members and contribute to groundbreaking research projects in your field.</p>
      <h3>Resources for Prospective Students</h3>
      <p>As a prospective graduate student, you have access to resources such as informational sessions, faculty profiles, and funding opportunities. Take advantage of these resources to learn more about our graduate programs and make informed decisions.</p>
      <Link to="/warden-login" className="link">Student Login</Link> {/* Apply the CSS class */}
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

export default Graduate;
