
import { connect } from "react-redux";
import {Redirect}from "react-router-dom"
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import { login, saveLoginUserDataToState,clearLoginRelatedErrors,activateAccount } from "../../redux/actions/login";
import StatusCard from '../components/StatusCard';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
const columns=["Name","Username","Country","Joined Date","Activated"]

 function MyTeam(props) {
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
                <h2 className="text-white text-2xl">My Team</h2>
            </CardHeader>
            <CardBody>
                <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                {columns.map((column, index) => (
                                
                                <th key={index} className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    {column}
                                </th>
                                ))}
                               
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Chinedu okorie
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    chinedu
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>{' '}
                                    Nigeria
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    05/06/2022
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Yes
                                </th>
                            </tr>
                        </tbody>
                    </table>
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
  })(MyTeam);
  
  
