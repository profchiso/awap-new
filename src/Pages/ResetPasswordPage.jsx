import React from "react";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom"
import LoginHeader from "../components/Auth/LoginHeader";
import { login, saveLoginUserDataToState,clearLoginRelatedErrors } from "../redux/actions/login";
import ResetPassword from "../components/Auth/ResetPassword";


function ResetPasswordPage(props) {
  clearLoginRelatedErrors()
  const {token} = props.match.params
  console.log({token})

  return (
    <div className="bg-f8 pb-8 2xl:h-screen">
      {props.loginReducer.token !== "" && <Redirect to="/"/> }
        <LoginHeader />
        <ResetPassword
        token={token}
        loginRequest={props.login} error={props.loginReducer?.error?.message}
         />
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
})(ResetPasswordPage);
