import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import MobileHeader from "../components/Header/MobileHeader";
import {
  selectPastQuestionPracticeType,
  selectPastQuestionSubject,
  selectPastQuestionYear,
  answeredQuestionFromSth,
} from "../redux/actions/practiceQuestion";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      width: "80%",
    },
  },
  numberSelect: {
    width: "20ch",
    paddingRight: "0.8rem !important",
  },
  menuPaper: {
    maxHeight: 200,
  },
}));

function ChooseSubject(props) {
  const classes = useStyles();
  const token = props?.loginReducer?.token;
  const { year } = props.practiceQuestionReducer;

  const [subject, setsubject] = useState("");

  const handleChange = async (event) => {
    setsubject(event.target.value);
    props.selectPastQuestionSubject(event.target.value);
    // props.selectPastQuestionPracticeType("Untimed Questions"); //the default
    props.selectPastQuestionYear(year); //default
    props.answeredQuestionFromSth({ year, subject: event.target.value });
  };

  if (token) {
    return (
      <div>
        <div className="block bg-blueOne pb-8 pl-2 sm:hidden">
          <MobileHeader />
        </div>
        <Header />
        <div className="flex justify-center pb-40">
          <div className="font-body flex flex-col gap-28 text-center mt-12 sm:mt-40">
            <h3 className="px-3 text-md sm:text-xl md:text-2xl lg:text-3xl font-body">
              Statistics for which Subject?
            </h3>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <FormControl variant="outlined">
                  <InputLabel id="demo-simple-select-outlined-label">
                    Choose Subject
                  </InputLabel>
                  <Select
                    label="Choose Subject"
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value={subject}
                    onChange={handleChange}
                    displayEmpty
                    className={classes.numberSelect}
                    MenuProps={{ classes: { paper: classes.menuPaper } }}
                  >
                    <MenuItem value="Biology">Biology</MenuItem>
                    <MenuItem value="Mathematics">Mathematics</MenuItem>
                    <MenuItem value="Physics">Physics</MenuItem>
                    <MenuItem value="Chemistry">Chemistry</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            {subject && (
              <div>
                {subject === "Biology" ? (
                  <Link to="/stats">
                    <button className="text-white bg-primary font-body shadow-primary px-16 md:px-20 py-2 rounded-md focus:outline-none text-sm lg:text-base">
                      Next
                    </button>
                  </Link>
                ) : (
                  <p className="text-base sm:text-lg md:text-xl">
                    {subject} is not yet ready
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
        <Footer />
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
  selectPastQuestionSubject,
  selectPastQuestionPracticeType,
  selectPastQuestionYear,
  answeredQuestionFromSth,
})(ChooseSubject);
