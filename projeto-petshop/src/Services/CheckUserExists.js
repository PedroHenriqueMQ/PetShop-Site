// services/authService.js
import axios from 'axios';

export const checkUserExists = async (email) => {
  try {
    const response = await axios.post('/api/auth/check-user', { email });
    return response.data.exists;
  } catch (error) {
    console.error('Erro ao verificar usuário:', error);
    return false;
  }
};
