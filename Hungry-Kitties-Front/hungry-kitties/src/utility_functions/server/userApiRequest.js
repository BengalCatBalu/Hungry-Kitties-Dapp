import axios from 'axios';

const getUserInfo = async (userId) => {
  try {
    const response = await axios.get(`/api/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getUserInfo;