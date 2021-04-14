import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Construction from "../assets/svgs/Construction.svg";
import useWindowDimensions from "../Hooks/UseWindowDimension";
import MobileHeader from "../components/Header/MobileHeader"

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
        <div className="pb-40">
          <p className="text-primary text-base md:text-xl py-20">
            Sorry the Page you are looking for is Unavailable or under
            Construction
          </p>

          <img src={Construction} alt="" className="w-full max-w-lg mx-auto" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
