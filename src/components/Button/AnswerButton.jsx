import React from "react";
import { ReactComponent as CorrectIcon } from "../../assets/svgs/correctIcon.svg";
import { ReactComponent as WrongIcon } from "../../assets/svgs/wrongIcon.svg";

export const CorrectAnswerBtn = (props) => {
  return (
    <div className="flex items-center w-full">
      <div className="pr-8">
        <CorrectIcon />
      </div>

      <div className="w-full">
        <button
          type="button"
          className="py-5 px-10 text-base font-medium bg-gradient-to-r from-ansBlue1 via-ansBlue2 to-ansBlue3 rounded w-full shadow-awesumOne max-w-md text-white text-left"
        >
          {props.children}
        </button>
      </div>
    </div>
  );
};

export const SelectedBtn = (props) => {
  return (
    <div className="flex items-center">
      <div className="pr-20"></div>

      <div className="w-full">
        <button
          type="button"
          className="py-5 px-10 text-base font-medium bg-gradient-to-r from-ansBlue1 via-ansBlue2 to-ansBlue3 rounded w-full shadow-awesumOne max-w-md text-white text-left"
        >
          {props.children}
        </button>
      </div>
    </div>
  );
  
};


export const DefaultAnswerBtn = (props) => {
  return (
    <div className="flex items-center">
      <div className="pr-20"></div>

      <div className="w-full">
        <button
          type="button"
          className="py-5 px-10 text-base font-medium bg-white shadow-awesumOne w-full max-w-md text-left rounded"
        >
          {props.children}
        </button>
      </div>
    </div>
  );
};


export const WrongAnswerBtn = (props) => {
    return (
      <div className="flex items-center w-full">
        <div className="pr-8">
          <WrongIcon />
        </div>
  
        <div className="w-full">
          <button
            type="button"
            className="py-5 px-10 text-base font-medium bg-lightRed w-full shadow-awesumOne max-w-md text-white text-left rounded"
          >
            {props.children}
          </button>
        </div>
      </div>
    );
  };