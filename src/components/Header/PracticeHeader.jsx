import React from "react";
import { ReactComponent as AwesumEdgeLogo } from "../../assets/svgs/AwesumEdgeLogo.svg";
import awesumBook from "../../assets/svgs/AwesumBook.svg";
import { Link } from "react-router-dom";

export default function PracticeHeader() {
  return (
    <div className=" px-6 lg:px-16 shadow-primary py-5 mb-8">
      <div className="flex items-center max-w-screen-2xl mx-auto">
        <div className="transform md:scale-80 scale-70 hidden md:block">
          <Link to="/">
            <AwesumEdgeLogo />
          </Link>
        </div>
        <div className="block md:hidden">
          <img src={awesumBook} alt="" />
        </div>
        <div className="flex flex-1 justify-center px-5 sm:px-0 lg:-ml-28 font-medium text-lg">
          2012 BIOLOGY WAEC Practice Questions
        </div>
      </div>
    </div>
  );
}
