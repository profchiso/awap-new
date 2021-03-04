import React from "react";
import { Redirect } from "react-router-dom";

export default function ProtectedRoute(props) {
  const Component = props.component;
  const isAuthenticated = false;

  return isAuthenticated ? (
    <Component />
  ) : (
    <Redirect to={{ pathname: "/login" }} />
  );
}
