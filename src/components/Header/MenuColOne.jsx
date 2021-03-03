import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { FiChevronRight } from "react-icons/fi";

const useStyles = makeStyles((theme) => ({
  menuItem: {
    marginTop: 4,
    marginBottom: 4,
  },
}));

export default function MenuColOne(props) {
  const classes = useStyles();
  return (
    <div>
      <MenuItem
        onClick={props.onClick}
        className={`${classes.menuItem} font-body font-normal flex`}
      >
        <span className="font-body font-normal flex-1 pr-8">
          {props.titleOne}
        </span>
        <span className="justify-self-end">
          <FiChevronRight />
        </span>
      </MenuItem>
      <MenuItem
        onClick={props.onClick}
        className={`${classes.menuItem} font-body font-normal flex`}
      >
        <span className="font-body font-normal flex-1 pr-8">
          {props.titleTwo}
        </span>
        <span className="justify-self-end">
          <FiChevronRight />
        </span>
      </MenuItem>
      <MenuItem
        onClick={props.onClick}
        className={`${classes.menuItem} font-body font-normal flex`}
      >
        <span className="font-body font-normal flex-1 pr-8">
          {props.titleThree}
        </span>
        <span className="justify-self-end">
          <FiChevronRight />
        </span>
      </MenuItem>
    </div>
  );
}
