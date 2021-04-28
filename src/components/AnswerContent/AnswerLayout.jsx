import React from "react";
import useWindowDimensions from "../../Hooks/UseWindowDimension";
import MobileSideNav from "../SideNav/MobileSideNav";
import WebSideNav from "../SideNav/WebSideNav";
import PracticeHeader from "../Header/PracticeHeader";

export default function AnswerLayout(props) {
  const { width } = useWindowDimensions();

  return (
    <div>
      <PracticeHeader showFilter={true} showHeaderTitle={true} />

      <div className="flex ">
        {width < 768 ? <MobileSideNav /> : <WebSideNav biologyPQYear={props.biologyPQYear}/>}
        {props.children}
      </div>
    </div>
  );
}
