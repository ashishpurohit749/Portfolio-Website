import axios from 'axios';

const API_URL = 'http://localhost:5000/api/projects';

// Custom axios instance with timeout
const apiInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000, // Timeout set to 10 seconds
});

// Fetch all projects with error handling
export const getAllProjects = async () => {
  try {
    const response = await apiInstance.get();

    if (response.status === 200) {
      return response.data; // return data if status is OK
    } else {
      throw new Error(`Error: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching projects:', error.message);
    // Depending on your use case, you can return an empty array or throw the error to be handled elsewhere
    return [];
  }
};
