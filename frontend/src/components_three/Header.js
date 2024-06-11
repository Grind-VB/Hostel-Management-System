import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [admissionsOpen, setAdmissionsOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);

  const toggleAdmissions = () => {
    setAdmissionsOpen(!admissionsOpen);
  };

  const toggleAcademics = () => {
    setAcademicsOpen(!academicsOpen);
  };

  return (
    <nav className="header">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li className="dropdown">
          <button onClick={toggleAcademics}>
            Academics
          </button>
          {academicsOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/academics/programs">Programs</Link></li>
              <li><Link to="/academics/faculty">Faculty</Link></li>
              <li><Link to="/academics/research">Research</Link></li>
            </ul>
          )}
        </li>
        <li className="dropdown">
          <button onClick={toggleAdmissions}>
            Admissions
          </button>
          {admissionsOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/admissions/undergraduate">Undergraduate</Link></li>
              <li><Link to="/admissions/graduate">Graduate</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/campus-life">Campus Life</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
