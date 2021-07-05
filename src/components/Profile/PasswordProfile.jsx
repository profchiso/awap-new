import React, { useEffect, useState } from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";

export default function PasswordProfile(props) {
  const [values, setValues] = useState({
    newPassword: "",
    oldPassword: "",
    confirmPassword: "",
    showPassword: false,
    keepLoggedIn: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
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

  console.log("values", values);

  return (
    <div className="w-full p-10" onClick={props.onClick}>
      <h3 className="text-2xl font-medium">Change Password</h3>
      <br />
      <FormControl className="w-full my-4" variant="outlined">
        <p className="mb-3 w-full text-sm">Old Password</p>

        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.oldPassword}
          onChange={handleChange("oldPassword")}
          name="password"
          endAdornment={
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
          }
        />
      </FormControl>

      <ValidatorForm
        className="pb-4"
        validate="true"
        ref={React.createRef("form")}
        onSubmit={handleSubmit}
        onError={(errors) => console.log(errors)}
      >
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
            validators={["required", "isPasswordValid", "isPasswordMatch"]}
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
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
      </ValidatorForm>

      <button className="bg-gradient-to-r from-ansBlue2 to-ansBlue3 p-3 text-white m-1 font-body font-medium text-base rounded w-full">
        Save Changes
      </button>
    </div>
  );
}
