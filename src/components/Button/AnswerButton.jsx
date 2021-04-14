import React from "react";
import { ReactComponent as CorrectIcon } from "../../assets/svgs/correctIcon.svg";
import { ReactComponent as WrongIcon } from "../../assets/svgs/wrongIcon.svg";

export const DefaultAnswerBtn = (props) => {
  const showAnIcon = () => {
    if (props.showIcon === "correctIcon") {
      return <CorrectIcon />;
    } else if (props.showIcon === "wrongIcon") {
      return <WrongIcon />;
    } else {
      return "";
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className="ml-auto min-w-icon transform scale-50 sm:scale-75 lg:scale-90 sm:mr-3 xl:mr-0">
        {props.isClicked && showAnIcon()}
      </div>

      <div className="w-full">
        <button
          type="button"
          className={`flex py-5 px-6 sm:px-10 text-base font-medium bg-white ${props.isSelected} shadow-awesumOne w-full max-w-md sm:min-w-xs mx-auto text-left rounded`}
          onClick={props.onClick}
        >
          {props.children}
        </button>
      </div>
    </div>
  );
};
