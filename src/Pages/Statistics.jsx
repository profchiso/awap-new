import React, { useState } from "react";
// import { Redirect } from "react-router";
import AnswerLayout from "../components/AnswerContent/AnswerLayout";
import { connect } from "react-redux";
import DonutChart from "../components/Charts/DonutChart";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {
  selectPastQuestionSubject,
  selectPastQuestionPracticeType,
} from "../redux/actions/practiceQuestion";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 280,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Statistics(props) {
  const classes = useStyles();
  const token = props?.loginReducer?.token;
  const { questionArray } = props.practiceQuestionReducer;
  const { subject, year } = props.practiceQuestionReducer;

  const untimedPracticeQuestions =
    props?.practiceQuestionReducer?.untimedPracticeQuestions;

  const yearOfBiologyUntimedQuestionArray = untimedPracticeQuestions?.filter(
    (item) =>
      item?.subject === subject &&
      item?.year == props?.practiceQuestionReducer?.year
  );

  const submittedQuestionArray =
    yearOfBiologyUntimedQuestionArray[0]?.submittedQuestionsAndAnswers;

  console.log("year & biology", submittedQuestionArray);

  const history = useHistory();

  const [timedBoolean, setTimedBoolean] = useState(false);

  const handleSubject = (event) => {
    props.selectPastQuestionSubject(event.target.value);
  };

  // const [value, setValue] = useState(null);

  // const handleChange = async (event) => {
  //   setValue(event.target.value);
  //   props.selectPastQuestionPracticeType(event.target.value);
  //   props.fetchPracticeQuestion(
  //     { subject: subject.toLowerCase(), year },
  //     token
  //   );
  // };

  return (
    <AnswerLayout>
      <div className="max-w-screen-2xl mx-auto p-6 sm:px-16 w-full">
        <div className="ml-80">
          {/* <h2 className="text-2xl">Statistics</h2> */}
          <div className="flex justify-between items-center">
            <div className="flex gap-6 pt-4 text-base font-medium">
              <div
                className={`cursor-pointer  ${
                  !timedBoolean ? "pb-2 border-b px-2" : ""
                }`}
                onClick={() => {
                  setTimedBoolean(false);
                  props.selectPastQuestionPracticeType("Untimed Questions");
                }}
              >
                Untimed
              </div>
              <div
                className={`cursor-pointer  ${
                  timedBoolean ? "pb-2 border-b px-2" : ""
                }`}
                onClick={() => setTimedBoolean(true)}
              >
                Timed
              </div>
            </div>
            <div>
              <FormControl
                variant="outlined"
                className={`${classes.formControl} w-full font-sm`}
              >
                <InputLabel
                  id="demo-simple-select-outlined-label"
                  className=" font-sm"
                >
                  Choose Past Question Subject
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  defaultValue={subject}
                  value={subject}
                  onChange={handleSubject}
                  label="Choose Past Question Subject"
                  className=" font-sm"
                >
                  {/* <MenuItem value="">
                    <em>None</em>
                  </MenuItem> */}
                  <MenuItem value="Mathematics">Mathematics</MenuItem>
                  <MenuItem value="Physics">Physics</MenuItem>
                  <MenuItem value="Chemistry">Chemistry</MenuItem>
                  <MenuItem value="Biology">Biology</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          {!timedBoolean ? (
            <div>
              <div className="flex mt-8">
                <DonutChart name="Donut" />
                <div className="flex"></div>
              </div>

              {/* UPDATE UI */}
              <div className="mt-12">
                <div className="flex justify-between lg:mr-24">
                  <div>
                    <div className="text-base font-semibold text-primary py-3">
                      Your Chosen Answers
                    </div>
                    <div className="ml-5">
                      {questionArray.map((item, index) => (
                        <div
                          className="flex gap-3 text-base leading-10"
                          key={index}
                        >
                          <div>{index + 1}.</div>
                          <div className="pl-2">
                            {item.userSelectedAnswer
                              ? item.userSelectedAnswer?.slice(-1) //where to take the last letter
                              : "unanswered"}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => history.goBack()}
                      className="py-3 px-8 text-base font-body font-medium bg-primary rounded-md text-white"
                    >
                      View Solutions
                    </button>

                    <br />
                    <br />

                    <button
                      onClick={() => history.goBack()}
                      className="py-3 whitespace-nowrap w-full text-center text-primary shadow-md px-8 text-base font-body font-medium bg-white rounded-md text-white"
                    >
                      Test Again
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full">
              <p className="py-24 text-xl">Currently Unavailable</p>
            </div>
          )}
        </div>
      </div>
    </AnswerLayout>
  );
  // }
  // return <Redirect to="/login" />;
}
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps, {
  selectPastQuestionSubject,
  selectPastQuestionPracticeType,
})(Statistics);
