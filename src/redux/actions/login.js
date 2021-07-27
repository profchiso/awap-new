import axios from "axios";
import { BASE_URL, requestHeaders } from "./config";
import {
  SAVE_LOGGED_IN_USER_DATA,
  LOGIN_ERROR,
  LOGOUT,
  CLEAR_LOGIN_RELATED_ERROR,
} from "./types";

import * as actionTypes from "./types";

export const login = (userData) => {
  return async (dispatch) => {
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
      dispatch(loginError(error.response?.data));
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
  return async (dispatch) => {
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

export const forgotPassword = (email) => {
  return async (dispatch) => {
    try {
      const forgotPasswordData = await axios.post(
        `${BASE_URL}users/forgot-password`,
        email,
        requestHeaders
      );

      forgotPasswordData.status === 200 &&
        // dispatch(saveForgotPasswordDataToState(forgotPasswordData.data));
        console.log(forgotPasswordData);
    } catch (error) {
      console.log("login error", error);
      dispatch(loginError(error.response.data));
    }
  };
};

export const resetPassword = (passwordData, passwordResetToken) => {
  return async (dispatch) => {
    try {
      const resetPasswordData = await axios.patch(
        `${BASE_URL}users/reset-password/${passwordResetToken}`,
        passwordData,
        requestHeaders
      );

      (resetPasswordData.status === 200 || 201) &&
        dispatch(saveLoginUserDataToState(resetPasswordData.data));
      console.log(resetPasswordData);
    } catch (error) {
      console.log("login error", error);
      dispatch(loginError(error.response.data));
    }
  };
};


export const profileError = (error) => {
  return {
    type: actionTypes.PROFILE_ERROR,
    payload: error,
  };
};

export const populateProfileData = (user) => {
  
  return {
    type: actionTypes.POPULATE_PROFILE_DATA,
    payload: user,
  };
};

export const updateProfileAvatar=(updateData,token)=>{

  return async (dispatch) => {
    try {
      const updatedProfileData = await axios.patch(
        `${BASE_URL}users/update-me`,
        updateData,
        {
          headers: {
            "content-type": "multipart/form-data",
            authorization: `Bearer ${token}`,
          },
        }
      );
      updatedProfileData.status === 200 &&
        dispatch(saveUpdatedProfileToState(updatedProfileData.data));
    } catch (error) {
      console.log("profile error", error);
      dispatch(profileError(error.response.data));
    }
  };
}


export const saveUpdatedProfileToState = (profileData) => {
  
  return {
    type: actionTypes.SAVE_UPDATED_PROFILE_DATA_TO_STATE,
    payload: profileData,
  };
};



export const updateProfileText=(updateData,token)=>{

  return async (dispatch) => {
    try {
      const updatedProfileData = await axios.patch(
        `${BASE_URL}users/update-me`,
        updateData,
        {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      updatedProfileData.status === 200 &&
        dispatch(saveUpdatedProfileToState(updatedProfileData.data));
    } catch (error) {
      console.log("profile error", error);
      dispatch(profileError(error.response.data));
    }
  };
}



