import React from "react";
// import biologyThumbNail from "../../assets/images/biologyThumbNail.svg";
import profilePic from "../../assets/images/profilePic.svg";
import { ReactComponent as EyeIcon } from "../svgs/eyeIcon.svg";
import { ReactComponent as PlayIcon } from "../svgs/playIcon.svg";
import { ReactComponent as ClockIcon } from "../svgs/clockIcon.svg";
import { ReadOnlyRating } from "../Ratings/Ratings";
import Video from "../MultiCarousel/Video";

export default function ClassCards(props) {
  return (
    <div className="font-body  max-w-ts1 flex justify-center  pt-3.5 pb-8 shadow-card rounded-md">
      <div className=" max-w-ts1">
        {/* In case the video fails to load */}
        {/* <img src={biologyThumbNail} alt="biologyThumbNail" /> */}
        <Video id={props.item.url} key={props.item.url} />
        <div className="px-1">
        <p className="text-lg pt-4 max-w-ts2 truncate">
          {props.item.courseName}
        </p>
        <div className="flex text-sm">
          <div className="flex items-center">
            <EyeIcon />
            <span className="px-1 sm:px-2">{props.item.viewsNumber} views</span>
          </div>
          <div className="flex items-center px-1 sm:px-3">
            <PlayIcon />
            <span className="px-1 sm:px-2">{props.item.lectureNumber} lectures</span>
          </div>
          <div className="flex items-center">
            <ClockIcon />
            <span className="px-1 sm:px-2">{props.item.timeNumber}</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 pt-5">
          <img src={profilePic} alt="profile Pic" />
          <div className="pt-5">
            <div className="text-sm">{props.item.tutorName}</div>
            <div className="flex items-center -ml-4">
              <div className="xs:-ml-2 transform scale-95">
                <ReadOnlyRating
                  size="small"
                  color="primary"
                  ratingCount={props.item.ratingCount}
                />
              </div>
              <span className="text-sm -mt-3">
                ({props.item.ratingCount} star)
              </span>
            </div>
          </div>
        </div>
     
        </div> </div>
    </div>
  );
}
