import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ImportContactsRoundedIcon from "@material-ui/icons/ImportContactsRounded";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "60px",
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Home"
        icon={<HomeRoundedIcon />}
        className="whitespace-nowrap"
      />
      <BottomNavigationAction
        label="Classes"
        icon={<GroupRoundedIcon />}
        className="whitespace-nowrap"
      />
      <BottomNavigationAction
        label="PQs"
        icon={<ImportContactsRoundedIcon />}
        className="whitespace-nowrap"
      />
      <BottomNavigationAction
        label="Quizes"
        value="folder"
        icon={<EmojiEventsIcon />}
        className="whitespace-nowrap"
      />
    </BottomNavigation>
  );
}
