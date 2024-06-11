import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div>
        <button onClick={() => navigate('/student-login')}>Student Login</button>
        <button onClick={() => navigate('/warden-login')}>Warden Login</button>
        <button onClick={() => navigate('/provost-login')}>Provost Login</button>
      </div>
    </div>
  );
}

export default Login;
