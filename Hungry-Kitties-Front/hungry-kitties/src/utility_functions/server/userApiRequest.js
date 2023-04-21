import axios from 'axios';

const getUserInfo = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/users/` + userId);
    console.log(response.data);
    if (response.code === 404) {
      return null;
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getUserInfo;