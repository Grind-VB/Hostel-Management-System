import React from 'react';
import './ManageWardens.css'; // Import the CSS file

function ManageWardens() {
  // Dummy data for demonstration
  const wardensData = [
    { name: 'Warden 1', designation: 'Designation 1', hostel: 'Hostel A' },
    { name: 'Warden 2', designation: 'Designation 2', hostel: 'Hostel B' },
    { name: 'Warden 3', designation: 'Designation 3', hostel: 'Hostel C' },
  ];

  return (
    <div className="manage-wardens-container">
      <h3 className="manage-wardens-title">Manage Wardens</h3>
      <ul className="manage-wardens-list">
        {wardensData.map((item, index) => (
          <li key={index} className="manage-wardens-item">
            <label>Name:</label>
            <span>{item.name}</span>
            <label>Designation:</label>
            <span>{item.designation}</span>
            <label>Hostel:</label>
            <span>{item.hostel}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManageWardens;
