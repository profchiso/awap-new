import React, { useEffect, useState } from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { updatePassword } from "../../redux/actions/profile";
import { connect } from "react-redux";

function PasswordProfile(props) {
  const [values, setValues] = useState({
    newPassword: "",
    oldPassword: "",
    confirmPassword: "",
    showPassword: false,
    keepLoggedIn: false,
  });
  const { token } = props.loginReducer;
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updatePassword(
      {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
        newConfirmPassword: values.confirmPassword,
      },
      token
    );
    // your submit logic
  };

  useEffect(() => {
    // custom rule will have name 'isPasswordValid'
    // ValidatorForm.addValidationRule("isPasswordValid", (value) => {
    //   if (value.length < 5) {
    //     return false;
    //   }
    //   return true;
    // });

    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      console.log("value:", value, "values:", values);

      if (value !== values.newPassword) {
        return false;
      }
      return true;
    });
    return () => {
      //cleanup: remove rule when it is not needed
      // ValidatorForm.removeValidationRule("isPasswordValid");
      ValidatorForm.removeValidationRule("isPasswordMatch");
    };
  }, [values.newPassword, values.oldPassword, values.confirmPassword]);

  return (
    <div className="w-full p-10" onClick={props.onClick}>
      <h3 className="text-2xl font-medium">Change Password</h3>
      <br />

      <ValidatorForm
        className=""
        validate="true"
        ref={React.createRef("form")}
        onSubmit={handleSubmit}
        onError={(errors) => console.log(errors)}
      >
        <div className="w-full">
          <p className="mb-3 w-full text-sm">Old Password</p>
          <TextValidator
            id="outlined-adornment-password"
            variant="outlined"
            className="w-full"
            placeholder="Password"
            onChange={handleChange("oldPassword")}
            name="password"
            value={values.oldPassword}
            type={values.showPassword ? "text" : "password"}
            // validators={["required", "isPasswordValid"]}
            // errorMessages={[
            //   "This field is required",
            //   "Password is less than 5 characters",
            // ]}
            validators={["required"]}
            errorMessages={["This field is required"]}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div className="w-full mt-6">
          <p className="mb-3 w-full text-sm">New Password</p>
          <TextValidator
            id="outlined-adornment-password"
            variant="outlined"
            className="w-full"
            placeholder="Password"
            onChange={handleChange("newPassword")}
            name="password"
            value={values.newPassword}
            type={values.showPassword ? "text" : "password"}
            validators={["required"]}
            errorMessages={["This field is required"]}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div className="my-6">
          <p className="mb-3 text-sm">Confirm New Password</p>
          <TextValidator
            id="outlined-adornment-password"
            variant="outlined"
            className="w-full"
            placeholder="Confirm Password"
            onChange={handleChange("confirmPassword")}
            name="password"
            value={values.confirmPassword}
            type={values.showPassword ? "text" : "password"}
            validators={["required", "isPasswordMatch"]}
            errorMessages={["This field is required", "Password mismatch"]}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>

        <br />

        {(values.newPassword ||
          values.oldPassword ||
          values.confirmPassword) && (
          <button
            className="bg-gradient-to-r from-ansBlue2 to-ansBlue3 p-3 text-white m-1 font-body font-medium text-base rounded w-full"
            type="submit"
          >
            Save Changes
          </button>
        )}
      </ValidatorForm>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps, {
  updatePassword,
})(PasswordProfile);
