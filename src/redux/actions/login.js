import axios from "axios";
import { BASE_URL, requestHeaders } from "./config";
import {
    SAVE_LOGGED_IN_USER_DATA,
    LOGIN_ERROR,
    LOGOUT,
    CLEAR_LOGIN_RELATED_ERROR,
} from "./types";

export const login = (userData) => {
    return async(dispatch) => {
        try {
            const loggedInUser = await axios.post(
                `${BASE_URL}users/login`,
                userData,
                requestHeaders
            );
           
            loggedInUser.status === 200 &&
                dispatch(saveLoginUserDataToState(loggedInUser.data));
        } catch (error) {
            console.log("login error", error);
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

export const logout = () => {

    return {
        type: LOGOUT,
    };
};
export const clearLoginRelatedErrors = () => {
    return {
        type: CLEAR_LOGIN_RELATED_ERROR,
    };
};

export const socialLogin = (userData) => {
    return async(dispatch) => {
        try {
            const loggedInUser = await axios.post(
                `${BASE_URL}users/oauth/google`,
                userData,
                requestHeaders
            );

            loggedInUser.success &&
                dispatch(saveLoginUserDataToState(loggedInUser.data));
        } catch (error) {
            console.log("login error", error);
            dispatch(loginError(error.response.data));
        }
    };
};

