import React from "react";
import Search from "../Search/Search";
import { ReactComponent as AwesumEdgeLogo } from "../svgs/AwesumEdgeLogo.svg";

export default function HeaderRowOne() {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 sm:px-16">
      <div className="flex items-center my-6">
        <AwesumEdgeLogo />
        <Search />
        <div className="flex justify-center ">
          <button className="text-primary shadow-primary px-5 py-2 rounded-md ml-4 mr-8 focus:outline-none">
            Awesum Quiz
          </button>
          <button className="text-white bg-primary shadow-primary px-5 py-2 rounded-md focus:outline-none">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
