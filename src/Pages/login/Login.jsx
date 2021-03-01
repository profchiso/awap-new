import React from 'react';
import LoginHeader from './LoginHeader';

import LoginBody from './LoginBody';

import './login.css';

export default function Login() {
  return (
    <div className="h-screen">
      <LoginHeader />
      <LoginBody />
    </div>
  );
}
