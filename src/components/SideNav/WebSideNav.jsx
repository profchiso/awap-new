import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { biologyPQYear } from "../../DB/BiologyPQ";
import { connect } from "react-redux";
import {
  fetchPracticeQuestion,
  selectPastQuestionYear,
  selectPastQuestionPracticeType,
  selectPastQuestionSubject,
  onSideNavYearChange,
} from "../../redux/actions/practiceQuestion";

function WebSideNav(props) {
  const token = props?.loginReducer?.token;

  const { untimedPracticeQuestions, subject, year,timedPracticeQuestions,questionType } = props.practiceQuestionReducer;

  const [yearNav, setYearNav] = useState(props.practiceQuestionReducer.year);

  // const [anotherYearClicked, setAnotherYearClicked] = useState(false)

  let years = ["Deposit","Investment","Savings","Loan"];
  // if (questionType.includes("Untimed") && untimedPracticeQuestions){
  //   for (let items of untimedPracticeQuestions) {
  //     if (items.subject === subject) {
  //       years.push(Number(items.year));
  //     }
  //   }
  // }else{
  //   for (let items of timedPracticeQuestions) {
  //     if (items.subject === subject) {
  //       years.push(Number(items.year));
  //     }
  //   }
  // }
 
  const handleAnotherYear = (item, subject) => {
    setYearNav(item);
    props.selectPastQuestionYear(item);
    // props.selectPastQuestionPracticeType("Untimed Questions");
    props.selectPastQuestionPracticeType(questionType);
    props.onSideNavYearChange(item, subject)
    // props.fetchPracticeQuestion(
    //   { subject: subject.toLowerCase(), year },
    //   token
    // );
  };

  // console.log(years);

  return (
    <div className="bg-primary h-full fixed min-w-xs1 scrollSection -mt-2">
      <div className="text-white pb-24">
        <h2 className="text-2xl pt-10 pl-8">Dashboard</h2>

        {/* <div className="pt-8 pl-8 mb-8">
          <h4>Year</h4>
        </div> */}
        <div className="h-128 bg-local overflow-y-scroll overflow-x-hidden mr-2">
          {years.sort().map((item, index) => (
            <div
              className={`flex pt-3.5 pb-4 my-1 pl-8 ${
                yearNav === item
                  ? "bg-blueSelector relative z-0 cursor-pointer"
                  : ""
              }`}
            >
              {yearNav === item ? (
                <div className="bg-white px-1 absolute -mt-3.5 h-12 -ml-8"></div>
              ) : (
                ""
              )}
              <NavLink
                key={index}
                to={`/${item.toLowerCase()}`}
                className="text-white hover:text-white relative z-10"
                onClick={() => handleAnotherYear(item, subject)}
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
export default connect(mapStateToProps, {
  fetchPracticeQuestion,
  selectPastQuestionYear,
  selectPastQuestionPracticeType,
  selectPastQuestionSubject,
  onSideNavYearChange,
})(WebSideNav);

// const mapStateToProps = (state) => {
//   return {
//     ...state,
//   };
// };
// export default connect(mapStateToProps, {
//   addSelectedAnswerToArray,
//   submitUserAnswers,
// })(PracticeQuestion);
