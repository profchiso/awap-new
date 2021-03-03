import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import LandingPage from "./Pages/LandingPage";
import 'react-multi-carousel/lib/styles.css';
import UntimedPQ from "./Pages/UntimedPQ";
import ChooseYear from "./Pages/ChooseYear";
import Login from "./Pages/Login"
import ProtectedRoute from "./Pages/ProtectedRoute";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0D065F',
    },
  },
})


class App extends React.Component {
  render() {
    return (
        <Router>
        <ThemeProvider theme={theme}>
          {/* <Provider store={store}> */}
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/login" component={Login} />
              <ProtectedRoute path="/untimed-pq" component={UntimedPQ} />
              <ProtectedRoute path="/choose-year" component={ChooseYear} />
            </Switch>
          {/* </Provider> */}
          </ThemeProvider>
        </Router>
    );
  }
}

export default App;
