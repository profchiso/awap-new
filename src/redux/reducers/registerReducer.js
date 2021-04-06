const initialState = {

    user: {},
    isSuccessful: false,
    error: {},
    message: ""
};

export const registerReducer = (state = initialState, actions) => {
    const { type, payload } = actions;

    if (type === 'SAVE_REGISTERED_USER_DATA') {
        return {
            ...state,
            user: payload.data.user,
            isSuccessful: true,
            error: {},
            message: payload.data.message
        };
    } else if (type === 'REGISTRATION_ERROR' || type === 'LOGIN_ERROR') {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        return {
            ...state,
            error: payload,
            isSuccessful: false,
        };
    } else if (type === 'LOGOUT') {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        return {
            ...state,
            user: {},
            isSuccessful: false,
            token: '',
        };
    }

    return state;
};