import React from 'react';
import './HomePage.css';
import ImageSlider from './sub-components33/ImageSlider';
import Animations from './sub-components33/Animations';
import CollegeNews from './sub-components33/CollegeNews';
import EventCalendar from './sub-components33/EventCalendar';
import Announcements from './sub-components33/Announcements';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function HomePage() {
  return (
    <div className="homepage">
      <header>
        <h1>Welcome to Our College</h1>
      </header>
      <section className="main-content">
        <div className="main-content-item">
          <ImageSlider /> 
        </div>
        <div className="main-content-item">
          <Animations />
        </div>
        <div className="main-content-item">
          <CollegeNews />
        </div>
        <div className="main-content-item">
          <EventCalendar />
        </div>
        <div className="main-content-item">
          <Announcements />
        </div>
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

export default HomePage;
