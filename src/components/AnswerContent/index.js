import React from "react";

export default function AnswerContent(props) {
  return (
    <div className="max-w-screen-2xl mx-auto flex px-6 sm:px-16 w-full">
      {props.children}
    </div>
  );
}
