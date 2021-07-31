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

export const updatePassword = (passwordData, token) => {
  return async (dispatch) => {
    try {
      const profilePassData = await axios.patch(
        `${BASE_URL}users/update-password`,
        passwordData,
        {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );

      profilePassData.status === 200 &&
        dispatch(savePasswordSuccessful(profilePassData.data));
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

export const savePasswordSuccessful = (data) => {
  return {
    type: actionTypes.SAVE_PASSWORD_SUCCESSFUL,
    payload: data,
  };
};

export const profileError = (error) => {
  return {
    type: actionTypes.PROFILE_ERROR,
    payload: error,
  };
};

export const clearProfileRelatedErrors = () => {
  return {
    type: actionTypes.CLEAR_PROFILE_RELATED_ERROR,
  };
};

// export const populateProfileData = (user) => {
  
//   return {
//     type: actionTypes.POPULATE_PROFILE_DATA,
//     payload: user,
//   };
// };

// export const updateProfile=(updateData,token)=>{

//   return async (dispatch) => {
//     try {
//       const updatedProfileData = await axios.patch(
//         `${BASE_URL}users/update-me`,
//         updateData,
//         {
//           headers: {
//             "content-type": "multipart/form-data",
//             authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       updatedProfileData.status === 200 &&
//         dispatch(saveUpdatedProfileToState(updatedProfileData.data));
//     } catch (error) {
//       console.log("profile error", error);
//       dispatch(profileError(error.response.data));
//     }
//   };
// }


// export const saveUpdatedProfileToState = (profileData) => {
  
//   return {
//     type: actionTypes.SAVE_UPDATED_PROFILE_DATA_TO_STATE,
//     payload: profileData,
//   };
// };
