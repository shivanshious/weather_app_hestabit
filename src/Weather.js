import React, { useState, useEffect } from "react";
import "./weather.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const data = {
  key: "3668d161d7faa360f4c291f46426e526",
  lang: "en",
  unit: "metric",
};

var requestOptions = {
  method: "GET",
};

const Weather = () => {
  const [weatherInfo, setWetherInfo] = useState();
  const [city, setCity] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      findData();
    }
  };

  const findData = () => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${data.key}&units=${data.unit}&lang=${data.lang}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        setWetherInfo(JSON.parse(result));
        setCity("");
        // console.log(weatherInfo);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <div className="container">
        <div className="get_city">
          <input
            type="text"
            className="input"
            value={city}
            onChange={handleChange}
            onKeyUp={handleKeyPress}
            placeholder="Enter city name.."
          />
          <button type="submit" className="search_button" onClick={findData}>
            Search
          </button>
        </div>
        {weatherInfo !== undefined ? (
          <div className="content">
            <div className="display_name">
              <h1 className="city_name">
                {/* {weatherInfo.name.charAt(0).toUpperCase() + weatherInfo.name.slice(1)} */}
                {weatherInfo.name}
              </h1>
              <h3 className="weather_main">{weatherInfo.weather[0].main}</h3>
            </div>
            <div className="other_info">
              <div className="item_holder">
                <img
                  src={`http://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`}
                  alt="icon"
                  className="icon"
                />
                <p className="description">
                  {weatherInfo.weather[0].description}
                </p>
              </div>
              <div className="item_holder">
                <h2 className="heading">{weatherInfo.main.temp} &deg;C</h2>
                <p className="feel_like">
                  Feel Like: {weatherInfo.main.feels_like} &deg;C
                </p>
                <div className="min_max_temp">
                  <p className="min_temp">
                    min: {weatherInfo.main.temp_min} &deg;C
                  </p>
                  <p className="max_temp">
                    max: {weatherInfo.main.temp_max} &deg;C
                  </p>
                </div>
              </div>
              <div className="item_holder">
                <AcUnitIcon className="wind_icon" />
                <p className="wind">Speed: {weatherInfo.wind.speed} km/h</p>
                <p className="wind">Direction: {weatherInfo.wind.deg} &deg;</p>
              </div>
            </div>
            <div className="extras">
              <p className="extra_item">
                Pressure: {weatherInfo.main.pressure}
              </p>
              <p className="extra_item">
                Humidity: {weatherInfo.main.humidity}
              </p>
              <p className="extra_item">Visibility: {weatherInfo.visibility}</p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Weather;
