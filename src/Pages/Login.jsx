import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import LoginHeader from "../components/Auth/LoginHeader";
import LoginBody from "../components/Auth/LoginBody";

import { login, saveLoginUserDataToState,clearLoginRelatedErrors } from "../redux/actions/login";

function Login(props) {
  
  return (
    <div className="bg-f8 pb-8 2xl:h-screen">
      {localStorage.token ? <Redirect to="/pq/biology-choose-year" /> : null}
        <LoginHeader />
        <LoginBody loginRequest={props.login} error={props.loginReducer.error.message} />
    </div>
  );

 
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps, {
  login,
  saveLoginUserDataToState,
  clearLoginRelatedErrors
})(Login);
