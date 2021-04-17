import axios from "axios";
import { BASE_URL, requestHeaders } from "./config";
import {
  SAVE_LOGGED_IN_USER_DATA,
  LOGIN_ERROR,
  LOGOUT,
  CLEAR_LOGIN_RELATED_ERROR,
} from "./types";

export const login = (userData) => {
  return async (dispatch) => {
    try {
      const loggedInUser = await axios.post(
        `${BASE_URL}users/login`,
        userData,
        requestHeaders
      );
      if (loggedInUser.success) {
        dispatch(saveLoginUserDataToState(loggedInUser.data));
      } else {
        dispatch(loginError(loggedInUser.data));

      }
    //   loggedInUser.status === 200 &&
    //     dispatch(saveLoginUserDataToState(loggedInUser.data));
    } catch (error) {
      console.log("login error", error);
      dispatch(loginError(error.response.data));
    }
  };
};

export const saveLoginUserDataToState = (loggedInUserData) => {
  console.log(loggedInUserData);
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
  console.log("logout function");
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
      console.log(loggedInUser);

      loggedInUser.success &&
        dispatch(saveLoginUserDataToState(loggedInUser.data));
    } catch (error) {
      console.log("login error", error);
      dispatch(loginError(error.response.data));
    }
  };
};

// export const socialLogin = (payload, history) => async(dispatch) => {
//     try {
//         const response = await fetch(`${BASE_URL}users/oauth/google`, {
//             method: 'POST',
//             body: JSON.stringify(payload),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         const data = await response.json();
//         console.log(data)

//         if (data.success) {
//             dispatch(saveLoginUserDataToState(data.data))

//         }

//     } catch (error) {
//         console.log(error);
//         dispatch(loginError(error))
//     }
// };
