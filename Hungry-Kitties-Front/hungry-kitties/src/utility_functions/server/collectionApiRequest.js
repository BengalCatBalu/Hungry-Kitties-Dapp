import axios from 'axios';
import { BASE_URI } from '../../constants';

const getCollectionInfo = async (collectionId) => {
  try {
    const response = await axios.get(BASE_URI + 'collections/' + collectionId);
    if (response.code === 404) {
      return null;
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getCollectionInfo;