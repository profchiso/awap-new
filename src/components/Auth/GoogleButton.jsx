import React from 'react';
import { GoogleLogin } from 'react-google-login';

export default function GoogleButton() {
  const handleLogin = async (googleData) => {
    console.log(googleData);
    const res = await fetch(
      'https://awesumedge-api.herokuapp.com/api/v1/users/oauth/google',
      {
        method: 'POST',
        body: JSON.stringify({
          token: googleData.tokenId,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await res.json();
    console.log(data);
    // store returned user somehow
  };
  return (
    <div className="flex justify-center py-3 px-20">
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Log in with Google"
        cookiePolicy={'single_host_origin'}
        className="google-login"
        style={{ borderRadius: '20px !important' }}
        onSuccess={handleLogin}
      />
    </div>
  );
}