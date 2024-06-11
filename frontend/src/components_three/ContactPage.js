import React from 'react';
import './ContactPage.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

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
    </div>
  );
}

export default ContactPage;
