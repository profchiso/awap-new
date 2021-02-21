import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import LandingPage from "./Pages/LandingPage";

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
            </Switch>
          {/* </Provider> */}
          </ThemeProvider>
        </Router>
    );
  }
}

export default App;
