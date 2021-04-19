import React from "react";
// import AnswerContent from "../../components/AnswerContent";
import AnswerLayout from "../../components/AnswerContent/AnswerLayout";
import { connect } from "react-redux";
import { Redirect } from "react-router";

function BiologyAnswers(props) {
  const  token  = props?.loginReducer?.token;

  if (Boolean(token)) {
    return (
      <AnswerLayout>
        {/* PASS IN PROP VALUES HERE!!! */}
        {/* <AnswerContent /> */}
      </AnswerLayout>
    );
  } return <Redirect to="/login" />;
}
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps)(BiologyAnswers);
