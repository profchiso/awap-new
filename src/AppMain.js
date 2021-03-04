import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import LandingPage from "./Pages/LandingPage";
import 'react-multi-carousel/lib/styles.css';
import UntimedPQ from "./Pages/UntimedPQ";
import ChooseYear from "./Pages/ChooseYear";
import Login from "./Pages/Login"

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
              <Route exact path="/login" component={Login} />
              <Route path="/untimed-pq" component={UntimedPQ} />
              <Route path="/choose-year" component={ChooseYear} />
            </Switch>
          {/* </Provider> */}
          </ThemeProvider>
        </Router>
    );
  }
}

export default App;
