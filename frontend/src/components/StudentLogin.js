// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import './StudentLogin.css';

// function StudentLogin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/users/login', { email, password, role: 'student' });
//       localStorage.setItem('token', res.data.token);
//       navigate('/dashboard');
//     } catch (err) {
//       console.error(err.response.data);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="student-login-form">
//       <div>
//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//       </div>
//       <button type="submit">Student Login</button>
//     </form>
//   );
// }

// export default StudentLogin;

import React, { useState } from 'react';

function StudentLogin() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        body: JSON.stringify(form), // Ensure sending 'email' and 'password'
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      if (response.status === 400) {
        setError(data.msg);
      } else {
        console.log(data); // Handle successful login
        localStorage.setItem('token', data.token);
        // Navigate to dashboard or desired route
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Server error');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={form.email} onChange={handleForm} required />
        <label>Password:</label>
        <input type="password" name="password" value={form.password} onChange={handleForm} required />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default StudentLogin;
