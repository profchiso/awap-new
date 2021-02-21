import React from "react";
// import { ReactComponent as ERM } from "../svgs/ERM.svg";
// import { ReactComponent as AplusIcon } from "../svgs/AplusIcon.svg";
// import TheRest from "../svgs/TheRest.svg";
import { ReactComponent as NextIcon } from "../svgs/NextIcon.svg";
import aplusIcon from "../svgs/AplusIcon.svg";
import selfPacedLearning from "../svgs/SelfPacedLearning.svg";
import testTimer from "../svgs/TestTimer.svg";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
// import { NavLink, Route } from "react-router-dom";
// import ClassCards from "../ExploreClasses/ClassCards";
import MobileHeader from "../Header/MobileHeader";
import ExploreContent from "../ExploreClasses/Index";
// import ComingSoon from "../ExploreClasses/ComingSoon";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
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
                <MenuItem value="JSS1-3 (Grade 7-9)">
                  JSS1-3 (Grade 7-9)
                </MenuItem>
                <MenuItem value="SS1-3 (Grade 9-12)">
                  SS1-3 (Grade 9-12)
                </MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="pt-8 pl-8 flex items-center">
            <p className="text-primary text-sm pr-2">SEE ALL</p>
            <NextIcon className="text-sm w-3.5 -mt-1" />
          </div>
        </div>
      </div>

      {/* COMMENT: THIS SECTION IS BEING WORKED ON */}
      {/* <div>
        <div className="">
          <NavLink to="/">Biology</NavLink>
          <NavLink to="/physics">Physics</NavLink>
          <NavLink to="/chemistry">Chemistry</NavLink>
          <NavLink to="/math">Mathematics</NavLink>

        </div>
        <div className="">
            <Route exact path="/" component={ComingSoon} />
        </div>
      </div> 

      <h3 className="text-2xl md:text-4xl text-center mb-32  font-light text-gray-400">
        Coming Soon
      </h3>

      <div className="flex items-center text-center text-light">
        <img src={TheRest} alt="" className="px-24 pt-32" />
        <div className="max-w-md px-4">
          <p className="py-4 text-center">
            Top instructors from around the world teach students on AwesumEdge.
          </p>
          <p className="py-4 text-center">
            We provide the tools and skills to teach what you love.
          </p>
          <button className="text-white bg-primary shadow-primary px-24 py-4 mt-8 rounded-md focus:outline-none text-sm lg:text-base">
            Join
          </button>
        </div>

        <div></div>
      </div>*/}

      <div className="flex px-7 sm:max-w-3xl mx-auto">
        <ExploreContent />
      </div>
    </div>
  );
}
