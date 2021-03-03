import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";


export default function MenuColTwo(props) {


  return (
    <div className="bg-f8 pr-4">
      <MenuItem className="font-body font-normal mr-8">
      <Link to="waec/biology"><span className="font-body font-normal text-gray-800">{props.titleOne}</span></Link>
      </MenuItem>
      <MenuItem className="font-body font-normal mr-8">
      <Link to="waec/chemistry"><span className="font-body font-normal text-gray-800">{props.titleTwo}</span></Link>
      </MenuItem>
      <MenuItem className="font-body font-normal mr-8">
      <Link to="waec/physics"><span className="font-body font-normal text-gray-800">{props.titleThree}</span></Link> 
      </MenuItem>
      <MenuItem className="font-body font-normal mr-8">
       <Link to="waec/mathematics"><span className="font-body font-normal text-gray-800">{props.titleFour}</span></Link> 
      </MenuItem>
    </div>
  );
}
