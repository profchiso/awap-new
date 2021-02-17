import React from "react";
import { ReactComponent as AplusIcon } from "../svgs/AplusIcon.svg";
// import { ReactComponent as ERM } from "../svgs/ERM.svg";
// import  ERM  from "../svgs/ERM.svg";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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

      <div className="flex text-center justify-center">
        <div>
          <p className="text-2xl font-medium text-primary">
            Why Learn with AwesumEdge
          </p>
          <AplusIcon className="mx-auto" />
          <p>Prepare Adequately for your next Test/Exam</p>
        </div>
      </div>

      <div className="text-center mb-12 mt-24  px-6 sm:px-16  pb-96">
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
    </div>
  );
}
