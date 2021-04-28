import React from "react";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom"
import LoginHeader from "../components/Auth/LoginHeader";
import LoginBody from "../components/Auth/LoginBody";
import { login, saveLoginUserDataToState,clearLoginRelatedErrors } from "../redux/actions/login";


function Login(props) {
  clearLoginRelatedErrors()
  
  return (
    <div className="bg-f8 pb-8 2xl:h-screen">
      {props.loginReducer.token!=="" && <Redirect to="/"/> }
        <LoginHeader />
        <LoginBody loginRequest={props.login} error={props.loginReducer?.error?.message} />
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
