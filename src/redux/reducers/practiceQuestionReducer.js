import { logout } from "../actions/login";

const initialState = {
 
  userSelectedAnwser: [],
  year: "",
  subject: "",
  questionType: "",
  questionArray: [],
  currentQuestion: {},
  // selectedAnwser: "",
  // correctAnswer: "",
  error: {},
  isQuestionFetched: false,
  isAnswerSubmissionSuccessful: false,
  submittedAnswers: {},
  untimedPracticeQuestions: [],
  timedPracticeQuestions: [],
  isViewSolution: false,
  filterValue: "All",
  justSubmittedQuestionAnswer: [],
  // hasTakenPqBefore: false,
  
};

export const practiceQuestionReducer = (state = initialState, actions) => {
  const { type, payload } = actions;

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
      //hasTakenPqBefore: false,
    };
  } else if (type === "SELECT_PAST_QUESTION_PRACTICE_TYPE") {
    return {
      ...state,
      questionType: payload,
      userSelectedAnwser: [],
      isQuestionFetched: false,
      isViewSolution: false,
     // hasTakenPqBefore: false,
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
    };
  } else if (type === "SUBMIT_USER_ANSWERS") {
    return {
      ...state,
      isAnswerSubmissionSuccessful: true,
      submittedAnswers: payload.data.submitedPracticeQuestion,
      untimedPracticeQuestions: payload.data.untimedPracticeQuestions,
      timedPracticeQuestions: payload.data.timedPracticeQuestions,
     // justSubmittedQuestionAnswer:payload.data.submitedPracticeQuestion

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
      justSubmittedQuestionAnswer:updatedQuestionAndArray[0]?.submittedQuestionsAndAnswers
    };
  } 
  else if (type === "IS_VIEW_SOLUTION") {
    
    //Was copied from TEST_AGAIN: To be worked on
    const { subject, year, untimedPracticeQuestions } = state;
    let allQuestions = untimedPracticeQuestions.filter(
      (q) => Number(q.year) === Number(year) && q.subject === subject
    );
    let allQuestionArray = allQuestions[0]?.submittedQuestionsAndAnswers;

    let questionWithoutAnswers = allQuestionArray.map((element) => {
      delete element.userSelectedAnswer;
      return element;
    });

    let filledQuestionArray = []
    for (let question of allQuestionArray){
      if (question.hasOwnProperty("userSelectedAnswer")){
        filledQuestionArray.push(question)
      }else{
        question.userSelectedAnswer = question.answer
        filledQuestionArray.push(question)
      }
    }
    console.log("filledQuestionArray", filledQuestionArray);

    return {
      ...state,
      isViewSolution: true,
      filterValue: "All",
      // questionArray: questionWithoutAnswers,   //old value
      questionArray: filledQuestionArray,
    };
  }
  
  
  else if (type === "FILTER_SOLUTION") {
    const { subject, year, untimedPracticeQuestions } = state;
    let allQuestions = untimedPracticeQuestions.filter(
      (q) => Number(q.year) === Number(year) && q.subject === subject
    );
    let allQuestionArray = allQuestions[0]?.submittedQuestionsAndAnswers;

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
          q?.hasOwnProperty("userSelectedAnswer")
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
      justSubmittedQuestionAnswer:payload
    }

  }
  // else if (type === "ANSWERED_SAME_PQ_BEFORE"){
  //   return{
  //     ...state,
  //     hasTakenPqBefore:payload,
  //   }
  // }
  return state;
};
