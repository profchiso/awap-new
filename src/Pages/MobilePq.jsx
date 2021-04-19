import React from "react";
import Footer from "../components/Footer/Footer";
import HeaderRowOne from "../components/Header/HeaderRowOne";
import useWindowDimensions from "../Hooks/UseWindowDimension";
import MobileHeader from "../components/Header/MobileHeader";
import MobilePqList from "../components/Header/MobilePqList";
import { connect } from "react-redux";
import { Redirect } from "react-router";

function MobilePq(props) {
  const { width } = useWindowDimensions();
  const  token  = props?.loginReducer?.token;

  if (token){
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
}return <Redirect to="/login" />;
}
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateToProps, 

)(MobilePq);
