import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CityHeader = (props) => {

  const [weatherData, updateWeatherData] = useState({});

  const { name, country, lat, lon } = props.cityData;

  const getWeatherData = async () => {

    try {
      const response = await axios({
        url: 'https://api.openweathermap.org/data/2.5/weather',
        method: 'GET',
        responseType: 'JSON',
        params: {
          lat: lat,
          lon: lon,
          units: 'metric',
          appid: process.env.REACT_APP_OWM_KEY,
        }
      });

      const cityTemp = Math.round(response.data.main.temp);

      const weatherData = {
        temp: cityTemp,
        description: response.data.weather[0].main,
      }

      updateWeatherData(weatherData);

    } catch(err)  {
      console.log(err);
    };
  };

  useEffect(() => {
    getWeatherData();
  }, [name]);

  return (
    <section>
      <div className='cityInfo'>
        <p>Museums in</p>
        <h2>{name}, {country}</h2>
        <div className='weather'>
          <p>{weatherData.temp} &#8451;</p>
          <p>{weatherData.description}</p>
        </div>
      </div>
    </section>
  )
}

export default CityHeader;