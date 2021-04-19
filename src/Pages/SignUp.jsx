import React from "react";
import { connect } from "react-redux";
import LoginHeader from "../components/Auth/LoginHeader";
import SignUpBody from "../components/Auth/SignUpBody";

import {
  register,
  saveRegisteredUserDataToState,
} from "../redux/actions/register";

function SignUp({ registerReducer, register }) {
  return (
    <div className="bg-f8 pb-8 2xl:h-screen">
      <LoginHeader />
      <SignUpBody
        signUpRequest={register}
        error={registerReducer.error.message}
        success={registerReducer.message}
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
  register,
  saveRegisteredUserDataToState,
})(SignUp);
