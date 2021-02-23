import React from "react";
import { ReactComponent as NextIcon } from "../svgs/NextIcon.svg";
import aplusIcon from "../svgs/AplusIcon.svg";
import selfPacedLearning from "../svgs/SelfPacedLearning.svg";
import testTimer from "../svgs/TestTimer.svg";
import GradientWithDots from "../../assets/images/GradientWithDots.svg";
import bgCard from "../../assets/images/bgCard.svg";
import person from "../../assets/images/person.svg";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MobileHeader from "../Header/MobileHeader";
import ExploreContent from "../ExploreClasses/Index";
import SwipeableTextMobileStepper from "../Carousels/SingleCarousel";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  menuItem:{
    fontFamily: 'Google Sans',
  }
}));

export default function HomeBody() {
  const classes = useStyles();
  const [studentClass, setstudentClass] = React.useState("");

  const handleChange = (event) => {
    setstudentClass(event.target.value);
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="bg-awesum bg-cover bg-center bg-no-repeat text-white  px-6 sm:px-16  pb-96">
        <div className="block sm:hidden">
          <MobileHeader />
        </div>

        <div className="flex">
          <div>
            <p className="pt-32 pb-12 text-2xl md:text-4xl">
              Curious Learners Change the World
            </p>
            <p className="text-xl pb-8">
              Courses for Secondary/High School Students
            </p>
            <button className="bg-white text-primary text-lg py-4 mt-32 px-20 rounded-md">
              Get Started
            </button>
          </div>
          <div className="flex">
            {/* <img src={ERM} alt="erm" className="relative "/> */}
          </div>
        </div>
      </div>

      <h3 className="text-2xl md:text-4xl text-center md:mt-24 md:mb-12 font-medium text-primary">
        <span className="font-normal sm:font-medium">Why Learn with </span>
        <span>AwesumEdge </span>
      </h3>

      <div className="flex flex-1 py-8 px-4 justify-around gap-0 sm:gap-4">
        <div className="text-center text-primary pb-4  max-w-1/3">
          <img src={testTimer} className="mx-auto px-2" alt="" />
          <p className="text-sm md:text-base px-2">
            Prepare Adequately for your Test/Exam
          </p>
        </div>
        <div className="text-center text-primary pb-4 max-w-1/3">
          <img src={aplusIcon} className="mx-auto px-2" alt="" />
          <p className="text-sm md:text-base px-1">
            Excellent Result Guaranteed
          </p>
        </div>
        <div className="text-center text-primary pb-4 max-w-1/3 ">
          <img src={selfPacedLearning} alt="" className="mx-auto px-2" />
          <p className="text-sm md:text-base">Self Paced Learning</p>
        </div>
      </div>

      <div className="text-center  mt-24 pb-8 px-6 sm:px-16 ">
        <p className="text-primary text-2xl sm:text-4xl  font-medium">
          Explore Our Classes
        </p>

        <div className="flex justify-end items-center content-center">
          <div className="mt-8">
            <FormControl
              variant="outlined"
              className={`${classes.formControl} transform scale-90 lg:scale-100`}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Class
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={studentClass}
                onChange={handleChange}
                label="class"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="JSS1-3 (Grade 7-9)" className={classes.menuItem}>
                  JSS1-3 (Grade 7-9)
                </MenuItem>
                <MenuItem value="SS1-3 (Grade 9-12)" className={classes.menuItem}>
                  SS1-3 (Grade 9-12)
                </MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="mt-8 pl-8 flex items-center">
            <p className="text-primary text-sm pr-2 my-auto whitespace-nowrap">SEE ALL</p>
            <NextIcon className="text-sm " />
          </div>
        </div>
      </div>

      <div className="flex px-7 sm:max-w-6xl mx-auto">
        <ExploreContent />
      </div>

      <br />

      {/* COMMENT: THIS SECTION IS BEING WORKED ON */}

      <div className="flex flex-wrap justify-center items-center text-center text-light mt-64  px-2">
      
        <SwipeableTextMobileStepper />
        <div className="max-w-xl pl-12 pr-4">
          <h3 className="py-4 text-center text-2xl text-primary opacity-50 font-body font-normal pt-8 lg:pt-0">
            We Teach to Create Impact and Enrich Lives
          </h3>
          <button className="text-white bg-primary shadow-primary px-24 py-4 mt-8 rounded-md focus:outline-none text-sm lg:text-lg">
            Join
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center text-center mt-64">
        <h3 className="relative top-0 lg:top-48 text-primary  z-20 text-4xl font-semibold">
          Trusted by ...
        </h3>

        <img
          src={GradientWithDots}
          alt=""
          className="relative z-0 object-cover w-full"
        />

        <div className="absolute">
          <img src={bgCard} alt="relative top-0 z-0 object-cover h-48 w-full sm:h-full" />
          <div className="absolute top-1/4 right-1/4 left-1/4 z-10 text-primary text-center">
            <img src={person} alt="" className="relative top-0 mx-auto w-24 md:w-auto" />
            {/* <img src={person} alt=""/> */}
            <div className="opacity-50 text-sm md:text-lg top-0 ">
              <p className="text-nowrap">
                I love the past questions, and how they were solved.
              </p>
              <p className="text-nowrap">
                  They helped me prepare well for my WAEC !
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
