import React from 'react'
import { ReactComponent as AwesumEdgeWhiteLogo } from "../svgs/AwesumEdgeWhiteLogo.svg";
import { ReactComponent as TwitterIcon } from "../svgs/TwitterIcon.svg";
import { ReactComponent as FacebookIcon } from "../svgs/FacebookIcon.svg";
import { ReactComponent as YoutubeIcon } from "../svgs/YoutubeIcon.svg";
import { ReactComponent as InstagramIcon } from "../svgs/InstagramIcon.svg";
import { Link } from 'react-router-dom';


export default function FooterRowOne() {
    return (
        <div className="bg-gradient-to-b from-blueFour to-blueTwo lg:bg-none flex justify-center footerRowOne">
        <div className="">
          <div className="md:pt-32 md:pb-16 pt-8 pb-4 transform scale-75 md:scale-100">
            <AwesumEdgeWhiteLogo />
          </div>
          <div className="flex gap-10 md:pb-32 pb-8 transform scale-75 md:scale-100">
            <div className="p-2">
              <Link to="twitter.com" target="_blank">
                <TwitterIcon />
              </Link>
            </div>
            <div className="p-2">
              <Link to="facebook.com" target="_blank">
                <FacebookIcon />
              </Link>
            </div>
            <div className="p-2">
              <Link to="youtube.com" target="_blank">
                <YoutubeIcon />
              </Link>
            </div>
            <div className="p-2">
              <Link to="instagram.com" target="_blank">
                <InstagramIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
       
    )
}
