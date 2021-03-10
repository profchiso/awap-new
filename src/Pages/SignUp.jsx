import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginHeader from '../components/Auth/LoginHeader';
import SignUpBody from '../components/Auth/SignUpBody';

import {
  register,
  saveRegisteredUserDataToState,
} from '../redux/actions/register';

function SignUp({ registerReducer, register }) {
  return (
    <div className="bg-f8 pb-8">
      {localStorage.token ? <Redirect to="/pq/biology-choose-year" /> : null}
      <LoginHeader />
      <SignUpBody signUpRequest={register} />
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
