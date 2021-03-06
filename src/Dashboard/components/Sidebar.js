import { useState } from 'react';
import { NavLink,Link } from 'react-router-dom';
import { connect } from "react-redux";
import { logout } from "../../redux/actions/login";
import AdminNavbar from './AdminNavbar';
import Icon from '@material-tailwind/react/Icon';
import H6 from '@material-tailwind/react/Heading6';

 function Sidebar(props) {
     const {loginReducer}=props
     const {user}=loginReducer
    const [showSidebar, setShowSidebar] = useState('-left-64');
    return (
        <>
            <AdminNavbar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
            <div
                className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
            >
                <div className=" bg-primeGrey flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                    <Link to={"/dashboard"}>
                        <H6 color="gray">AWAP</H6>
                    </Link>
                    <div className="flex flex-col">
                        <hr className="my-4 min-w-full" />

                        <ul className="flex-col min-w-full flex list-none">
                            <li className="rounded-lg mb-4">
                                <NavLink
                                    to="/dashboard"
                                    exact
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-primary from-light-blue-500 to-light-blue-700 text-secondary shadow-md"
                                >
                                    <Icon name="dashboard" size="2xl" />
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-4">
                                <NavLink
                                    to="/deposit"
                                    exact
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-primary from-light-blue-500 to-light-blue-700 text-secondary shadow-md"
                                >
                                    <Icon name="dashboard" size="2xl" />
                                    Deposit
                                </NavLink>
                            </li>
                            <li className={`rounded-lg mb-4 ${user.isActivated? "hidden":""}`}>
                                <NavLink
                                    to="/activate"
                                    exact
                                    className="  flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-primary from-light-blue-500 to-light-blue-700 text-secondary shadow-md"
                                >
                                    <Icon name="dashboard" size="2xl" />
                                    Activate
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/dollar-transfer"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-primary from-light-blue-500 to-light-blue-700 text-secondary shadow-md"
                                >
                                    <Icon name="settings" size="2xl" />
                                    Dollar Transfer
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 ">
                                <NavLink
                                    to="/convert-fund"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-primary from-light-blue-500 to-light-blue-700 text-secondary shadow-md"
                                >
                                    <Icon name="toc" size="2xl" />
                                    Convert Fund
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 text-gray-700">
                                <NavLink
                                    to="/my-team"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-primary from-light-blue-500 to-light-blue-700 text-secondary shadow-md"
                                >
                                    <Icon name="map" size="2xl" />
                                    My Team
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 text-gray-700">
                                <NavLink
                                    to="/invest"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-primary from-light-blue-500 to-light-blue-700 text-secondary shadow-md"
                                >
                                    <Icon name="map" size="2xl" />
                                    Invest
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 text-gray-700">
                                <NavLink
                                    to="/loan"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-primary from-light-blue-500 to-light-blue-700 text-secondary shadow-md"
                                >
                                    <Icon name="map" size="2xl" />
                                    Loan
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 text-gray-700">
                                <NavLink
                                    to="/savings"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-primary from-light-blue-500 to-light-blue-700 text-secondary shadow-md"
                                >
                                    <Icon name="map" size="2xl" />
                                    Savings
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 text-gray-700">
                                <NavLink
                                    to="/share-market"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-primary from-light-blue-500 to-light-blue-700 text-secondary shadow-md"
                                >
                                    <Icon name="map" size="2xl" />
                                    Share market
                                </NavLink>
                            </li>
                          
                          
                        </ul>

                        
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
    logout,
  })(Sidebar);
