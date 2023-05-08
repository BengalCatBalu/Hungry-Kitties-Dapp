import axios from 'axios';
import { BASE_URI } from '../../constants';

const getAllCollectionsInfo = async (collectionId) => {
  try {
    const response = await axios.get(BASE_URI + 'collections/');
    if (response.code === 404) {
      return null;
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getAllCollectionsInfo;