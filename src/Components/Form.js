import React, { useState } from 'react';
import axios from 'axios';

const Form = (props) =>  {

  const [userInput, handleChange] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const key = '5ae2e3f221c38a28845f05b6c25ce5d3be16ef238b3cedc588767b71';
    try {
      // make an API request to grab the latitude and longitude of the user inputted city
      const response = await axios({
        url: 'https://api.opentripmap.com/0.1/en/places/geoname',
        method: 'GET',
        responseType: 'JSON',
        params: {
          name: userInput,
          apikey: key,
        }
      });
  
      const cityData = {
        name: response.data.name,
        country: response.data.country,
        lat: response.data.lat,
        lon: response.data.lon
      };
  
      props.updateCityData(cityData);
  
      handleChange("");
  
    } catch(err) {
      console.log(err);
    };
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)} className='wrapper'> 

      <label className='visuallyHidden' htmlFor='city'>Enter a city</label>
      <input id='city' value={userInput} type='text' placeholder='Enter City' onChange={(event) => handleChange(event.target.value)} />

      <label className='visuallyHidden' htmlFor='submit'>Search</label>
      <input id='submit' type='submit' value='Search' />

      <p>Enter a city to search for museums.</p>

    </form>
  )
};



export default Form;