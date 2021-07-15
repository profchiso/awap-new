import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { ReactComponent as DeleteIcon } from "../../assets/svgs/DeleteIcon.svg";
import TextField from "@material-ui/core/TextField";
import MaterialUiPhoneNumber from "material-ui-phone-number";
import { updateAvatar } from "../../redux/actions/profile";

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
  const [img, setImg] = useState({ avatar: "" });
  const [phone, setphone] = useState("");

  const handleImgChange = (event) => {
    const data = new FormData() 
    
    console.log(data)
    setImg({ avatar: URL.createObjectURL(event.target.files[0]) });
    console.log("url", URL.createObjectURL(event.target.files[0]));

    data.append('file', event.target.files[0])

    // console.log("event", event.target.files[0]);
    // props.updateAvatar(event.target.files[0]);
  };
  const handleDeleteImg = () => {
    setImg({});
  };
  const handlePhoneChange = (value) => {
    if (value) {
      setphone(value);
    }
  };
  return (
    <div className="max-w-2xl pt-6 pb-10 px-6" onClick={props.onClick}>
      <div className="flex w-full">
        <div className="w-full max-w-ts3 relative">
          <div className={classes.root}>
            <Avatar
              // src={user.avatar !== "" ? user.avatar : img}
              src={user.avatar !== "" ? user.avatar : img.avatar}
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
        <div className="w-full px-3">
          <div className="w-full mt-6">
            <p className="mb-3 w-full text-sm">First Name</p>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="w-full"
              value={user.firstName}
            />
          </div>
          <div className="w-full mt-6">
            <p className="mb-3 w-full text-sm">Last Name</p>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="w-full"
              value={user.lastName}
            />
          </div>
          <div className="w-full mt-6">
            <p className="mb-3 w-full text-sm text-gray-400">Email</p>
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={user.email}
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

          <button className="bg-gradient-to-r from-ansBlue2 to-ansBlue3 p-3 text-white mt-12 font-body font-medium text-base rounded w-full">
            Save Changes
          </button>
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
export default connect(mapStateToProps, { updateAvatar })(PersonalInfo);
