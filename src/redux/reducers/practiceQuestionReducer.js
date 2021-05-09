const initialState = {
    userSelectedAnwser: [],
    year: "",
    subject: "",
    questionType: "",
    questionArray: [],
    currentQuestion: {},
    selectedAnwser: "",
    correctAnswer: "",
    error: {},
    isQuestionFetched: false,
    isAnswerSubmissionSuccessful: false,
    submittedAnswers: {},
};

export const practiceQuestionReducer = (state = initialState, actions) => {
    const { type, payload } = actions;
    // console.log("action type", type);
    // console.log('action payload', payload);

    if (type === "SAVE_PAST_QUESTION_TO_STATE") {
        return {
            ...state,
            questionArray: payload.data.questions,
            userSelectedAnwser: [],
            isQuestionFetched: true,

        };
    } else if (type === "SELECT_YEAR") {
        return {
            ...state,
            year: payload,
            userSelectedAnwser: [],
            questionArray: [],
            isQuestionFetched: false,

        };
    } else if (type === "SELECT_SUBJECT") {
        return {
            ...state,
            subject: payload,
            userSelectedAnwser: [],
            questionArray: [],
            isQuestionFetched: false,

        };
    } else if (type === "SELECT_PAST_QUESTION_PRACTICE_TYPE") {
        return {
            ...state,
            questionType: payload,
            userSelectedAnwser: [],
            isQuestionFetched: false,

        };
    } else if (type === "API_ERROR") {
        let error = {};

        return {
            ...state,
            userSelectedAnwser: [],
            error,

        };
    } else if (type === "SELECT_ANSWER") {

        let filteredUserSelectedAnwers = state.userSelectedAnwser.filter(
            (userSelectedAnwser) =>
            userSelectedAnwser.questionNumber !== payload.questionNumber
        );
        // let uSA = [...filteredUserSelectedAnwers, payload];

        return {
            ...state,
            userSelectedAnwser:  [...filteredUserSelectedAnwers, payload],

        };
    }else if (type=== "SUBMIT_USER_ANSWERS"){
        return {
            ...state,
            isAnswerSubmissionSuccessful: true,
            submittedAnswers : payload,
        }

    }

    return state;
};