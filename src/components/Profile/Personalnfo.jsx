import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { ReactComponent as DeleteIcon } from "../../assets/svgs/DeleteIcon.svg";
import TextField from "@material-ui/core/TextField";
import MaterialUiPhoneNumber from "material-ui-phone-number";
import {saveLoginUserDataToState,updateProfileAvatar,updateProfileText } from "../../redux/actions/login";
import { updateAvatar, } from "../../redux/actions/profile";

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
  const {token,firstName,lastName, avatar,phoneNumber ,email } = props.loginReducer;
  const {message} = props.profileReducer;
  const [isSubmitting, setisSubmitting] = useState(false);

  const [img, setImg] = useState({ avatar: "" });
  const [phone, setphone] = useState("");
  const [updateData, setUpdateData]= useState({firstName,lastName,phoneNumber})

  const handleImgChange = async(event) => {
    const data = new FormData()
    data.append("avatar",event.target.files[0])
    data.append("avatarName",event.target.files[0].name)
    await props.updateProfileAvatar(data,token)
  };

  const handleChange = (prop) => (event) => {
    setUpdateData({ ...updateData, [prop]: event.target.value });
  };

  const handleProfileUpdate= async()=>{
    await props.updateProfileText(updateData,token)
    setisSubmitting(true)
  }
  const handleDeleteImg = () => {
    setImg({});
  };
  const handlePhoneChange = (value) => {
    if (value) {
      setphone(value);
      setUpdateData({ ...updateData, phoneNumber: value });
    }
  };
  return (
    <div className="max-w-2xl pt-6 pb-10 px-6" onClick={props.onClick}>
      <div className="flex flex-col sm:flex-row w-full">
        <div className="w-full max-w-ts3 relative mx-auto sm:mx-0">
          <div className={classes.root}>
            <Avatar
              // src={user.avatar !== "" ? user.avatar : img}
              src={avatar !== "" ?avatar : img.avatar}
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
              value={updateData.firstName}
              onChange={handleChange("firstName")}
            />
          </div>
          <div className="w-full mt-6">
            <p className="mb-3 w-full text-sm">Last Name</p>
            <TextField
              id="outlined-basic"
              variant="outlined"
              className="w-full"
              value={updateData.lastName}
              onChange={handleChange("lastName")}
            />
          </div>
          <div className="w-full mt-6">
            <p className="mb-3 w-full text-sm text-gray-400">Email</p>
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={email}
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
              value={updateData.phoneNumber}
              onChange={handlePhoneChange}
              autoComplete="phone-number"
              className="w-full"
              defaultValue={phone}
            />
          </div>
          {message && isSubmitting && <p className="text-green-500 pt-4">{message}</p>}

          <button onClick={handleProfileUpdate} className="bg-gradient-to-r from-ansBlue2 to-ansBlue3 p-3 text-white mt-12 font-body font-medium text-base rounded w-full">
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
export default connect(mapStateToProps, { updateAvatar,updateProfileAvatar,saveLoginUserDataToState,updateProfileText})(PersonalInfo);
