import React from "react";
import biologyThumbNail from "../../assets/images/biologyThumbNail.svg";
import profilePic from "../../assets/images/profilePic.svg";
import { ReactComponent as EyeIcon } from "../svgs/eyeIcon.svg";
import { ReactComponent as PlayIcon } from "../svgs/playIcon.svg";
import { ReactComponent as ClockIcon } from "../svgs/clockIcon.svg";
import { ReadOnlyRating } from "../Ratings/Ratings";

export default function ClassCards() {
  return (
    <div className="font-body  max-w-ts1 flex justify-center  pt-3.5 pb-12 shadow-card rounded-md">
      <div className=" max-w-ts1">
      <img src={biologyThumbNail} alt="biologyThumbNail" />
      <p className="text-lg pt-5 pb-3">Introduction to Cells</p>
      <div className="flex text-sm">
        <div className="flex items-center">
          <EyeIcon />
          <span className="px-2">2k views</span>
        </div>
        <div className="flex items-center px-3">
          <PlayIcon />
          <span className="px-2">2 lectures</span>
        </div>
        <div className="flex items-center">
          <ClockIcon />
          <span className="px-2">1h</span>
        </div>
      </div>

      <div className="flex items-center gap-2.5 pt-8">
        <img src={profilePic} alt="profile Pic"/>
        <div>
          <p className="text-sm pt-3">Doris Peluola</p>
          <div className="flex items-center -ml-1">
            <div className="xs:-ml-2 pt-2 transform scale-95">
              <ReadOnlyRating size="small" color="primary" ratingCount={5} />
            </div>
            <span className="text-xs">(5 star)</span>
          </div>
        </div>
      </div>
    </div>
      </div>
     
  );
}
