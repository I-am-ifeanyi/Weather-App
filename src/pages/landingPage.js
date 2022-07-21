import React from "react";
import { Link } from "react-router-dom";
import preview2 from "../images/preview_2.png";
import rightArrow from "../images/arrow_right.png";
import moonshot from "../images/weather-third.png";
import houseLine from "../images/HouseLine.svg";
import search from "../images/MagnifyingGlass.png";
import compass from "../images/Compass.png";
import Nut from "../images/Nut.png";

export default function LandingPage({
  temperature,
  cloudCover,
  precipitationIntensity,
  windGust,
  windDirection,
  windSpeed,
  cloudBase,
  temperatureHourly,
  cloudCoverHourly,
  precipitationIntensityHourly,
  windGustHourly,
  windDirectionHourly,
  windSpeedHourly,
  cloudBaseHourly,
  temperatureDaily,
  cloudCoverDaily,
  precipitationIntensityDaily,
  windGustDaily,
  windDirectionDaily,
  windSpeedDaily,
  cloudBaseDaily,
  timelines,
}) {
  const current = new Date();

  const today = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const month = current.toLocaleString("default", { month: "short" });
  const todayName = today[current.getDay()];
  const realDate = current.getDate();
  let suffix = "";
  if (realDate === 1) {
    suffix = "1st";
  } else if (realDate === 2) {
    suffix = "nd";
  } else if (realDate === 3) {
    suffix = "rd";
  } else {
    suffix = "th";
  }

  const bg = {
    width: "100px",
    textAlign: "center",
    height: "15px",
    borderRadius: "30px",
    padding: "2px 0px",
  };

  const bg2 = {
    backgroundColor: "#967ad6",
    width: "100px",
    textAlign: "center",
    height: "15px",
    borderRadius: "30px",
    padding: "2px 0px",
  };

  const tabItems = [
    { id: 0, title: "Currently" },
    { id: 1, title: "Hourly" },
    { id: 2, title: "Daily" },
  ];

  const [activeTab, setActiveTab] = React.useState(0);
  const cloud = () => {
    if(activeTab === 0){
      return cloudCover;
    }
    else if(activeTab === 1) {
     return cloudCoverHourly;
    }
    else if(activeTab === 2) {
      return cloudCoverDaily;
    }
  }

  const precipitation = () => {
    if (activeTab === 0) {
      return precipitationIntensity;
    } else if (activeTab === 1) {
      return precipitationIntensityHourly;
    } else if (activeTab === 2) {
      return precipitationIntensityDaily;
    }
  };

  const windDirect = () => {
    if (activeTab === 0) {
      return windDirection;
    } else if (activeTab === 1) {
      return windDirectionHourly;
    } else if (activeTab === 2) {
      return windDirectionDaily;
    }
  };

  const windSd = () => {
    if (activeTab === 0) {
      return windSpeed;
    } else if (activeTab === 1) {
      return windSpeedHourly;
    } else if (activeTab === 2) {
      return windSpeedDaily;
    }
  };

  const baseCloud = () => {
    if (activeTab === 0) {
      return cloudBase;
    } else if (activeTab === 1) {
      return cloudBaseHourly;
    } else if (activeTab === 2) {
      return cloudBaseDaily;
    }
  };

  const gustWind = () => {
    if (activeTab === 0) {
      return windGust;
    } else if (activeTab === 1) {
      return windGustHourly;
    } else if (activeTab === 2) {
      return windGustDaily;
    }
  };

  const temp = () => {
    if (activeTab === 0) {
      return temperature;
    } else if (activeTab === 1) {
      return temperatureHourly;
    } else if (activeTab === 2) {
      return temperatureDaily;
    }
  };

  
  

  const toggleTab = (id) => {
    setActiveTab(id);
    
  };

  return (
    <main className="homePage">
      <div className="previewImageA">
        <img src={preview2} alt="" className="previewImage" />
      </div>

      <Link to="/home">
        <img src={rightArrow} alt="" className="right-arrow" />
      </Link>
      <section>
        <div className="weather--forecast">
          <div className="first-forecast">
            <h1>{Math.round(temp())}° C</h1>
            <h2>FCT, Abuja</h2>
            <p>
              {realDate}
              {suffix} {month}, {todayName} 20°C/29°C
            </p>
          </div>
          <div className="second-forecast">
            <img src={moonshot} alt="" />
            <h2>Clear sky</h2>
          </div>
        </div>
        <div className="weather--forecast2">
          <div>
            <h5>Cloud Cover</h5>
            <h2>{cloud()}</h2>
          </div>
          <div>
            <h5>Precipitation Intensity</h5>
            <h2>{precipitation()}</h2>
          </div>
          <div>
            <h5>Wind Direction</h5>
            <h2>{windDirect()}</h2>
          </div>
        </div>
        <div className="weather--forecast2">
          <div>
            <h5>Wind Speed</h5>
            <h2>{windSd()}</h2>
          </div>
          <div>
            <h5>Cloud Base</h5>
            <h2>{baseCloud()}</h2>
          </div>
          <div>
            <h5>Wind Gust</h5>
            <h2>{gustWind()}</h2>
          </div>
        </div>
        <div className="weather--forecast3">
          <div className="outlier">
            {/* <p id="currently" onClick={toggle} style={isActive ? bg2 : bg}>
              Currently
            </p>
            <p id="hourly" onClick={toggle1} style={isActive1 ? bg2 : bg}>
              Hourly
            </p>
            <p id="daily" onClick={toggle2}  style={isActive2 ? bg2 : bg}>
              Daily
            </p> */}

            {tabItems.map((data) => {
              const { id, title } = data;
              const isActive = activeTab === id;

              return (
                <p
                  key={id}
                  onClick={() => toggleTab(id)}
                  style={isActive ? bg2 : bg}
                >
                  {title}
                </p>
              );
            })}
          </div>
          <div className="outlier1">
            <p>Now</p>
            <img src={moonshot} alt="" className="small--moon" />
            <h4>Clear</h4>
            <h4>{Math.round(temp())}° C</h4>
          </div>
        </div>
      </section>
      <div className="icons">
        <Link to="/home">
          <img src={houseLine} alt="" />
        </Link>
        <img src={search} alt="" />
        <img src={compass} alt="" />
        <img src={Nut} alt="" />
      </div>
    </main>
  );
}
