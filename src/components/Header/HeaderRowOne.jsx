import React from "react";
import { connect } from "react-redux";
import Search from "../Search/Search";
import { ReactComponent as AwesumEdgeLogo } from "../../assets/svgs/AwesumEdgeLogo.svg";
import awesumBook from "../../assets/svgs/AwesumBook.svg";
import { Link, Redirect } from "react-router-dom";
// import { ReactComponent as AwesumQuiz } from "../../assets/svgs/AwesumQuiz.svg";
import { ReactComponent as Filter } from "../../assets/svgs/FilterIcon.svg";
import { makeStyles } from "@material-ui/core/styles";
import { CircleUserAvatar } from "../Avatar/Avatar";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import { Button, Menu, MenuItem } from "@material-ui/core";
import { FiLogOut } from "react-icons/fi";
import FilterModal from "./FilterModal";
import { logout } from "../../redux/actions/login";

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

function HeaderRowOne({
  showFilter,
  showHeaderTitle,
  loginReducer,
  logout,
  ...props
}) {
  const classes = useStyles();
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  const { user } = loginReducer;
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
    <div className="max-w-screen-2xl mx-auto px-6 lg:px-16">
      {isLoggedIn ? null : <Redirect to="/login" />}
      <div className="flex items-center my-5">
        <div className="transform md:scale-80 scale-70 hidden md:block">
          <Link to="/">
            <AwesumEdgeLogo />
          </Link>
        </div>
        <div className="block md:hidden">
          <img src={awesumBook} alt="" />
        </div>

        {showHeaderTitle ? <div className="flex-1 text-center text-base md:text-md lg:text-lg font-medium">{props.headerTitle}</div> : <Search />}

        {localStorage.token ? (
          // {login ? (
          <div className="flex items-center gap-5">
            {/* <button className="flex items-center  font-body">
              <AwesumQuiz />
              <span className="pl-2 text-primary">Awesum Quiz</span>
            </button> */}
            <div className="flex items-center  font-body">
              <Button
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                // onMouseOver={handleClick}
              >
                <CircleUserAvatar imgUrl="" />
                <span className="capitalize font-body font-normal">
                  <span className="px-1 text-primary">
                    Hi {user?.firstName ? user?.firstName : ",Welcome"}
                  </span>
                  <ExpandMoreRoundedIcon color="primary" />
                </span>
              </Button>
            </div>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
              PaperProps={{
                style: {
                  left: "50%",
                  transform: "translateX(10%) translateY(75%)",
                },
              }}
            >
              <div>
                <MenuItem
                  onClick={handleClose}
                  className={`${classes.menuItem} font-body font-normal flex`}
                >
                  <span className="justify-self-start px-2">
                    <FiLogOut />
                  </span>
                  <span
                    className="font-body font-normal flex-1 pr-8"
                    onClick={() => handleLogout()}
                  >
                    Log Out
                  </span>
                </MenuItem>
              </div>
            </Menu>

            {showFilter ? (
              <FilterModal>
                <Filter />
                <span className="pl-2 text-primary capitalize font-body font-normal">
                  Filter
                </span>
              </FilterModal>
            ) : null}
          </div>
        ) : (
          <div className="flex justify-center">
            <Link to="/login">
            <button className="text-primary font-body font-medium shadow-primary px-8 py-2 rounded-md mr-4 md:mr-8 focus:outline-none text-sm lg:text-base">
              Log In
            </button>
            </Link>
            {/* <Link to="/login">
              <button className="text-white bg-primary  font-body shadow-primary px-5 py-2 rounded-md focus:outline-none text-sm lg:text-base">
                Get Started
              </button>
            </Link> */}
            <Link to="/sign-up">
              <button className="text-white bg-primary  font-body shadow-primary px-8 py-2 rounded-md focus:outline-none text-sm lg:text-base">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps, { logout })(HeaderRowOne);
