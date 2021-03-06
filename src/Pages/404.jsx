import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import useWindowDimensions from "../Hooks/UseWindowDimension";
import MobileHeader from "../components/Header/MobileHeader"
import UnavailableIcon from "../assets/svgs/unavailable.svg";

export default function Unavailable() {
  const { width } = useWindowDimensions();
  return (
    <div>
      {width < 640 ? (
        <div className="block bg-blueOne pb-6 pl-2 sm:hidden">
          <MobileHeader />
        </div>
      ) : (
        <Header />
      )}
      <div className="flex justify-center">
        <div className="pb-40 px-8">
          <p className="text-primary text-base md:text-xl py-20">
            Sorry the Page you are looking for is Unavailable 
          </p>
          <img src={UnavailableIcon} alt="" className="w-full max-w-lg mx-auto" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
