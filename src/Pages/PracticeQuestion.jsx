import React, { useState } from "react";






import Pagination from "../components/AnswerContent/Pagination";
import { DefaultAnswerBtn } from "../components/Button/AnswerButton";
import FormControl from "@material-ui/core/FormControl";
import PracticeHeader from "../components/Header/PracticeHeader";
import NumberBadge from "../components/Badge/NumberBadge";
import {questionArray} from "../DB/dummyQuestion"


import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


export default function PracticeQuestion() {
  const [value, setValue] = useState("");
  const [questionNumber, setQuestionNumber]= useState(1)
  const isSelected =
    "bg-gradient-to-r from-ansBlue1 via-ansBlue2 to-ansBlue3 text-white";

  const onSelectedOptionChange = (option) => {
    console.log(option);
    setValue(option);
  };

  const increaseQuestionNumber=()=>{
    if(questionNumber>0 && questionNumber<20){
      setQuestionNumber(prev=>prev+1)
    }
    
  }

  const decreaseQuestionNumber=()=>{
    if(questionNumber<21 && questionNumber>1){
      setQuestionNumber(prev=>prev-1)
    }
    
  }

  

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
      <PracticeHeader />

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
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Finish Past Question?</h2>
            <p id="transition-modal-description">Are you sure you want to end this past question</p>
            <div className="p-10">
            <button onClick={()=>console.log("ok")} className="text-white bg-primary px-12 font-body shadow-primary px-5 py-2 rounded-md focus:outline-none text-sm lg:text-md font-medium">
            Yes, Submit
          </button>
          </div>

          <div className="p-10">
            <button onClick={()=>handleClose("ok")}   className="text-primary  px-12 font-body shadow-primary px-5 py-2 rounded-md focus:outline-none text-sm lg:text-md font-medium">
            No, Cancel
          </button>
          </div>
          </div>
        </Fade>
      </Modal>

      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center pt-6 pb-6">
          <div className="flex items-center">
            <NumberBadge>{questionArray[questionNumber-1].questionNumber}</NumberBadge>
            <span className="text-base font-medium">
            {questionArray[questionNumber-1].question}
            </span>
          </div>
          <div>
            <button className="text-white bg-gradient-to-r from-orange1 to-orange2 text-white  font-body shadow-primary px-16 py-2 rounded-md text-sm lg:text-base font-medium">
              End
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center pt-6 pb-6">
        <FormControl component="fieldset" className="w-6/12 text-center">
          <div className="pb-3 pt-3 ">
            <DefaultAnswerBtn
              isSelected={value === "a" ? `${isSelected}` : ""}
              onClick={() => onSelectedOptionChange("a")}
            >
                <span className="pr-8">a.</span>
                <span>{questionArray[questionNumber-1].optionA}</span>
            </DefaultAnswerBtn>
          </div>
          <div className="pb-3 pt-3 ">
            <DefaultAnswerBtn
              isSelected={value === "b" ? `${isSelected}` : ""}
              onClick={() => onSelectedOptionChange("b")}
            >
              <span className="pr-8">b.</span>
              <span>{questionArray[questionNumber-1].optionB}</span>
            </DefaultAnswerBtn>
          </div>
          <div className="pb-3 pt-3 ">
            <DefaultAnswerBtn
              isSelected={value === "c" ? `${isSelected}` : ""}
              onClick={() => onSelectedOptionChange("c")}
            >
              <span className="pr-8">c.</span>
              <span>{questionArray[questionNumber-1].optionC}</span>
            </DefaultAnswerBtn>
          </div>
          <div className="pb-3 pt-3 ">
            <DefaultAnswerBtn
              isSelected={value === "d" ? `${isSelected}` : ""}
              onClick={() => onSelectedOptionChange("d")}
            >
              <span className="pr-8">d.</span>
              <span>{questionArray[questionNumber-1].optionD}</span>
            </DefaultAnswerBtn>
          </div>
        </FormControl>
      </div>

      <div className="flex justify-evenly items-center pt-6 pb-6">
        <div>
          <button onClick={()=>decreaseQuestionNumber()} className="text-white bg-primary px-12 font-body shadow-primary px-5 py-2 rounded-md focus:outline-none text-sm lg:text-md font-medium">
            PREVIOUS
          </button>
        </div>
        <div>
        {questionNumber===20? (
          <button onClick={()=>handleOpen()} className="text-white bg-primary px-12 font-body shadow-primary px-5 py-2 rounded-md focus:outline-none text-sm lg:text-md font-medium">
          FINISH 
        </button>

        ):(
          <button onClick={()=>increaseQuestionNumber()} className="text-white bg-primary px-12 font-body shadow-primary px-5 py-2 rounded-md focus:outline-none text-sm lg:text-md font-medium">
            NEXT
          </button>
        )}
          
        </div>
      </div>
      <div className="flex justify-center items-center align-text-bottom mt-5">
        <Pagination />
      </div>
    </>
  );
}
