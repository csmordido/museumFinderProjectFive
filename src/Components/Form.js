import React, { useState } from 'react';
import axios from 'axios';

const Form = (props) =>  {

  // State tracking the user input.
  const [userInput, setUserInput] = useState("");

  // On form submit
  const handleSubmit = async (event) => {
    // prevent the default page refresh event
    event.preventDefault();
  
    try {
      // make an API request to get data on the user inputted city and wait for the promise to be fulfilled
      const response = await axios({
        url: 'https://api.opentripmap.com/0.1/en/places/geoname',
        method: 'GET',
        responseType: 'JSON',
        params: {
          name: userInput,
          apikey: process.env.REACT_APP_OTM_KEY,
        }
      });
  
      // organize the needed data from the API response in an object
      const cityData = {
        name: response.data.name,
        country: response.data.country,
        lat: response.data.lat,
        lon: response.data.lon
      };
  
      // set the cityData state in App.js to the cityData object
      props.setCityData(cityData);

      // set the userInput to an empty string
      setUserInput("");

    } catch(err) {
      console.log(err);

      props.setHasError(true);
    };
  };

  return (
    <main>
      <form onSubmit={(event) => handleSubmit(event)} className='wrapper'> 
        <label className='visuallyHidden' htmlFor='city'>Enter a city</label>
        <input id='city' value={userInput} type='text' placeholder='Enter City' onChange={(event) => setUserInput(event.target.value)} />

        <label className='visuallyHidden' htmlFor='submit'>Search</label>
        <input id='submit' type='submit' value='Search' />
        
        <p>Enter a city to search for museums.</p>
      </form>
    </main>
  )

};

export default Form;