import React, { useState } from 'react';
import { navigate } from 'gatsby';
import { useAuth } from '../../../components/auth';

const LoginForm = () => {
  const { login, isAuthenticated, logout } = useAuth();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const authenticated = await login(identifier, password);

    if (authenticated) {
      navigate('/dashboard'); // Redirect to the protected route after successful login
    } else {
      // Show error message or handle failed login
    }
  };

  return (
    <div>
      {isAuthenticated() ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username or Email"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
