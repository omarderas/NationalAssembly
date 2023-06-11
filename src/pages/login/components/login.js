import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    // Handle form input changes
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Make API request to Strapi for authentication
      try {
        const response = await axios.post('http://localhost:1338/auth/local', {
          identifier: email,
          password: password,
        });
  
        // Extract the token from the response
        const token = response.data.jwt;
        
        // Store the token in local storage or cookie for persistent login
        localStorage.setItem('token', token);
  
        // Redirect the user or perform any other action upon successful login
        // For example: navigate to a dashboard page
        // navigate('/dashboard');
      } catch (error) {
        // Handle authentication error
        console.log('Login failed', error);
      }
    };
  
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  };
  
  export default Login;
  