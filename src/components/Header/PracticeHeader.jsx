import React from "react";
import { ReactComponent as AwesumEdgeLogo } from "../../assets/svgs/AwesumEdgeLogo.svg";
import awesumBook from "../../assets/svgs/AwesumBook.svg";
import { Link, Redirect } from "react-router-dom";
import { CircleUserAvatar } from "../Avatar/Avatar";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import { connect } from "react-redux";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { FiLogOut } from "react-icons/fi";
import { makeStyles } from "@material-ui/core/styles";
import TemporaryDrawer from "../Drawer/Drawer";
import useWindowDimensions from "../../Hooks/UseWindowDimension";
import { logout } from "../../redux/actions/login";
import { BiUser } from "react-icons/bi"
import * as Io from "react-icons/io";
import FilterModal from "./FilterModal";
import { ReactComponent as Filter } from "../../assets/svgs/FilterIcon.svg";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuItem: {
    marginTop: 4,
    marginBottom: 4,
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

function PracticeHeader({ loginReducer, practiceQuestionReducer, logout, ...props }) {
  const classes = useStyles();
  const { width } = useWindowDimensions();
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  const { user } = loginReducer;
  const { year, subject, filterValue } = practiceQuestionReducer;
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    logout();
    setIsLoggedIn(false);
  };

  return (
    <div className=" px-6 lg:px-16 shadow-primary py-3">
      {isLoggedIn ? null : <Redirect to="/login" />}

      <div className="flex items-center max-w-screen-2xl mx-auto">
        <div className="transform md:scale-80 scale-70">
          <Link to="/">
            <span className="hidden md:block lg:hidden">
              <img src={awesumBook} alt="logo" />
            </span>
            <span className="hidden md:hidden lg:block">
              <AwesumEdgeLogo />
            </span>
          </Link>
        </div>
        <div className="block md:hidden">
          <TemporaryDrawer blueMenu={true} />
        </div>
        <div className="flex flex-1 justify-center pr-3 sm:px-5 sm:px-0 -ml-1 lg:-ml-28 font-medium text-base md:text-lg">
          <span className="whitespace-nowrap">
            <span>
              {year > 2000 ? year : ""}&nbsp;{subject} WAEC
            </span>
            &nbsp;
            <span className="hidden sm:inline-block">Practice Questions</span>
            {width > 300 ? (
              <span className="sm:hidden inline-block">PQ</span>
            ) : null}
          </span>
        </div>
        <div className="hidden sm:flex items-center  font-body">
          <Button
            aria-owns={anchorEl ? "simple-menu" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          // onMouseOver={handleClick}
          >
            <CircleUserAvatar imgUrl="" />
            <span className="capitalize font-body font-normal whitespace-nowrap">
              <span className="px-1 text-primary">
                Hi {user.firstName ? user.firstName : ",Welcome"}
              </span>
              <ExpandMoreRoundedIcon color="primary" />
            </span>
          </Button>

          {props.showFilter ? (
            <FilterModal>
              <Filter />
              <span className="pl-2 text-primary capitalize font-body font-normal">
                {filterValue}
              </span>
            </FilterModal>
          ) : null}
        </div>
        <button
          className="sm:hidden block text-white bg-gradient-to-r from-orange1 to-orange2 text-white  font-body font-semibold shadow-primary px-6 py-2 rounded-md text-sm lg:text-base font-medium"
          onClick={props.handleOpen}
        >
          End
        </button>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{ onMouseLeave: handleClose }}
          PaperProps={{
            style: {
              left: "50%",
              transform: "translateX(10%) translateY(35%)",
            },
          }}
        >

          <div>
            <MenuItem
              onClick={handleClose}
              className={`${classes.menuItem} font-body font-normal flex`}
            >
              <span className="justify-self-start px-2">
                <BiUser className="text-primary" />
              </span>
              <span
                className="font-body font-normal flex-1 pr-8 text-primary text-sm"
              >
                Profile
              </span>
            </MenuItem>
            <Link to="/choose-subject">
              <MenuItem
                onClick={handleClose}
                className={`${classes.menuItem} font-body font-normal flex`}
              >
                <span className="justify-self-start px-2">
                  <Io.IoIosStats className="text-primary" />
                </span>
                <span
                  className="font-body font-normal flex-1 pr-8 text-primary text-sm"
                >
                  Statistics
                </span>
              </MenuItem>
            </Link>

            <MenuItem
              onClick={handleClose}
              className={`${classes.menuItem} font-body font-normal flex`}
            >
              <span className="justify-self-start px-2">
                <FiLogOut className="text-primary" />
              </span>
              <span
                className="font-body font-normal flex-1 pr-8 text-primary text-sm"
                onClick={() => handleLogout()}
              >
                Log Out
              </span>
            </MenuItem>
          </div>

        </Menu>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps, { logout })(PracticeHeader);
