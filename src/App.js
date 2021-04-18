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
import AppRoutes from "./Routes/AppRoutes";

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
              <Route path="/login" component={Login} />
              <Route path="/sign-up" component={SignUP} />

              <AppRoutes />

              <Route path="*" component={Unavailable} />
            </Switch>
          </ThemeProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
}
