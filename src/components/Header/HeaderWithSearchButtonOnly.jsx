import React from 'react'
import Search from "../Search/Search";
import { ReactComponent as AwesumEdgeLogo } from "../../assets/svgs/AwesumEdgeLogo.svg";
import awesumBook from "../../assets/svgs/AwesumBook.svg";
import { Link } from 'react-router-dom';


export default function HeaderWithSearchButtonOnly() {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 lg:px-16 shadow-primary pt-2 pb-1">
      <div className="flex items-center my-6">
        <div className="transform md:scale-80 scale-70 hidden md:block">
          <Link to="/">
            <AwesumEdgeLogo />
          </Link>
        </div>
        <div className="block md:hidden">
          <img src={awesumBook} alt="" />
        </div>
        <Search />
       
      </div>
    </div>
  )
}