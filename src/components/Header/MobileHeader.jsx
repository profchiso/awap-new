import React from 'react'
import Search from '../Search/Search';
import TemporaryDrawer from '../SideNav/MobileDrawer';


export default function MobileHeader() {
    return (
        <div className="pt-6 flex items-center sm:gap-5">
            <TemporaryDrawer/>
            <Search/>
        </div>
    )
}
