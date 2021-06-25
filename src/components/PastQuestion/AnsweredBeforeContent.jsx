import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function AnsweredBeforeContent(props) {
  const { questionArray, year, subject, isQuestionFetched } =
    props.practiceQuestionReducer;

  return (
    <div className="flex justify-center mb-24 pb-40 sm:pb-0">
      <div className="font-body flex flex-col gap-8 text-center mt-24 md:mt-16 px-6 sm:px-0">
        <p className="text-md sm:text-xl md:text-2xl font-body">
          You've answered Timed {year} {subject} Past Questions before
        </p>
        <div className="flex justify-center items-center">
          <div className="flex items-center">
            <h3 className="md:text-lg xl:text-xl pl-3"> What do you want to do next?</h3>
          </div>
        </div>
        <div className="">
          <div className="pt-4 text-primary">
            <div className="flex flex-col max-w-lg mx-auto text-base xl:text-lg">
              <div className="flex gap-3 justify-center">
                <Link to="/stats" className="text-primary hover:text-primary p-2 font-mediu hover:underline">View Solutions</Link>
              </div>
              <div className="flex gap-3 justify-center">
                <Link to="" className="text-primary hover:text-primary p-2 font-mediu hover:underline">Retake the Exam </Link>
              </div>
              <div className="flex gap-3 justify-center">
                <Link to="" className="text-primary hover:text-primary p-2 font-mediu hover:underline">Go to Home</Link>
              </div>
            </div>
          </div>
        </div>

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
export default connect(mapStateToProps, {})(AnsweredBeforeContent);
