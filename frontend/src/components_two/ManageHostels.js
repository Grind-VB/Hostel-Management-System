import React from 'react';
import './ManageHostels.css'; // Import the CSS file

function ManageHostels() {
  // Dummy data for demonstration
  const hostelsData = [
    { name: 'Hostel A', location: 'Location A', totalRooms: 50 },
    { name: 'Hostel B', location: 'Location B', totalRooms: 70 },
    { name: 'Hostel C', location: 'Location C', totalRooms: 80 },
  ];

  return (
    <div className="manage-hostels-container">
      <h3 className="manage-hostels-title">Manage Hostels</h3>
      <ul className="manage-hostels-list">
        {hostelsData.map((item, index) => (
          <li key={index} className="manage-hostels-item">
            <label>Name:</label>
            <span>{item.name}</span>
            <label>Location:</label>
            <span>{item.location}</span>
            <label>Total Rooms:</label>
            <span>{item.totalRooms}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManageHostels;
