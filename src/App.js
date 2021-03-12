import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import LandingPage from "./Pages/LandingPage";
import "react-multi-carousel/lib/styles.css";
import BiologyUntimedPQ from "./Pages/UntimedPQ";
import BiologyChooseYear from "./Pages/ChooseYear";
import BiologyChooseType from "./Pages/ChooseType";
import Login from "./Pages/Login";
import Answers from "./Pages/Answers/BiologyAnswers";
// import ProtectedRoute from "./Pages/ProtectedRoute";
import { biologyPQYear } from "./DB/BiologyPQ";
import Unavailable from "./Pages/404";

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
        <Router>
          <ThemeProvider theme={theme}>
            {/* <Provider store={store}> */}
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/login" component={Login} />

              {/* BIOLOGY PQ in order*/}
              <Route
                path="/pq/biology-choose-year"
                component={BiologyChooseYear}
              />
              <Route
                path="/pq/biology-choose-type"
                component={BiologyChooseType}
              />
              <Route path="/pq/biology-untimed" component={BiologyUntimedPQ} />
              {/* <Route path="/pq/answers-biology-2000" component={Answers} /> */}

              {biologyPQYear.map((item, index) => (
                  <Route
                    key={index}
                    path={item.url}
                    component={Answers}
                  />
              ))}
              <Route path="*" component={Unavailable} />

              {/* FOR LATER USE */}
              {/* <ProtectedRoute path="/untimed-pq" component={UntimedPQ} />
              <ProtectedRoute path="/choose-year" component={ChooseYear} /> */}
            </Switch>
            {/* </Provider> */}
          </ThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;
