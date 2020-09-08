import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import scrollToElement from './scrollToElement';

const CityMuseums = (props) => {

  // state containing the museum objects from the Open Trip Map API
  const [cityMuseums, setCityMuseums] = useState([]);

  // deconstruct the cityData props
  const { lon, lat } = props.cityData;

  // hook to make the API request everytime the lat props updates
  useEffect(() => {
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

    getMuseumsList();
  }, [props.cityData]);

  // function executed on click of a museum name
  const getMuseumXid = (xid) => {
    // hook passed as props from App.js component to set the xid state
    props.setXid(xid);

    // hook passed as props from the App.js component to toggle visibiliy of the MuseumDetails component
    props.setIsHidden(false);
  };

  // make a copy of the cityMuseums state array to map over it
  const cityMuseumsCopy = [...cityMuseums];

  return (
    <section className='museumsList wrapper'>
      <ul>
        {
          cityMuseumsCopy.map( object => {
            return (
              <li key={object.xid}>
                <span><i className='fas fa-landmark'></i></span><button type='button'  onClick={() => getMuseumXid(object.xid)}>{object.name}</button>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default CityMuseums;