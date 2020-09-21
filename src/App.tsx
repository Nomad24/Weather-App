import React, {useState, useRef} from 'react';
import './style.scss';
import axios from 'axios';

import Context from './context/context'

import WeatherSearch from './component/weatherSearch'
import WeatherData from './component/weatherData'

const App: React.FC = () => {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState(null);
  const date = new Date();
  const api_key = '*************************'
  

  const api = async (event: React.KeyboardEvent) => {
    event.preventDefault();
    
    if(event.key === 'Enter') {
      const location: string = (event.target as HTMLInputElement).value;

      if(!location) {
        return alert("Enter city name"), setWeather(null);
      }

      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`;
        const request = axios.get(url);
        const response = await request;
        setWeather(response.data.main);
        setCity(response.data.name);
      } catch (error) {
        alert(error);
      }
    }
  }

  return (
    <div className="App">
      <div className="header">
        <h1 className="header-title">Weather App</h1>
      </div>
      <Context.Provider value={{api}}>
      <div className="date-time">
        { `${date.toLocaleDateString()}` }
      </div>
      <div className="tagline">
        <p>Enter the name of the city to get started.</p>
      </div>
      <WeatherSearch />
      { weather !== null && <WeatherData city={city} weather={weather}/> }
      </Context.Provider>
    </div>
  );
}

export default App;
