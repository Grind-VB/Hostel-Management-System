import React from 'react';
import './ViewApplications.css'; // Import the CSS file

function ViewApplications() {
  // Dummy data for demonstration
  const applicationsData = [
    { name: 'John Doe', rollNumber: '12345', department: 'Computer Science', status: 'Pending' },
    { name: 'Jane Smith', rollNumber: '67890', department: 'Electrical Engineering', status: 'Approved' },
    { name: 'Alice Johnson', rollNumber: '54321', department: 'Mechanical Engineering', status: 'Pending' },
  ];

  return (
    <div className="view-applications-container">
      <h3 className="view-applications-title">View Applications</h3>
      <ul className="view-applications-list">
        {applicationsData.map((item, index) => (
          <li key={index} className="view-applications-item">
            <label>Name:</label>
            <span>{item.name}</span>
            <label>Roll Number:</label>
            <span>{item.rollNumber}</span>
            <label>Department:</label>
            <span>{item.department}</span>
            <label>Status:</label>
            <span>{item.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewApplications;
