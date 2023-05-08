import axios from 'axios';
import { BASE_URI } from '../../constants';

const getUserInfo = async (userId) => {
  try {
    //console.log(`http://localhost:4000/api/users/` + userId);
    const response = await axios.get(BASE_URI + `users/` + userId);
    if (response.code === 404) {
      return null;
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getUserInfo;