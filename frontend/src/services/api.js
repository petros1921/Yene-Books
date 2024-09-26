import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Your backend URL

// Register user
export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/api/auth/register`, userData);
    return response.data;
};

// Login user
export const loginUser = async (credentials) => {
    const response = await axios.post(`${API_URL}/api/auth/login`, credentials);
    return response.data;
};

// Add more functions as needed for other APIs
