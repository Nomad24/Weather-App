import React, {useContext} from "react"

import Context from '../context/context'

const WeatherSearch = () => {
  const {api} = useContext(Context)

  return (
    <div className="weather-search">
      <form className="weather-search__form">
        <input autoComplete="off" onKeyPress={api} className="weather-search__input" type="text"/>
        <span>Press Enter</span>
      </form>
    </div>
  )
}

export default WeatherSearch