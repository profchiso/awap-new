import React from "react";
import Search from "../Search/Search";
import { ReactComponent as AwesumEdgeLogo } from "../svgs/AwesumEdgeLogo.svg";
import awesumBook from "../svgs/AwesumBook.svg";


export default function HeaderRowOne() {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 lg:px-16">
      <div className="flex items-center my-6">
        <div className="transform md:scale-80 scale-70 hidden md:block">
          <AwesumEdgeLogo />
        </div>
        <div className="block md:hidden">
          <img src={awesumBook} alt=""/>
        </div>
        <Search />
        <div className="flex justify-center">
          <button className="text-primary shadow-primary px-5 py-2 rounded-md mr-4 md:mr-8 focus:outline-none text-sm lg:text-base">
            Awesum Quiz
          </button>
          <button className="text-white bg-primary shadow-primary px-5 py-2 rounded-md focus:outline-none text-sm lg:text-base">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
