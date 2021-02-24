import React from "react";
import FooterRowOne from "./FooterRowOne";
import FooterRowThree from "./FooterRowThree";
import FooterRowTwo from "./FooterRowTwo";

export default function Footer() {
  return (
    <div className="max-w-screen-2xl mx-auto text-white pt-8 md:pt-16">
      <div className="lg:bg-footer bg-cover bg-center bg-no-repeat">
        <FooterRowOne />
        <div className="bg-gradient-to-b from-blueTwo to-blueThree pl-5 pt-12">
          <FooterRowTwo />
          <FooterRowThree />
        </div>
      </div>
    </div>
  );
}
