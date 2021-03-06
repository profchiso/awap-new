import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    id: 1,
    label: "We Teach to Create Impact and Enrich Lives",
  },
  {
    id: 2,
    label: "We Provide quality Education",
  },
  {
    id: 3,
    label: "We Teach to Create Impact and Enrich Lives",
  },
  {
    id: 4,
    label: "We Provide quality Education",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  textStyle: {
    fontSize: "1.5rem",
    fontFamily: "Google Sans",
  },
}));

function TextCarousel() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0}>
        <Typography
          className={`${classes.textStyle} whitespace-nowrap text-center py-4 text-center text-2xl text-primary opacity-50 font-body font-normal`}
        >
          {tutorialSteps[activeStep].label}
        </Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.id}>
            {Math.abs(activeStep - index) <= 2 ? `` : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  );
}

export default TextCarousel;
