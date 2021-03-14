import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Construction from "../assets/svgs/Construction.svg";

export default function Unavailable() {
  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <div className="">
          <p className="text-primary text-base md:text-xl py-20">
            Sorry the Page you are looking for is Unavailable or under
            Construction
          </p>

          <img src={Construction} alt="" className="w-full max-w-lg mb-16 mx-auto" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
