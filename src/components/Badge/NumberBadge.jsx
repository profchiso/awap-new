import React from "react";

export default function NumberBadge(props) {
  return (
    <span className="mr-8 font-medium rounded-full border-2 border-primary h-8 w-8 flex items-center justify-center text-center text-primary p-2">
      {props.children}
    </span>
  );
}
