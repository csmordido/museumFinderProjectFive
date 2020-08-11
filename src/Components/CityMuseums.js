import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import scrollToElement from './scrollToElement';

const CityMuseums = (props) => {

  const [cityMuseums, setCityMuseums] = useState([]);

  // deconstruct the cityData props
  const { lon, lat } = props.cityData;

  // async function called in the useEffect hook
  const getMuseumsList = async () => {

    // make the API request for the list of museums
    try {
      const response = await axios({
        url: 'https://api.opentripmap.com/0.1/en/places/radius',
        method: 'GET',
        responseType: 'JSON',
        params: {
          radius: 100000,
          lon: lon,
          lat: lat,
          kinds: 'museums',
          rate: '3',
          format: 'json',
          limit: 20,
          apikey: process.env.REACT_APP_OTM_KEY,
        }
      });

      // create an empty array to push the API data into
      const newCityMuseums = [];

      // push each item in the API response.data array into the newCityMuseums array
      newCityMuseums.push(...response.data);

      // set the cityMuseums state to the newCityMuseums array
      setCityMuseums(newCityMuseums);

      // scroll to the #cityInfoContainer div
      scrollToElement('cityInfoContainer');

    } catch(err) {

      console.log(err);

      props.setHasError(true);

    }

  };

  // function executed on click of a museum name
  const handleClick = (event) => {
    // store the value (which is the xid) of the clicked museum in the xid variable
    const xid = event.currentTarget.value;

    // hook passed as props from App.js component to set the xid state
    props.setXid(xid);

    // hook passed as props from the App.js component to toggle visibiliy of the MuseumDetails component
    props.setIsHidden(false);

  };

  // hook to make the API request everytime the lat props updates
  useEffect(() => {

    getMuseumsList();

  }, [lat]);

  // make a copy of the cityMuseums state array to map over it
  const cityMuseumsCopy = [...cityMuseums];

  return (
    <section className='museumsList wrapper'>

      <ul>

        {
          cityMuseumsCopy.map( object => {

            return (

              <li key={object.xid}>
                <span><i className='fas fa-landmark'></i></span><button type='button' value={object.xid} onClick={handleClick}>{object.name}</button>
              </li>

            )

          })
        }

      </ul>

    </section>
  )
}

export default CityMuseums;