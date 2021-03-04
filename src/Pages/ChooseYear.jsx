import React from "react";
import Header from "../components/Header/Header";

export default function ChooseYear() {
  return (
    <div>
      <Header/>
      <div className="flex justify-center">
        <div className="font-body flex flex-col gap-28 text-center mt-40">
          <h3 className="text-3xl font-body">BIOLOGY  (SSCE) WAEC Questions</h3>
          <div className="flex items-center justify-center">
            <span>... </span>
            <span className="md:text-2xl pl-3">button</span>
          </div>
          <div>
            <button className="text-white bg-primary  font-body shadow-primary px-5  md:px-20 py-2 rounded-md focus:outline-none text-sm lg:text-base">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
