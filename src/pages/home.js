import React from "react";
import preview from "../images/preview.png"
import Vector from "../images/Vector.png"
import arrow from "../images/arrow_down.png"
import chennai from "../images/chennai.png"
import jaipur from "../images/jaipur.png"
import List from "../images/List.png"
import cloud from "../images/cloud_1.svg"
import cloud1 from "../images/cloud-2.svg";
import cloud2 from "../images/cloud-3.svg";
import cloud3 from "../images/cloud-4.svg";
import houseLine from "../images/HouseLine.svg";
import search from "../images/MagnifyingGlass.png";
import compass from "../images/Compass.png";
import Nut from "../images/Nut.png";
import { Navigate, useNavigate } from "react-router-dom";
import LandingPage from "./landingPage";
import { Link } from "react-router-dom";


export default function Home({temperature, temperatureHourly, temperatureDaily}) {
  const navigate = useNavigate()
  function showWeather() {
    navigate("/LandingPage")
  }
  const current = new Date();

  const today = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat",
  ];
  const month = current.toLocaleString("default", { month: "short" });
  const todayName = today[current.getDay()]
  const realDate = current.getDate();
  let suffix = "";
  if(realDate === 1) {
    suffix = "1st";
  }
  else if(realDate === 2) {
    suffix = "nd";
  }
  else if(realDate === 3) {
    suffix = "rd";
  }
  else {
    suffix = "th";
  }

  let skyStatus;
  if(temperature > 23) {
    skyStatus = "Clear Sky"
  }
  else {
    skyStatus = "Cloudy"
  }

  

  return (
    <main className="homePage">
      <img
        src="https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?cs=srgb&dl=pexels-pixabay-53594.jpg&fm=jpg"
        alt=""
        className="preview-image"
      />
      <div className="icon-cover">
        <div className="profile-cover">
          <img src={Vector} alt="" className="profile-image" />
        </div>

        <img src={List} alt="" className="menu" />
      </div>
      <div className="location-update">
        <div className="current-location-update">
          <h1>FCT, Abuja</h1>
          <p>
            {todayName}, {realDate}
            {suffix} {month}. 20°C/29°C
          </p>
        </div>
        <div className="current-location-temp">
          <h1>{Math.round(temperature)}° C</h1>
          <h3>{skyStatus}</h3>
        </div>
      </div>
      <div className="swipe-box">
        <p className="swipe-for-details">Swipe down for more details</p>
        <img src={arrow} alt="" className="arrow-down" />
      </div>
      <div className="weather-images">
        <div>
          <h4>Lagos 30°C</h4>
          <img src={jaipur} alt="" />
        </div>
        <div onClick={showWeather}>
          <h4>Abuja {Math.round(temperature)}° C</h4>
          <img src={chennai} alt="" />
        </div>
      </div>
      <h4 className="current-day">Today</h4>
      <div className="different-times-temp">
        <div className="temp-cover">
          <img src={cloud} alt="" />
          <h3>{Math.round(temperature)}°C</h3>
        </div>
        <div className="temp-cover">
          <img src={cloud} alt="" />
          <h3>{Math.round(temperatureHourly)}°C</h3>
        </div>
        <div className="temp-cover">
          <img src={cloud2} alt="" />
          <h3>{Math.round(temperatureDaily)}°C</h3>
        </div>
        <div className="temp-cover">
          <img src={cloud2} alt="" />
          <h3>20°C</h3>
        </div>
      </div>
      <div className="icons">
        <Link to="/landingPage">
          <img src={houseLine} alt="" />
        </Link>
        <img src={search} alt="" />
        <img src={compass} alt="" />
        <img src={Nut} alt="" />
      </div>
    </main>
  );
}
