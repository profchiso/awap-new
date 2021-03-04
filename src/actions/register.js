import axios from 'axios';
import { BASE_URL, requestHeaders } from './config';

export const register = (userData) => {
    return async(dispatch) => {
        try {
            const registeredUser = await axios.post(
                `${BASE_URL}/signup`,
                userData,
                requestHeaders
            );

            if (registeredUser.status === 201)
                dispatch(saveRegisteredUserDataToState(registeredUser.data));
        } catch (error) {
            console.log('Registration error', error);
            dispatch(registrationError(error.response.data));
        }
    };
};
export const saveRegisteredUserDataToState = (registeredUserData) => {
    console.log(registeredUserData);
    return {
        type: 'SAVE_REGISTERED_USER_DATA',
        payload: registeredUserData,
    };
};