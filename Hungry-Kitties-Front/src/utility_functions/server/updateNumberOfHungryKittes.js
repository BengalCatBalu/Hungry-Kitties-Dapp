import axios from 'axios';
import getUserInfo from './userApiRequest';
import { BASE_URI } from '../../constants';

const updateNumberOfHungryKitties = async (userId, num) => {
    const obj = await getUserInfo(userId);
    if (!obj) {
        return;
    }
    if (num != obj.number_of_hungry_kitties) {
        try {
            const response = await axios.patch(BASE_URI + `users/` + userId, {
                number_of_hungry_kitties: num
            });
            if (response.code === 404) {
                return null;
            }
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

}

export default updateNumberOfHungryKitties;