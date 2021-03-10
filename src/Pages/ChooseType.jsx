import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function ChooseType() {
  return (
    <div>
      <Header/>
      <div className="flex justify-center mb-24">
        <div className="font-body flex flex-col gap-28 text-center mt-40">
          <h3 className="text-3xl font-body">Choose type</h3>
          <div className="flex items-center justify-center">
            <span>... </span>
            <span className="md:text-2xl pl-3">...</span>
          </div>
          <div>
          <Link to="/biology-choose-type">
            <button className="text-white bg-primary  font-body shadow-primary px-5  md:px-20 py-2 rounded-md focus:outline-none text-sm lg:text-base">
              Next
            </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  );
}
