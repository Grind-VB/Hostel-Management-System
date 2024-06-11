import React from 'react';
import './HostelInfo.css'; // Import the CSS file

function HostelInfo() {
  return (
    <div className="hostel-info-container">
      <h3 className="hostel-info-title">Hostel Information</h3>
      <div className="hostel-info-content">
        {/* Display hostel information here */}
        <p>Hostel Name: ABC Hostel</p>
        <p>Location: XYZ City</p>
        <p>Total Rooms: 100</p>
        <p>Facilities: Wi-Fi, Mess, Gym, Laundry</p>
        <p>Rules: No Smoking, No Pets, Quiet Hours</p>
      </div>
    </div>
  );
}

export default HostelInfo;
