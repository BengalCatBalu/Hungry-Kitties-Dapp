import axios from 'axios';

const getAllCollectionsInfo = async (collectionId) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/collections/`);
    console.log(response.data);
    if (response.code === 404) {
      return null;
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getAllCollectionsInfo;