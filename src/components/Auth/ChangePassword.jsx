import React, { useEffect, useState } from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import { clearLoginRelatedErrors } from "../../redux/actions/login";
import { connect } from "react-redux";
import {
  registrationError,
  clearRegisterRelatedErrors,
} from "../../redux/actions/register";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

function ChangePassword(props) {
  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
    showPassword: false,
    keepLoggedIn: false,
  });

  const [isButtonClicked, setisButtonClicked] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    props.clearLoginRelatedErrors();
    props.registrationError();
  };

  const { email, password } = values;

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

  const handleSubmit = () => {
    // your submit logic
  };
  const handleCheckChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.checked });
  };
  useEffect(() => {
    // custom rule will have name 'isPasswordValid'
    ValidatorForm.addValidationRule("isPasswordValid", (value) => {
      if (value.length < 5) {
        return false;
      }
      return true;
    });
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== values.password) {
        return false;
      }
      return true;
    });
    return () => {
      //cleanup: remove rule when it is not needed
      ValidatorForm.removeValidationRule("isPasswordValid");
      ValidatorForm.removeValidationRule("isPasswordMatch");
    };
  }, [values.password]);

  return (
    <div className="flex justify-center mt-8 sm:mt-12 h-screen">
      <div className="py-2 px-auto  sm:w-4/6 lg:w-9/20 h-full sm:h-auto">
        <div className="sm:rounded-md  w-full  bg-white sm:shadow-login max-w-screen-md mx-auto h-full sm:h-auto">
          <div className="px-6 sm:px-10 md:px-0 md:w-4/6 mx-auto">
            <div className=" py-16 ">
              <div className="flex justify-center text-xl text-primary">
                Change Password.
              </div>
              <p className="text-center text-base mt-4">
                Enter new secure password that you can remember
              </p>
            </div>

            <div className="flex flex-col gap-5 max-w-md pb-4">
              <ValidatorForm
                className="flex flex-col gap-5 max-w-md pb-4"
                validate="true"
                autoComplete="on"
                ref={React.createRef("form")}
                onSubmit={handleSubmit}
                onError={(errors) => console.log(errors)}
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
                    validators={["required", "isPasswordValid"]}
                    errorMessages={[
                      "This field is required",
                      "Password is less than 5 characters",
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
                      "isPasswordValid",
                      "isPasswordMatch",
                    ]}
                    errorMessages={[
                      "This field is required",
                      "Password is less than 5 characters",
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
                </div>
              </ValidatorForm>
            </div>

            <div className="flex justify-center pt-16 pb-16 px-20">
              <button
                type="button"
                // onClick={(e) => handleLogin(e)}
                className="text-white flex gap-5 bg-primary shadow-primary px-12 py-2 rounded-md focus:outline-none text-sm lg:text-base"
              >
                <span className="">Update</span>
              </button>
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
  clearLoginRelatedErrors,
  registrationError,
  clearRegisterRelatedErrors,
})(ChangePassword);
