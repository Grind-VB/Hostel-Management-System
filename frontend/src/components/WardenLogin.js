// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import './WardenLogin.css';

// function WardenLogin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/users/login', { email, password, role: 'warden' });
//       localStorage.setItem('token', res.data.token);
//       navigate('/dashboard');
//     } catch (err) {
//       console.error(err.response.data);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="warden-login-form">
//       <div>
//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//       </div>
//       <button type="submit">Warden Login</button>
//     </form>
//   );
// }

// export default WardenLogin;

import React, { useState } from 'react';

function WardenLogin() {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ ...form, role: 'warden' }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" name="username" onChange={handleForm} />
        <label>Password:</label>
        <input type="password" name="password" onChange={handleForm} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default WardenLogin;
