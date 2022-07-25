// import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Weather() {
  const API_KEY = 'fb5edd8eaf4b2755908e423d2e7e3b6f';
  const API_URL = 'https://api.openweathermap.org/data/2.5';

  const lat = 43.7055572;
  const long = -72.2887096;
  const url = `${API_URL}/weather/?lat=${lat}&lon=${long}&units=imperial&APPID=${API_KEY}`;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((error) => {
        console.log(error);
      });
    fetch();
  }, []);

  console.log(data);
  if (data && data.main) {
    return (
      <div className="weather">
        <p>{data.name} {lat.toFixed(1)}° {long.toFixed(1)}°</p>
        <p>{data.main.temp}℉ {data.weather[0].description}</p>
      </div>
    );
  } else {
    return <div />;
  }
}

export default Weather;
