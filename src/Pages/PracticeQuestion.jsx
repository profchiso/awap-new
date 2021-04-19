import React, { useState } from "react";
import { connect } from "react-redux";
import Pagination from "../components/AnswerContent/Pagination";
import { DefaultAnswerBtn } from "../components/Button/AnswerButton";
import FormControl from "@material-ui/core/FormControl";
import PracticeHeader from "../components/Header/PracticeHeader";
import NumberBadge from "../components/Badge/NumberBadge";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import PreviousNextQstn from "../components/Button/PreviousNextQstn";
import { Link, Redirect } from "react-router-dom";
import { addSelectedAnswerToArray } from "../redux/actions/practiceQuestion";

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
    padding: theme.spacing(2, 4, 3),
  },
  bottomNav: {
    width: "100%",
    height: "60px",
  },
}));

function PracticeQuestion(props) {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [questionNumber, setQuestionNumber] = useState(0);
  const [isClicked, setisClicked] = useState(false);
  const [open, setOpen] = useState(false);
  const { questionArray } = props.practiceQuestionReducer;
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
    // console.log('questionObj',questionObj)
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
    if (questionNumber >= 0 && questionNumber < questionArray.length - 1) {
      setQuestionNumber((prev) => prev + 1);
      setValue("");
    }
    setisClicked(false);
  };

  const decreaseQuestionNumber = () => {
    if (questionNumber < questionArray.length && questionNumber >= 1) {
      setQuestionNumber((prev) => prev - 1);
    }
    setisClicked(false);
  };

  const disable = (e) => {
    e.preventDefault();
    return false;
  };
  const token = props?.loginReducer?.token;

  if (token) {
    return (
      <div className="sm:max-h-screen select-none" onContextMenu={disable}>
        <PracticeHeader handleOpen={handleOpen} />
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
                  className={`${classes.paper} flex outline-none text-center w-full max-w-xl`}
                >
                  <div className="py-12 flex-1 -mr-12">
                    <h3>Finish Past Question?</h3>
                    <p className="pt-8 font-medium">
                      Are you sure you want to end this past question
                    </p>
                    <div className="pt-16 pb-6 flex gap-5 items-center justify-center">
                      <Link to="/stats">
                        <button
                          onClick={() => console.log("ok")}
                          className="text-white bg-primary px-12 font-body shadow-primary px-5 py-2 rounded-md focus:outline-none text-sm lg:text-md font-medium"
                        >
                          Yes, Submit
                        </button>
                      </Link>

                      <button
                        onClick={() => handleClose("ok")}
                        className="text-primary  px-12 font-body shadow-primary px-5 py-2 rounded-md focus:outline-none text-sm lg:text-md font-medium"
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
              <div className="flex relative max-w-screen-2xl mx-auto">
                <div className="flex-1  pb-40 sm:pb-0">
                  <div className="max-w-3xl mx-auto px-6 sm:px-8">
                    <div className="w-full flex justify-center -mt-2 mb-2 sm:hidden">
                      <NumberBadge>
                        {questionArray[questionNumber]?.questionNumber}
                      </NumberBadge>
                    </div>

                    <div className="flex justify-between items-center py-3 sm:py-6 max-w-xl mx-auto md:max-w-4xl">
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
                          isSelected={
                            isClicked &&
                            setIsCorrectOrWrong("optionA")?.isCorrectOrWrong
                          }
                          onClick={() =>
                            onSelectedOptionChange(
                              "optionA",
                              questionArray[questionNumber]
                            )
                          }
                        >
                          <span className="pr-6 sm:pr-8">a.</span>
                          <span>
                            {questionArray[questionNumber]?.optionA.textOption}
                          </span>
                        </DefaultAnswerBtn>
                      </div>
                      <div className="py-3 ">
                        <DefaultAnswerBtn
                          isClicked={isClicked}
                          showIcon={setIsCorrectOrWrong("optionB")?.showIcon}
                          isSelected={
                            isClicked &&
                            setIsCorrectOrWrong("optionB")?.isCorrectOrWrong
                          }
                          onClick={() =>
                            onSelectedOptionChange(
                              "optionB",
                              questionArray[questionNumber]
                            )
                          }
                        >
                          <span className="pr-6 sm:pr-8">b.</span>
                          <span>
                            {questionArray[questionNumber]?.optionB.textOption}
                          </span>
                        </DefaultAnswerBtn>
                      </div>
                      <div className="py-3 ">
                        <DefaultAnswerBtn
                          isClicked={isClicked}
                          showIcon={setIsCorrectOrWrong("optionC")?.showIcon}
                          isSelected={
                            isClicked &&
                            setIsCorrectOrWrong("optionC")?.isCorrectOrWrong
                          }
                          onClick={() =>
                            onSelectedOptionChange(
                              "optionC",
                              questionArray[questionNumber]
                            )
                          }
                        >
                          <span className="pr-6 sm:pr-8">c.</span>
                          <span>
                            {questionArray[questionNumber]?.optionC.textOption}
                          </span>
                        </DefaultAnswerBtn>
                      </div>
                      <div className="py-3 ">
                        <DefaultAnswerBtn
                          isClicked={isClicked}
                          showIcon={setIsCorrectOrWrong("optionD")?.showIcon}
                          isSelected={
                            isClicked &&
                            setIsCorrectOrWrong("optionD")?.isCorrectOrWrong
                          }
                          onClick={() =>
                            onSelectedOptionChange(
                              "optionD",
                              questionArray[questionNumber]
                            )
                          }
                        >
                          <span className="pr-6 sm:pr-8">d.</span>
                          <span>
                            {questionArray[questionNumber]?.optionD.textOption}
                          </span>
                        </DefaultAnswerBtn>
                      </div>
                    </FormControl>
                  </div>

                  {isClicked ? (
                    <div className="flex px-7">
                      <div className="min-w-icon mx-1 hidden sm:block"></div>

                      <div className="flex flex-col border border-gray-300 rounded font-body text-base max-w-md mx-auto pl-7 pt-5 pr-5 pb-10 mb-20 sm:mb-4 text-left">
                        <span>Solution</span>
                        <br />

                        {questionArray[questionNumber].solution}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="">
                    <div className="shadow-bottomNav w-full fixed bottom-0 z-50 sm:block sm:static sm:shadow-none bg-white">
                      <PreviousNextQstn
                        handleOpen={handleOpen}
                        increaseQuestionNumber={increaseQuestionNumber}
                        decreaseQuestionNumber={decreaseQuestionNumber}
                        questionLength={questionArray.length}
                        questionNumber={questionNumber}
                      />
                    </div>

                    <div className="hidden sm:flex justify-center items-center align-text-bottom mt-12 px-8 pb-40 sm:mt-0 sm:pb-20 sm:-mt-8 ml-16">
                      <Pagination
                        count={questionArray.length}
                        setQuestionNumber={setQuestionNumber}
                        setValue={setValue}
                        setisClicked={setisClicked}
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                  <button
                    className="hidden sm:block text-white bg-gradient-to-r from-orange1 to-orange2 text-white  font-body shadow-primary px-11 py-2 mr-16 rounded-md text-sm lg:text-base font-medium"
                    onClick={handleOpen}
                  >
                    {questionNumber + 1 === questionArray.length
                      ? "Finish"
                      : "End"}
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : null}
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
export default connect(mapStateToProps, { addSelectedAnswerToArray })(
  PracticeQuestion
);
