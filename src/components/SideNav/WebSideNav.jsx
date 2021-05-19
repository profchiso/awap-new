import React from "react";
import { NavLink } from "react-router-dom";
import { biologyPQYear } from "../../DB/BiologyPQ";

export default function WebSideNav() {
  return (
    <div className="bg-primary h-full fixed min-w-xs1 scrollSection -mt-2">
      <div className="text-white pb-24">

      <h2 className="text-2xl pt-10 pl-8">Statistics</h2>

        <div className="pt-8 pl-8 mb-8">
          <h4 >Year</h4>
        </div>
        <div className="h-128 bg-local overflow-y-scroll mr-2">
          {biologyPQYear.map((item, index) => (
            <div className="p-4 pl-8">
              <NavLink
                key={index}
                to="/stats"
                className="text-white hover:text-white"
              >
                {item.year}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
