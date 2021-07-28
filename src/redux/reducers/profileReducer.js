
import {saveLoginUserDataToState} from "../actions/login"
const initialState = {
    error: null,
    avatar:"",
    firstName:"",
    lastName:"",
    role:"",
    email:"",
    phoneNumber:""
};


  

export const profileReducer = (state = initialState, actions) => {
    const { type, payload } = actions;

    if (type === "SAVE_PROFILE_DATA_TO_STATE") {
        return {
            ...state,
            avatar: payload,
        };
    } else if (type === "PROFILE_ERROR") {
        return {...state, error: payload };
    } else if (type === "POPULATE_PROFILE_DATA") {
      console.log(payload)

        return {
            ...state,
            firstName:payload.firstName,
            lastName:payload.lastName,
            email:payload.email,
            avatar:payload.avatar,
            role:payload.role
        }
    }else if(type==="SAVE_UPDATED_PROFILE_DATA_TO_STATE"){
      console.log(payload)
      const {avatar,firstName,lastName, email,phoneNumber}= payload.data.user
      
      return{
        ...state,
        avatar,
        firstName,
        lastName,
        email,
        phoneNumber: phoneNumber || ""

      }
    }

    return state;
};