import React from "react";
import { NavLink } from "react-router-dom";
import { biologyPQYear } from "../../DB/BiologyPQ";
import { connect } from "react-redux";

function WebSideNav(props) {
  const { untimedPracticeQuestions, subject } = props.practiceQuestionReducer;

  let years = [];
  for (let items of untimedPracticeQuestions) {
    if (items.subject === subject) {
      years.push(Number(items.year));
    }
  }
  console.log(years);
  return (
    <div className="bg-primary h-full fixed min-w-xs1 scrollSection -mt-2">
      <div className="text-white pb-24">
        <h2 className="text-2xl pt-10 pl-8">Statistics</h2>

        <div className="pt-8 pl-8 mb-8">
          <h4>Year</h4>
        </div>
        <div className="h-128 bg-local overflow-y-scroll overflow-x-hidden mr-2">
          {years.sort().map((item, index) => (
            <div
              className={`flex pt-3.5 pb-4 my-1 pl-8 ${
                props.practiceQuestionReducer.year === item
                  ? "bg-blueSelector relative z-0 cursor-pointer"
                  : ""
              }`}
            >
              {props.practiceQuestionReducer.year === item ? (
                <div className="bg-white px-1 absolute -mt-3.5 h-12 -ml-8"></div>
              ) : (
                ""
              )}
              <NavLink
                key={index}
                to="/stats"
                className="text-white hover:text-white relative z-10"
              >
                {item}
              </NavLink>
            </div>
          ))}
         
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
export default connect(mapStateToProps)(WebSideNav);
