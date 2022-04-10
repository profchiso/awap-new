import React from "react";
import HeaderRowOne from "./HeaderRowOne";

export default function Header(props) {
  return (
    <div className="hidden sm:block">
      <HeaderRowOne
        showFilter={props.showFilter}
        showHeaderTitle={props.showHeaderTitle}
        headerTitle={props.headerTitle}
      />
      {/* <HeaderRowTwo /> */}
    </div>
  );
}
