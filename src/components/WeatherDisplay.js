import { useState, useEffect } from 'react';
import { getWeatherData } from '../services/WeatherService';
import WeatherChart from './WeatherChart';

const WeatherDisplay = () => {
  const [city, setCity] = useState('London');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    // const data = ;
    setWeather(await getWeatherData(city));
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Weather Info</h1>
      <input value={city} onChange={(e) => setCity(e.target.value)} />
      <button onClick={fetchWeather}>Get Weather</button>

      {weather && (
        <>
          <p>Current Temp: {weather.currentConditions.temp} °C</p>
          <WeatherChart days={weather.days} />
        </>
      )}
    </div>
  );
};

export default WeatherDisplay;