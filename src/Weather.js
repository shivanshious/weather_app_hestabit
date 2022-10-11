import React from "react";

var weatherInfo = {};
const data = {
  key: "3668d161d7faa360f4c291f46426e526",
  lat: "28.613939",
  lon: "77.209021",
  lang: "en",
  unit: "metric",
};

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${data.key}&units=${data.unit}&lang=${data.lang}`,
  requestOptions
)
  .then((response) => response.text())
  .then((result) => {
    weatherInfo = JSON.parse(result);
    console.log(weatherInfo);
  })
  .catch((error) => console.log("error", error));

const Weather = () => {
  return <></>;
};

export default Weather;
