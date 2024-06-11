import React from 'react';
import './StudentDashboard.css'; // Import the CSS file
import HostelInfo from './HostelInfo';
import ApplicationForm from './ApplicationForm';
import PaymentStatus from './PaymentStatus';
import AllotmentStatus from './AllotmentStatus';

function StudentDashboard() {
  return (
    <div className="student-dashboard-container">
      <h2 className="student-dashboard-title">Welcome to Student Dashboard</h2>
      <div className="dashboard-section">
        <h3>Hostel Information</h3>
        <HostelInfo />
      </div>
      <div className="dashboard-section">
        <h3>Application Form</h3>
        <ApplicationForm />
      </div>
      <div className="dashboard-section">
        <h3>Payment Status</h3>
        <PaymentStatus />
      </div>
      <div className="dashboard-section">
        <h3>Allotment Status</h3>
        <AllotmentStatus />
      </div>
    </div>
  );
}

export default StudentDashboard;
