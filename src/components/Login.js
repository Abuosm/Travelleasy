import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      localStorage.setItem('token', response.data.token); // Save the token in localStorage
      navigate('/home'); // Redirect to the homepage after successful login
    } catch (error) {
      setError(error.response?.data?.message || 'Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      {/* Left Section: Application Title & Project Prompt */}
      <div className="left-section">
        <h1 className="animated-title">Travelleasy</h1>
        <p className="animated-subtitle">Secure & Aadhaar-Verified Travel System</p>
        <div className="project-prompt">
          <h2>What is Travelleasy?</h2>
          <p>
            Travelleasy is a modern ticket booking and verification system designed to streamline travel using QR-based authentication.
          </p>
          <p>
            Experience fast, secure, and hassle-free bookings with our advanced online ticketing solution.
          </p>
        </div>
      </div>

      {/* Right Section: Login Form */}
      <div className="right-section">
        <div className="login-box">
          <h2>Welcome Back</h2>
          <p className="subtitle">Login to continue</p>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="login-button" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          <p className="register-link">
            Don't have an account? <a href="/register">Register here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
