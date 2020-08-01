import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const CityMuseums = (props) => {

  const { lon, lat } = props.cityData;
  const [cityMuseums, updateCityMuseums] = useState([]);

  const getMuseumsList = async () => {

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
          limit: 10,
          apikey: process.env.REACT_APP_OTM_KEY,
        }
      });

      updateCityMuseums(response.data);

    } catch(err) {
      console.log(err);
    }
  }

  const handleClick = (event) => {
    const xid = event.currentTarget.value;
    props.updateXid(xid);
  }

  useEffect(() => {
    getMuseumsList();
  }, [lat]);

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