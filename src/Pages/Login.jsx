import React from 'react';
import LoginHeader from '../components/Auth/LoginHeader';
import LoginBody from '../components/Auth/LoginBody';

export default function Login() {
  return (
    <div className="h-screen bg-f8">
      <LoginHeader />
      <LoginBody />
    </div>
  );
}