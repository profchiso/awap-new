import React, { useState } from "react";

import { connect } from "react-redux";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as RoundBackIcon } from "../assets/svgs/RoundBackIcon.svg";
import HeaderRowOne from "../components/Header/HeaderRowOne";
import Footer from "../components/Footer/Footer";
import { Link, Redirect } from "react-router-dom";
import useWindowDimensions from "../Hooks/UseWindowDimension";
import MobileHeader from "../components/Header/MobileHeader";
import {
  selectPastQuestionPracticeType,
  fetchPracticeQuestion,
  fetchPracticeQuestionTimed,
} from "../redux/actions/practiceQuestion";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  spacing: {
    display: "flex",
    gap: "1rem",
    fontFamily: "Google Sans",
  },
}));

function ChooseType(props) {
  const { token, user } = props.loginReducer;

  const { subject, year } = props.practiceQuestionReducer;

  const [hasTakenPqBefore, setHasTakenPqBefore] = useState(false)

  const classes = useStyles();
  const { width } = useWindowDimensions();

  const [value, setValue] = useState(null);

  const handleChange = async (event) => {
    setValue(event.target.value);
    props.selectPastQuestionPracticeType(event.target.value);
    const { untimedPracticeQuestions, timedPracticeQuestions } = user;

    if (event.target.value === "Timed") {
      let hasAnsweredBefore = timedPracticeQuestions.filter(
        (practiceQuestions) =>
          Number(practiceQuestions.year) === Number(year) &&
          practiceQuestions.subject.toLowerCase() === subject.toLowerCase()
      );
      if (hasAnsweredBefore.length) {
        setHasTakenPqBefore(true);
      } else {
        props.fetchPracticeQuestionTimed(
          {
            subject: subject,
            year,
            pastQuestionBody: "WAEC",
            practiceQuestionType: "Timed",
          },
          token
        );
      }
    } else {
      let hasAnsweredBefore = untimedPracticeQuestions.filter(
        (practiceQuestions) =>
          Number(practiceQuestions.year) === Number(year) &&
          practiceQuestions.subject.toLowerCase() === subject.toLowerCase()
      );

      if (hasAnsweredBefore.length) {
        setHasTakenPqBefore(true);
      } else {
        props.fetchPracticeQuestion(
          { subject: subject.toLowerCase(), year },
          token
        );
      }
    }
  };
  if (token) {
    if (value === null) {
      return (
        <div>
          {width < 640 ? (
            <div className="block bg-blueOne pb-6 pl-2 sm:hidden">
              <MobileHeader />
            </div>
          ) : (
            <div className="shadow py-005">
              <HeaderRowOne />
            </div>
          )}

          <div className="text-center sm:pl-20 px-10 pb-40 flex flex-col max-w-3xl mx-auto">
            <div className="mt-16 sm:mt-32 mb-20">
              <h3 className="text-3xl font-body flex items-center">
                <Link to="/pq/subject-choose-year">
                  <RoundBackIcon className="" />
                </Link>
                <span className="pl-16">Choose type</span>
              </h3>
            </div>

            <div className="text-center">
              <FormControl component="fieldset" className="w-full">
                <RadioGroup
                  aria-label="chooseType"
                  name="chooseType"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Timed"
                    control={<Radio color="primary" />}
                    label="Timed Questions"
                    className={`pb-3 pl-4 font-body text-primary ${classes.spacing}`}
                  />
                  <hr className="w-full my-3 text-gray-300" />
                  <FormControlLabel
                    value="Untimed"
                    control={<Radio color="primary" />}
                    label="Untimed Questions"
                    className={`pt-3 pl-4 font-body text-primary ${classes.spacing}`}
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <Footer />
        </div>
      );
    } else if (value === "Untimed") {
      if (hasTakenPqBefore) {
        return <Redirect to="/answered" />;
      }
      return <Redirect to="/pq/subject-untimed" />;
    } else if (value === "Timed") {
      console.log(props.practiceQuestionReducer.hasTakenPqBefore);

      if (hasTakenPqBefore) {
        return <Redirect to="/answered" />;
      }
      return <Redirect to="/pq/subject-timed" />;
    }
  }
  return <Redirect to="/login" />;
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps, {
  selectPastQuestionPracticeType,
  fetchPracticeQuestion,
  fetchPracticeQuestionTimed,
})(ChooseType);
