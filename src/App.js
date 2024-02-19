import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
import WeeklyForecast from './components/WeeklyForecast';
import Search from './components/Search';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

const App = () => {
  const [currentWeather, setCurrentWeather] = useState({});
  const [weeklyForecast, setWeeklyForecast] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('Lisbon'); //default city
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const fetchWeatherData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const encodedCity = encodeURIComponent(city);
      const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${encodedCity}&appid=e96c0d44d588ca778ec0c3fe3f29593b&units=metric&cnt=40`
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Weather data could not be fetched.');
      }
      const data = await response.json();
      //console.log(data.list[0].dt_txt);

      setCurrentWeather({
        city: data.city.name,
        country: data.city.country,
        day: data.list[0].dt_txt,
        temperature: Math.round(data.list[0].main.temp),
        condition: data.list[0].weather[0].main
      });

      setWeeklyForecast(data.list.filter(item => item.dt_txt.includes('06:00:00')).map((day) => ({
        day: new Date(day.dt*1000).toLocaleDateString('en-GB', { weekday: 'long' }),
        temperature: Math.round(day.main.temp),
        condition: day.weather[0].main
      })));
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {

    if (city) {
      fetchWeatherData();
    }

    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

  }, [city, darkMode]); //depend on city to refresh when it changes

  // const handleSearch = (searchTerm) => {
  //   setCity(searchTerm);
  // };

  const handleRefresh = () => {
    fetchWeatherData();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <Search onSearch={setCity}/>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <CurrentWeather {...currentWeather} />
          <WeeklyForecast forecast={weeklyForecast} />
          <button onClick={handleRefresh}>Refresh Weather</button>
        </>
      )}
    </div>
  );
};

export default App;
