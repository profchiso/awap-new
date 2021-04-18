import React from "react";
import { useSessionContext } from "../components/AuthRedirection/SessionContext";
import ProtectedRoute from "../components/AuthRedirection/ProtectedRoute";
import BiologyChooseYear from "../Pages/ChooseYear";
import BiologyUntimedPQ from "../Pages/UntimedPQ";
import BiologyChooseType from "../Pages/ChooseType";
import Answers from "../Pages/Answers/BiologyAnswers";
import PracticeQuestion from "../Pages/PracticeQuestion";
import { biologyPQYear } from "../DB/BiologyPQ";
import MobilePq from "../Pages/MobilePq";
import Statistics from "../Pages/Statistics";
import { connect } from "react-redux";

function AppRoutes(props) {
  const { token } = props.loginReducer;

  const [sessionContext, updateSessionContext] = useSessionContext();

  const setRedirectPath = (path) => {
    updateSessionContext({ ...sessionContext, redirectPath: path });
  };

  const defaultProtectedRouteProps = {
    // isAuthenticated: !!sessionContext.isAuthenticated, //true or false
    isAuthenticated: !!token,
    authenticationPath: "/login",
    // redirectPath: sessionContext.redirectPath, //this was suposed to work
    redirectPath: "/pq/biology-choose-year",
    setRedirectPath: setRedirectPath,
  };

  return (
    <>
      <ProtectedRoute
        {...defaultProtectedRouteProps}
        path="/pq/biology-choose-year"
      >
        <BiologyChooseYear />
      </ProtectedRoute>

      <ProtectedRoute
        {...defaultProtectedRouteProps}
        path="/pq/practice"
        component={PracticeQuestion}
      />
      <ProtectedRoute
        {...defaultProtectedRouteProps}
        path="/pq/biology-choose-type"
        component={BiologyChooseType}
      />

      <ProtectedRoute
        {...defaultProtectedRouteProps}
        path="/pq/biology-untimed"
        component={BiologyUntimedPQ}
      />
      <ProtectedRoute
        {...defaultProtectedRouteProps}
        path="/pq/mobile-biology-Pq"
        component={MobilePq}
      />
      <ProtectedRoute
        {...defaultProtectedRouteProps}
        path="/stats"
        component={Statistics}
      />

      {biologyPQYear.map((item, index) => (
        <ProtectedRoute
          {...defaultProtectedRouteProps}
          key={index}
          path={item.url}
          component={Answers}
        />
      ))}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps)(AppRoutes);
