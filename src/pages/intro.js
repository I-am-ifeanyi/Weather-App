import React from "react";
import WeatherImg from '../images/Icon-weather.png';
import WeatherSecond from "../images/weather-second.png";
import WeatherThird from "../images/weather-third.png";
import WeatherFourth from "../images/weather-fourth.png";
import { Link } from "react-router-dom";

export default function Intro(props) {
  
  return (
    <main className="homePage">
      <img src={WeatherImg} className="weather-first" />
      <img src={WeatherSecond} className="weather-second" />
      <img src={WeatherThird} className="weather-third" />
      <img src={WeatherFourth} className="weather-fourth" />
      <h1 className="app-caption">My Weather App</h1>
      <p className="weather-caption">Check Live weather updates all over the world with just one tap</p>
      <Link to="/login" className="get-started">Get Started</Link>
    </main>
  );
}