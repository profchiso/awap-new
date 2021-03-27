import React, { useState } from "react";
import Pagination from "../components/AnswerContent/Pagination";
import { DefaultAnswerBtn } from "../components/Button/AnswerButton";
import FormControl from "@material-ui/core/FormControl";
// import PracticeHeader from "../components/Header/PracticeHeader";
import Header from "../components/Header/Header";

import NumberBadge from "../components/Badge/NumberBadge";

export default function PracticeQuestion() {
  const [value, setValue] = useState("");
  const isSelected =
    "bg-gradient-to-r from-ansBlue1 via-ansBlue2 to-ansBlue3 text-white";

  const onSelectedOptionChange = (option) => {
    console.log(option);
    setValue(option);
  };

  return (
    <>
      {/* <PracticeHeader /> */}
      <Header />

      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center pt-6 pb-6">
          <div className="flex items-center">
            <NumberBadge>1</NumberBadge>
            <span className="text-base font-medium">
              Express 287.387934578 correct to 2 significant figures
            </span>
          </div>
          <div>
            <button className="text-white bg-gradient-to-r from-orange1 to-orange2 text-white  font-body shadow-primary px-16 py-2 rounded-md text-sm lg:text-base font-medium">
              End
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center pt-6 pb-6">
        <FormControl component="fieldset" className="w-6/12 text-center">
          <div className="pb-3 pt-3 ">
            <DefaultAnswerBtn
              isSelected={value === "a" ? `${isSelected}` : ""}
              onClick={() => onSelectedOptionChange("a")}
            >
                <span className="pr-8">a.</span>
                <span>287</span>
            </DefaultAnswerBtn>
          </div>
          <div className="pb-3 pt-3 ">
            <DefaultAnswerBtn
              isSelected={value === "b" ? `${isSelected}` : ""}
              onClick={() => onSelectedOptionChange("b")}
            >
              <span className="pr-8">b.</span>
              <span>289</span>
            </DefaultAnswerBtn>
          </div>
          <div className="pb-3 pt-3 ">
            <DefaultAnswerBtn
              isSelected={value === "c" ? `${isSelected}` : ""}
              onClick={() => onSelectedOptionChange("c")}
            >
              <span className="pr-8">c.</span>
              <span>287.3</span>
            </DefaultAnswerBtn>
          </div>
          <div className="pb-3 pt-3 ">
            <DefaultAnswerBtn
              isSelected={value === "d" ? `${isSelected}` : ""}
              onClick={() => onSelectedOptionChange("d")}
            >
              <span className="pr-8">d.</span>
              <span>287.38</span>
            </DefaultAnswerBtn>
          </div>
        </FormControl>
      </div>

      <div className="flex justify-evenly items-center pt-6 pb-6">
        <div>
          <button className="text-white bg-primary px-12 font-body shadow-primary px-5 py-2 rounded-md focus:outline-none text-sm lg:text-md font-medium">
            PREVIOUS
          </button>
        </div>
        <div>
          <button className="text-white bg-primary px-12 font-body shadow-primary px-5 py-2 rounded-md focus:outline-none text-sm lg:text-md font-medium">
            NEXT
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center align-text-bottom mt-5">
        <Pagination />
      </div>
    </>
  );
}
