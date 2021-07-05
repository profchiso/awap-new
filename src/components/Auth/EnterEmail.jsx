import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import {
  clearLoginRelatedErrors,
  forgotPassword,
  resetPassword,
} from "../../redux/actions/login";
import { connect } from "react-redux";
import {
  registrationError,
  clearRegisterRelatedErrors,
} from "../../redux/actions/register";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import validator from "validator";
import { Button } from "@material-ui/core";

function EnterEmail(props) {
  const [values, setValues] = React.useState({
    email: "",
  });
  const [linkSent, setlinkSent] = useState(false);
  const [emailError, setEmailError] = useState(true);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });

    if (validator.isEmail(event.target.value)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
    // props.clearLoginRelatedErrors();
    // props.registrationError();
  };

  console.log({ values, emailError });

  const handleSubmit = (event) => {
    props.forgotPassword(values);
    setlinkSent(true);
  };

  return (
    <div className="flex justify-center mt-8 sm:mt-12 h-screen">
      <div className="py-2 px-auto  sm:w-4/6 lg:w-9/20 h-full sm:h-auto">
        <div className="sm:rounded-md  w-full  bg-white sm:shadow-login max-w-screen-md mx-auto h-full sm:h-auto">
          <div className="px-6 sm:px-10 md:px-0 md:w-4/6 mx-auto">
            <div className=" py-16 ">
              <div className="flex justify-center text-xl text-primary">
                Forgot Password.
              </div>
            </div>

            <div className="sm:pt-12">
              <div className=" sm:mb-16">
                <div className="flex justify-center font-body">
                  <TextField
                    id="standard-basic"
                    placeholder="Enter Email"
                    type="email"
                    className="w-full m-5 p-4  my-4 font-body"
                    onChange={handleChange("email")}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailRoundedIcon color="primary" className="mr-5" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                {emailError ? (
                  values.email ? (
                    <p className="text-red-500 text-sm pt-3">
                      Enter Valid Email
                    </p>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
                {linkSent && (
                  <p className="text-green-600 text-base pt-4">
                    A link has been sent to your email
                  </p>
                )}
              </div>

              <div className="flex justify-center pt-16 pb-16 px-20">
                <Button
                  disabled={emailError}
                  onClick={handleSubmit}
                  color="primary"
                  variant="contained"
                  className="text-white hover:text-white flex gap-5 bg-primary shadow-primary  rounded-md focus:outline-none text-base"
                >
                  <span className="font-body text-base capitalize text-capitalize px-12 py-1.5">
                    Submit
                  </span>
                </Button>
              </div>
            </div>
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
  forgotPassword,
  resetPassword,
  clearLoginRelatedErrors,
  registrationError,
  clearRegisterRelatedErrors,
})(EnterEmail);
