import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { ReactComponent as DeleteIcon } from "../../assets/svgs/DeleteIcon.svg";
import TextField from "@material-ui/core/TextField";
import MaterialUiPhoneNumber from "material-ui-phone-number";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  xlarge: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

function PersonalInfo(props) {
  const classes = useStyles();
  const { user } = props.loginReducer;
  const [img, setImg] = useState("");
  const [phone, setphone] = useState("");

  const handleImgChange = (event) => {
    setImg(URL.createObjectURL(event.target.files[0]));
    console.log(URL.createObjectURL(event.target.files[0]));
  };
  const handleDeleteImg = () => {
    setImg("");
  };
  const handlePhoneChange = (value) => {
    if (value) {
      setphone(value);
    }
  };
  return (
    <div className="max-w-2xl p-10" onClick={props.onClick}>
      <h3 className="text-2xl font-medium">Personal Info</h3>
      <br />
      <div className="flex w-full">
        <div className="w-full max-w-ts3 relative">
          <div className={classes.root}>
            <Avatar
              // src={user.avatar !== "" ? user.avatar : img}
              src={img}
              className={classes.xlarge}
            />
          </div>

          <input
            accept="image/*"
            className="hidden"
            id="icon-button-file"
            type="file"
            onChange={(event) => handleImgChange(event)}
          />
          <label
            htmlFor="icon-button-file"
            className="absolute top-2 left-2 Mui_Picture_Label"
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              className="rounded-full h-24 w-24 flex items-center justify-center"
            >
              <div className="text-sm font-medium w-full h-full text-transparent hover:text-white">
                Change Picture
              </div>
            </IconButton>
          </label>
          <IconButton
            className="float-right absolute right-3 bottom-8"
            onClick={handleDeleteImg}
          >
            <DeleteIcon className="scale-110" />
          </IconButton>
        </div>
        <div className="w-full pb-24">
          <div className="w-full mt-6">
            <p className="mb-3 w-full text-sm">First Name</p>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="w-full"
            />
          </div>
          <div className="w-full mt-6">
            <p className="mb-3 w-full text-sm">Last Name</p>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="w-full"
            />
          </div>
          <div className="w-full mt-6">
            <p className="mb-3 w-full text-sm text-gray-400">Email</p>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="johndoe@gmail.com"
              className="w-full"
              disabled
            />
          </div>
          <div className="w-full mt-6">
            <p className="mb-3 w-full text-sm">Phone Number</p>
            <MaterialUiPhoneNumber
              name="phone"
              data-cy="user-phone"
              defaultCountry={"ng"}
              variant="outlined"
              value={phone}
              onChange={handlePhoneChange}
              autoComplete="phone-number"
              className="w-full"
              defaultValue={phone}
            />
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
export default connect(mapStateToProps)(PersonalInfo);
