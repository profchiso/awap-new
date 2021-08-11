import React from "react";
import { connect } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import {selectPastQuestionSubject} from "../../redux/actions/practiceQuestion"

function MobilePqList(props) {
  return (
    <div className="mt-8">
      <p className="p-3 ml-5 text-base">Choose a Subject</p>
      <div className="bg-f8 p-4 max-w-xs mx-auto">
        <MenuItem
          className="font-body font-normal hover:bg-white hover:rounded-lg hover:shadow"
          
        >
          <Link to="/pq/subject-choose-year" className="w-48 ">
            <span
              className="font-body font-normal text-gray-800"
              onClick={() => props.selectPastQuestionSubject("Biology")}
            >
              Biology
            </span>
          </Link>
        </MenuItem>
        <MenuItem
          className="font-body font-normal hover:bg-white hover:rounded-lg hover:shadow"
          
        >
          <Link to="/under-construction" className="w-48 ">
            <span
              className="font-body font-normal text-gray-800"
              // onClick={() => props.selectPastQuestionSubject("Chemistry")}
            >
              Chemistry
            </span>
          </Link>
        </MenuItem>
        <MenuItem
          className="font-body font-normal hover:bg-white hover:rounded-lg hover:shadow"
          
        >
          <Link to="/under-construction" className="w-48 ">
            <span
              className="font-body font-normal text-gray-800"
              // onClick={() => props.selectPastQuestionSubject("Physics")}
            >
              Physics
            </span>
          </Link>
        </MenuItem>
        <MenuItem
          className="font-body font-normal hover:bg-white hover:rounded-lg hover:shadow"
          
        >
          <Link to="/under-construction" className="w-48 ">
            <span
              className="font-body font-normal text-gray-800"
              // onClick={() => props.selectPastQuestionSubject("Math")}
            >
              Math
            </span>
          </Link>
        </MenuItem>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps, { selectPastQuestionSubject })(
  MobilePqList
);
