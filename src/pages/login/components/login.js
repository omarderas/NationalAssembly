import React, { useState } from 'react';
import { navigate } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
import { useAuth } from '../../../components/auth';

const UserIcon = "../../../images/belize-main-logo.png";


const LoginForm = () => {
  const { login, isAuthenticated, logout } = useAuth();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);


  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!identifier || !password) {
      setError('Please fill out all fields.');
      return;
    }

    const authenticated = await login(identifier, password);

    if (authenticated) {
      setLoginSuccess(true);
      navigate('/document-center'); // Redirect to the protected route after successful login
    } else {
      setError('Invalid Username or Password.');
    }
  };

  return (
    <div className='featured-content'>
      <div className='login-header'>
        <div className='login-header-image'>
        <StaticImage src={UserIcon} /> 
        </div>
        <div className='title'>
          <h1>Welcome to <br/>The National Assembly of Belize <br/> Document Center</h1>
        </div>
        <div className='secondary-title'>
          <h2>Please enter your Username and Password</h2>
        </div>
      </div>
      
      
      {isAuthenticated() ? (
        <><p>Login Successful!</p><br/>
        <button onClick={logout}>Logout</button>
        </>
        
        
      ) : (
       
       
       
       <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username or Email"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p>{error}</p>}
          
          <button type="submit">Login</button>
          
        </form>
      )}
    </div>
  );
};

export default LoginForm;
