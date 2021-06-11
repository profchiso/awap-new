import axios from "axios";
import { BASE_URL, requestHeaders } from "./config";
import {
  SELECT_ANSWER,
  SELECT_SUBJECT,
  SELECT_YEAR,
  SAVE_PAST_QUESTION_TO_STATE,
  API_ERROR,
  SELECT_PAST_QUESTION_PRACTICE_TYPE,
  SUBMIT_USER_ANSWERS,
  ON_SIDENAV_YEAR_CHANGE,
  IS_VIEW_SOLUTION,
  FILTER_SOLUTION
} from "./types";

export const fetchPracticeQuestion = (practiceQuestionData, token) => {
  return async (dispatch) => {
    try {
      const fetchedPracticeQuestion = await axios.get(
        `${BASE_URL}past-question/${practiceQuestionData.subject}?sort=questionNumber&year=${practiceQuestionData.year}`,
        {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );

      fetchedPracticeQuestion.status &&
        dispatch(
          saveFetchedPraticeQuestionToState(fetchedPracticeQuestion.data)
        );
    } catch (error) {
      console.log("Error", error);
      dispatch(APIError(error.response?.data));
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
    payload: error,
  };
};

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

export const addSelectedAnswerToArray = (selectedQstnAnsObject) => {
  return {
    type: SELECT_ANSWER,
    payload: selectedQstnAnsObject,
  };
};

export const submitUserAnswers = (submissionData, token) => {
  return async (dispatch) => {
    try {

      const submittedAnswers = await axios.post(
        `${BASE_URL}past-question/${submissionData.subject}/submit-practice-questions`,
        submissionData,
        {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
          },

        }
      );
      submittedAnswers.status &&
        dispatch(
          submittedUserAnswers(submittedAnswers.data)
        );
    } catch (error) {
      console.log("Error", error);
      dispatch(APIError(error.response?.data));
    }
  };
}

export const submittedUserAnswers = (answers) => {
  return {
    type: SUBMIT_USER_ANSWERS,
    payload: answers,
  };
}

export const onSideNavYearChange = (year, subject) => {
  return {
    type: ON_SIDENAV_YEAR_CHANGE,
    payload: { year, subject },
  }
}

export const isViewSolution = () => {
  return {
    type: IS_VIEW_SOLUTION,
  }
}
export const filterSolution = (option) => {
  return {
    type: FILTER_SOLUTION,
    payload: option
  }

}