import React from 'react';
import LoginHeader from '../components/Auth/LoginHeader';
import LoginBody from '../components/Auth/LoginBody';
// import { Redirect } from "react-router";

export default function Login(props) {
  // const isAuthenticated = false;

  return (
    <div className="bg-f8 pb-8">
      {localStorage.token ? <Redirect to="/pq/biology-choose-year" /> : null}
      <LoginHeader />
      <LoginBody />
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
