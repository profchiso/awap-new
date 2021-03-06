import React from 'react'
import {  Redirect } from 'react-router-dom';
import { connect } from "react-redux";

import { login, saveLoginUserDataToState,clearLoginRelatedErrors } from "../redux/actions/login";
import Sidebar from '../Dashboard/components/Sidebar';
import Dashboard from '../Dashboard/pages/Dashboard';
// import Settings from '../Dashboard/pages/Settings';
// import Tables from '../Dashboard/pages/Tables';
// import Maps from '../Dashboard/pages/Maps';
import Footer from '../Dashboard/components/Footer';


// Tailwind CSS Style Sheet
import '../assets/styles/tailwind.css';


function DashboardApp(props) {
  return (
    <>
    {props.loginReducer.token==="" && <Redirect to="/"/> }
    <Sidebar />
    <div className="md:ml-64">
      <Dashboard/>
        {/* <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/tables" component={Tables} />
            <Route exact path="/maps" component={Maps} />
            <Redirect from="*" to="/" />
        </Switch> */}
        <Footer />
    </div>
</>
  )
}

const mapStateToProps = (state) => {

  return {
    ...state,
  };
};

export default connect(mapStateToProps, {
  login,
  saveLoginUserDataToState,
  clearLoginRelatedErrors
})(DashboardApp);