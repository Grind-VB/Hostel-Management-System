import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import StudentLogin from './components/ProvostLogin';
import WardenLogin from './components/StudentLogin';
import ProvostLogin from './components/WardenLogin';
import StudentDashboard from './components_two/StudentDashboard';
import WardenDashboard from './components_two/WardenDashboard';
import ProvostDashboard from './components_two/ProvostDashboard';
import Header from './components_three/Header';
import Home from './components_three/HomePage';
import AboutPage from './components_three/AboutPage';
import CampusLifePage from './components_three/CampusLifePage';
import ContactPage from './components_three/ContactPage';
import Programs from './components_three/sub-components3/Programs';
import Faculty from './components_three/sub-components3/Faculty';
import Graduate from './components_three/sub-components3/Graduate';
import Undergraduate from './components_three/sub-components3/Undergraduate';
import Research from './components_three/sub-components3/Research';
import './App.css';

function App() {
  const [form, setForm] = useState({});

  const handleForm = (e) => {
    console.log(e.target.value, e.target.name);
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8080/demo', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (!response.ok) {
      console.error('Error:', response.statusText);
      // Handle the error here, e.g., show a message to the user
    } else {
      const data = await response.json();
      console.log(data);
    }
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/warden-login" element={<WardenLogin />} />
        <Route path="/provost-login" element={<ProvostLogin />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/warden-dashboard" element={<WardenDashboard />} />
        <Route path="/provost-dashboard" element={<ProvostDashboard />} />
        <Route path="/academics/programs" element={<Programs />} />
        <Route path="/academics/faculty" element={<Faculty />} />
        <Route path="/academics/research" element={<Research />} />
        <Route path="/admissions/undergraduate" element={<Undergraduate />} />
        <Route path="/admissions/graduate" element={<Graduate />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/campus-life" element={<CampusLifePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/form" element={
          <div>
            <form onSubmit={handleSubmit}>
              <span>username</span>
              <input type="text" name="username" onChange={handleForm} />
              <span>password</span>
              <input type="text" name="password" onChange={handleForm} />
              <input type="submit" />
            </form>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;

