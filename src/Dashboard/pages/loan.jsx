import React, {useState} from 'react'
import StatusCard from '../components/StatusCard';
import Button from '@material-tailwind/react/Button';
import {Alert} from '@material-tailwind/react'
import H2 from "@material-tailwind/react/Heading2";
import {  Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { login, saveLoginUserDataToState,clearLoginRelatedErrors,activateAccount,saveActivationDataToState } from "../../redux/actions/login";
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import axios from 'axios';
import { BASE_URL, requestHeaders } from "../../redux/actions/config";
import {message } from 'antd';
import Construction from "../../assets/svgs/Construction.svg";


// Tailwind CSS Style Sheet
import '../../assets/styles/tailwind.css';


function Loan(props) {
    
    
    const {user,token} = props.loginReducer
    const activate= async(payload)=> {
        try {
              const activated = await axios.post(
                `${BASE_URL}activation`,
                payload,
               { headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${token}`,
                  }},
            );
            console.log("activated",activated);
            props.saveActivationDataToState(activated.data);
            message.success(activated.data.data.message,5)
            
        } catch (error) {
            console.log("error", error);
            
        }
    }
  
  return (
    <>
    {token==="" && <Redirect to="/"/> }
  
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
                            amount={`${user.balance}`}
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
                            amount={`${user.cashoutBalance}`}
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
            <div className={`px-3 md:px-8 h-auto -mt-24 ${user.isActivated? "":""}`}>
             <div className="flex justify-center">
                <div className="pb-40 px-8">
                    <p className="text-primary text-base md:text-xl py-20">
                    
                    LOAN FEATURE  COMING SOON
                 </p>
                <img src={Construction} alt="" className="w-full max-w-lg mx-auto" />
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
  clearLoginRelatedErrors,
  activateAccount,
  saveActivationDataToState
})(Loan);


