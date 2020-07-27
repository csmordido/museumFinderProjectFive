import React, { useState, useEffect } from "react";
import axios from "axios";

const CityHeader = (props) => {

  const [weatherData, updateWeatherData] = useState({});

  const {name, country, lat, lon} = props.cityData;

  const getWeatherData = async () => {
    
    const cityLat = await lat;
    const cityLon = await lon;

    try {
      const response = await axios({
        url: 'https://api.openweathermap.org/data/2.5/weather',
        method: 'GET',
        responseType: 'JSON',
        params: {
          lat: cityLat,
          lon: cityLon,
          units: 'metric',
          appid: 'c9a747c48bbadd82284c2f57f9cf4656',
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
    <div className='cityInfo'>
      <p>Museums in</p>
      <h2>{name}, {country}</h2>
      <div className='weather'>
        <p>{weatherData.temp} &#8451;</p>
        <p>{weatherData.description}</p>
      </div>
    </div>
  )
}

export default CityHeader;