import React from 'react';
import './ManageStudents.css'; // Import the CSS file

function ManageStudents() {
  // Dummy data for demonstration
  const studentsData = [
    { name: 'John Doe', rollNumber: '12345', department: 'Computer Science' },
    { name: 'Jane Smith', rollNumber: '67890', department: 'Electrical Engineering' },
    { name: 'Alice Johnson', rollNumber: '54321', department: 'Mechanical Engineering' },
  ];

  return (
    <div className="manage-students-container">
      <h3 className="manage-students-title">Manage Students</h3>
      <ul className="manage-students-list">
        {studentsData.map((item, index) => (
          <li key={index} className="manage-students-item">
            <label>Name:</label>
            <span>{item.name}</span>
            <label>Roll Number:</label>
            <span>{item.rollNumber}</span>
            <label>Department:</label>
            <span>{item.department}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManageStudents;
