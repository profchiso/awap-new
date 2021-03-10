import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

export default function MenuColTwo(props) {
  return (
    <div className="bg-f8 pr-4">
      <MenuItem className="font-body font-normal mr-8">
        <Link to={props.urlOne}>
          <span className="font-body font-normal text-gray-800">
            {props.titleOne}
          </span>
        </Link>
      </MenuItem>
      <MenuItem className="font-body font-normal mr-8">
        <Link to={props.urlTwo}>
          <span className="font-body font-normal text-gray-800">
            {props.titleTwo}
          </span>
        </Link>
      </MenuItem>
      <MenuItem className="font-body font-normal mr-8">
        <Link to={props.urlThree}>
          <span className="font-body font-normal text-gray-800">
            {props.titleThree}
          </span>
        </Link>
      </MenuItem>
      <MenuItem className="font-body font-normal mr-8">
        <Link to={props.urlFour}>
          <span className="font-body font-normal text-gray-800">
            {props.titleFour}
          </span>
        </Link>
      </MenuItem>
    </div>
  );
}
