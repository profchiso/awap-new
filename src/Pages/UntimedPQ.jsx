import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MobileHeader from "../components/Header/MobileHeader";
import UntimedPqIntro from "../components/PastQuestion/UntimedPqIntro";
import useWindowDimensions from "../Hooks/UseWindowDimension";

export default function UntimedPQ() {
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
      <UntimedPqIntro />

      <Footer />

    </div>
  );
}
