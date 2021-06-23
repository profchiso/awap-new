import { logout } from "../actions/login";

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
  untimedPracticeQuestions: [],
  isViewSolution: false,
  filterValue: "All",
};

export const practiceQuestionReducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  // console.log("action type", type);
  // console.log('action payload', payload);

  if (type === "SAVE_PAST_QUESTION_TO_STATE") {
    return {
      ...state,
      questionArray: payload.data.questions,
      duration: payload.data?.duration,
      userSelectedAnwser: [],
      isQuestionFetched: true,
      isViewSolution: false,
    };
  } else if (type === "SELECT_YEAR") {
    return {
      ...state,
      year: payload,
      userSelectedAnwser: [],
      questionArray: [],
      isQuestionFetched: false,
      isViewSolution: false,
    };
  } else if (type === "SELECT_SUBJECT") {
    return {
      ...state,
      subject: payload,
      userSelectedAnwser: [],
      questionArray: [],
      isQuestionFetched: false,
      isViewSolution: false,
    };
  } else if (type === "SELECT_PAST_QUESTION_PRACTICE_TYPE") {
    return {
      ...state,
      questionType: payload,
      userSelectedAnwser: [],
      isQuestionFetched: false,
      isViewSolution: false,
    };
  } else if (type === "API_ERROR") {
    let error = {};
    if (payload.message.includes("jwt expired")) {
      logout();
    }
    return {
      ...state,
      userSelectedAnwser: [],
      error,
      isViewSolution: false,
    };
  } else if (type === "SELECT_ANSWER") {
    let filteredUserSelectedAnwers = state.userSelectedAnwser.filter(
      (userSelectedAnwser) =>
        userSelectedAnwser.questionNumber !== payload.questionNumber
    );

    return {
      ...state,
      userSelectedAnwser: [...filteredUserSelectedAnwers, payload],
    };
  } else if (type === "SUBMIT_USER_ANSWERS") {
    return {
      ...state,
      isAnswerSubmissionSuccessful: true,
      submittedAnswers: payload.data.submitedPracticeQuestion,
      untimedPracticeQuestions: payload.data.untimedPracticeQuestions,
    };
  } else if (type === "ON_SIDENAV_YEAR_CHANGE") {
    let updatedQuestionAndArray = state.untimedPracticeQuestions.filter(
      (practiceQuestion) =>
        Number(practiceQuestion.year) === Number(payload.year) &&
        practiceQuestion.subject === payload.subject
    );
    console.log("updatedQuestionAndArray", updatedQuestionAndArray);
    return {
      ...state,
      questionArray: updatedQuestionAndArray[0]?.submittedQuestionsAndAnswers,
      isViewSolution: false,
    };
  } else if (type === "IS_VIEW_SOLUTION") {
    return {
      ...state,
      isViewSolution: true,
      filterValue: "All",
    };
  } else if (type === "FILTER_SOLUTION") {
    const { subject, year, untimedPracticeQuestions } = state;
    let allQuestions = untimedPracticeQuestions.filter(
      (q) => Number(q.year) === Number(year) && q.subject === subject
    );
    let allQuestionArray = allQuestions[0].submittedQuestionsAndAnswers;

    if (payload === "showAll") {
      return {
        ...state,
        isViewSolution: true,
        questionArray: allQuestionArray,
        filterValue: "All",
      };
    } else if (payload === "Correct") {
      let correct = allQuestionArray.filter(
        (q) =>
          q.answer === q.userSelectedAnswer &&
          q.hasOwnProperty("userSelectedAnswer")
      );
      console.log(payload, correct);
      return {
        ...state,
        isViewSolution: true,
        questionArray: correct,
        filterValue: payload,
      };
    } else if (payload === "Incorrect") {
      let inCorrect = allQuestionArray.filter(
        (q) =>
          q.answer !== q.userSelectedAnswer &&
          q.hasOwnProperty("userSelectedAnswer")
      );
      console.log(payload, inCorrect);
      return {
        ...state,
        isViewSolution: true,
        questionArray: inCorrect,
        filterValue: payload,
      };
    } else if (payload === "Unanswered") {
      let unAnswered = allQuestionArray.filter(
        (q) => !q.hasOwnProperty("userSelectedAnswer")
      );
      console.log(payload, unAnswered);
      return {
        ...state,
        isViewSolution: true,
        questionArray: unAnswered,
        filterValue: payload,
      };
    }
  } else if (type === "TEST_AGAIN") {
    const { subject, year, untimedPracticeQuestions } = state;
    let allQuestions = untimedPracticeQuestions.filter(
      (q) => Number(q.year) === Number(year) && q.subject === subject
    );
    let allQuestionArray = allQuestions[0].submittedQuestionsAndAnswers;

    let questionWithoutAnswers = allQuestionArray.map((element) => {
      delete element.userSelectedAnswer;
      return element;
    });
    console.log("questionWithoutAnswers", questionWithoutAnswers);
    return {
      ...state,
      isViewSolution: false,
      questionArray: questionWithoutAnswers,
    };
  } else if (type === "ANSWERED_QUESTION_FROM_STH") {
    const { untimedPracticeQuestions } = state;
    let allQuestions = untimedPracticeQuestions.filter(
      (q) =>
        Number(q.year) === Number(payload.year) && q.subject === payload.subject
    );
    let allQuestionArray = allQuestions[0].submittedQuestionsAndAnswers;

    return {
      ...state,
      questionArray: allQuestionArray,
    };
  } else if (type === "TIME_REMAINING") {
        return {
      ...state,
      timeRemaining: payload,
    };
  }
  return state;
};
