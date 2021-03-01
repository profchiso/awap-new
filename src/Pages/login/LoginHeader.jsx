import React from 'react';
import { ReactComponent as AwesumEdgeLogo } from '../../components/svgs/AwesumEdgeLogo.svg';
import awesumBook from '../../components/svgs/AwesumBook.svg';

export default function LoginHeader() {
  return (
    <div className="flex justify-between py-2.5 px-10 shadow">
      <div>
        <div className="transform md:scale-80 scale-70 hidden md:block">
          <AwesumEdgeLogo />
        </div>
        <div className="block md:hidden">
          <img src={awesumBook} alt="" />
        </div>
      </div>
      <div>
        <div className="flex ">
          <button className="text-white bg-primary shadow-primary px-10 py-2 rounded-md focus:outline-none text-sm lg:text-base">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
