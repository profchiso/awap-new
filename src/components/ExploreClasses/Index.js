import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import WithTutorial from "../Carousels/WithTutorial";
import UAParser from "ua-parser-js";
import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
import Agriculture from "./Agriculture";
import Forex from "./Forex";
import RealEstate from "./RealEstate"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    width: "100%",
  },
  tab: {
    textTransform: "capitalize",
  },
  appBar: {
    backgroundColor: "#fff",
    boxShadow: "none",
    "& span": {
      textAlign: "left",
    },
  },
}));

export default function ExploreContent() {
  const theme = useTheme();
  const isVideoReady = false;
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="AGRICULTURAL" {...a11yProps(0)} className={classes.tab} />
          <Tab label="FOREX" {...a11yProps(1)} className={classes.tab} />
          <Tab label="REAL ESTATE" {...a11yProps(2)} className={classes.tab} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {isVideoReady ? <WithTutorial /> : <Agriculture />}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {isVideoReady ? <WithTutorial /> : <Forex />}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          {isVideoReady ? <WithTutorial /> : <RealEstate />}
        </TabPanel>
      
      </SwipeableViews>
    </div>
  );
}
ExploreContent.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    userAgent = req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || "desktop";
  return { deviceType };
};
