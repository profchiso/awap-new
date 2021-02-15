import React from "react";
import { CgSearch } from "react-icons/cg";

export default function Search() {
  return (
    <div className="flex flex-1 justify-center">
      <form className="flex justify-self-center items-center w-full max-w-lg">
        <CgSearch className="absolute text-xl text-primary ml-3" />
        <input
          type="text"
          className="py-2.5 px-4 pl-12 focus:outline-none w-full border border-primary-400 rounded-full text-sm"
          placeholder="Search anything"
        />
      </form>
    </div>
  );
}
