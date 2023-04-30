import axios from 'axios';

const getCollectionInfo = async (collectionId) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/collections/` + collectionId);
    console.log(response.data);
    if (response.code === 404) {
      return null;
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getCollectionInfo;