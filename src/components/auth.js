import React from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const API_URL = 'https://dazzling-love-27c27bfaa6.strapiapp.com/api'; // Replace with your Strapi backend URL

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
      // Modify the endpoint based on your Strapi configuration
      const fetchUser = async () => {
        try {
          const response = await axios.get(`${API_URL}/users/me`, {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },

          });

          return response.data; // Return the user object
          
        } catch (error) {
          console.error('Failed to fetch user:', error);
          return null; // Return null if user fetching fails
        }
        
      };
      

      // Call the fetchUser function and return the user object
      return fetchUser();
    }

    return null; // Return null if JWT doesn't exist
  };

  const logout = () => {
    removeCookie('jwt', { path: '/' }); // Remove JWT from cookie
  };

  return { login, isAuthenticated, logout };
};
