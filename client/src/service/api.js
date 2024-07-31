import axios from 'axios';
const BACKEND_API_URL = 'http://localhost:8080';

export const uploadFile = async (data) => {
  try {
    const response = await axios.post(`${BACKEND_API_URL}/upload`, data);
    return response.data;
  } catch (error) {
    console.log("Error while calling the uploadFile method: " + error);
  }
};
