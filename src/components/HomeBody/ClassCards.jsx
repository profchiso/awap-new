import React from "react";
import biologyThumbNail from "../../assets/images/biologyThumbNail.svg";
import profilePic from "../../assets/images/profilePic.svg";
import { ReactComponent as EyeIcon } from "../svgs/eyeIcon.svg";
import { ReactComponent as PlayIcon } from "../svgs/playIcon.svg";
import { ReactComponent as ClockIcon } from "../svgs/clockIcon.svg";
import { ReadOnlyRating } from "../Ratings/Ratings";

export default function ClassCards() {
  return (
    <div>
      <img src={biologyThumbNail} alt="biologyThumbNail" />
      <p className="text-lg">Introduction to Cells</p>
      <div className="flex">
        <div>
          <EyeIcon />
          <span>2k views</span>
        </div>
        <div>
          <PlayIcon />
          <span>2 lectures</span>
        </div>
        <div>
          <ClockIcon />
          <span>1h</span>
        </div>
      </div>

      <div className="flex">
        <img src={profilePic} alt="profile Pic" />
        <div>
          <p className="text-sm">Doris Peluola</p>
          <div className="flex">
            <div className="xs:-ml-2 mt-2 mb-1  transform scale-95">
              <ReadOnlyRating size="small" color="primary" ratingCount={5} />
            </div>
            <span>(5 star)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
