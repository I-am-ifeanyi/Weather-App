import React from "react"
import showPassword from "../images/show-icon.png";
import notShow from "../images/show-password1.png";
import google from "../images/google_logo.png"
import apple from "../images/apple_logo.jpg"
import arrow from "../images/arrow-right.png";
import {Link, useNavigate} from "react-router-dom"
import { useRef } from "react";

 
export default function Login() {
  
const navigate = useNavigate()
const inputRef = useRef(null)
function dataSubmit(event) {
  event.preventDefault()
  if(inputRef.current.value === "theonyekagroup@gmail.com") {
    return navigate("/Home");
  }
  else {
    alert("Wrong Email, Please check email and try again")
  }

} 

  
  return (
    <main className="loginPage">
      <h1>Login</h1>
      <p>Enter your account details to login</p>
      <form className="formDetails" onSubmit={dataSubmit}>
        <input
          ref={inputRef}
          type="email"
          placeholder="Email Address"
          className="value"
          name="email"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="value1"
          name="password"
          required
        />
        <img src={showPassword} className="visibility" alt="" />
        <img src={notShow} className="visibility1" alt="" />
        <p className="reset">Forgot password?</p>
        <div className="mainDiv">
          <div className="div1"></div>
          <p>or</p>
          <div className="div2"></div>
        </div>
        <h1 className="sign-in-with">Sign in with</h1>
        <div className="google-apple-logo">
          <div>
            <div className="google-container">
              <img src={google} alt="google logo" className="google" />
            </div>
            <h3 className="google-name">Google</h3>
          </div>
          <div>
            <div className="apple-container">
              <img src={apple} alt="google logo" className="apple" />
            </div>
            <h3 className="apple-name">Apple</h3>
          </div>
        </div>

        <button className="login">Login</button>

        <Link to="/signUp" className="create-account">
          I'm new here <img src={arrow} alt="" />
        </Link>
      </form>
    </main>
  );
} 