import React from 'react';
import { ReactComponent as AwesumEdgeLogo } from '../../assets/svgs/AwesumEdgeLogo.svg';
import awesumBook from '../../assets/svgs/AwesumBook.svg';
import { Link } from 'react-router-dom';

export default function LoginHeader() {
  return (
    <div className="shadow-awesumOne bg-white">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center py-4 px-10 ">
        <div>
          <div className="transform md:scale-80 scale-70 hidden md:block">
            <Link to="/">
              <AwesumEdgeLogo />
            </Link>
          </div>
          <div className="block md:hidden">
            <img src={awesumBook} alt="" />
          </div>
        </div>
        <div>
          <div className="flex ">
            <Link
              to={
                window.location.pathname.includes('login')
                  ? '/sign-up'
                  : '/login'
              }
              className="text-white hover:text-white bg-primary shadow-primary px-8 font-body py-2 rounded-md focus:outline-none text-sm lg:text-base"
            >
              {window.location.pathname.includes('login') ? 'Sign Up' : 'Login'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
