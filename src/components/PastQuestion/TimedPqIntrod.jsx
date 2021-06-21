import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as QuestionMark } from "../../assets/svgs/QuestionMark.svg";
import { ReactComponent as TimeLogo } from "../../assets/svgs/TimeLogo.svg";

function TimedPqIntro(props) {

  const { questionArray, year, subject, isQuestionFetched } =
    props.practiceQuestionReducer;

  return (
    <div className="flex justify-center mb-24 pb-40 sm:pb-0">
      <div className="font-body flex flex-col gap-16 text-center mt-24 lg:mt-24 px-6 sm:px-0">
        <h3 className="text-md sm:text-xl md:text-2xl lg:text-3xl font-body">
          Timed {year} {subject} Past Questions
        </h3>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <QuestionMark />
            <span className="md:text-lg pl-3"> 20 Questions</span>
          </div>

          <div className="flex items-center">
            <TimeLogo /> <span className="md:text-lg pl-3">60 minutes</span>
          </div>
        </div>
        <div className="text-left">
          <h3 className="text-md sm:text-xl md:text-xl lg:text-2xl font-body">
            Instructions
          </h3>
          <div className="text-left text-base pt-4 text-primary">
            <div className="flex flex-col gap-2 max-w-lg text-base">
              <div className="flex gap-3">
                <span>1.</span>
                <span>Do not copy</span>
              </div>
              <div className="flex gap-3">
                <span>2.</span>
                <span>Do not cheat</span>
              </div>
              <div className="flex gap-3">
                <span>3.</span>
                <span>Do not let someone else do the work for you</span>
              </div> <div className="flex gap-3">
                <span>4.</span>
                <span>Please DO NOT refresh your browser when exam has started</span>
              </div> <div className="flex gap-3">
                <span>5.</span>
                <span>If refreshed, the exam will be submitted.</span>
              </div>
{/* 
              <div className="flex gap-3">
                <span>4. </span>
                <div className="flex flex-col">
                  <div>
                    Please DO NOT refresh your browser when exam has started.
                  </div>
                  <div>If refreshed, the exam will be submitted.</div>
                </div>
              </div>
             */}
            </div>
          </div>
        </div>

        {/* <div className="flex items-center justify-center">
                    <span className="md:text-2xl pl-3">
                        {!isQuestionFetched
                            ? "Loading..."
                            : isQuestionFetched && questionArray.length
                                ? `${questionArray.length}  Questions  `
                                : "No  Question"}

                    </span>
                </div> */}
        <div>
          {questionArray?.length ? (
            <Link to="/pq/practice-timed">
              <button className="text-white bg-primary  font-body shadow-primary px-16  md:px-20 py-2 rounded-md focus:outline-none text-sm lg:text-base">
                Start
              </button>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps, {})(TimedPqIntro);
