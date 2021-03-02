import axios from 'axios';
import { BASE_URL, requestHeaders } from './config';
export const login = (userData) => {
    return async(dispatch) => {
        try {
            const loggedInUser = await axios.post(
                `${BASE_URL}/login`,
                userData,
                requestHeaders
            );

            loggedInUser.status === 200 &&
                dispatch(saveLoginUserDataToState(loggedInUser.data));
        } catch (error) {
            console.log('login error', error);
            dispatch(loginError(error.response.data));
        }
    };
};

export const saveLoginUserDataToState = (loggedInUserData) => {
    return {
        type: 'SAVE_LOGGED_IN_USER_DATA',
        payload: loggedInUserData,
    };
};