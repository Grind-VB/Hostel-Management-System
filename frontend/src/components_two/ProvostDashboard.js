import React from 'react';
import './ProvostDashboard.css'; // Import the CSS file
import ManageWardens from './ManageWardens';
import ViewApplications from './ViewApplications';
import PaymentStatus from './PaymentStatus';
import ApprovalStatus from './ApprovalStatus';

function ProvostDashboard() {
  return (
    <div className="provost-dashboard-container">
      <h2 className="provost-dashboard-title">Welcome to Provost Dashboard</h2>
      <div className="dashboard-section">
        <h3>Manage Wardens</h3>
        <ManageWardens />
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
        <h3>Approval Status</h3>
        <ApprovalStatus />
      </div>
    </div>
  );
}

export default ProvostDashboard;
