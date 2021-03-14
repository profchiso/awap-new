import React from "react";

export default function Explanation(prop) {
  return (
    <div className="p-8 rounded border border-gray-300">
      <p className="text-base  pb-3">Solution</p>
      <p className="w-full max-w-md">{prop.explanationText}</p>
    </div>
  );
}
