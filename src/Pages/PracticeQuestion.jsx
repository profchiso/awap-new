import React from 'react'

import { ReactComponent as AwesumEdgeLogo } from "../assets/svgs/AwesumEdgeLogo.svg";
import awesumBook from "../assets/svgs/AwesumBook.svg";
import { Link } from 'react-router-dom';
import Pagination from "../components/AnswerContent/Pagination"

import {DefaultAnswerBtn,SelectedBtn} from "../components/Button/AnswerButton"

// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

// import Radio from '@material-ui/core/Radio';


export default function PracticeQuestion() {
  // const [value, setValue] = React.useState("A");
  // const [isSelected, setIsSelected] = React.useState("py-5 px-10 text-base font-medium bg-gradient-to-r from-ansBlue1 via-ansBlue2 to-ansBlue3 rounded w-full shadow-awesumOne max-w-md text-white text-left");
  // const [isDefault, setIsDefault] = React.useState("py-5 px-10 text-base font-medium bg-white shadow-awesumOne w-full max-w-md text-left rounded")


  // const handleChange = (event) => {
  //   // setValue(event.target.value);
  // };
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-16 shadow-primary pt-2 pb-1">
        <div className="flex items-center my-6">
          <div className="transform md:scale-80 scale-70 hidden md:block">
            <Link to="/">
              <AwesumEdgeLogo />
            </Link>
          </div>
          <div className="block md:hidden">
            <img src={awesumBook} alt="" />
          </div>
          <div className="flex flex-1 justify-center mx-5 md:mx-10">
            2012  BIOLOGY WAEC Practice Questions
          </div>
        </div>
      </div>
      <div className="flex justify-evenly items-center pt-6 pb-6">
        
        <div> <span className="py-2 px-3 mr-7 rounded-full shadow-primary">1</span>Express 287.387934578 correct to 2 significant figures</div>
        <div>
          <button className="text-white bg-primary  font-body shadow-primary px-5 py-2 rounded-md focus:outline-none text-sm lg:text-base">
              End
            </button>
        </div>
      </div>

      <div className="flex justify-center items-center pt-6 pb-6">
        <FormControl component="fieldset" className="w-6/12 text-center">
          
          <div className="pb-3 pt-3 ">
            <SelectedBtn>
              <span className="pr-8">a.</span>
              <span>287</span>
            </SelectedBtn>
          </div>
          <div className="pb-3 pt-3 ">
            <DefaultAnswerBtn>
                <span className="pr-8">b.</span>
                <span>289</span>
            </DefaultAnswerBtn>
          </div>
          <div className="pb-3 pt-3 ">
          <DefaultAnswerBtn>
                <span className="pr-8">c.</span>
                <span>287.3</span>
            </DefaultAnswerBtn>
          </div>
          <div className="pb-3 pt-3 ">
          <DefaultAnswerBtn>
                <span className="pr-8">d.</span>
                <span>287.38</span>
            </DefaultAnswerBtn>
          </div>
            </FormControl>
      </div>

      <div className="flex justify-evenly items-center pt-6 pb-6">
      
        <div> <button className="text-white bg-primary  font-body shadow-primary px-5 py-2 rounded-md focus:outline-none text-sm lg:text-base">
              PREVIOUS
            </button>
        </div>
        <div>
          <button className="text-white bg-primary  font-body shadow-primary px-5 py-2 rounded-md focus:outline-none text-sm lg:text-base">
              NEXT
          </button>
        </div>
      </div>
      <div className="flex justify-center -items-center align-text-bottom">
         <Pagination/>
      </div>
      
  </>
  )
}