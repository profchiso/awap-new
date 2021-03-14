import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

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

function SimpleMenu() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseOver={handleClick}
      >
         <span className="capitalize font-body font-normal">
            Past Questions
          </span>
      </Button>

      <Menu
        // id="simple-menu"
        id="menu-appbar"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        // anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        // transformOrigin={{ vertical: "top", horizontal: "center" }}
        PaperProps={{
          style: {
            left: '50%',
            transform: 'translateX(-10%) translateY(50%)',
          }
        }}
      >
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}

        {/* ADDED */}
        <div className="flex m-8 gap-x-4">
          <div>
            <MenuItem
              className={`${classes.menuItem} font-body font-normal flex`}
            >
              <span className="font-body font-normal flex-1 pr-8">
                WAEC (SSCE)
              </span>
              <span className="justify-self-end">
                <FiChevronRight />
              </span>
            </MenuItem>
            <MenuItem
              className={`${classes.menuItem} font-body font-normal flex`}
            >
              <span className="font-body font-normal flex-1 pr-8">
                UME (SSCE)
              </span>
              <span className="justify-self-end">
                <FiChevronRight />
              </span>
            </MenuItem>
            <MenuItem
              className={`${classes.menuItem} font-body font-normal flex`}
            >
              <span className="font-body font-normal flex-1 pr-8">
                WAEC (JSCE)
              </span>
              <span className="justify-self-end">
                <FiChevronRight />
              </span>
            </MenuItem>
          </div>

          <div className="bg-f8 pr-4">
            <MenuItem
              className="font-body font-normal mr-8"
              onClick={handleClose}
            >
              <Link to="/pq/biology-choose-year">
                <span className="font-body font-normal text-gray-800">
                  Biology
                </span>
              </Link>
            </MenuItem>
            <MenuItem
              className="font-body font-normal mr-8"
              onClick={handleClose}
            >
              <Link to="/pq/chemistry">
                <span className="font-body font-normal text-gray-800">
                  Chemistry
                </span>
              </Link>
            </MenuItem>
            <MenuItem
              className="font-body font-normal mr-8"
              onClick={handleClose}
            >
              <Link to="/pq/physics">
                <span className="font-body font-normal text-gray-800">
                  Physics
                </span>
              </Link>
            </MenuItem>
            <MenuItem
              className="font-body font-normal mr-8"
              onClick={handleClose}
            >
              <Link to="/pq/math">
                <span className="font-body font-normal text-gray-800">
                  Math
                </span>
              </Link>
            </MenuItem>
          </div>
        </div>
      </Menu>
    </div>
  );
}

export default SimpleMenu;
