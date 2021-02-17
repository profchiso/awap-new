import React from 'react'
import FooterRowOne from './FooterRowOne';
import FooterRowThree from './FooterRowThree';
import FooterRowTwo from './FooterRowTwo';


export default function Footer() {
    return (
        <div className="max-w-screen-2xl mx-auto text-white">
            <div className="bg-footer  bg-no-repeat">
            <FooterRowOne/>
            <FooterRowTwo/>
            <FooterRowThree/>
            </div>
            
            </div>
    )
}
