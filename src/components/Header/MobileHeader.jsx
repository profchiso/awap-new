import React from 'react'
import Search from '../Search/Search';
// import { ReactComponent as MenuIcon } from "../../assets/svgs/menuIcon.svg";
import TemporaryDrawer from '../Drawer/Drawer';


export default function MobileHeader() {
    return (
        <div className="pt-12 flex items-center sm:gap-5">
            <TemporaryDrawer/>
            {/* <MenuIcon className="transform scale-150"/> */}
           
            <Search/>
        </div>
    )
}
