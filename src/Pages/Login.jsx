import React from "react";
import LoginHeader from "../components/Auth/LoginHeader";
import LoginBody from "../components/Auth/LoginBody";
import { Redirect } from "react-router";

export default function Login(props) {
  const isAuthenticated = false;

  // return (
  //   <div className="bg-f8 pb-8">
  //     <LoginHeader />
  //     <LoginBody />
  //   </div>
  // );

  return !isAuthenticated ? (
    <div className="bg-f8 pb-8">
      <LoginHeader />
      <LoginBody />
    </div>
  ) : (
    <Redirect to={props.component} />
  );
}
