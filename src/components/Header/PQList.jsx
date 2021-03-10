import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
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

export default function PQList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onMouseEnter={handleToggle}
        >
          <span className="capitalize font-body font-normal">Past Questions</span>
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onMouseOut={handleClose}  onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >

                    {/* ADDED */}
                    <div className="flex m-8 gap-x-4">
                      <div>
                        <MenuItem
                          onClick={handleClose}
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
                          onClick={handleClose}
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
                          onClick={handleClose}
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
                        <MenuItem className="font-body font-normal mr-8" onClick={handleClose}>
                          <Link to="/pq/biology-choose-year">
                            <span className="font-body font-normal text-gray-800">
                              Biology
                            </span>
                          </Link>
                        </MenuItem>
                        <MenuItem className="font-body font-normal mr-8" onClick={handleClose}>
                          <Link to="/pq/chemistry">
                            <span className="font-body font-normal text-gray-800">
                              Chemistry
                            </span>
                          </Link>
                        </MenuItem>
                        <MenuItem className="font-body font-normal mr-8" onClick={handleClose}>
                          <Link to="/pq/physics">
                            <span className="font-body font-normal text-gray-800">
                              Physics
                            </span>
                          </Link>
                        </MenuItem>
                        <MenuItem className="font-body font-normal mr-8" onClick={handleClose}>
                          <Link to="/pq/math">
                            <span className="font-body font-normal text-gray-800">
                              Math
                            </span>
                          </Link>
                        </MenuItem>
                      </div>
                    </div>
                    {/* END */}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
