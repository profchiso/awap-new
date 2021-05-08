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
import BiologyChooseYear from "./Pages/ChooseYear";
import BiologyUntimedPQ from "./Pages/UntimedPQ";
import BiologyChooseType from "./Pages/ChooseType";
import Answers from "./Pages/Answers/BiologyAnswers";
import PracticeQuestion from "./Pages/PracticeQuestion";
import { biologyPQYear } from "./DB/BiologyPQ";
import MobilePq from "./Pages/MobilePq";
import Statistics from "./Pages/Statistics";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsPage from "./Pages/TermsPage";

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
                <Login/>
              </ProtectedRoute>

              <ProtectedRoute path="/sign-up">
                <SignUP/>
              </ProtectedRoute>

              <ProtectedRoute path="/pq/biology-choose-year">
                <BiologyChooseYear />
              </ProtectedRoute>

              <ProtectedRoute path="/pq/practice">
                <PracticeQuestion />
              </ProtectedRoute>

              <ProtectedRoute path="/pq/biology-choose-type">
                <BiologyChooseType />
              </ProtectedRoute>

              <ProtectedRoute path="/pq/biology-untimed">
                <BiologyUntimedPQ />
              </ProtectedRoute>

              <ProtectedRoute path="/pq/mobile-biology-Pq">
                <MobilePq />
              </ProtectedRoute>

              {/* <ProtectedRoute path="/stats">
                <Statistics />
              </ProtectedRoute> */}

              <Route path="/privacy" component={PrivacyPolicy} />

              <Route path="/stats" component={Statistics} />

              <Route path="/terms" component={TermsPage} />

              {biologyPQYear.map((item, index) => (
                <ProtectedRoute key={index} path={item.url}>
                  <Answers />
                </ProtectedRoute>
              ))}

              <Route path="*" component={Unavailable} />
            </Switch>
          </ThemeProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
}
