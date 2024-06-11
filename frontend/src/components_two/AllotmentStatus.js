import React from 'react';
import './AllotmentStatus.css'; // Import the CSS file

function AllotmentStatus() {
  // Dummy data for demonstration
  const allotmentData = [
    { student: 'John Doe', roomNumber: '101' },
    { student: 'Jane Smith', roomNumber: '102' },
    { student: 'Alice Johnson', roomNumber: '103' },
    { student: 'Bob Williams', roomNumber: '104' },
  ];

  return (
    <div className="allotment-container">
      <h3 className="allotment-title">Allotment Status</h3>
      <ul className="allotment-list">
        {allotmentData.map((item, index) => (
          <li key={index} className="allotment-item">
            <label>Student:</label>
            <span>{item.student}</span>
            <label>Room Number:</label>
            <span>{item.roomNumber}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllotmentStatus;
