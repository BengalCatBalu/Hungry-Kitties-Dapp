import axios from 'axios';
import getUserInfo from './userApiRequest';
import { BASE_URI } from '../../constants';

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
    const response1 = await axios.patch(BASE_URI + `users/` + userAddress, data1);

    const response = await axios.patch(BASE_URI + `collections/` + collectionId, data);
    if (response.code === 404) {
      return null;
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default updateCreated;