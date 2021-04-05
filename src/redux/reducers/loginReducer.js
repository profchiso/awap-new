const initialState = {
    token: '',
    user: {},
    error: { message: "" },

};

export const loginReducer = (state = initialState, actions) => {
    const { type, payload } = actions;
    console.log('action type', type);
    console.log('action payload', payload);

    if (

        type === 'SAVE_LOGGED_IN_USER_DATA' ||
        type === "LOGIN_SUCCESS"
    ) {
        localStorage.setItem('token', JSON.stringify(payload.data.accessToken));
        localStorage.setItem('user', JSON.stringify(payload.data.user));
        let error = {}
        return {
            ...state,
            token: payload.data.accessToken,
            user: payload.data.user,
            isSuccessful: true,
            error
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
        // let user = {}
        return {
            ...state,
            user:null,
            isSuccessful: false,
            token:null,
        };
    } else if (type === 'CLEAR_LOGIN_RELATED_ERROR') {
        let error = {};

        return {
            ...state,
            error

        };
    }

    return state;
};