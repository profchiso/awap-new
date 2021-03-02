const initialState = {
    token: '',
    user: {},
    isSuccessful: false,
    error: {},
    isCallFinished: false,
};

export const loginReducer = (state = initialState, actions) => {
    const { type, payload } = actions;
    console.log('action type', type);
    console.log('action payload', payload);

    return state;
};