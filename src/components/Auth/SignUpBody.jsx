import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import GoogleButton from "./GoogleButton";
import { ReactComponent as Person } from "../../assets/svgs/person.svg";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import { Checkbox, FormControl, IconButton, Input } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Link, useHistory } from "react-router-dom";
import { clearLoginRelatedErrors } from "../../redux/actions/login";
import { connect } from "react-redux";
import { registrationError } from "../../redux/actions/register";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  // textField: {
  //   width: "60%",
  // },
  inputField: {
    fontFamily: "Google Sans",
  },
  iconButton: {
    marginLeft: "-0.75rem !important",
  },
}));

function SignUpBody(props) {
  const classes = useStyles();
  const history = useHistory();
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
    email: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });
  const [isButtonClicked, setisButtonClicked] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    // props.clearLoginRelatedErrors()
    // props.registrationError()
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [checked, setChecked] = useState(false);

  const handleCheckChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    let signUpData = {
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
      lastName: values.lastName,
      firstName: values.firstName,
      userName:values.userName
    };
    // console.log(signUpData);
    await props.signUpRequest(signUpData);
    setValues({
      ...values,
      email: "",
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      confirmPassword: "",
    });
    if (!!props?.success) {
      history.push("/");
    }

    setisButtonClicked(true);
  };

  React.useEffect(() => {
    if (!props?.success) {
      setisButtonClicked(false);
    }
  }, [props.error]);

  return (
    <div className="flex justify-center mt-4">
      <div className="py-2 px-auto w-11/12 sm:w-4/6 lg:w-9/20">
        <div className="rounded-md shadow w-full bg-white shadow-login max-w-screen-md mx-auto">
          <div className="px-10 md:px-0 md:w-4/6 mx-auto">
            <div className="flex justify-center pt-8 pb-16  text-xl text-primary">
              Sign Up
            </div>
            <form>
              <div className="flex justify-start sm:justify-center pb-12  font-body">
                <div className="flex gap-12 flex-col sm:flex-row">
                  <TextField
                    id="standard-basic"
                    placeholder="First Name"
                    className="w-full m-5 p-4  my-4 font-body"
                    onChange={handleChange("firstName")}
                    value={values.firstName}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person className="mr-5 mb-1" />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    id="standard-basic"
                    placeholder="Last Name"
                    className="w-full m-5 p-4  my-4 font-body"
                    onChange={handleChange("lastName")}
                    value={values.lastName}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person className="mr-5 mb-1 " />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
              </div>

              <div className="flex justify-center pb-12  font-body">
              <TextField
                    id="standard-basic"
                    placeholder="Username"
                    className="w-full m-5 p-4  my-4 font-body"
                    onChange={handleChange("userName")}
                    value={values.userName}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person className="mr-5 mb-1" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>  

             

              <div className="flex justify-center pb-12  font-body">
                <TextField
                  id="standard-basic"
                  placeholder="Email"
                  className="w-full m-5 p-4  my-4 font-body"
                  onChange={handleChange("email")}
                  value={values.email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailRoundedIcon
                          color="primary"
                          className="mr-5 mb-1"
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
             

              <div className="flex justify-center pb-12 font-body">
                <FormControl className=" w-full">
                  <Input
                    id="standard-adornment-password"
                    placeholder="Password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    startAdornment={
                      <InputAdornment position="start">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          className={classes.iconButton}
                          color="primary"
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>

              <div className="flex justify-center pb-12 font-body">
                <FormControl className=" w-full">
                  <Input
                    id="standard-adornment-password"
                    placeholder="Confirm Password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.confirmPassword}
                    onChange={handleChange("confirmPassword")}
                    startAdornment={
                      <InputAdornment position="start">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          className={classes.iconButton}
                          color="primary"
                        >
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>

              {/* TO BE FIXED: SINCE IT PREVIOUSLY ALWAYS SHOW, EVEN IN AN EMPTY FORM */}
              {values.confirmPassword ? (
                <div>
                  <span style={{ color: "red" }}>{props.error}</span>
                </div>
              ) : null}
              <div>
                <span style={{ color: "green" }}>{props.success}</span>
              </div>

              <div className="pb-12 mt-3 flex flex-col justify-start items-start sm:flex-row sm:justify-center sm:items-center">
                <div className="flex items-center">
                  <Checkbox
                    checked={checked}
                    color="primary"
                    onChange={handleCheckChange}
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                  <span className="font-sm">Keep me logged in</span>
                </div>
                <div className="flex flex-1"></div>
              </div>

              <div className="flex justify-center py-3 px-20">
                <button
                  onClick={(e) => handleSignUp(e)}
                  className="flex gap-5 text-white bg-primary shadow-primary px-14 py-2 rounded-md focus:outline-none text-sm lg:text-base"
                >
                  Continue
                  {isButtonClicked &&
                    values.email &&
                    values.firstName &&
                    values.lastName &&
                    values.password &&
                    values.confirmPassword && (
                      <svg
                        class="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          class="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          stroke-width="4"
                        ></circle>
                        <path
                          class="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    )}
                </button>
              </div>
            </form>
            {/* <div className="flex justify-center py-3 px-20">or</div>
            <GoogleButton textName="Sign Up" /> */}
            <div className="my-4"></div>
          </div>

          <div className="justify-center w-full bg-gray-50 h-full py-6">
            <div className="py-2 flex justify-center horizontal_Line max-w-3/4 mx-auto whitespace-nowrap">
              Already have an account?
            </div>
            <div className="py-2 flex justify-center">
              <Link
                to="/login"
                className="text-primary hover:text-primary bg-white shadow-primary px-20 py-4 rounded-md focus:outline-none text-sm lg:text-base"
              >
                Login
              </Link>
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
})(SignUpBody);
