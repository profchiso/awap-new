import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Construction from "../assets/svgs/Construction.svg";
import useWindowDimensions from "../Hooks/UseWindowDimension";
import MobileHeader from "../components/Header/MobileHeader"

export default function UnderConstruction() {
  const { width } = useWindowDimensions();
  return (
    <div>
      {width < 640 ? (
        <div className="block bg-blueOne pb-6 pl-2 sm:hidden">
          <MobileHeader />
        </div>
      ) : (
        <Header/>
      )}
      <div className="flex justify-center">
        <div className="pb-40 px-8">
          <p className="text-primary text-base md:text-xl py-20">
          IPO IN PROGRESS<br/>
SHARE MARKET COMING SOON
          </p>
          <img src={Construction} alt="" className="w-full max-w-lg mx-auto" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
