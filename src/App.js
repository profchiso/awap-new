import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import LandingPage from "./Pages/LandingPage";
import "react-multi-carousel/lib/styles.css";
import BiologyUntimedPQ from "./Pages/UntimedPQ";
import BiologyChooseYear from "./Pages/ChooseYear";
import BiologyChooseType from "./Pages/ChooseType";
import Login from "./Pages/Login";
import SignUP from "./Pages/SignUp";
import Answers from "./Pages/Answers/BiologyAnswers";
import PracticeQuestion from "./Pages/PracticeQuestion"
// import ProtectedRoute from "./Pages/ProtectedRoute";
import { biologyPQYear } from "./DB/BiologyPQ";
import Unavailable from "./Pages/404";
import {store,persistor} from "./redux/store/store";

//const {store,persistor} = storeObject

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0D065F",
    },
  },
});

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <Router>
          <ThemeProvider theme={theme}>
            {/* <Provider store={store}> */}
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/login" component={Login} />
              <Route exact path="/sign-up" component={SignUP} />

              {/* BIOLOGY PQ */}
              <Route
                path="/pq/biology-choose-year"
                component={BiologyChooseYear}
              />
              <Route
                path="/pq/practice"
                component={PracticeQuestion}
              />
              <Route
                path="/pq/biology-choose-type"
                component={BiologyChooseType}
              />
              {/* <Route
                path="/pq"
                component={BiologyChooseType}
              /> */}
              <Route path="/pq/biology-untimed" component={BiologyUntimedPQ} />

              {biologyPQYear.map((item, index) => (
                <Route key={index} path={item.url} component={Answers} />
              ))}
                {/* <Route path="/pq/answers" component={Answers} /> */}

              <Route path="*" component={Unavailable} />

              {/* FOR LATER USE */}
              {/* <ProtectedRoute path="/untimed-pq" component={UntimedPQ} />
              <ProtectedRoute path="/choose-year" component={ChooseYear} /> */}
            </Switch>
            {/* </Provider> */}
          </ThemeProvider>
        </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
