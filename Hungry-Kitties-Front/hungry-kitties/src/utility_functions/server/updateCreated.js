import axios from 'axios';

const updateCreated = async (oldNumber, collectionId, oldTotal, newTot) => {
  try {
    const data = {
        created: oldNumber + 1,
        totalRaised: oldTotal + newTot
      };
      
    const response = await axios.patch(`http://localhost:4000/api/collections/` + collectionId, data);
    if (response.code === 404) {
      return null;
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default updateCreated;