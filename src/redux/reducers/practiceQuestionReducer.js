const initialState = {
    year: "",
    subject: "",
    questionType: "",
    questionArray: [],
    currentQuestion: {},
    selectedAnwser: "",
    correctAnswer: "",
    error: {}
};

export const practiceQuestionReducer = (state = initialState, actions) => {
    const { type, payload } = actions;
    console.log('action type', type);
    console.log('action payload', payload);

    if (type === 'SAVE_PAST_QUESTION_TO_STATE') {

        return {
            ...state,
            questionArray: payload.data.questions,

        };
    } else if (type === 'SELECT_YEAR') {
        return {
            ...state,
            year: payload,

        };
    } else if (type === 'SELECT_SUBJECT') {
        return {
            ...state,
            subject: payload.toLowerCase(),

        };
    } else if (type === 'SELECT_PAST_QUESTION_PRACTICE_TYPE') {

        return {
            ...state,
            error: {},
        };
    } else if (type === 'CLEAR_LOGIN_RELATED_ERROR') {

        return {
            ...state,
            questionType: payload,
        };
    }

    return state;
};