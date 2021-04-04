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
            subject: payload,

        };
    } else if (type === 'SELECT_PAST_QUESTION_PRACTICE_TYPE') {

        return {
            ...state,
            questionType: payload
        };
    } else if (type === 'API_ERROR') {
        let error = {}

        return {
            ...state,
            error
        };
    }

    return state;
};