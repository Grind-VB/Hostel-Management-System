// CampusLifePage.js

import React from 'react';
import './CampusLifePage.css';

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
    </div>
  );
}

export default CampusLifePage;
