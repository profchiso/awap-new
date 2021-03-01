import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menu: {
    paddingTop: theme.spacing(24),
  },
}));


export default function HeaderRowTwo() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElTwo, setAnchorElTwo] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickTwo = (event) => {
    setAnchorElTwo(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseTwo = () => {
    setAnchorElTwo(null);
  };
  return (
    <div className="text-primary text-sm bg-primeGrey py-2">
      <div className="max-w-screen-2xl mx-auto flex px-6 sm:px-16">
        <div className="mr-20 ">
        <Button aria-controls="simple-menu" aria-haspopup="true" onMouseOver={handleClick}>
          <p className="capitalize font-body font-normal">Secondary School (Grade 7-12)</p>
          </Button>
          <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem >SS1-3 (Grade 9-12)</MenuItem>
        <MenuItem >JSS1-3 (Grade 7-9)</MenuItem>
      </Menu>
        </div>
        <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onMouseOver={handleClickTwo}>
          <p className="capitalize font-body font-normal">Past Questions</p>
          </Button>
          <Menu
        id="simple-menu"
        anchorEl={anchorElTwo}
        keepMounted
        open={Boolean(anchorElTwo)}
        onClose={handleCloseTwo}
        className={`${classes.menu} font-body font-normal`}
      >
        <MenuItem onClick={handleCloseTwo}  className="font-body font-normal"><span className="font-body font-normal"> WAEC (SSCE)</span></MenuItem>
        <MenuItem onClick={handleCloseTwo}  className="font-body font-normal"><span className="font-body font-normal">UME (SSCE)</span></MenuItem>
        <MenuItem onClick={handleCloseTwo}  className="font-body font-normal"><span className="font-body font-normal">WAEC (JSCE)</span></MenuItem>
      </Menu>
        </div>
      </div>
    </div>
  );
}
