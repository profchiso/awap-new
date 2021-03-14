import React from "react";
import useWindowDimensions from "../../Hooks/UseWindowDimension";
import MobileSideNav from "../SideNav/MobileSideNav";
import WebSideNav from "../SideNav/WebSideNav";
import Header from "../Header/Header";

export default function AnswerLayout(props) {
  const { width } = useWindowDimensions();

  return (
    <div>
      <Header />
      <div className="flex ">
        {width < 768 ? <MobileSideNav /> : <WebSideNav />}
        {props.children}
      </div>
    </div>
  );
}
