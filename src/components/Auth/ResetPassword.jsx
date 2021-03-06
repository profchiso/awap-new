import React, { useEffect, useState } from "react";
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
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

function ResetPassword(props) {
  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
    showPassword: false,
    keepLoggedIn: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    props.clearLoginRelatedErrors();
    props.registrationError();
  };

  const handlePasswordChange = (event) => {
    setValues({
      ...values,
      password: event.target.value,
    });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  console.log(
    { password: values.password, confirmPassword: values.confirmPassword },
    props.token
  );
  const handleSubmit = () => {
    props.resetPassword(
      { password: values.password, confirmPassword: values.confirmPassword },
      props.token
    );
  };

  useEffect(() => {
    // custom rule will have name 'isPasswordValid'
    // ValidatorForm.addValidationRule("isPasswordValid", (value) => {
    //   if (value.length < 8) {
    //     return false;
    //   }
    //   return true;
    // });
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== values.password) {
        return false;
      }
      return true;
    });
    return () => {
      //cleanup: remove rule when it is not needed
      // ValidatorForm.removeValidationRule("isPasswordValid");
      ValidatorForm.removeValidationRule("isPasswordMatch");
    };
  }, [values.password]);

  return (
    <div className="flex justify-center mt-8 sm:mt-10 h-screen">
      <div className="py-2 px-auto  sm:w-4/6 lg:w-9/20 h-full sm:h-auto">
        <div className="sm:rounded-md  w-full  bg-white sm:shadow-login max-w-screen-md mx-auto h-full sm:h-auto">
          <div className="px-6 sm:px-10 md:px-0 md:w-4/6 mx-auto">
            <div className=" py-16 ">
              <div className="flex justify-center text-xl text-primary">
                Reset Password.
              </div>
              <p className="text-center text-base mt-4">
                Enter new secure password that you can remember
              </p>
            </div>

            <div className="max-w-md pb-4">
              <ValidatorForm
                className="flex flex-col gap-5 max-w-md pb-4"
                validate="true"
                autoComplete="on"
                ref={React.createRef("form")}
                onSubmit={handleSubmit}
                // onError={(errors) => console.log(errors)}
              >
                <div>
                  <p className="font-medium text-gray-500 mb-3">New Password</p>
                  <TextValidator
                    id="outlined-adornment-password"
                    variant="outlined"
                    className="w-full"
                    placeholder="Password"
                    onChange={handlePasswordChange}
                    name="password"
                    value={values.password}
                    autoComplete="password"
                    type={values.showPassword ? "text" : "password"}
                    validators={["required"]}
                    errorMessages={[
                      "This field is required",
                      // "Password is less than 8 characters",
                    ]}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-500 mb-3">
                    Confirm New Password
                  </p>
                  <TextValidator
                    id="outlined-adornment-password"
                    variant="outlined"
                    className="w-full"
                    placeholder="Confirm Password"
                    onChange={handleChange("confirmPassword")}
                    name="password"
                    value={values.confirmPassword}
                    autoComplete="password"
                    type={values.showPassword ? "text" : "password"}
                    validators={[
                      "required",
                      // "isPasswordValid",
                      "isPasswordMatch",
                    ]}
                    errorMessages={[
                      "This field is required",
                      // "Password is less than 8 characters",
                      "Password mismatch",
                    ]}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  {props.loginReducer?.error?.message && (
                    <p className="pt-4 text-red-500">
                      {props.loginReducer?.error?.message}
                    </p>
                  )}
                </div>

                <div className="flex justify-center py-10 px-20">
                  <button
                    type="submit"
                    // onClick={(e) => handleLogin(e)}
                    className="text-white flex gap-5 bg-primary shadow-primary px-12 py-2 rounded-md focus:outline-none text-base"
                  >
                    <span className="font-medium">Update</span>
                  </button>
                </div>
              </ValidatorForm>
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
})(ResetPassword);
