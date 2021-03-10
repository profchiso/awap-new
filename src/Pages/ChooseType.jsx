import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function ChooseType() {
  const [value, setValue] = useState('Timed Questions');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      {!localStorage.token ? <Redirect to="/login" /> : null}
      <Header />
      <div className="flex justify-center mb-24">
        <div className="font-body flex flex-col gap-28 text-center mt-40">
          <h3 className="text-3xl font-body">Choose type</h3>
          <div className="flex items-center justify-center">
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="chooseType"
                name="chooseType"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Timed Questions"
                  control={<Radio />}
                  label="Timed Questions"
                  className="color-primary "
                />
                <div className="py-2 flex justify-center horizontal_Line max-w-3/4 mx-auto"></div>
                <FormControlLabel
                  value="Untimed Questions"
                  control={<Radio />}
                  label="Untimed Questions"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div>
            <Link to="/biology-choose-type">
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
