import React from 'react';
import './PaymentStatus.css'; // Import the CSS file

function PaymentStatus() {
  // Dummy data for demonstration
  const paymentData = [
    { student: 'John Doe', status: 'Paid' },
    { student: 'Jane Smith', status: 'Not Paid' },
    { student: 'Alice Johnson', status: 'Paid' },
    { student: 'Bob Williams', status: 'Not Paid' },
  ];

  return (
    <div className="payment-status-container">
      <h3 className="payment-status-title">Payment Status</h3>
      <ul className="payment-status-list">
        {paymentData.map((item, index) => (
          <li key={index} className="payment-status-item">
            <label>Student:</label>
            <span>{item.student}</span>
            <label>Status:</label>
            <span>{item.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaymentStatus;
