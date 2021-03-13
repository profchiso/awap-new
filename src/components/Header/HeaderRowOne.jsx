import React from "react";
import Search from "../Search/Search";
import { ReactComponent as AwesumEdgeLogo } from "../../assets/svgs/AwesumEdgeLogo.svg";
import awesumBook from "../../assets/svgs/AwesumBook.svg";
import { Link } from "react-router-dom";

export default function HeaderRowOne() {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 lg:px-16">
      <div className="flex items-center my-6">
        <div className="transform md:scale-80 scale-70 hidden md:block">
          <Link to="/">
            <AwesumEdgeLogo />
          </Link>
        </div>
        <div className="block md:hidden">
          <img src={awesumBook} alt="" />
        </div>
        <Search />
        <div className="flex justify-center">
          <button className="text-primary font-body shadow-primary px-5 py-2 rounded-md mr-4 md:mr-8 focus:outline-none text-sm lg:text-base">
            Awesum Quiz
          </button>
          <Link to="/login">
            <button className="text-white bg-primary  font-body shadow-primary px-5 py-2 rounded-md focus:outline-none text-sm lg:text-base">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
