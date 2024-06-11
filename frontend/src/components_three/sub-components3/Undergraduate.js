// Undergraduate.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Undergraduate.css'; // Import the CSS file

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
    </div>
  );
}

export default Undergraduate;
