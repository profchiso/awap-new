import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import GoogleButton from './GoogleButton';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function LoginBody() {
  const classes = useStyles();
  return (
    <div className="flex justify-center mt-4">
      <div className="py-2 pl-auto pr-auto">
        <div className="rounded-md shadow w-4/5" style={{ width: '100%' }}>
          <div className="flex justify-center py-3 px-20"> Login</div>
          <form>
            <div className="flex justify-center py-3 px-20">
              <TextField
                id="standard-basic"
                placeholder="email"
                className={classes.textField}
                style={{ margin: 8, width: '200%' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlineIcon fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="flex justify-center py-3 px-20">
              <button className="text-white bg-primary shadow-primary px-10 py-2 rounded-md focus:outline-none text-sm lg:text-base">
                Continue
              </button>
            </div>
          </form>
          <div className="flex justify-center py-3 px-20">or</div>
          <GoogleButton />
          <div
            className=" justify-center "
            style={{ width: '100%', background: '#f9f9f9', height: '100px' }}
          >
            <div className="py-2 flex justify-center ">
              <Divider />
              New to AwesomEdge ?
              <Divider />
            </div>
            <div className="py-2 flex justify-center">
              <button className="text-primary  shadow-primary px-10 py-2 rounded-md focus:outline-none text-sm lg:text-base">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
