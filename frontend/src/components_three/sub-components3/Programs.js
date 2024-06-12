import React from 'react';
import './Programs.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Programs() {
  return (
    <div className="programs">
      <h1>Academic Programs</h1>
      <p>Explore our diverse range of academic programs designed to provide a comprehensive education in various fields of study.</p>
      
      <div className="program-list">
        <div className="program">
          <h2>Undergraduate Programs</h2>
          <p>Our undergraduate programs are designed to provide a solid foundation in various disciplines.</p>
          <ul>
            <li>Bachelor of Science (BSc)</li>
            <li>Bachelor of Arts (BA)</li>
            <li>Bachelor of Business Administration (BBA)</li>
            <li>Bachelor of Commerce (B.Com)</li>
            <li>Bachelor of Computer Applications (BCA)</li>
            <li>Bachelor of Education (B.Ed)</li>
            <li>LL.B. (Professional)</li>
            <li>B.A LL.B (5 years)</li>
            <li>BA English (Honours)</li>
            <li>B. Com (Honours)</li>
            <li>BBA (Hotel Management)</li>
            <li>B.Lib.I. Sc</li>
          </ul>
        </div>
        
        <div className="program">
          <h2>Graduate Programs</h2>
          <p>Our graduate programs are tailored to help students advance their careers and pursue advanced studies.</p>
          <ul>
            <li>Master Degree Programme in Bio-Technology</li>
            <li>Master Degree Programme in Microbiology</li>
            <li>Master Degree Programme in Biochemistry</li>
            <li>Master Degree Programme in Botany</li>
            <li>Master Degree Programme in Buddhist Studies</li>
            <li>Master Degree Programme in Business Management</li>
            <li>Master Degree Programme in Chemistry</li>
            <li>Master Degree Programme in Commerce</li>
            <li>Master Degree Programme in Computer Application</li>
            <li>Master Degree Programme in Dogri</li>
            <li>Master Degree Programme in Economics</li>
            <li>Master Degree Programme in Education</li>
            <li>Master Degree Programme in Electronics</li>
            <li>Master Degree Programme in English</li>
            <li>Master Degree Programme in Environmental Sciences</li>
            <li>Master Degree Programme in Geography</li>
            <li>Master Degree Programme in Geology</li>
            <li>Master Degree Programme in Hindi</li>
            <li>Master Degree Programme in History</li>
            <li>Master Degree Programme in Home Science</li>
            <li>Master Degree Programme in Mathematics</li>
            <li>Master Degree Programme in Physics</li>
            <li>Master Degree Programme in Political Science</li>
            <li>Master Degree Programme in Psychology</li>
            <li>Master Degree Programme in Punjabi</li>
            <li>Master Degree Programme in Sanskrit</li>
            <li>Master Degree Programme in Sociology</li>
            <li>Master Degree Programme in Statistics</li>
            <li>Master Degree Programme in Tourism Management</li>
            <li>Master Degree Programme in Urdu</li>
            <li>Master Degree Programme in Urdu (Professional)</li>
            <li>Master Degree Programme in Zoology</li>
            <li>Master Degree Programme in Human Genetics</li>
            <li>Master Degree Programme in Sericulture</li>
            <li>Master Degree Programme in Information Technology</li>
            <li>Master Degree Programme in Applied Geology</li>
            <li>Master Degree Programme in Food Science & Technology</li>
            <li>Master Degree Programme in Remote Sensing & GIS</li>
            <li>Master Degree Programme in Clothing & Textiles</li>
            <li>Master Degree Programme in Music</li>
            <li>Master Degree Programme in Kashmiri</li>
            <li>Master Degree Programme in Rural Development</li>
            <li>M.Ed</li>
            <li>M.P. Ed</li>
            <li>Post-Graduate Diploma in Business Management (BBM)</li>
            <li>Post-Graduate Diploma in Marketing & Sales Management</li>
            <li>Post-Graduate Diploma in Banking & Risk Management</li>
            <li>Post-Graduate Diploma in Accounting & Finance</li>
            <li>Post-Graduate Diploma in Human Rights & Duties Education</li>
            <li>Post-Graduate Diploma in Bioinformatics</li>
            <li>Post-Graduate Course in Computer Applications</li>
            <li>M.Lib.I.Sc</li>
          </ul>
        </div>
        
        <div className="program">
          <h2>Doctoral Programs</h2>
          <p>Our doctoral programs are designed for students interested in conducting research and making significant contributions to their fields.</p>
          <ul>
            <li>Doctor of Philosophy (PhD)</li>
            <li>M. Phil.</li>
          </ul>
        </div>
        
        <div className="program">
          <h2>Specialized Programs</h2>
          <p>We also offer various specialized programs and certificates to cater to the needs of professionals and researchers.</p>
          <ul>
            <li>Master Degree Programme in Rural Development</li>
            <li>M.P. Ed</li>
            <li>B.P. Ed</li>
            <li>Post-Graduate Diploma in Business Management (BBM)</li>
            <li>Post-Graduate Diploma in Marketing & Sales Management</li>
            <li>Post-Graduate Diploma in Banking & Risk Management</li>
            <li>Post-Graduate Diploma in Accounting & Finance</li>
            <li>Post-Graduate Diploma in Human Rights & Duties Education</li>
            <li>Post-Graduate Diploma in Bioinformatics</li>
            <li>Post-Graduate Course in Computer Applications</li>
          </ul>
        </div>
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

export default Programs;
