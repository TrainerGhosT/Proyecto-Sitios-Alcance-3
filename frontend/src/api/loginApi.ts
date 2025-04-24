import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { Usuario: username, Contrasenia: password });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

