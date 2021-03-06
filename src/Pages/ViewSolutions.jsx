import React, { useState } from "react";
import { connect } from "react-redux";
import Pagination from "../components/AnswerContent/Pagination";
import DefaultAnswerBtn from "../components/Button/AnswerButton";
import FormControl from "@material-ui/core/FormControl";
import PracticeHeader from "../components/Header/PracticeHeader";
import NumberBadge from "../components/Badge/NumberBadge";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { Link, Redirect } from "react-router-dom";
import {
  addSelectedAnswerToArray,
  submitUserAnswers,
  isViewSolution,
  backToStatistics
} from "../redux/actions/practiceQuestion";
import useWindowDimensions from "../Hooks/UseWindowDimension";
// import useKeyPress from "../Hooks/UseKeyPress";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#fff",
    borderRadius: 4,
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
  },
  bottomNav: {
    width: "100%",
    height: "60px",
  },
}));

function ViewSolutions(props) {
  const { userSelectedAnwser, year, subject, questionType, filterValue } =
    props.practiceQuestionReducer;
  const submissionData = {
    submittedQuestionsAndAnswers: userSelectedAnwser,
    year,
    subject,
    practiceQuestionType: questionType,
  };
  const classes = useStyles();
  const { width } = useWindowDimensions();
 
  const [value, setValue] = useState("");
  const [questionNumber, setQuestionNumber] = useState(0);
  const [isClicked, setisClicked] = useState(false);
  const [prevButtonClicked, setprevButtonClicked] = useState(false);
  const [nextButtonClicked, setnextButtonClicked] = useState(false);

  const [open, setOpen] = useState(false);
  const { questionArray, isViewSolution } = props.practiceQuestionReducer;
  const answer = questionArray[questionNumber]?.answer;
  const isCorrect =
    "bg-gradient-to-r from-ansBlue1 via-ansBlue2 to-ansBlue3 text-white";
  const isWrong =
    "bg-gradient-to-r from-redOrangeDark to-redOrangeLight text-white";

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onSelectedOptionChange = (option, questionObj) => {
    setValue(option);
    setisClicked(true);
    questionObj.userSelectedAnswer = option;
    props.addSelectedAnswerToArray(questionObj);
  };

  const setIsCorrectOrWrong = (option) => {
    if (value === option && answer === option) {
      return { isCorrectOrWrong: isCorrect, showIcon: "correctIcon" };
    } else if (value === option && answer !== option) {
      return { isCorrectOrWrong: isWrong, showIcon: "wrongIcon" };
    } else if (value !== option && answer === option) {
      return { isCorrectOrWrong: isCorrect, showIcon: "correctIcon" };
    }
  };

  const increaseQuestionNumber = () => {
    if (questionNumber >= 0 && questionNumber < questionArray.length) {
      setQuestionNumber((prev) => prev + 1);
      setnextButtonClicked(true);
      if (userSelectedAnwser.length > 0) {
        let item = userSelectedAnwser.filter(
          (e) => e.questionNumber === questionNumber + 2
        );
        if (item.length) {
          onSelectedOptionChange(item[0].userSelectedAnswer, item[0]);
        } else {
          setisClicked(false);
        }
      }
    }
  };

  const decreaseQuestionNumber = () => {
    if (questionNumber < questionArray.length && questionNumber >= 1) {
      setQuestionNumber((prev) => prev - 1);
      setprevButtonClicked(true);

      if (userSelectedAnwser.length > 0) {
        let item = userSelectedAnwser.filter(
          (e) => e.questionNumber === questionNumber
        );

        if (item.length) {
          onSelectedOptionChange(item[0].userSelectedAnswer, item[0]);
        } else {
          setisClicked(false);
        }
      }
    }
  };

  const goToQuestion = (currentPage) => {
    if (currentPage >= 0 && currentPage < questionArray.length) {
      if (userSelectedAnwser.length > 0) {
        let item = userSelectedAnwser.filter(
          (e) => e.questionNumber === currentPage
        );
        if (item.length) {
          onSelectedOptionChange(item[0].userSelectedAnswer, item[0]);
        } else {
          setisClicked(false);
        }
      }
    }
  };

  const handlePaginationChange = (page) => {
    setQuestionNumber(page - 1);
    goToQuestion(page);
  };

  const disable = (e) => {
    e.preventDefault();
    return false;
  };

  const checkWrongOrRight = (question, option) => {
    if (question?.hasOwnProperty("userSelectedAnswer")) {
     
      if (
        question?.answer === question.userSelectedAnswer &&
        option === question?.answer
      ) {
        return isCorrect;
      } else if (
        question?.answer !== question.userSelectedAnswer &&
        option === question.userSelectedAnswer
      ) {
        return isWrong;
      } else if (
        question?.answer !== question.userSelectedAnswer &&
        option !== question.userSelectedAnswer
      ) {
        return;
      }
    } else if (option === question?.answer) {
      
      return isCorrect;
    }
  };

  

  const token = props?.loginReducer?.token;


  const handleNoData = () => {
    if (filterValue === "Incorrect") {
      return (
        <div className="w-full mt-6 sm:mt-12 xl:mt-24 text-center flex items-center justify-center">
          <h2 className="text-xl sm:text-xl lg:text-3xl font-semibold">
            No Questions Answered Incorrectly
          </h2>
        </div>
      );
    } else if (filterValue === "Correct") {
      return (
        <div className="w-full mt-6 sm:mt-12 xl:mt-24 text-center flex items-center justify-center">
          <h2 className="text-xl sm:text-xl lg:text-3xl font-semibold">
            No Questions Answered Correctly
          </h2>
        </div>
      );
    } else if (filterValue === "Unanswered") {
      return (
        <div className="w-full mt-6 sm:mt-12 xl:mt-24 text-center flex items-center justify-center">
          <h2 className="text-xl sm:text-xl lg:text-3xl font-semibold">
            No Unanswered Questions
          </h2>
        </div>
      );
    }
  };

  if (token) {
    return (
      <div className="sm:max-h-screen select-none" onContextMenu={disable}>
        <PracticeHeader
          additionalTitle="Solutions"
          handleOpen={handleOpen}
          showFilter={
            window.location.pathname.includes("/pq/view-solution") ||
            isViewSolution
              ? true
              : false
          }
        />
        {questionArray.length ? (
          <>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div
                  className={`${classes.paper} p-4 mx-3 flex outline-none text-center w-full max-w-xl`}
                >
                  <div className="py-2 sm:py-12 flex-1 -mr-12">
                    <h3 className="pr-3">Done viewing solutions?</h3>

                    <div className="pt-10 pb-6 flex flex-col gap-5 items-center justify-center">
                      <Link
                        to="/stats"
                        className="font-medium text-primary hover:text-primary text-base"
                        onClick={()=>backToStatistics()}
                      >
                        Go back to Statistics
                      </Link>

                      <Link
                        to="/"
                        className="font-medium text-primary hover:text-primary text-base"
                      >
                        Go to Home
                      </Link>
                      <button
                        onClick={() => handleClose("ok")}
                        className="text-base  px-12 font-body px-5 rounded-md focus:outline-none text-sm lg:text-md font-medium"
                        style={{ color: "#F1420A" }}
                      >
                        No, Cancel
                      </button>
                    </div>
                  </div>
                  <span>
                    <Button onClick={handleClose}>
                      <CloseRoundedIcon />
                    </Button>
                  </span>
                </div>
              </Fade>
            </Modal>

            <div>
              <div className="flex relative max-w-screen-2xl mx-auto  mt-8">
                <div className="flex-1  pb-40 sm:pb-0">
                  <div className="max-w-3xl mx-auto px-6 sm:px-8">
                    <div className="w-full flex justify-center -mt-2 mb-2 sm:hidden">
                      <NumberBadge>
                        {questionArray[questionNumber]?.questionNumber}
                      </NumberBadge>
                    </div>

                    <div className="flex flex-col justify-between items-center py-3 sm:py-6 max-w-xl mx-auto md:max-w-4xl">
                      <div className="flex items-center">
                        <div className="hidden sm:block">
                          <NumberBadge>
                            {questionArray[questionNumber]?.questionNumber}
                          </NumberBadge>
                        </div>

                        <span className="text-base font-medium">
                          {questionArray[questionNumber]?.question}
                        </span>
                      </div>
                      {questionArray[questionNumber]?.questionImageUrl ? (
                        <div className=" max-w-sm pt-4 lg:ml-28">
                          <img
                            src={
                              questionArray[questionNumber]?.questionImageUrl
                            }
                            alt=""
                            className="w-full"
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex justify-center items-center pt-3 pb-12 sm:pb-16 px-8">
                    <FormControl
                      component="fieldset"
                      className="w-full sm:w-6/12 text-center"
                    >
                      <div className="py-3 ">
                        <DefaultAnswerBtn
                          isClicked={isClicked}
                          showIcon={setIsCorrectOrWrong("optionA")?.showIcon}
                          isSelected={checkWrongOrRight(
                            questionArray[questionNumber],
                            "optionA"
                          )}
                          isCorrectAnswer={
                            questionArray[questionNumber]?.answer === "optionA"
                              ? isCorrect
                              : ""
                          }
                        >
                          <span className="pr-6 sm:pr-8">a.</span>

                          {questionArray[questionNumber]?.optionA
                            .imageOption ? (
                            <img
                              src={
                                questionArray[questionNumber]?.optionA
                                  .imageOption
                              }
                              alt=""
                            />
                          ) : (
                            <span>
                              {
                                questionArray[questionNumber]?.optionA
                                  .textOption
                              }
                            </span>
                          )}
                        </DefaultAnswerBtn>
                      </div>
                      <div className="py-3 ">
                        <DefaultAnswerBtn
                          isClicked={isClicked}
                          showIcon={setIsCorrectOrWrong("optionB")?.showIcon}
                          isSelected={checkWrongOrRight(
                            questionArray[questionNumber],
                            "optionB"
                          )}
                          isCorrectAnswer={
                            questionArray[questionNumber]?.answer === "optionB"
                              ? isCorrect
                              : ""
                          }
                        >
                          <span className="pr-6 sm:pr-8">b.</span>
                          <span>
                            {questionArray[questionNumber]?.optionB
                              .imageOption ? (
                              <img
                                src={
                                  questionArray[questionNumber]?.optionB
                                    .imageOption
                                }
                                alt=""
                              />
                            ) : (
                              <span>
                                {
                                  questionArray[questionNumber]?.optionB
                                    .textOption
                                }
                              </span>
                            )}
                          </span>
                        </DefaultAnswerBtn>
                      </div>
                      <div className="py-3 ">
                        <DefaultAnswerBtn
                          isClicked={isClicked}
                          showIcon={setIsCorrectOrWrong("optionC")?.showIcon}
                          isSelected={checkWrongOrRight(
                            questionArray[questionNumber],
                            "optionC"
                          )}
                          isCorrectAnswer={
                            questionArray[questionNumber]?.answer === "optionC"
                              ? isCorrect
                              : ""
                          }
                        >
                          <span className="pr-6 sm:pr-8">c.</span>
                          <span>
                            {questionArray[questionNumber]?.optionC
                              .imageOption ? (
                              <img
                                src={
                                  questionArray[questionNumber]?.optionC
                                    .imageOption
                                }
                                alt=""
                              />
                            ) : (
                              <span>
                                {
                                  questionArray[questionNumber]?.optionC
                                    .textOption
                                }
                              </span>
                            )}
                          </span>
                        </DefaultAnswerBtn>
                      </div>
                      <div className="py-3 ">
                        <DefaultAnswerBtn
                          isClicked={isClicked}
                          showIcon={setIsCorrectOrWrong("optionD")?.showIcon}
                          isSelected={checkWrongOrRight(
                            questionArray[questionNumber],
                            "optionD"
                          )}
                          isCorrectAnswer={
                            questionArray[questionNumber]?.answer === "optionD"
                              ? isCorrect
                              : ""
                          }
                        >
                          <span className="pr-6 sm:pr-8">d.</span>
                          <span>
                            {questionArray[questionNumber]?.optionD
                              .imageOption ? (
                              <img
                                src={
                                  questionArray[questionNumber]?.optionD
                                    .imageOption
                                }
                                alt=""
                              />
                            ) : (
                              <span>
                                {
                                  questionArray[questionNumber]?.optionD
                                    .textOption
                                }
                              </span>
                            )}
                          </span>
                        </DefaultAnswerBtn>
                      </div>
                    </FormControl>
                  </div>

                  <div className="flex px-7">
                    <div className="min-w-icon mx-1 hidden sm:block"></div>

                    <div className="flex flex-col border border-gray-300 rounded font-body text-base max-w-md mx-auto pl-7 pt-5 pr-5 pb-10 mb-20 sm:mb-4 text-left">
                      <span>Solution</span>
                      <br />

                      {questionArray[questionNumber]?.solutionImageUrl ? (
                        <img
                          src={questionArray[questionNumber]?.solutionImageUrl}
                          alt=""
                        />
                      ) : (
                        <span>{questionArray[questionNumber]?.solution}</span>
                      )}
                    </div>
                  </div>

                  <div className="">
                    <div className="shadow-bottomNav w-full fixed bottom-0 z-50 sm:block sm:static sm:shadow-none bg-white">
                      {width > 640 ? null : (
                        <div className="flex justify-evenly items-center py-6  lg:max-w-2xl mx-auto">
                          <div>
                            <button
                              onClick={() => decreaseQuestionNumber()}
                              className="text-white bg-primary px-12 font-body shadow-primary px-5 py-2 rounded-md focus:outline-none text-sm lg:text-md font-medium"
                            >
                              PREVIOUS
                            </button>
                          </div>
                          <div>
                            {questionNumber + 1 === questionArray.length ? (
                              <button
                                onClick={() => handleOpen()}
                                className="text-white bg-primary px-12 font-body shadow-primary px-5 py-2 rounded-md focus:outline-none text-sm lg:text-md font-medium"
                              >
                                FINISH
                              </button>
                            ) : (
                              <button
                                onClick={() => increaseQuestionNumber()}
                                className="text-white bg-primary px-12 font-body shadow-primary px-5 py-2 rounded-md focus:outline-none text-sm lg:text-md font-medium"
                              >
                                NEXT
                              </button>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {width > 640 &&
                    questionNumber + 1 === questionArray.length ? (
                      <button
                        onClick={() => handleOpen()}
                        className="fixed openModalNextBtn z-10 shadow-primary rounded-full focus:outline-none transform md:scale-125"
                      >
                       
                      </button>
                    ) : null}

                    
                     <div className="flex justify-evenly items-center py-6  lg:max-w-2xl mx-auto">
                          <div>
                            <button
                              onClick={() => decreaseQuestionNumber()}
                              className="text-white bg-primary px-12 font-body shadow-primary px-5 py-2 rounded-md focus:outline-none text-sm lg:text-md font-medium"
                            >
                              PREVIOUS
                            </button>
                          </div>
                          <div>
                            {questionNumber + 1 === questionArray.length ? (
                              <button
                                // onClick={() => handleOpen()}
                                className="text-white bg-primary px-12 font-body shadow-primary px-5 py-2 rounded-md focus:outline-none text-sm lg:text-md font-medium"
                              >
                                FINISH
                              </button>
                            ) : (
                              <button
                                onClick={() => increaseQuestionNumber()}
                                className="text-white bg-primary px-12 font-body shadow-primary px-5 py-2 rounded-md focus:outline-none text-sm lg:text-md font-medium"
                              >
                                NEXT
                              </button>
                            )}
                          </div>
                        </div>
                  </div>

                </div>
                <div className="">
                  <button
                    className="hidden sm:block text-white bg-gradient-to-r from-orange1 to-orange2 text-white  font-body shadow-primary px-11 py-2 mr-16 rounded-md text-sm lg:text-base font-medium"
                    onClick={handleOpen}
                    //disabled={`${isViewSolution ? true : false}`}
                  >
                    {questionNumber + 1 === questionArray.length &&
                    !isViewSolution
                      ? "Finish"
                      : isViewSolution
                      ? "Done"
                      : "End"}
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          handleNoData()
        )}
      </div>
    );
  }
  return <Redirect to="/login" />;
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps, {
  addSelectedAnswerToArray,
  submitUserAnswers,
  isViewSolution,
  backToStatistics
})(ViewSolutions);
