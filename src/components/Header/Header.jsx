import React from 'react'
import { ReactComponent as AwesumEdgeLogo } from "../svgs/AwesumEdgeLogo.svg";


export default function Header() {
    return (
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-16">
            <div>
            <AwesumEdgeLogo/>
            </div>
        </div>
    )
}
