import React from "react";
import google from "../images/google_logo.png";
import apple from "../images/apple_logo.jpg";
import { Link } from "react-router-dom";


export default function SignUp() {
  return (
    <main className="signUp-page">
      <h1>My Weather App</h1>
      <form className="sign-up-form">
        <legend>Create your Account</legend>
        <input type="email" placeholder="Email" required name="email" />
        <input
          type="password"
          placeholder="Password"
          required
          name="password"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          required
          name="confirm-password"
        />
        <button className="sign-up">Sign Up</button>
      </form>

      <h4 className="sign-up-option">Or you can sign up with</h4>
      <div className="google-apple-logo2">
        <div>
          <div className="google-container2">
            <img src={google} alt="google logo" className="google2" />
          </div>
          <h5 className="google-name">Google</h5>
        </div>
        <div>
          <div className="apple-container2">
            <img src={apple} alt="google logo" className="apple2" />
          </div>
          <h5 className="apple-name">Apple</h5>
        </div>
      </div>

      <h5 className="old-user-login">
        Already have an account?{" "}
        <Link to="/login" className="old-user-login-link">
          Login Here
        </Link>
      </h5>
    </main>
  );
}