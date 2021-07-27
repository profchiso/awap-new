import React from "react";
import useWindowDimensions from "../../Hooks/UseWindowDimension";
// import MobileSideNav from "../SideNav/MobileSideNav";
import WebSideNav from "../SideNav/WebSideNav";
import PracticeHeader from "../Header/PracticeHeader";

export default function AnswerLayout(props) {
  const { width } = useWindowDimensions();
  // console.log(window.location.pathname.includes("/stats"))
  return (
    <div>
      <div className="fixed w-full z-50 bg-white">
        <PracticeHeader pathName={props.pathName} showHeaderTitle={true} />
      </div>

      <div className="flex pt-20">
        {width > 768 && <WebSideNav />}
        {props.children}
      </div>
    </div>
  );
}
