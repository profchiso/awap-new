import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import LandingPage from "./Pages/LandingPage";
import "react-multi-carousel/lib/styles.css";
import Login from "./Pages/Login";
import SignUP from "./Pages/SignUp";
import Unavailable from "./Pages/404";
import { store, persistor } from "./redux/store/store";
import ProtectedRoute from "./Routes/ProtectedRoute";
import ChooseYear from "./Pages/ChooseYear";
// import UntimedPQ from "./Pages/UntimedPQ";
// import TimedPQ from "./Pages/TimedPQ";
// import ChooseType from "./Pages/ChooseType";
import UntimedPracticeQuestion from "./Pages/UnTimedPracticeQuestion";
import TimedPracticeQuestion from "./Pages/TimedPracticeQuestion";
// import MobilePq from "./Pages/MobilePq";
import Statistics from "./Pages/Statistics";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsPage from "./Pages/TermsPage";
import UnderConstruction from "./Pages/UnderConstruction";
// import ChooseSubject from "./Pages/ChooseSubject";
// import AnsweredBefore from "./Pages/AnsweredBefore";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPasswordPage";
import Profile from "./Pages/Profile";
// import ViewSolutions from "./Pages/ViewSolutions";
import DashboardApp from "./Pages/Dashboard";
import Activate from "./Dashboard/pages/Activate";


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0D065F",
    },
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <ThemeProvider theme={theme}>
            <Switch>
              <Route exact path="/" component={LandingPage} />

              <ProtectedRoute path="/login">
                <Login />
              </ProtectedRoute>

              <ProtectedRoute path="/sign-up">
                <SignUP />
              </ProtectedRoute>

              <ProtectedRoute path="/pq/subject-choose-year">
                <ChooseYear />
              </ProtectedRoute>

              <ProtectedRoute path="/pq/practice-untimed">
                <UntimedPracticeQuestion />
              </ProtectedRoute>

              <ProtectedRoute path="/pq/practice-timed">
                <TimedPracticeQuestion />
              </ProtectedRoute>

              {/* <ProtectedRoute path="/pq/subject-choose-type">
                <ChooseType />
              </ProtectedRoute>

              <ProtectedRoute path="/pq/subject-untimed">
                <UntimedPQ />
              </ProtectedRoute> */}

              
              {/* <ProtectedRoute path="/pq/view-solution">
                <ViewSolutions />
              </ProtectedRoute> */}

              {/* <ProtectedRoute path="/pq/subject-timed">
                <TimedPQ />
              </ProtectedRoute> */}

              {/* <ProtectedRoute path="/pq/mobile-subject-Pq">
                <MobilePq />
              </ProtectedRoute> */}

              <Route path="/privacy" component={PrivacyPolicy} />

              {/* <Route path="/stats" component={Statistics} /> */}

              <Route path="/dashboard" component={DashboardApp} />
              <Route path="/deposit" component={DashboardApp} />
              <Route path="/activate" component={Activate}  />
              <Route path="/dollar-transfer" component={DashboardApp} />
              <Route path="/convert-fund" component={DashboardApp} />
              <Route path="/my-team" component={DashboardApp} />
              <Route path="/invest" component={DashboardApp} />
              <Route path="/loan" component={DashboardApp} />
              <Route path="/savings" component={DashboardApp} />
              <Route path="/share-market" component={UnderConstruction} />

              <Route path="/terms" component={TermsPage} />

              {/* <Route path="/choose-subject" component={ChooseSubject} /> */}


              {/* <Route path="/answered" component={AnsweredBefore} /> */}

              <Route path="/forgot-password" component={ForgotPassword} />

              <Route path="/reset-password/:token" component={ResetPassword} />
              <Route path="/profile" component={Profile} />

              {/* TODO */}
              {/* <Route path="/change-password" component={ChangePassword} /> */}

              <Route path="/under-construction" component={UnderConstruction} />

              <Route path="*" component={Unavailable} />
            </Switch>
          </ThemeProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
}
