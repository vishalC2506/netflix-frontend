import React, { useState } from "react";
import "./Login.css";
import SignUpScreen from "../SignUp/SignUpScreen";
const Login = () => {
  const [signIn, SetSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="Login_screen_background">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="image_error"
          className="loginScreenLogo"
        />
        <button className="LoginScreen__button" onClick={() => SetSignIn(true)}>
          Sign in
        </button>
        <div className="loginScreen_gradient"></div>
        <div className="loginScreen__body">
          {signIn ? (
            <SignUpScreen />
          ) : (
            <>
              <h1>Unlimited films,Tv Program and more</h1>
              <h2>Watch anywhere. Cancel at any time</h2>
              <h3>
                Ready to watch? Enter your mail to create or restart your
                membership
              </h3>
              <div className="LoginScreen__input">
                <form action="">
                  <input type="email" placeholder="Email Address" />
                  <button
                    className="LoginScreen__GetStarted"
                    onClick={() => SetSignIn(true)}
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
