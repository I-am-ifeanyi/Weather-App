
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Intro from "./pages/intro";
import Login from "./pages/login";
import Home from "./pages/home";
import LandingPage from "./pages/landingPage";
import ErrorPage from "./pages/errorPage";
import moment from "moment-timezone";
import SignUp from "./pages/signUp";
import React from "react";



export default function App() {
  const getTimelineURL = "https://api.tomorrow.io/v4/timelines";
  const apikey = "zMoLGLWZ8qa2RCpIpd0gJEMfhqrBQJsa";
  let location = [9.0765, 7.3986];
  const fields = [
    "precipitationIntensity",
    "precipitationType",
    "windSpeed",
    "windGust",
    "windDirection",
    "temperature",
    "temperatureApparent",
    "cloudCover",
    "cloudBase",
    "cloudCeiling",
    "weatherCode",
  ];
  const units = "imperial";
  const timesteps = ["current", "1h", "1d"];
  const now = moment.utc();
  const startTime = moment.utc(now).add(0, "minutes").toISOString();
  const endTime = moment.utc(now).add(1, "days").toISOString();
  const timezone = "Africa/Lagos";
  const queryString = require("query-string");
  const getTimelineParameters = queryString.stringify(
    {
      apikey,
      location,
      fields,
      units,
      timesteps,
      startTime,
      endTime,
      timezone,
    },
    { arrayFormat: "comma" }
  );

  const [weatherData, setWeatherData] = React.useState({});
  React.useEffect(() => {
    fetch(getTimelineURL + "?" + getTimelineParameters, {
      method: "GET",
      compress: true,
    })
      .then((result) => result.json())
      .then((realData) => setWeatherData(realData))
      .catch((error) => console.log(error, "Error from network request"));
  }, []);
  console.log(weatherData?.data);
  const fahrenheit =
    weatherData?.data?.timelines[2]?.intervals[0]?.values?.temperature;
  const fahrenheitHourly =
    weatherData?.data?.timelines[1]?.intervals[0]?.values?.temperature;
  const fahrenheitDaily =
    weatherData?.data?.timelines[0]?.intervals[0]?.values?.temperature;
  const convertToCelsius = (fahrenheit) => {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    return celsius;
  };
   const convertToCelsiusHourly = (fahrenheitHourly) => {
     const celsius = ((fahrenheitHourly - 32) * 5) / 9;
     return celsius;
   };
    const convertToCelsiusDaily = (fahrenheitDaily) => {
    const celsius = ((fahrenheitDaily - 32) * 5) / 9;
    return celsius;
  };

  const cloudCover =
    weatherData?.data?.timelines[2]?.intervals[0]?.values?.cloudCover;
  const precipitation =
    weatherData?.data?.timelines[2]?.intervals[0]?.values
      ?.precipitationIntensity;
  const windSpeed =
    weatherData?.data?.timelines[2]?.intervals[0]?.values?.windSpeed;
  const windGust =
    weatherData?.data?.timelines[2]?.intervals[0]?.values?.windGust;
  const windDirection =
    weatherData?.data?.timelines[2]?.intervals[0]?.values?.windDirection;
  const cloudBase =
    weatherData?.data?.timelines[2]?.intervals[0]?.values?.cloudBase;

  // Hourly details
  const cloudCoverHourly =
    weatherData?.data?.timelines[1]?.intervals[0]?.values?.cloudCover;
  const precipitationHourly =
    weatherData?.data?.timelines[1]?.intervals[0]?.values
      ?.precipitationIntensity;
  const windSpeedHourly =
    weatherData?.data?.timelines[1]?.intervals[0]?.values?.windSpeed;
  const windGustHourly =
    weatherData?.data?.timelines[1]?.intervals[0]?.values?.windGust;
  const windDirectionHourly =
    weatherData?.data?.timelines[1]?.intervals[0]?.values?.windDirection;
  const cloudBaseHourly =
    weatherData?.data?.timelines[1]?.intervals[0]?.values?.cloudBase;

  // Daily details
  const cloudCoverDaily =
    weatherData?.data?.timelines[0]?.intervals[0]?.values?.cloudCover;
  const precipitationDaily =
    weatherData?.data?.timelines[0]?.intervals[0]?.values
      ?.precipitationIntensity;
  const windSpeedDaily =
    weatherData?.data?.timelines[0]?.intervals[0]?.values?.windSpeed;
  const windGustDaily =
    weatherData?.data?.timelines[0]?.intervals[0]?.values?.windGust;
  const windDirectionDaily =
    weatherData?.data?.timelines[0]?.intervals[0]?.values?.windDirection;
  const cloudBaseDaily =
    weatherData?.data?.timelines[0]?.intervals[0]?.values?.cloudBase;

  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="login" element={<Login />} />
      <Route
        path="home"
        element={
          <Home
            temperature={convertToCelsius(fahrenheit)}
            temperatureHourly={convertToCelsiusHourly(fahrenheitHourly)}
            temperatureDaily={convertToCelsiusDaily(fahrenheitDaily)}
          />
        }
      />
      <Route
        path="landingPage"
        element={
          <LandingPage
            temperature={convertToCelsius(fahrenheit)}
            cloudCover={cloudCover}
            precipitationIntensity={precipitation}
            windSpeed={windSpeed}
            windGust={windGust}
            windDirection={windDirection}
            cloudBase={cloudBase}
            temperatureHourly={convertToCelsiusHourly(fahrenheitHourly)}
            cloudCoverHourly={cloudCoverHourly}
            precipitationIntensityHourly={precipitationHourly}
            windSpeedHourly={windSpeedHourly}
            windGustHourly={windGustHourly}
            windDirectionHourly={windDirectionHourly}
            cloudBaseHourly={cloudBaseHourly}
            temperatureDaily={convertToCelsiusDaily(fahrenheitDaily)}
            cloudCoverDaily={cloudCoverDaily}
            precipitationIntensityDaily={precipitationDaily}
            windSpeedDaily={windSpeedDaily}
            windGustDaily={windGustDaily}
            windDirectionDaily={windDirectionDaily}
            cloudBaseDaily={cloudBaseDaily}
            timelines={weatherData?.data?.timelines}
          />
        }
      />
      <Route path="signUp" element={<SignUp />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}