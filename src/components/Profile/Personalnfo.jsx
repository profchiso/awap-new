import React from "react";

export default function PersonalInfo(props) {
  return (
    <div className="max-w-2xl p-10" onClick={props.onClick}>
      <h3 className="text-2xl font-medium">Personal Info</h3>
      <br />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, sit.
        Deleniti excepturi est impedit eveniet cupiditate magni odit explicabo
        repellat, ratione, numquam doloribus dignissimos recusandae minus
        aliquid commodi voluptas similique?
      </p>
    </div>
  );
}
