import React from "react";

export default function PreviousNextQstn(props) {
  return (
    <div className="flex justify-evenly items-center py-6  lg:max-w-2xl mx-auto">
      <div>
        <button
          onClick={() => props.decreaseQuestionNumber()}
          className="text-white bg-primary px-12 font-body shadow-primary px-5 py-2 rounded-md focus:outline-none text-sm lg:text-md font-medium"
        >
          PREVIOUS
        </button>
      </div>
      <div>
        {props.questionNumber+1 === props.questionLength ? (
          <button
            onClick={() => props.handleOpen()}
            className="text-white bg-primary px-12 font-body shadow-primary px-5 py-2 rounded-md focus:outline-none text-sm lg:text-md font-medium"
          >
            FINISH
          </button>
        ) : (
          <button
            onClick={() => props.increaseQuestionNumber()}
            className="text-white bg-primary px-12 font-body shadow-primary px-5 py-2 rounded-md focus:outline-none text-sm lg:text-md font-medium"
          >
            NEXT
          </button>
        )}
      </div>
    </div>
  );
}
