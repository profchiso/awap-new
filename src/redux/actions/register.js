import axios from "axios";
import { BASE_URL, requestHeaders } from "./config";
import {
  SAVE_REGISTERED_USER_DATA,
  REGISTRATION_ERROR,
  CLEAR_REGISTER_RELATED_ERROR,
} from "./types";

export const register = (userData) => {
  return async (dispatch) => {
    try {
      const registeredUser = await axios.post(
        `${BASE_URL}users/signup`,
        userData,
        requestHeaders
      );

      if (registeredUser.status === 201)
        dispatch(saveRegisteredUserDataToState(registeredUser.data));
    } catch (error) {
      console.log("Registration error", error);
      dispatch(registrationError(error.response.data));
    }
  };
};
export const saveRegisteredUserDataToState = (registeredUserData) => {
  return {
    type: SAVE_REGISTERED_USER_DATA,
    payload: registeredUserData,
  };
};

export const registrationError = (err) => {
  return {
    type: REGISTRATION_ERROR,
    payload: err,
  };
};
export const clearRegisterRelatedErrors = () => {
  return {
    type: CLEAR_REGISTER_RELATED_ERROR,
  };
};
