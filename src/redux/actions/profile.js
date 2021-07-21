import axios from "axios";
import { BASE_URL, requestHeaders } from "./config";
import * as actionTypes from "./types";


export const updateAvatar = (userAvatar) => {
  return async (dispatch) => {
    try {
      const profileAvatar = await axios.patch(
        `${BASE_URL}users/update-avatar`,
        userAvatar,
        requestHeaders
      );

      profileAvatar.status === 200 &&
        dispatch(saveProfileDataToState(profileAvatar.data));
    } catch (error) {
      console.log("profile error", error);
      dispatch(profileError(error.response.data));
    }
  };
};


export const saveProfileDataToState = (data) => {
    return {
      type: actionTypes.SAVE_PROFILE_DATA_TO_STATE,
      payload: data,
    };
  };


  export const profileError = (error) => {
    return {
      type: actionTypes.PROFILE_ERROR,
      payload: error,
    };
  };