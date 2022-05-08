import React from 'react'
import StatusCard from '../components/StatusCard';
import Button from '@material-tailwind/react/Button';
import H2 from "@material-tailwind/react/Heading2";
import {  Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { login, saveLoginUserDataToState,clearLoginRelatedErrors } from "../../redux/actions/login";
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';


// Tailwind CSS Style Sheet
import '../../assets/styles/tailwind.css';


function Activate(props) {
  return (
    <>
    {props.loginReducer.token==="" && <Redirect to="/"/> }
    <Sidebar />
    <div className="md:ml-64">
    <>
            <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                        <StatusCard
                            color="orange"
                            icon="trending_up"
                            title="Reserved capital"
                            amount="350,897"
                            percentage="3.48"
                            percentageIcon="arrow_upward"
                            percentageColor="green"
                            date="Since last month"
                            bg="bg-cardRed"
                        />
                        <StatusCard
                            color="lightBlue"
                            icon="groups"
                            title="Profit Bal."
                            amount="2,356"
                            percentage="3.48"
                            percentageIcon="arrow_downward"
                            percentageColor="red"
                            date="Since last week"
                            bg="bg-cardGray"
                        />
                        <StatusCard
                            color="purple"
                            icon="paid"
                            title="My Team"
                            amount="924"
                            percentage="1.10"
                            percentageIcon="arrow_downward"
                            percentageColor="orange"
                            date="Since yesterday"
                            bg="bg-cardTeal"
                        />
                        
                        <StatusCard
                            color="bg-cardLime"
                            icon="poll"
                            title="Investment"
                            amount="49,65%"
                            percentage="12"
                            percentageIcon="arrow_upward"
                            percentageColor="green"
                            date="Since last month"
                            bg="bg-cardLime"
                        />
                    </div>
                </div>
            </div>

            <div className="px-3 md:px-8 h-auto -mt-24">
                <div className="container mx-auto max-w-full">
                    <div className="py-2 px-6">
                       <H2 color="lightGreen">Activate your account</H2>
                       
                      
                    </div>
                    <div className='py-2 px-6'>
                    <p>Activation of your account will cost you $5  and after account activation, you will be able to carry out other the platform full operations</p>
                    </div>
                    <div className='p-6'>
                    <Button
                        color="green"
                        buttonType="outline"
                        size="regular"
                        rounded={false}
                        block={false}
                        iconOnly={false}
                        ripple="dark"
                        >
                            Proceed
                    </Button>
                    </div>
                </div>
            </div>
        </>
        <Footer />
    </div>
</>
  )
}

const mapStateToProps = (state) => {

  return {
    ...state,
  };
};

export default connect(mapStateToProps, {
  login,
  saveLoginUserDataToState,
  clearLoginRelatedErrors
})(Activate);


