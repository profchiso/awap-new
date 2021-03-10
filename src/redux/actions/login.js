import axios from 'axios';
import { BASE_URL, requestHeaders } from './config';
import { LOGIN_SUCCESS, SAVE_LOGGED_IN_USER_DATA, LOGIN_ERROR } from './types';

export const login = (userData) => {
    return async(dispatch) => {
        try {
            const loggedInUser = await axios.post(
                `${BASE_URL}login`,
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
        type: SAVE_LOGGED_IN_USER_DATA,
        payload: loggedInUserData,
    };
};

export const loginError = (err) => {
    return {
        type: LOGIN_ERROR,
        payload: err,
    };
};

export const socialLogin = (payload, history) => async(dispatch) => {
    try {
        const response = await fetch(`${BASE_URL}users/oauth/google`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        //dispatch(saveLoginUserDataToState(data.data));
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data,
        });
        return data;
    } catch (error) {
        console.log(error);
        return;
    }
};