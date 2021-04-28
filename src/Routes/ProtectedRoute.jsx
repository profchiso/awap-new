import React from "react";
import { useEffect } from "react";
import { Redirect, Route } from "react-router";
import { connect } from "react-redux";
import {saveLoginUserDataToState} from "../redux/actions/login"

function ProtectedRoute(props) {
  
  const [values, setValues] = React.useState({
    isAuthenticated: props.loginReducer.isAuthenticated,
    authenticationPath: "/login",
    redirectPath: "",
  });

  //  console.log('values from protectedRoute',values)
  // console.log('isAuthenticated from protectedRoute line 43',values.isAuthenticated)

  useEffect(() => {
    if (values.isAuthenticated) {
      setValues({
        ...values,
        redirectPath: props.path,
        authenticationPath: "",
      });
    } else {
      setValues({ ...values, redirectPath: "", authenticationPath: "/login" });
    }
   
  }, [
    props?.loginReducer?.token,
    props.path,
    values.isAuthenticated,
    values.authenticationPath,
    values.redirectPath,
  ]);


  // if(props.loginReducer.token!==""){
  //   props.path==="/login" || props.path === "/sign-up"?  <Redirect to="/" />: (
  //     <Route {...props} path={props.path}>
  //       {props.children}
  //     </Route>
  //   );
  // }
  console.log('isAuthenticated from protectedRoute line 43',values.isAuthenticated)

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
