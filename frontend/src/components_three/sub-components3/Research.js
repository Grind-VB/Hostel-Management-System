// Research.js

import React from 'react';
import './Research.css';

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
    </div>
  );
}

export default Research;
