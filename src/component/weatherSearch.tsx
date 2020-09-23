import React, {useContext} from "react"

import Context from '../context/context'


const WeatherSearch = () => {
  const {api, handleInputChange} = useContext(Context);
  
  return (
    <div className="weather-search">
      <form className="weather-search__form">
        <input autoComplete="off" name="city" onChange={handleInputChange} className="weather-search__input" type="text"/>
        <div className="weather-search__submit">
          <button className="weather-search__button" onClick={api}>&rarr;</button>
        </div>
      </form>
    </div>
  )
}

export default WeatherSearch