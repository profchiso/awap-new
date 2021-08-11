import axios from "axios";
import { questionArray } from "../../DB/dummyQuestion";
import { BASE_URL, requestHeaders } from "./config";
import {
  TIME_REMAINING,
  SELECT_ANSWER,
  SELECT_SUBJECT,
  SELECT_YEAR,
  SAVE_PAST_QUESTION_TO_STATE,
  API_ERROR,
  SELECT_PAST_QUESTION_PRACTICE_TYPE,
  SUBMIT_USER_ANSWERS,
  ON_SIDENAV_YEAR_CHANGE,
  IS_VIEW_SOLUTION,
  FILTER_SOLUTION,
  TEST_AGAIN,
  ANSWERED_QUESTION_FROM_STH,
  ANSWERED_SAME_PQ_BEFORE,
  VIEW_SCORE_BY_PRACTICE_QUESTION_TYPE,
  JUST_ANSWERED_QUESTION_ARRAY,
  SET_CURRENT_QUESTION_NUMBER
} from "./types";
// import * as actionTypes from "./types";

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

export const fetchPracticeQuestionTimed = (practiceQuestionData, token) => {
  console.log(practiceQuestionData)
  return async (dispatch) => {
    try {
      const fetchedPracticeQuestion = await axios.get(
        `${BASE_URL}past-question/${practiceQuestionData.subject.toLowerCase()}?sort=questionNumber&year=${practiceQuestionData.year}&pastQuestionBody=${practiceQuestionData.pastQuestionBody}&practiceQuestionType=Timed&subject=${practiceQuestionData.subject}`,
        {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
        console.log(fetchedPracticeQuestion)
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
  // submissionData.practiceQuestionType = "Timed"
  // submissionData.pastQuestionType = "Timed"

  return async (dispatch) => {
    try {
      const submittedAnswers = await axios.post(
        `${BASE_URL}past-question/${submissionData.subject.toLowerCase()}/submit-practice-questions`,
        submissionData,
        {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      submittedAnswers.status &&
        dispatch(submittedUserAnswers(submittedAnswers.data));
    } catch (error) {
      console.log("Error", error);
      dispatch(APIError(error.response?.data));
    }
  };
};

export const submittedUserAnswers = (answers) => {
  return {
    type: SUBMIT_USER_ANSWERS,
    payload: answers,
  };
};

export const onSideNavYearChange = (year, subject) => {
  return {
    type: ON_SIDENAV_YEAR_CHANGE,
    payload: { year, subject },
  };
};

export const isViewSolution = (option) => {
  return {
    type: IS_VIEW_SOLUTION,
    payload: option,
  };
};
export const filterSolution = (option) => {
  return {
    type: FILTER_SOLUTION,
    payload: option,
  };
};

export const testAgain = (option) => {
  return {
    type: TEST_AGAIN,
    payload: option,
  };
};

export const answeredQuestionFromSth = (option) => {
  return {
    type: ANSWERED_QUESTION_FROM_STH,
    payload: option,
  };
};

export const timeRemaining = (timeObject) => {
  return {
    type: TIME_REMAINING,
    payload: timeObject,
  };
};

export const setHasTakenPqBefore =(bool)=>{
  return {
    type: ANSWERED_SAME_PQ_BEFORE,
    payload: bool,
  }
}
export const viewScoreByPraticeQuestionType=(practiceQuestionType)=>{
  return{ type:VIEW_SCORE_BY_PRACTICE_QUESTION_TYPE,payload:practiceQuestionType}
}
export const justAnsweredQuestionArray=(questionArray)=>{

  return{
    type:JUST_ANSWERED_QUESTION_ARRAY,
    payload:questionArray
  }
}

export const setCurrentQuestionNumber=(questionNumber)=>{

  return{
    type:SET_CURRENT_QUESTION_NUMBER,
    payload:questionNumber
  }
}