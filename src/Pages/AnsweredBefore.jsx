import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AnsweredBeforeContent from "../components/PastQuestion/AnsweredBeforeContent";
import MobileHeader from "../components/Header/MobileHeader";

export default function AnsweredBefore() {
  return (
    <div className="">
       <div className="block bg-blueOne pb-8 pl-2 sm:hidden">
        <MobileHeader />
      </div>
      <Header />
      <AnsweredBeforeContent />
      <Footer />
    </div>
  );
}
