import React from 'react';
import { Link } from 'react-router-dom';
import './Faculty.css'; // Import the CSS file

function Faculty() {
  return (
    <div className="faculty">
      <h1>Faculty</h1>
      <p>Welcome to the Faculty Page. Here, you can learn more about our esteemed faculty members and departments.</p>
      
      <div className="faculty-list">
        <div className="faculty-section">
          <h2>Faculty of Life Sciences</h2>
          <ul>
            <li>School of Biotechnology</li>
            <li>Department of Botany</li>
            <li>Department of Environmental Science</li>
            <li>Department of Zoology</li>
            <li>Institute of Human Genetics</li>
          </ul>
        </div>
        
        <div className="faculty-section">
          <h2>Faculty of Arts/Oriental Languages</h2>
          <ul>
            <li>Department of Buddhist Studies</li>
            <li>Department of Dogri</li>
            <li>Department of English</li>
            <li>Department of Hindi</li>
            <li>Department of Punjabi</li>
            <li>Department of Sanskrit</li>
            <li>Department of Urdu</li>
            <li>Department of Journalism and Media Studies</li>
          </ul>
        </div>
        
        <div className="faculty-section">
          <h2>Faculty of Sciences</h2>
          <ul>
            <li>Department of Chemistry</li>
            <li>Department of Geology</li>
            <li>Department of Geography</li>
            <li>Department of Home Science</li>
            <li>Department of Physics</li>
            <li>Department of Electronics</li>
            <li>Department of Remote Sensing & GIS</li>
          </ul>
        </div>
        
        <div className="faculty-section">
          <h2>Faculty of Education</h2>
          <ul>
            <li>PG Department of Education</li>
            <li>Directorate of Sports and Physical Education</li>
          </ul>
        </div>
        
        <div className="faculty-section">
          <h2>Faculty of Business Studies</h2>
          <ul>
            <li>The Business School</li>
            <li>School of Hospitality & Tourism Management</li>
            <li>International Centre for Cross Cultural Research and Human Resource Management</li>
            <li>Department of Commerce</li>
          </ul>
        </div>
        
        <div className="faculty-section">
          <h2>Faculty of Mathematical Science</h2>
          <ul>
            <li>Department of Mathematics</li>
            <li>Department of Statistics</li>
            <li>Department of Computer Science & IT</li>
          </ul>
        </div>
        
        <div className="faculty-section">
          <h2>Faculty of Law</h2>
          <ul>
            <li>Department of Law</li>
            <li>The Law School</li>
          </ul>
        </div>
        
        <div className="faculty-section">
          <h2>Faculty of Social Science</h2>
          <ul>
            <li>Department of Economics</li>
            <li>Department of History</li>
            <li>Department of Political Science</li>
            <li>Department of Library and Information Science</li>
            <li>Department of Psychology</li>
            <li>Department of Philosophy</li>
            <li>Department for Strategic and Regional Studies</li>
            <li>Department of Sociology</li>
            <li>Department of Lifelong Learning</li>
          </ul>
        </div>
        
        <div className="faculty-section">
          <h2>Faculty of Medicine</h2>
        </div>
        
        <div className="faculty-section">
          <h2>Faculty of Engineering</h2>
          <ul>
            <li>University Institute of Engineering and Technology, Kathua</li>
          </ul>
        </div>
        
        <div className="faculty-section">
          <h2>Faculty of Music and Fine Arts</h2>
        </div>
      </div>
      
      <div className="login-links">
        <Link to="/provost-login" className="link">Warden Login</Link>
        <Link to="/student-login" className="link">Provost Login</Link>
      </div>
    </div>
  );
}

export default Faculty;
