import axios from 'axios';
import { BASE_URL, requestHeaders } from './config';
import { SELECT_SUBJECT, SELECT_YEAR, SAVE_PAST_QUESTION_TO_STATE, API_ERROR, SELECT_PAST_QUESTION_PRACTICE_TYPE } from './types';

export const fetchPracticeQuestion = (practiceQuestionData) => {
    return async(dispatch) => {
        try {
            const fetchedPracticeQuestion = await axios.get(
                `${BASE_URL}past-question/${practiceQuestionData.subject}?sort=questionNumber&year=${practiceQuestionData.year}`,
                requestHeaders
            );

            fetchedPracticeQuestion.status &&
                dispatch(saveFetchedPraticeQuestionToState(fetchedPracticeQuestion.data));
        } catch (error) {
            console.log('Erroe', error);
            dispatch(APIError(error.response.data));
        }
    };
};

export const saveFetchedPraticeQuestionToState = (pastQuestionArray) => {
    return {
        type: SAVE_PAST_QUESTION_TO_STATE,
        payload: pastQuestionArray,
    };
};

export const APIError = (error) => {
    return {
        type: API_ERROR,
        payload: error
    }
}

export const selectPastQuestionYear = (year) => {
    return {
        type: SELECT_YEAR,
        payload: year,
    };
};

export const selectPastQuestionSubject = (subject) => {
    return {
        type: SELECT_SUBJECT,
        payload: subject,
    };
};
export const selectPastQuestionPracticeType = (type) => {
    return {
        type: SELECT_PAST_QUESTION_PRACTICE_TYPE,
        payload: type,
    };
};