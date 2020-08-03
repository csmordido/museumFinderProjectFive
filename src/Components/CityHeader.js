import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CityHeader = (props) => {

  const [weatherData, setWeatherData] = useState({});

  // deconstruct the cityData props passed from App.js
  const { name, country, lat, lon } = props.cityData;

  // async function called inside the useEffect hook
  const getWeatherData = async () => {

    // make an API request to get the weather data on the user inputted city
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

      // Rounds the temperature data to make it a whole number
      const cityTemp = Math.round(response.data.main.temp);

      // organize the needed data from the API response to an object
      const weatherData = {
        temp: cityTemp,
        description: response.data.weather[0].main,
      }

      // set the weatherData state to the weatherData object
      setWeatherData(weatherData);

    } catch(err)  {

      console.log(err);

    };

  };

  // hook to make the API request everytime the name props updates
  useEffect(() => {

    getWeatherData();

  }, [name]);

  return (
    <section>

      <div className='cityInfo' id='cityInfoContainer'>

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