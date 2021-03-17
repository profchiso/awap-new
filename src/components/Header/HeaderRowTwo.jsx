import React from "react";
import GradeList from "./GradeList";
import PQList from "./PQList";

export default function HeaderRowTwo() {
 
  return (
    <div className="text-primary text-sm bg-primeGrey py-2">
      <div className="max-w-screen-2xl mx-auto flex px-6 sm:px-16">
        <div className="mr-20 ">
          <GradeList/>
        </div>
        
        <div>
          <PQList/>
        </div>
      </div>
    </div>
  );
}
