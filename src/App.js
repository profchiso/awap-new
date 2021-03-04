import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import LandingPage from "./Pages/LandingPage";
import "react-multi-carousel/lib/styles.css";
import UntimedPQ from "./Pages/UntimedPQ";
import ChooseYear from "./Pages/ChooseYear";
import Login from "./Pages/Login";
import ProtectedRoute from "./Pages/ProtectedRoute";

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
              <Route exact path="/login" component={Login} />
              <ProtectedRoute path="/untimed-pq" component={UntimedPQ} />
              <ProtectedRoute path="/choose-year" component={ChooseYear} />
            </Switch>
            {/* </Provider> */}
          </ThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;
