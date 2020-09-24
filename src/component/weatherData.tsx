import React from "react"

interface Info {
  city: any,
  weather: any
}

const WeatherData: React.FC<Info> = (props) => {
  return (
    <div className="weather-data">
      <p className="weather__tagline">Weather forecast for <span className="weather-data__city">{props.city}</span></p>
      <div className="weather-data__box">
        <span className="weather-data__property">
          <p className="weather-data__title">Temperature</p>
          <p className="weather-data__value">{props.weather!.main.temp}°C</p>
        </span>
        <span className="weather-data__property">
          <p className="weather-data__title">Humidity</p>
          <p className="weather-data__value">{props.weather!.main.humidity}%</p>
        </span>
        <span className="weather-data__property">
          <p className="weather-data__title">Pressure</p>
          <p className="weather-data__value">{props.weather!.main.pressure} mbar</p>
        </span>
      </div>
      <div className="weather-data__box">
        <span className="weather-data__property">
          <p className="weather-data__title desc">Description</p>
          <p className="weather-data__value">{props.weather!.weather[0].description}</p>
        </span>
      </div>
    </div>
  )
}

export default WeatherData