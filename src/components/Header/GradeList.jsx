import React from "react";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import { FiChevronRight } from "react-icons/fi";
import {Link} from "react-router-dom"
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

export default function GradeList() {
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
    <div className={classes.root}>
      <div>
        <Button
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          onMouseOver={handleClick}
        >
          <span className="capitalize font-body font-normal">
            Secondary School (Grade 7-12)
          </span>
        </Button>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{ onMouseLeave: handleClose }}
          PaperProps={{
            style: {
              left: "50%",
              transform: "translateX(1%) translateY(70%)",
            },
          }}
        >
          <div>
            <MenuItem
              onClick={handleClose}
              className={`${classes.menuItem} font-body font-normal flex`}
            >
              {/* <Link to="404"> */}
              <span className="font-body font-normal flex-1 pr-8">
                SS1-3 (Grade 9-12)
              </span>
              <span className="justify-self-end">
                <FiChevronRight />
              </span>
              {/* </Link> */}
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              className={`${classes.menuItem} font-body font-normal flex`}
            >
              <span className="font-body font-normal flex-1 pr-8">
                JSS1-3 (Grade 7-9)
              </span>
              <span className="justify-self-end">
                <FiChevronRight />
              </span>
            </MenuItem>
          </div>
        </Menu>
      </div>
    </div>
  );
}
