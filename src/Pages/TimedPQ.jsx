import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MobileHeader from "../components/Header/MobileHeader";
import TimedPqIntro from "../components/PastQuestion/timedPqIntro";
import useWindowDimensions from "../Hooks/UseWindowDimension";
import { connect } from "react-redux";
import { Redirect } from "react-router";

function TimedPQ(props) {
    const { width } = useWindowDimensions();
    const token = props?.loginReducer?.token;

    if (token) {
        return (
            <div>
                {width < 640 ? (
                    <div className="block bg-blueOne pb-6 pl-2 sm:hidden">
                        <MobileHeader />
                    </div>
                ) : (
                    <Header />
                )}
                <TimedPqIntro />

                <Footer />
            </div>
        );
    } return <Redirect to="/login" />;
}
const mapStateToProps = (state) => {
    return {
        ...state,
    };
};
export default connect(mapStateToProps)(TimedPQ);
