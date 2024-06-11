import React from 'react';
import './ApprovalStatus.css'; // Import the CSS file

function ApprovalStatus() {
  // Dummy data for demonstration
  const approvalData = [
    { student: 'John Doe', roomNumber: '101', status: 'Approved' },
    { student: 'Jane Smith', roomNumber: '102', status: 'Pending' },
    { student: 'Alice Johnson', roomNumber: '103', status: 'Approved' },
    { student: 'Bob Williams', roomNumber: '104', status: 'Denied' },
  ];

  return (
    <div className="approval-container">
      <h3 className="approval-title">Approval Status</h3>
      <ul className="approval-list">
        {approvalData.map((item, index) => (
          <li key={index} className="approval-item">
            <label>Student:</label>
            <span>{item.student}</span>
            <label>Room Number:</label>
            <span>{item.roomNumber}</span>
            <label>Status:</label>
            <span>{item.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ApprovalStatus;
