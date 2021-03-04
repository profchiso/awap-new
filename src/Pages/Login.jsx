import React from 'react';
import LoginHeader from '../components/Auth/LoginHeader';
import LoginBody from '../components/Auth/LoginBody';

export default function Login() {
  return (
    <div className="bg-f8 pb-8">
      <LoginHeader />
      <LoginBody />
    </div>
  );
}