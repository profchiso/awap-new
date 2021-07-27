const initialState = {
    token: '',
    user: {},
    error: { message: "" },
    isAuthenticated: false,
    avatar: "",
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    phoneNumber: ""
};

export const loginReducer = (state = initialState, actions) => {
    const { type, payload } = actions;

    if (
        type === 'SAVE_LOGGED_IN_USER_DATA' ||
        type === "LOGIN_SUCCESS"
    ) {
        localStorage.setItem('token', JSON.stringify(payload.data.accessToken));
        localStorage.setItem('user', JSON.stringify(payload.data.user));
        let error = null
        return {
            ...state,
            token: payload.data.accessToken,
            user: payload.data.user,
            isSuccessful: true,
            isAuthenticated: true,
            error
        };
    } else if (type === 'REGISTRATION_ERROR' || type === 'LOGIN_ERROR') {
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        return {
            ...state,
            error: payload,
            isSuccessful: false,
            isAuthenticated: false,
        };
    } else if (type === 'LOGOUT') {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        let user = {}
        return {
            ...state,
            user,
            isSuccessful: false,
            isAuthenticated: false,
            token: '',

        };
    } else if (type === 'CLEAR_LOGIN_RELATED_ERROR') {
        let error = null;

        return {
            ...state,
            error,


        };
    } else if (type === "SAVE_UPDATED_PROFILE_DATA_TO_STATE") {
        //saveLoginUserDataToState(payload)

        console.log(payload)

        const { avatar, firstName, lastName, email, phoneNumber } = payload.data.user

        return {
            ...state,
            user: payload.data.user,
            avatar,
            firstName,
            lastName,
            email,
            phoneNumber: phoneNumber || ""

        }
    }

    return state;
};