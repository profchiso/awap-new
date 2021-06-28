import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { ReactComponent as Person } from "../../assets/svgs/person.svg";
import { clearLoginRelatedErrors } from "../../redux/actions/login";
import { connect } from "react-redux";
import {
  registrationError,
  clearRegisterRelatedErrors,
} from "../../redux/actions/register";
import { Link } from "react-router-dom";

function EnterEmail(props) {
  const [values, setValues] = React.useState({
    email: "",
  });
  const [isButtonClicked, setisButtonClicked] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    props.clearLoginRelatedErrors();
    props.registrationError();
  };

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   props.loginRequest({ email, password });
  //   setisButtonClicked(true);
  // };

  React.useEffect(() => {
    if (props.error) {
      setisButtonClicked(false);
    }
  }, [props.error]);

  return (
    <div className="flex justify-center mt-8 sm:mt-12 h-screen">
      <div className="py-2 px-auto  sm:w-4/6 lg:w-9/20 h-full sm:h-auto">
        <div className="sm:rounded-md  w-full  bg-white sm:shadow-login max-w-screen-md mx-auto h-full sm:h-auto">
          <div className="px-6 sm:px-10 md:px-0 md:w-4/6 mx-auto">
            <div className=" py-16 ">
              <div className="flex justify-center text-xl text-primary">
                Reset Password.
              </div>
              <p className="text-center text-base mt-4">
                {" "}
                A link will be sent to your email to reset your password
              </p>
            </div>

            <form className="sm:pt-12 ">
              <div className="flex justify-center sm:pb-16 font-body">
                <TextField
                  id="standard-basic"
                  placeholder="Enter Email"
                  className="w-full m-5 p-4  my-4 font-body"
                  onChange={handleChange("email")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person className="mr-5 mb-1" />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>

              <div className="flex justify-center pt-16 pb-16 px-20">
                <Link
                  to="/change-password"
                  // onClick={(e) => handleLogin(e)}
                  className="text-white hover:text-white flex gap-5 bg-primary shadow-primary px-12 py-2 rounded-md focus:outline-none text-sm lg:text-base"
                >
                  <span className="">Get Link</span>
                </Link>
              </div>
            </form>
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
})(EnterEmail);
