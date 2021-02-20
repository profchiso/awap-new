import React from "react";
import { ReactComponent as AplusIcon } from "../svgs/AplusIcon.svg";
// import { ReactComponent as ERM } from "../svgs/ERM.svg";
import { ReactComponent as SelfPacedLearning } from "../svgs/SelfPacedLearning.svg";
import { ReactComponent as TestTimer } from "../svgs/TestTimer.svg";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { NavLink, Route } from "react-router-dom";
import ClassCards from "./ClassCards";
import MobileHeader from "../Header/MobileHeader";

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

      <h3 className="text-2xl text-center  font-medium text-primary">
        Why Learn with AwesumEdge
      </h3>

      <div className="flex flex-1 py-8 justify-around gap-4 flex-wrap">
        <div className="text-center text-primary pb-4">
            <TestTimer className="mx-auto transform scale-75 md:scale-90" />
          <p className="-mt-5 sm:-mt-2 md:mt-0">Prepare Adequately for your next Test/Exam</p>
        </div>
        <div className="text-center text-primary pb-4">
          <AplusIcon className="mx-auto transform scale-75 md:scale-90" />
          <p className="-mt-5 sm:-mt-2 md:mt-0">Excellent Result Guaranteed</p>
        </div>
        <div className="text-center text-primary pb-4">
          <SelfPacedLearning className="mx-auto transform scale-75 md:scale-90" />
          <p className="-mt-5 sm:-mt-2 md:mt-0">Self Paced Learning</p>
        </div>
      </div>

      <div className="text-center  my-24  px-6 sm:px-16 ">
        <p className="text-primary text-2xl font-medium">Explore Our Classes</p>

        <div className="flex justify-end items-center content-center">
          <div className="mt-8">
            <FormControl variant="outlined" className={classes.formControl}>
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

          <div className="pt-8 pl-8">
            <p className="text-primary text-sm">SEE ALL</p>
          </div>
        </div>
      </div>

      <div>
        <div className="">
          <NavLink to="/"></NavLink>
        </div>
        <div className="">
          <Route exact path="/" component={ClassCards} />
        </div>
      </div>
    </div>
  );
}
