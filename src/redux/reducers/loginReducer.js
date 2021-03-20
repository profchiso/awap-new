const initialState = {
    token: '',
    user: {},
    isSuccessful: false,
    error: { message: "" },
    isCallFinished: false,
};

export const loginReducer = (state = initialState, actions) => {
    const { type, payload } = actions;
    console.log('action type', type);
    console.log('action payload', payload);

    if (
        type === 'SAVE_REGISTERED_USER_DATA' ||
        type === 'SAVE_LOGGED_IN_USER_DATA' ||
        type === "LOGIN_SUCCESS"
    ) {
        localStorage.setItem('token', JSON.stringify(payload.data.accessToken));
        localStorage.setItem('user', JSON.stringify(payload.data.user));
        return {
            ...state,
            token: payload.data.accessToken,
            user: payload.data.user,
            isSuccessful: true,
            error: {},
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