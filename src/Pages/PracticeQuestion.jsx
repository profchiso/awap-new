import React, { useState, } from "react";
import {connect} from "react-redux"
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
  const{questionArray }=props.practiceQuestionReducer
  const [value, setValue] = useState("");
  const [questionNumber, setQuestionNumber] = useState(0);
  const [solution,setSolution] = useState("");
  let optionA=""
  let optionB=""
  let optionC=""
  let optionD=""
  

  const isSelected =
    "bg-gradient-to-r from-ansBlue1 via-ansBlue2 to-ansBlue3 text-white";
    const isWrong="bg-gradient-to-r from-orange1 to-orange2 text-white"

  const onSelectedOptionChange = (option,answer) => {
    
    setValue(option);
    setSolution(questionArray[questionNumber].solution)
    if(answer==="optionA"){
      optionA="bg-gradient-to-r from-ansBlue1 via-ansBlue2 to-ansBlue3 text-white"
    }else if(answer==="optionB"){
      optionB="bg-gradient-to-r from-ansBlue1 via-ansBlue2 to-ansBlue3 text-white"
    }else if(answer==="optionC"){
      optionC="bg-gradient-to-r from-ansBlue1 via-ansBlue2 to-ansBlue3 text-white"
    }else if(answer==="optionD"){
      optionD="bg-gradient-to-r from-ansBlue1 via-ansBlue2 to-ansBlue3 text-white"
    }
  };
  

  const increaseQuestionNumber = () => {
    if (questionNumber >= 0 && questionNumber < questionArray.length - 1) {
      setQuestionNumber((prev) => prev + 1);
      setValue("");
    }
    setSolution("")
  };

  const decreaseQuestionNumber = () => {
    if (questionNumber < questionArray.length && questionNumber >= 1) {
      setQuestionNumber((prev) => prev - 1);
    }
  };

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
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
                    <button
                      onClick={() => console.log("ok")}
                      className="text-white bg-primary px-12 font-body shadow-primary px-5 py-2 rounded-md focus:outline-none text-sm lg:text-md font-medium"
                    >
                      Yes, Submit
                    </button>

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
            <div className="flex">
              <div className="flex-1">
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

                <div className="flex justify-center items-center pt-3 pb-12 sm:pb-24 px-8">
                  <FormControl
                    component="fieldset"
                    className="w-full sm:w-6/12 text-center"
                  >
                    <div className="py-3 ">
                      <DefaultAnswerBtn
                        isSelected={value === "optionA" && questionArray[questionNumber].answer==="optionA" ? `${isSelected} ${optionA}` : value === "optionA" && questionArray[questionNumber].answer!=="optionA" ? `${isWrong} ${optionA}`:""}
                        onClick={() => onSelectedOptionChange("optionA",questionArray[questionNumber].answer)}
                      >
                        <span className="pr-6 sm:pr-8">a.</span>
                        <span>
                          {questionArray[questionNumber]?.optionA.textOption}
                        </span>
                      </DefaultAnswerBtn>
                    </div>
                    <div className="py-3 ">
                      <DefaultAnswerBtn
                        isSelected={value === "optionB" && questionArray[questionNumber].answer==="optionB" ? `${isSelected} ${optionA}` : value === "optionB" && questionArray[questionNumber].answer!=="optionA" ? `${isWrong} ${optionB}`:""}
                        onClick={() => onSelectedOptionChange("optionB",questionArray[questionNumber].answer)}
                      >
                        <span className="pr-6 sm:pr-8">b.</span>
                        <span>
                          {questionArray[questionNumber]?.optionB.textOption}
                        </span>
                      </DefaultAnswerBtn>
                    </div>
                    <div className="py-3 ">
                      <DefaultAnswerBtn
                        isSelected={value === "optionC" && questionArray[questionNumber].answer==="optionC" ? `${isSelected} ${optionC}` : value === "optionC" && questionArray[questionNumber].answer!=="optionC" ? `${isWrong} ${optionC}`:""}
                        onClick={() => onSelectedOptionChange("optionC",questionArray[questionNumber].answer)}
                      >
                        <span className="pr-6 sm:pr-8">c.</span>
                        <span>
                          {questionArray[questionNumber]?.optionC.textOption}
                        </span>
                      </DefaultAnswerBtn>
                    </div>
                    <div className="py-3 ">
                      <DefaultAnswerBtn
                        isSelected={value === "optionD" && questionArray[questionNumber].answer==="optionD" ? `${isSelected} ${optionD}` : value === "optionD" && questionArray[questionNumber].answer!=="optionD" ? `${isWrong} ${optionD}`:""}
                        onClick={() => onSelectedOptionChange("optionD",questionArray[questionNumber].answer)}
                      >
                        <span className="pr-6 sm:pr-8">d.</span>
                        <span>
                          {questionArray[questionNumber]?.optionD.textOption}
                        </span>
                      </DefaultAnswerBtn>
                    </div>
                  </FormControl>
                </div>
                <div className="flex justify-center items-center font-body shadow-primary pt-3 pb-40 sm:pb-24 p-8  border-1 mx-56">{solution}</div>

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

                  <div className="hidden sm:flex justify-center items-center align-text-bottom mt-12 px-8 pb-40">
                    <Pagination
                      count={questionArray.length}
                      setQuestionNumber={setQuestionNumber}
                      setValue={setValue}
                    />
                  </div>
                </div>
               
              </div>
              <div className="">
                <button
                  className="hidden sm:block text-white bg-gradient-to-r from-orange1 to-orange2 text-white  font-body shadow-primary px-11 py-2 mr-16 rounded-md text-sm lg:text-base font-medium"
                  onClick={handleOpen}
                >
                  End
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps, {})(PracticeQuestion);

