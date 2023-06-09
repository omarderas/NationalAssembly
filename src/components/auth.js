import React from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const API_URL = 'http://localhost:1338/api';

export const useAuth = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['jwt']);

  const login = async (identifier, password) => {
    try {
      const response = await axios.post(`${API_URL}/auth/local`, {
        identifier,
        password,
      });

      const { jwt } = response.data;
      setCookie('jwt', jwt, { path: '/' }); // Store JWT in cookie

      return true; // Authentication successful
    } catch (error) {
      console.error('Login failed:', error);
      return false; // Authentication failed
    }
  };

  const isAuthenticated = () => {
    const jwt = cookies.jwt;
    console.log("cookie JWT: " + jwt);

    if (jwt) {
      // Fetch the user data using the JWT
      const fetchUser = async () => {
        try {
          const response = await axios.get(`${API_URL}/users/me`, {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          });

          const { UserRole } = response.data; // Extract the user's role
          console.log("User role: ", UserRole);
          return { user: response.data, UserRole }; // Return the user object and role
        } catch (error) {
          console.error('Failed to fetch user:', error);
          return null; // Return null if user fetching fails
        }
      };

      // Call the fetchUser function and return the user object with role
      return fetchUser();
    }

    return null; // Return null if JWT doesn't exist
  };

  const logout = () => {
    removeCookie('jwt', { path: '/' }); // Remove JWT from cookie
  };

  return { login, isAuthenticated, logout };
};
