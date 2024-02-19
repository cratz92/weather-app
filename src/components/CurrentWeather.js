import React from 'react';
import './CurrentWeather.css'; // Create this CSS file for styling

const CurrentWeather = ({ city, country, day, temperature, condition }) => {
  return (
    <div className="current-weather">
      <h2>{city}, {country}</h2>
      <h3>{day}</h3>
      <h1>{temperature}°C</h1>
      <h4>{condition}</h4>
    </div>
  );
};

export default CurrentWeather;
