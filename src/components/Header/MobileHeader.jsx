import React from 'react'
import Search from '../Search/Search';
import { ReactComponent as MenuIcon } from "../svgs/menuIcon.svg";


export default function MobileHeader() {
    return (
        <div className="pt-12 flex items-center gap-5">
            <MenuIcon className="transform scale-150"/>
            <Search/>
        </div>
    )
}
