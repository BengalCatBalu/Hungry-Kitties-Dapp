import axios from 'axios';
import getUserInfo from './userApiRequest';

const updateCreated = async (oldNumber, collectionId, oldTotal, newTot, userAddress) => {
  try {
    const data = {
        created: oldNumber + 1,
        totalRaised: oldTotal + newTot
      };

    const user = await getUserInfo(userAddress);
    console.log(user);
    const old = user.donated;
    console.log(old);
    const data1 = {
        donated: old + newTot,
    }
    console.log(data1);
    const response1 = await axios.patch(`http://localhost:4000/api/users/` + userAddress, data1);

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