import React from "react";
import { GoogleLogin } from "react-google-login";
import {connect} from "react-redux"
import { useHistory } from "react-router";
import { ReactComponent as GoogleIcon } from "../../assets/svgs/GoogleIcon.svg";
import {saveLoginUserDataToState} from "../../redux/actions/login"

 function GoogleButton({saveLoginUserDataToState, ...props}) {
   const history = useHistory()
  const handleLogin = async (googleData) => {
    console.log(googleData);
    const res = await fetch(
      "https://awesumedge-api.herokuapp.com/api/v1/users/oauth/google",
      {
        method: "POST",
        body: JSON.stringify({
          token: googleData.tokenId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    saveLoginUserDataToState(data)
    history.push("/")
  };

  
  return (
    <div className="flex justify-center py-3 px-4 mx-auto">
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        cookiePolicy={"single_host_origin"}
        className="google-login"
        onSuccess={handleLogin}
        render={(renderProps) => (
          <div className="flex gap-5  px-8 sm:px-16 mb-8 py-4 shadow-googleButton rounded-full">
            <GoogleIcon />
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="text-primary font-body whitespace-nowrap"
            >
              {props.textName} with Google
            </button>
          </div>
        )}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
}
export default connect(mapStateToProps, {
saveLoginUserDataToState
})(GoogleButton);