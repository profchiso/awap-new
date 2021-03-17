import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';

import Header from '../components/Header/HeaderWithSearchButtonOnly';
import Footer from '../components/Footer/Footer';

export default function ChooseType() {
  const [value, setValue] = useState('Timed Questions');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      {/* {!localStorage.token ? <Redirect to="/login" /> : null} */}
      <Header />
      <div className="text-center pl-20 mb-24">
        <div className="font-body flex flex-col gap-7 text-center mt-10">
          <h3 className="text-3xl font-body flex justify-center items-center p-3">< ArrowBackOutlinedIcon className=""/><span className="pl-5">Choose type</span></h3>
          <div className="  pl-80">
            <FormControl component="fieldset" className="w-4/5 p-50">
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
                  className="pb-3 pl-4"
                />
                <hr className="w-2/5" />
                <FormControlLabel
                  value="Untimed Questions"
                  control={<Radio color="primary" />}
                  label="Untimed Questions"
                  className="pt-3 pl-4"
                />
              </RadioGroup>
            </FormControl>
          </div>
         
        </div>
      </div>
      { <Footer /> }
    </div>
  );
}
