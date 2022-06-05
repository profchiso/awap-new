
import { connect } from "react-redux";
import {Redirect}from "react-router-dom"
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import { login, saveLoginUserDataToState,clearLoginRelatedErrors,activateAccount } from "../../redux/actions/login";
import StatusCard from '../components/StatusCard';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { makeStyles } from "@material-ui/core/styles";
import { Input } from 'antd';


const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    inputField: {
      fontFamily: "Google Sans",
    },
    iconButton: {
      marginLeft: "-0.75rem !important",
    },
  }));

 function ConvertFund(props) {
    const classes = useStyles();
    const {user,token} = props.loginReducer
    return (
        <>
        {props.loginReducer.token==="" && <Redirect to="/"/> }
        <Sidebar />
        <div className="md:ml-64">
        <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                        <StatusCard
                            color="orange"
                            icon="paid"
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
                            icon="paid"
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
                            icon="trending_up"
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
                    <div className="grid grid-cols-1 px-4 mb-16">
                    <Card>
            <CardHeader color="bg-cardNice" contentPosition="left" className="bg-cardNice">
                <h2 className="text-white text-2xl">Convert Profit Balance To Reserved Capital</h2>
            </CardHeader>
            <CardBody>
                <div className="overflow-x-auto">
                    <div>
                    <div className="flex justify-start py-3 px-20">
                        <Input type="number" placeholder="Amount"  size="middle" allowClear={true} maxLength={20}/>
             
                    </div> 
                    </div>
             <div className="flex justify-start py-3 px-20">
                <button
                  type="button"
                  onClick={(e) =>{}}
                  className="text-white flex gap-5 bg-primary shadow-primary px-12 py-2 rounded-md focus:outline-none text-sm lg:text-base"
                >
                  <span className="">Continue</span>

                  {/* {isButtonClicked && values.email && values.password && (
                    <svg
                      class="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  )} */}
                </button>
              </div>
                </div>
            </CardBody>
        </Card>   
                    </div>
                </div>
            </div>
          
            <Footer />
        </div>
    </> 
    );
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
    activateAccount
  })(ConvertFund);
  
  
