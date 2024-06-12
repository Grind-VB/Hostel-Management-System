// Research.js

import React from 'react';
import './Research.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Research() {
  return (
    <div className="research">
      <h2>Research</h2>
      <p>Welcome to the Research Division of Our University. Our research initiatives aim to foster innovation, advance knowledge, and address significant challenges facing society.</p>
      <div className="research-areas">
        <h3>Research Areas</h3>
        <ul>
          <li>Biotechnology</li>
          <li>Artificial Intelligence</li>
          <li>Climate Change</li>
          <li>Health Sciences</li>
          {/* Add more research areas as needed */}
        </ul>
      </div>
      <div className="research-projects">
        <h3>Ongoing Projects</h3>
        <ul>
          <li>Project 1: Advancements in Renewable Energy</li>
          <li>Project 2: Developing Smart Cities Solutions</li>
          <li>Project 3: Understanding Neurodegenerative Diseases</li>
          {/* Add more ongoing projects as needed */}
        </ul>
      </div>
      <div className="research-facilities">
        <h3>Research Facilities</h3>
        <p>Our university provides state-of-the-art research facilities equipped with the latest technology to support various research endeavors.</p>
      </div>
      <div className="research-opportunities">
        <h3>Opportunities</h3>
        <p>We offer research opportunities for students, faculty, and external collaborators to engage in cutting-edge research projects and contribute to knowledge creation.</p>
      </div>
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

export default Research;
