import React from "react";
import Footer from "../components/Footer/Footer";
import HeaderRowOne from "../components/Header/HeaderRowOne";
import useWindowDimensions from "../Hooks/UseWindowDimension";
import MobileHeader from "../components/Header/MobileHeader";
import MobilePqList from "../components/Header/MobilePqList";

export default function MobilePq() {
  const { width } = useWindowDimensions();

  return (
    <div>
      {width < 640 ? (
        <div className="block bg-blueOne pb-6 pl-2 sm:hidden">
          <MobileHeader />
        </div>
      ) : (
        <div className="shadow py-005">
          <HeaderRowOne />
        </div>
      )}
      <MobilePqList />
      <Footer />
    </div>
  );
}
