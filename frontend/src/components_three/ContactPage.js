import React from 'react';
import './ContactPage.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Provide contact information for different departments, along with a campus map and feedback form.</p>
      
      <div className="contact-info">
        <div className="contact-item">
          <FaPhone /> University Help Lines: 0191-2435248, 2435259, 2453544, 2453588
        </div>
        <div className="contact-item">
          <FaPhone /> Vice Chancellor Chamber: 0191-2450014, 2435268
        </div>
        <div className="contact-item">
          <FaPhone /> Registrar: 0191-2431365
        </div>
        <div className="contact-item">
          <FaPhone /> Dean Academic Affairs: 0191-2456892
        </div>
        <div className="contact-item">
          <FaPhone /> Controller of Exams: 0191-2433746 <br />
          (For contacting Examination related Officials, click here) <br />
          (For any query related examination: coe.ju@jammuuniversity.ac.in, deputyregistrarexamination@jammuuniversity.ac.in, ar.cacoe@jammuuniversity.ac.in)
        </div>
        <div className="contact-item">
          <FaPhone /> Director, College Development: 0191-2430023
        </div>
        <div className="contact-item">
          <FaPhone /> Director, Distance Education: 0191-2430828
        </div>
        <div className="contact-item">
          <FaPhone /> Director, Centre for IT Enabled Services & Mgt: 0191-2452201
        </div>
        <div className="contact-item">
          <FaPhone /> B.Ed/BBA/BCA admissions: 0191-2430023
        </div>
        <div className="contact-item">
          <FaEnvelope /> For any queries email at: <a href="mailto:helpdesk@jammuuniversity.ac.in">helpdesk@jammuuniversity.ac.in</a>
        </div>
      </div>

      <div className="campus-map">
        <h2>Campus Map</h2>
        {/* Insert a map image or embed a map here */}
        <img src="https://via.placeholder.com/600x400" alt="Campus Map" />
      </div>

      <div className="feedback-form">
        <h2>Feedback Form</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
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

export default ContactPage;
