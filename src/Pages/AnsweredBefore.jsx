import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AnsweredBeforeContent from "../components/PastQuestion/AnsweredBeforeContent";

export default function AnsweredBefore() {
  return (
    <div className="">
      <Header />
      <AnsweredBeforeContent />
      <Footer />
    </div>
  );
}
