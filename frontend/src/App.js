import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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


function App() {
  return (
    <Router>
      <Header/>
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
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/campus-life" element={<CampusLifePage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
