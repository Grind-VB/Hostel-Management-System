// Undergraduate.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Undergraduate.css'; // Import the CSS file
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Undergraduate() {
  return (
    <div className="undergraduate">
      <h2>Undergraduate Admissions</h2>
      <p>Welcome to the Undergraduate Admissions Page. Here, you can find all the information you need to apply to our undergraduate programs.</p>
      <h3>Admissions Process</h3>
      <p>The admissions process involves several steps, including application submission, document verification, and interviews. Our admissions team is here to guide you through the process.</p>
      <h3>Eligibility Criteria</h3>
      <p>To be eligible for undergraduate admissions, applicants must meet certain academic requirements and demonstrate proficiency in English. Additionally, we consider factors such as extracurricular activities and community involvement.</p>
      <h3>Programs Offered</h3>
      <p>We offer a wide range of undergraduate programs across various disciplines, including Arts, Science, Engineering, Business, and more. Explore our programs to find the right fit for you.</p>
      <h3>Resources for Prospective Students</h3>
      <p>As a prospective undergraduate student, you have access to resources such as campus tours, informational sessions, and one-on-one consultations with academic advisors. Take advantage of these resources to learn more about our university and make informed decisions.</p>
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

export default Undergraduate;
