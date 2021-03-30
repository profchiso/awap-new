import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as RoundBackIcon } from "../assets/svgs/RoundBackIcon.svg";
import HeaderRowOne from "../components/Header/HeaderRowOne";
import Footer from "../components/Footer/Footer";
import { Link, Redirect } from "react-router-dom";
import useWindowDimensions from "../Hooks/UseWindowDimension";
import MobileHeader from "../components/Header/MobileHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  spacing: {
    display: "flex",
    gap: "1rem",
    fontFamily: "Google Sans",
  },
}));

export default function ChooseType() {
  const classes = useStyles();
  const { width } = useWindowDimensions();

  const [value, setValue] = useState(null);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  if (value === null) {
    return (
      <div>
        {width < 640 ? (
          <div className="block bg-blueOne pb-6 pl-2 sm:hidden">
            <MobileHeader />
          </div>
        ) : (
          <div className="shadow py-005">
            <HeaderRowOne />
          </div>
        )}

        <div className="text-center sm:pl-20 px-10 mb-24  flex flex-col max-w-3xl mx-auto">
          <div className="mt-32 mb-20">
            <h3 className="text-3xl font-body flex items-center">
              <Link to="/pq/biology-choose-year">
                <RoundBackIcon className="" />
              </Link>
              <span className="pl-16">Choose type</span>
            </h3>
          </div>

          <div className="text-center">
            <FormControl component="fieldset" className="w-full">
              <RadioGroup
                aria-label="chooseType"
                name="chooseType"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Timed Questions"
                  control={<Radio color="primary" />}
                  label="Timed Questions"
                  className={`pb-3 pl-4 font-body text-primary ${classes.spacing}`}
                />
                <hr className="w-full my-3 text-gray-300" />
                <FormControlLabel
                  value="Untimed Questions"
                  control={<Radio color="primary" />}
                  label="Untimed Questions"
                  className={`pt-3 pl-4 font-body text-primary ${classes.spacing}`}
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else if (value === "Untimed Questions") {
    return <Redirect to="/pq/biology-untimed" />;
  } else if (value === "Timed Questions") {
    return <Redirect to="/pq/biology-timed" />;
  }
}
