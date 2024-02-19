import React from 'react';
import ForecastCard from './ForecastCard';
import './WeeklyForecast.css'; // Create this CSS file for styling

const WeeklyForecast = ({ forecast }) => {
  return (
    <div className="weekly-forecast">
      {forecast.map((dayForecast, index) => (
        <ForecastCard
          key={index}
          day={dayForecast.day}
          temperature={dayForecast.temperature}
          condition={dayForecast.condition}
        />
      ))}
    </div>
  );
};

export default WeeklyForecast;
