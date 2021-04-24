import React from "react";
import { useEffect } from "react";
import { Redirect, Route } from "react-router";
import { connect } from "react-redux";
import {saveLoginUserDataToState} from "../redux/actions/login"

function ProtectedRoute(props) {
  
  const [values, setValues] = React.useState({
    isAuthenticated: props.loginReducer.token!==""? true:false,
    authenticationPath: "/login",
    redirectPath: "",
  });
  

  useEffect(() => {
    if (values.isAuthenticated === true) {
      setValues({
        ...values,
        redirectPath: props.path,
        authenticationPath: "",
      });
    } else {
      setValues({ ...values, redirectPath: "", authenticationPath: "/login" });
    }
    console.log('values from protectedRoute',values)
  }, [
    props?.loginReducer?.token,
    props.path,
    values.isAuthenticated,
    values.authenticationPath,
    values.redirectPath,
  ]);
  if(props.loginReducer.token!==""){
    return <Redirect to="/" />;
  }

  if (values.isAuthenticated && values.redirectPath === props.path) {
    if (props.path === "/login" || props.path === "/sign-up") {
      return <Redirect to="/" />;
    } else {
      return (
        <Route {...props} path={props.path}>
          {props.children}
        </Route>
      );
    }
  } else {
    return (
      <Route {...props} path={ values.isAuthenticated? props.path : "/login" || "/sign-up"}>
        {props.children}
      </Route>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps,{saveLoginUserDataToState})(ProtectedRoute);
