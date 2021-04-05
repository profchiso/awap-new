import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FeedbackRoundedIcon from "@material-ui/icons/FeedbackRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import { ReactComponent as MenuIcon } from "../../assets/svgs/menuIcon.svg";
import AwesumEdgeLogo from "../../assets/svgs/AwesumEdgeLogo.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { CircleUserAvatar } from "../Avatar/Avatar";
// import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import * as HiIcon from "react-icons/hi"
import {logout} from "../../redux/actions/login"

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  btnClass: {
    marginLeft: "-0.875rem",
  },
  listOneClass: {
    marginBottom: "1rem",
  },
  listTwoClass: {
    marginTop: "1.5rem",
  },
  avatarClass:{
    marginLeft:"-10px",
  }
});

function TemporaryDrawer({ loginReducer,logout, blueMenu, ...props }) {
  const classes = useStyles();
  const { user } = loginReducer;
  // const [isLoggedIn,setIsLoggedIn]= React.useState(true)

  const handleLogout=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("user")
    // setIsLoggedIn(false)
    logout()
  }

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={classes.listOneClass}>
        <ListItem button>
          <ListItemIcon>
            <Link to="/">
              <img src={AwesumEdgeLogo} alt="" />
            </Link>
          </ListItemIcon>
        </ListItem>
      </List>

      <Divider />

      <List className={classes.listTwoClass}>

      <Link to="/">
          <ListItem button className="flex">
            <ListItemIcon className={classes.avatarClass}>
              <CircleUserAvatar imgUrl="" />
            </ListItemIcon>
            <ListItemText
              primary={` Hi, ${user.firstName ? user.firstName : " Welcome"}`}
              className="text-primary capitalize font-body font-normal pl-2.5"
            />
          </ListItem>
        </Link>

        <Link to="/">
          <ListItem button>
            <ListItemIcon>
              <FeedbackRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Feedback" className="text-primary" />
          </ListItem>
        </Link>

        <Link to="/">
          <ListItem button>
            <ListItemIcon>
              <ExitToAppRoundedIcon />
            </ListItemIcon>
            {localStorage.token ?<ListItemText primary="Log Out" className="text-primary" onClick={()=>handleLogout()}/>:
            <Link to="/login"> <ListItemText primary="Log In" className="text-primary" /></Link>}
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            className={classes.btnClass}
          >
           {blueMenu? <HiIcon.HiOutlineMenuAlt2 className="text-primary font-medium text-2xl"/> :
            <MenuIcon className="transform scale-110" />}
          </Button>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      {props.children}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps, {logout})(TemporaryDrawer);
