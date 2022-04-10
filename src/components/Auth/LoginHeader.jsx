import React from "react";
import { connect } from "react-redux";
import awapLogo from "../../assets/images/awapLogo.png";

import { Link } from "react-router-dom";
import {
  registrationError,
  clearRegisterRelatedErrors,
} from "../../redux/actions/register";
import { clearLoginRelatedErrors } from "../../redux/actions/login";

function LoginHeader(props) {
  return (
    <div className="shadow-awesumOne bg-white">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center py-1 sm:py-3 px-10 ">
        <div>
          <div className="transform md:scale-80 scale-70 hidden md:block">
          <Link to="/">
            <img src={awapLogo} alt="Awap"  className="rounded-full" width="90px" height="90px"/>
          </Link>
          </div>
          <div className="block md:hidden">
            <Link to="/">
              <img src={awapLogo} alt="" className="rounded-full" width="40px" height="40px" />
            </Link>
          </div>
        </div>
        <div>
          <div className="flex ">
            <Link
              onClick={() => {
                props.clearRegisterRelatedErrors();
                props.clearLoginRelatedErrors();
              }}
              to={
                window.location.pathname.includes("login")
                  ? "/sign-up"
                  : "/login"
              }
              className="text-white hover:text-white bg-primary shadow-primary px-8 font-body py-2 rounded-md focus:outline-none text-sm lg:text-base"
            >
              {window.location.pathname.includes("login") ? "Sign Up" : "Login"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps, {
  clearLoginRelatedErrors,
  registrationError,
  clearRegisterRelatedErrors,
})(LoginHeader);
