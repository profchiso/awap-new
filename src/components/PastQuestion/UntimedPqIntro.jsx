import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as QuestionMark } from "../../assets/svgs/QuestionMark.svg";

export default function UntimedPqIntro() {
  return (
    <div className="flex justify-center mb-24">
      <div className="font-body flex flex-col gap-28 text-center mt-24 lg:mt-40">
        <h3 className="text-md sm:text-xl md:text-2xl lg:text-3xl font-body">Untimed Past Questions</h3>
        <div className="flex items-center justify-center">
          <span>
            <QuestionMark />
          </span>
          <span className="md:text-2xl pl-3">20 Questions</span>
        </div>
        <div>
          <Link to="/pq/practice">
            <button className="text-white bg-primary  font-body shadow-primary px-16  md:px-20 py-2 rounded-md focus:outline-none text-sm lg:text-base">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
