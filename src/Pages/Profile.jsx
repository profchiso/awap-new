import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MobileHeader from "../components/Header/MobileHeader";
import useWindowDimensions from "../Hooks/UseWindowDimension";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import PasswordProfile from "../components/Profile/PasswordProfile";
import PersonalInfo from "../components/Profile/Personalnfo";
import HeaderRowOne from "../components/Header/HeaderRowOne";

function Profile(props) {
  const { width } = useWindowDimensions();
  const [currentPath, setcurrentPath] = useState(window.location.pathname);
  const token = props?.loginReducer?.token;

  if (token) {
    return (
      <div className="bg-f8">
        {width < 640 ? (
          <div className="block bg-blueOne pb-6 pl-2 sm:hidden bg-white">
            <MobileHeader />
          </div>
        ) : (
          //   <Header />
          <div className="shadow py-005 bg-white">
            <HeaderRowOne />
          </div>
        )}
        <div className=" max-w-screen-xl mx-auto h-full">
          <Router>
            <div className="flex gap-12 justify-center py-12">
              <div className="flex flex-col gap-3 text-gray-700 font-medium">
                <p className="pl-4">ACCOUNT</p>
                <NavLink
                  to="/profile"
                  className={
                    currentPath === "/profile"
                      ? "bg-gradient-to-r from-ansBlue2 to-ansBlue3 hover:text-white text-white py-3 px-4 rounded"
                      : "text-gray-600 hover:text-primary pl-4  py-3"
                  }
                  onClick={() => setcurrentPath("/profile")}
                >
                  Personal Information
                </NavLink>
                <NavLink
                  to="/profile/password"
                  className={
                    currentPath === "/profile/password"
                      ? "bg-gradient-to-r from-ansBlue2 to-ansBlue3 hover:text-white text-white py-3 px-4 rounded"
                      : "text-gray-600 hover:text-primary pl-4  py-3"
                  }
                  onClick={() => setcurrentPath("/profile/password")}
                >
                  Password
                </NavLink>
              </div>
              <div className="bg-white shadow-sm w-full max-w-2xl">
                <Route exact path="/profile">
                  <PersonalInfo />
                </Route>
                <Route path="/profile/password">
                  <PasswordProfile />
                </Route>
              </div>
            </div>
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
  return <Redirect to="/login" />;
}
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps)(Profile);
