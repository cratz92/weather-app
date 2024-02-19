import React from 'react';
import './ForecastCard.css'; // Create this CSS file for styling
//import { WiDaySunny, WiRain, WiThunderstorm, WiSnow, WiDayCloudy } from 'react-icons/wi';

const ForecastCard = ({ day, temperature, condition }) => {
  
  /*
  const getIcon = (condition) => {
    switch (condition) {
      case 'Sunny':
        return <WiDaySunny />;
      case 'Rain':
        return <WiRain />;
      case 'Thunderstorms':
        return <WiThunderstorm />;
      case 'Snowy':
        return <WiSnow />;
      case 'Cloudy':
        return <WiDayCloudy />;
      default:
        return <WiDaySunny />;
    }
  };
  
  return (
    <div className="forecast-card">
      <h5>{day}</h5>
      <i>{getIcon(condition)}</i>
      <h6>{temperature}°C</h6>
      <p>{condition}</p>
    </div>
  );
  */

  return (
    <div className="forecast-card">
      <h5>{day}</h5>
      <h6>{temperature}°C</h6>
      <p>{condition}</p>
    </div>
  );
};

export default ForecastCard;
