import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as QuestionMark } from "../../assets/svgs/QuestionMark.svg";

function TimedPqIntro(props) {
    const {
        questionArray,
        year,
        subject,
        isQuestionFetched,
    } = props.practiceQuestionReducer;

    return (
        <div className="flex justify-center mb-24 pb-40 sm:pb-0">
            <div className="font-body flex flex-col gap-28 text-center mt-24 lg:mt-40">
                <h3 className="text-md sm:text-xl md:text-2xl lg:text-3xl font-body">
                    Timed {year} {subject} Past Questions
                </h3>
                <div className="flex justify-between">
                    <div className="flex"><QuestionMark /><span className="md:text-2xl pl-3"> 20 Questions</span></div>

                    <span className="md:text-2xl pl-3">60 minutes</span>
                </div>
                <div className="text-left">
                    <h3 className="text-md sm:text-xl md:text-2xl lg:text-2xl font-body">
                        Instructions
                    </h3>
                </div>
                <div className="text-left">
                    <p>1. &nbsp;&nbsp;Do not copy</p>
                    <p>2. &nbsp;&nbsp;Do not cheat</p>
                    <p>3. &nbsp;&nbsp;Do not let someone else do the work for you</p>
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
