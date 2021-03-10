import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginHeader from '../components/Auth/LoginHeader';
import LoginBody from '../components/Auth/LoginBody';

import { login, saveLoginUserDataToState } from '../redux/actions/login';

function Login({ login }) {
  // const isAuthenticated = false;

  return (
    <div className="bg-f8 pb-8">
      {localStorage.token ? <Redirect to="/pq/biology-choose-year" /> : null}
      <LoginHeader />
      <LoginBody loginRequest={login} />
    </div>
  );

  // return !isAuthenticated ? (
  //   <div className="bg-f8 pb-8">
  //     <LoginHeader />
  //     <LoginBody />
  //   </div>
  // ) : (
  //   <Redirect to={props.component} />
  // );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps, {
  login,
  saveLoginUserDataToState,
})(Login);
