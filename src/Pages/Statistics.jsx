import React from "react";
import { Redirect } from "react-router";
import AnswerLayout from "../components/AnswerContent/AnswerLayout";
import { connect } from "react-redux";

function Statistics(props) {
  const token = props?.loginReducer?.token;

  if (token) {
    return (
      <AnswerLayout>
        <div className="max-w-screen-2xl mx-auto p-6 sm:px-16 w-full">
          <h2>Statistics</h2>

          <div className="mt-3">
            <p>Percent Score</p>
          </div>
        </div>
      </AnswerLayout>
    );
  }
  return <Redirect to="/login" />;
}
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps)(Statistics);
