const initialState = {
  error: null,
};

export const profileReducer = (state = initialState, actions) => {
  const { type, payload } = actions;

  if (type === "SAVE_PROFILE_DATA_TO_STATE") {
    return {
      ...state,
      avatar: payload,
    };
  } else if (type === "PROFILE_ERROR") {
    return { ...state, error: payload };
  }

  return state;
};
