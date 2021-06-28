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
  selectPastQuestionYear,
  selectPastQuestionPracticeType,
  onSideNavYearChange,
  isViewSolution,
  testAgain,
} from "../redux/actions/practiceQuestion";
import useWindowDimensions from "../Hooks/UseWindowDimension";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 280,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  numberSelect: {
    width: "20ch",
    paddingRight: "0.8rem !important",
  },
  menuPaper: {
    maxHeight: 200,
  },
  formMobileSubject: {
    minWidth: 150,
  },
}));

function Statistics(props) {
  const classes = useStyles();
  const { width } = useWindowDimensions();
  const pathName = props.match?.path?.substring(1);
  console.log("pathName", pathName);
  const { questionArray } = props.practiceQuestionReducer;
  const { year, subject } = props.practiceQuestionReducer;

  const history = useHistory();

  const [timedBoolean, setTimedBoolean] = useState(false);

  const handleSubject = (event) => {
    props.selectPastQuestionSubject(event.target.value);
  };

  const viewSolution = () => {
    props.onSideNavYearChange(year, subject);
    props.isViewSolution();

    history.goBack();
  };

  const handleTestAgain = () => {
    props.testAgain({ year, subject });
    history.goBack();
  };

  const [itemNumber, setitemNumber] = useState();

  const handleYearChange = async (event) => {
    setitemNumber(event.target.value);
    props.selectPastQuestionYear(event.target.value);
  };

  const range = (start, end) => {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  };

  const rangeValue = range(2000, 2020);

  return (
    <AnswerLayout pathName={pathName}>
      <div className="max-w-screen-2xl mx-auto p-6 sm:px-16 w-full">
        <div className="sm:ml-80">
          {/* <div className="mb-4">
            <p className="text-lg font-medium block sm:hidden">Percent Score</p>
          </div> */}
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
                onClick={() => {
                  setTimedBoolean(true);
                  // props.selectPastQuestionPracticeType("Timed Questions");
                }}
              >
                Timed
              </div>
            </div>
            {width > 640 ? (
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
            ) : null}
          </div>

          <div>
            <div className="flex -mt-16 -mb-10  sm:mt-8 sm:mb-0 -z-10 relative">
              <DonutChart name="Donut" />
              <div className="flex"></div>
            </div>

            {/* UPDATE UI */}
            <div className="sm:mt-12">
              <div className="flex sm:hidden w-full text-center mb-8 gap-14 items-center">
                <span className="text-lg font-medium">Year:</span>
                <FormControl
                  variant="outlined"
                  className={classes.formMobileYear}
                >
                  <Select
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value={itemNumber}
                    onChange={handleYearChange}
                    displayEmpty
                    className={classes.numberSelect}
                    MenuProps={{ classes: { paper: classes.menuPaper } }}
                  >
                    {rangeValue.map((e, i) => (
                      <MenuItem value={e} key={i}>
                        {e}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

              <div className="flex sm:hidden w-full text-center mb-12 gap-8 items-center">
                <span className="text-lg font-medium">Subject:</span>

                <FormControl
                  variant="outlined"
                  className={classes.formMobileSubject}
                >
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue={subject}
                    value={subject}
                    onChange={handleSubject}
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

              <div className="flex flex-col flex-col-reverse sm:flex-row justify-between lg:mr-24">
                <div>
                  <div className="text-base font-semibold py-3 mt-8 sm:mt-0">
                    <div className=" text-primary"> Your Chosen Answers</div>
                    <div className="mt-2">
                      <hr
                        className="text-gray-300"
                        style={{ minWidth: "260px" }}
                      />
                    </div>
                  </div>
                  <div className="ml-5">
                    {questionArray?.map((item, index) => (
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
                <div className="flex flex-row sm:flex-col gap-4 sm:gap-8">
                  <button
                    onClick={viewSolution}
                    className="py-3 px-8 text-base font-body shadow-md font-medium bg-white sm:bg-primary rounded-md sm:text-white text-primary  whitespace-nowrap"
                  >
                    View Solutions
                  </button>

                  <button
                    onClick={handleTestAgain}
                    className="py-3 whitespace-nowrap w-full text-center text-primary shadow-md px-8 text-base font-body font-medium bg-white rounded-md text-white max-w-ts3 lg:max-w-full"
                  >
                    Test Again
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnswerLayout>
  );
}
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps, {
  selectPastQuestionSubject,
  selectPastQuestionYear,
  selectPastQuestionPracticeType,
  onSideNavYearChange,
  isViewSolution,
  testAgain,
})(Statistics);
