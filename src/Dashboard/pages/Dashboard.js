
import { connect } from "react-redux";
import { login, saveLoginUserDataToState,clearLoginRelatedErrors,activateAccount } from "../../redux/actions/login";
import StatusCard from '../components/StatusCard';
import TableCard from '../components/TableCard';

 function Dashboard(props) {
    const {user,token} = props.loginReducer
    return (
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
                         {/* <StatusCard
                            color="purple"
                            icon="paid"
                            title="My Team"
                            amount="924"
                            percentage="1.10"
                            percentageIcon="arrow_downward"
                            percentageColor="orange"
                            date="Since yesterday"
                            bg="bg-cardTeal"
                        /> */}
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
                        <TableCard tableTitle="Investments" columns={["Pcakage","Amount","Inv. Date","Mat. Date","Status"]} data={[]}/>
                    </div>
                </div>
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
  })(Dashboard);
  
  
