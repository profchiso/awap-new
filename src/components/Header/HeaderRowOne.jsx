import React from "react";
import {connect} from "react-redux"
import Search from "../Search/Search";
import { ReactComponent as AwesumEdgeLogo } from "../../assets/svgs/AwesumEdgeLogo.svg";
import awesumBook from "../../assets/svgs/AwesumBook.svg";
import { Link } from "react-router-dom";
import { ReactComponent as AwesumQuiz } from "../../assets/svgs/AwesumQuiz.svg";
import { ReactComponent as Filter } from "../../assets/svgs/FilterIcon.svg";
//import {loginReducer} from "../../redux/reducers/loginReducer"

import { CircleUserAvatar } from "../Avatar/Avatar";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";

 function HeaderRowOne({ showFilter,loginReducer }) {
  const {user}= loginReducer
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
        {localStorage.token ? (
            // {login ? (
          <div className="flex items-center gap-5">
            <button className="flex items-center  font-body">
              <AwesumQuiz />
              <span className="pl-2 text-primary">Awesum Quiz</span>
            </button>
            <button className="flex items-center  font-body">
              <CircleUserAvatar imgUrl="https://images.unsplash.com/photo-1536766768598-e09213fdcf22?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8YmVhdXRpZnVsJTIwbGFkeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
              <span className="px-1 text-primary">Hi {user.firstName? user.firstName:",Welcome"}</span>
              <ExpandMoreRoundedIcon color="primary" />
            </button>
            {showFilter ? (
              <button className="flex items-center font-body">
                <Filter /> <span className="pl-2 text-primary">Filter</span>
              </button>
            ) : null}
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps, {
  
})(HeaderRowOne);
