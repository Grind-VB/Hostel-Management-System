// CampusLifePage.js

import React from 'react';
import './CampusLifePage.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function CampusLifePage() {
  return (
    <div className="campus-life-page">
      <h1>Campus Life</h1>
      <p>Welcome to the vibrant campus life of our university. Explore, engage, and make the most out of your college experience!</p>
      <div className="section">
        <h2>Student Organizations</h2>
        <p>Our university offers a diverse range of student organizations catering to various interests, including academic, cultural, recreational, and community service. Joining a student organization is a great way to meet like-minded peers, develop leadership skills, and enhance your college experience.</p>
        <ul>
          <li>Academic clubs and societies</li>
          <li>Cultural and ethnic organizations</li>
          <li>Athletic teams and intramural sports</li>
          <li>Volunteer and community service groups</li>
          <li>Special interest clubs</li>
        </ul>
      </div>
      <div className="section">
        <h2>Campus Facilities</h2>
        <p>Our campus boasts state-of-the-art facilities designed to support student learning, research, and recreation. From modern academic buildings and libraries to sports complexes and student centers, we provide the resources you need to thrive both inside and outside the classroom.</p>
        <ul>
          <li>Well-equipped classrooms and laboratories</li>
          <li>Extensive library collections and study spaces</li>
          <li>Fitness centers and recreational facilities</li>
          <li>Dining halls and food courts</li>
          <li>Student lounges and collaborative spaces</li>
        </ul>
      </div>
      <div className="section">
        <h2>Events and Activities</h2>
        <p>Stay engaged with numerous events and activities happening around the campus all year round. From academic lectures and workshops to cultural festivals and sports tournaments, there's always something exciting happening on campus. Explore our event calendar and get involved!</p>
        <ul>
          <li>Academic conferences and guest lectures</li>
          <li>Cultural performances and exhibitions</li>
          <li>Sports competitions and recreational events</li>
          <li>Community service projects and volunteer opportunities</li>
          <li>Student-led initiatives and leadership programs</li>
        </ul>
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

export default CampusLifePage;
