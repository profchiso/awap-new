import React from "react";
// import { Redirect } from "react-router";
import AnswerLayout from "../components/AnswerContent/AnswerLayout";
import { connect } from "react-redux";
import DonutChart from "../components/Charts/DonutChart";

function Statistics(props) {
  // const token = props?.loginReducer?.token;
  const { questionArray } = props.practiceQuestionReducer;

  // if (token) {
  return (
    <AnswerLayout>
      <div className="max-w-screen-2xl mx-auto p-6 sm:px-16 w-full">
        <div className="ml-80">
          <h2 className="text-2xl">Statistics</h2>

          <div>
            <div className="flex mt-8">
              <DonutChart name="Donut" />

              <div className="flex"></div>
            </div>

            <div className="text-base font-semibold text-primary mt-12 py-3">
              Your Answers
            </div>
            <div className="ml-5">
              {questionArray.map((item, index) => (
                <div className="flex gap-3 text-base leading-10" key={index}>
                  <div>{index + 1}.</div>
                  <div className="pl-2">
                    {item.userSelectedAnswer
                      ? item.userSelectedAnswer
                      : "unanswered"}
                  </div>
                </div>
              ))}
            </div>
          </div>
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
export default connect(mapStateToProps)(Statistics);
