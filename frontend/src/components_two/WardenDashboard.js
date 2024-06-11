import React from 'react';
import './WardenDashboard.css'; // Import the CSS file
import ManageStudents from './ManageStudents';
import ManageHostels from './ManageHostels';
import ViewApplications from './ViewApplications';
import PaymentStatus from './PaymentStatus';
import AllotmentStatus from './AllotmentStatus';

function WardenDashboard() {
  return (
    <div className="warden-dashboard-container">
      <h2 className="warden-dashboard-title">Welcome to Warden Dashboard</h2>
      <div className="dashboard-section">
        <h3>Manage Students</h3>
        <ManageStudents />
      </div>
      <div className="dashboard-section">
        <h3>Manage Hostels</h3>
        <ManageHostels />
      </div>
      <div className="dashboard-section">
        <h3>View Applications</h3>
        <ViewApplications />
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

export default WardenDashboard;
