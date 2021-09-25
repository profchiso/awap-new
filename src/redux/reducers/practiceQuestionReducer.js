import { logout } from "../actions/login";

const initialState = {
 
  userSelectedAnwser: [],
  year: "",
  subject: "",
  questionType: "",
  questionArray: [],
  currentQuestion: {},
  error: {},
  isQuestionFetched: false,
  isAnswerSubmissionSuccessful: false,
  submittedAnswers: {},
  untimedPracticeQuestions: [],
  timedPracticeQuestions: [],
  isViewSolution: false,
  filterValue: "All",
  justSubmittedQuestionAnswer: [],
  filterQuestionArray:[],
  currentQuestionNumber:""
  
};

export const practiceQuestionReducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  console.log(type,payload)

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
    if (payload?.message?.includes("jwt expired")) {
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
      justSubmittedQuestionAnswer:[...filteredUserSelectedAnwers, payload],
      filterQuestionArray:[...filteredUserSelectedAnwers, payload],

    };
  } else if (type === "SUBMIT_USER_ANSWERS") {
    console.log("submit",payload.data.submitedPracticeQuestion.submittedQuestionsAndAnswers)
    return {
      ...state,
      isAnswerSubmissionSuccessful: true,
      submittedAnswers: payload.data.submitedPracticeQuestion,
      untimedPracticeQuestions: payload.data.untimedPracticeQuestions,
      timedPracticeQuestions: payload.data.timedPracticeQuestions,
     justSubmittedQuestionAnswer:payload.data.submitedPracticeQuestion.submittedQuestionsAndAnswers,
     filterQuestionArray:payload.data.submitedPracticeQuestion.submittedQuestionsAndAnswers,
     //userSelectedAnwser:payload.data.submitedPracticeQuestion.submittedQuestionsAndAnswers

    };
  } else if (type === "ON_SIDENAV_YEAR_CHANGE") {
   let updatedQuestionAndArray=[]

   if(state.questionType.includes("Untimed")){
    updatedQuestionAndArray = state.untimedPracticeQuestions.filter(
      (practiceQuestion) =>
        Number(practiceQuestion.year) === Number(payload.year) &&
        practiceQuestion.subject === payload.subject
    );

   }else{

    updatedQuestionAndArray = state.timedPracticeQuestions.filter(
      (practiceQuestion) =>
        Number(practiceQuestion.year) === Number(payload.year) &&
        practiceQuestion.subject === payload.subject
    );
   }
    return {
      ...state,
      questionArray: updatedQuestionAndArray[0]?.submittedQuestionsAndAnswers,
      isViewSolution: false,
      justSubmittedQuestionAnswer:updatedQuestionAndArray[0]?.submittedQuestionsAndAnswers,
      filterQuestionArray:updatedQuestionAndArray[0]?.submittedQuestionsAndAnswers
    };
  } 
  else if (type === "IS_VIEW_SOLUTION") {
    let updatedQuestionAndArray=[]

   if(state.questionType.includes("Untimed")){
    updatedQuestionAndArray = state.untimedPracticeQuestions.filter(
      (practiceQuestion) =>
        Number(practiceQuestion.year) === Number(payload.year) &&
        practiceQuestion.subject === payload.subject
    );

   }else{

    updatedQuestionAndArray = state.timedPracticeQuestions.filter(
      (practiceQuestion) =>
        Number(practiceQuestion.year) === Number(payload.year) &&
        practiceQuestion.subject === payload.subject
    );
   }


    return {
      ...state,
      questionArray: updatedQuestionAndArray[0]?.submittedQuestionsAndAnswers,
      isViewSolution: false,
      justSubmittedQuestionAnswer:updatedQuestionAndArray[0]?.submittedQuestionsAndAnswers,
      filterQuestionArray:updatedQuestionAndArray[0]?.submittedQuestionsAndAnswers
    };
  }
  
  
  else if (type === "FILTER_SOLUTION") {
    const { subject, year, untimedPracticeQuestions,justSubmittedQuestionAnswer,filterQuestionArray } = state;
    let allQuestions = untimedPracticeQuestions.filter(
      (q) => Number(q.year) === Number(year) && q.subject === subject
    );
    let allQuestionArray = allQuestions[0]?.submittedQuestionsAndAnswers;

    if (payload === "All") {
      let all=allQuestionArray.sort(function(a, b){return a.questionNumber-b.questionNumber})
      console.log(payload, all);
      return {
        ...state,
        isViewSolution: true,
        questionArray: all,
        filterValue: "All",
      };
    } else if (payload === "Correct") {
      let correct = allQuestionArray.filter(
        (q) =>
          q.answer === q.userSelectedAnswer &&
          q?.hasOwnProperty("userSelectedAnswer")
      ).sort(function(a, b){return a.questionNumber-b.questionNumber});
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
      ).sort(function(a, b){return a.questionNumber-b.questionNumber});
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
      ).sort(function(a, b){return a.questionNumber-b.questionNumber});
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
    let allQuestionArray = allQuestions[0]?.submittedQuestionsAndAnswers;

    let questionWithoutAnswers = allQuestionArray.map((element) => {
      delete element.userSelectedAnswer;
      return element;
    });
 
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
    let allQuestionArray = allQuestions[0]?.submittedQuestionsAndAnswers;

    return {
      ...state,
      questionArray: allQuestionArray,
    };
  } else if (type === "TIME_REMAINING") {
    return {
      ...state,
      timeRemaining: payload,
    };
  }else if(type==="VIEW_SCORE_BY_PRACTICE_QUESTION_TYPE"){
   
    const {year,subject, untimedPracticeQuestions,timedPracticeQuestions}= state
    if(payload==="Timed"){
      
      let timeScore= timedPracticeQuestions.filter(practiceQuestion=>Number(practiceQuestion.year)===Number(year) && practiceQuestion.subject===subject )
      return {
        ...state,
        questionType:"Timed Questions",
        questionArray: timeScore.length? timeScore[0].submittedQuestionsAndAnswers :[],
        justSubmittedQuestionAnswer:timeScore.length? timeScore[0].submittedQuestionsAndAnswers :[],
      };
  
    }else{
      
      let untimedScore= untimedPracticeQuestions.filter(practiceQuestion=>Number(practiceQuestion.year)===Number(year) && practiceQuestion.subject===subject )
      console.log(untimedScore)
      return {
        ...state,
        questionType:"Untimed Questions",
        questionArray: untimedScore.length? untimedScore[0].submittedQuestionsAndAnswers:[],
        justSubmittedQuestionAnswer:untimedScore.length? untimedScore[0].submittedQuestionsAndAnswers:[],
      };
  

    }
  }else if(type==="JUST_ANSWERED_QUESTION_ARRAY"){
    return{
      ...state,
      justSubmittedQuestionAnswer:payload,
      questionArray:payload
    }

  }
  else if (type === "SET_CURRENT_QUESTION_NUMBER"){
    return{
      ...state,
      currentQuestionNumber:payload,
    }
  }else if (type === "BACK_TO_STATISTICS"){
    console.log("back to statistic")
    let updatedQuestionAndArray=[]

   if(state.questionType.includes("Untimed")){
    updatedQuestionAndArray = state.untimedPracticeQuestions.filter(
      (practiceQuestion) =>
        Number(practiceQuestion.year) === Number(payload.year) &&
        practiceQuestion.subject === payload.subject
    );

   }else{

    updatedQuestionAndArray = state.timedPracticeQuestions.filter(
      (practiceQuestion) =>
        Number(practiceQuestion.year) === Number(payload.year) &&
        practiceQuestion.subject === payload.subject
    );
   }
console.log("bts",updatedQuestionAndArray[0]?.submittedQuestionsAndAnswers)

    return {
      ...state,
      questionArray: updatedQuestionAndArray[0]?.submittedQuestionsAndAnswers,
      isViewSolution: false,
      justSubmittedQuestionAnswer:updatedQuestionAndArray[0]?.submittedQuestionsAndAnswers,
      filterQuestionArray:updatedQuestionAndArray[0]?.submittedQuestionsAndAnswers
    };
  }
  return state;
};
