import React, { useState } from 'react';
import axios from 'axios';

const Form = (props) =>  {

  const [userInput, handleChange] = useState("");

  // on form submit
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      // make an API request to get data on the user inputted city
      const response = await axios({
        url: 'https://api.opentripmap.com/0.1/en/places/geoname',
        method: 'GET',
        responseType: 'JSON',
        params: {
          name: userInput,
          apikey: process.env.REACT_APP_OTM_KEY,
        }
      });
  
      // create an object for the needed city data
      const cityData = {
        name: response.data.name,
        country: response.data.country,
        lat: response.data.lat,
        lon: response.data.lon
      };
  
      // set the cityData state in App.js to the created cityData object
      props.setCityData(cityData);

      // clear form input
      handleChange("");

    } catch(err) {
      // console.log(err);
    };
  };

  return (
    <main>
      <form onSubmit={(event) => handleSubmit(event)} className='wrapper'> 

        <label className='visuallyHidden' htmlFor='city'>Enter a city</label>
        <input id='city' value={userInput} type='text' placeholder='Enter City' onChange={(event) => handleChange(event.target.value)} />

        <label className='visuallyHidden' htmlFor='submit'>Search</label>
        <input id='submit' type='submit' value='Search' />

        <p>Enter a city to search for museums.</p>

      </form>
    </main>
  )
};

export default Form;