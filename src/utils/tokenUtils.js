// tokenUtils.js

// Function to set the token in local storage
export const setToken = (token) => {
  localStorage.setItem('encodedToken', token);
};

// Function to get the token from local storage
export const getToken = () => {
  return localStorage.getItem('encodedToken');
};

// Function to remove the token from local storage
export const removeToken = () => {
  localStorage.removeItem('encodedToken');
};