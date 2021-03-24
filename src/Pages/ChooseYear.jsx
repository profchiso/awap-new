import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      width: "80%",
    },
  },
  numberSelect: {
    width: "20ch",
    paddingRight: "0.8rem !important",
  },
  menuPaper: {
    maxHeight: 200,
  },
}));

export default function ChooseYear() {
  const classes = useStyles();

  const [itemNumber, setitemNumber] = useState("");

  const handleChange = (event) => {
    setitemNumber(event.target.value);
  };

  const range = (start, end) => {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  };

  const rangeValue = range(2000, 2020);

  return (
    <div>
      {!localStorage.token ? <Redirect to="/login" /> : null}
      <Header />
      <div className="flex justify-center mb-24">
        <div className="font-body flex flex-col gap-28 text-center mt-40">
          <h3 className="text-3xl font-body">BIOLOGY (SSCE) WAEC Questions</h3>
          <div className="flex items-center justify-center">
            <div className="text-center">
              <FormControl variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">
                  Choose Year
                </InputLabel>
                <Select
                  label="Choose Year"
                  labelId="demo-simple-select-placeholder-label-label"
                  id="demo-simple-select-placeholder-label"
                  value={itemNumber}
                  onChange={handleChange}
                  displayEmpty
                  className={classes.numberSelect}
                  MenuProps={{ classes: { paper: classes.menuPaper } }}
                >
                  {rangeValue.map((e, i) => (
                    <MenuItem value={i} key={i}>
                      {e}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div>
            <Link to="/pq/biology-choose-type">
              <button className="text-white bg-primary  font-body shadow-primary px-5  md:px-20 py-2 rounded-md focus:outline-none text-sm lg:text-base">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
