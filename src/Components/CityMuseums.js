import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

// NEED TO WORK ON HANDLE CLICK TO GRAB XID

const CityMuseums = (props) => {

  const { lon, lat } = props.cityData;
  const [cityMuseums, updateCityMuseums] = useState([]);

  const getMuseumsList = async () => {

    const key = '5ae2e3f221c38a28845f05b6c25ce5d3be16ef238b3cedc588767b71';

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
          apikey: key,
        }
      });

      updateCityMuseums(response.data);

    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMuseumsList();
  }, [lat]);

  const cityMuseumsCopy = [...cityMuseums];

  return (
    <section className='museumsList wrapper' id='listContainer'>
      <ul>
        {
          cityMuseumsCopy.map( object => {
            return (
              <li key={object.xid}>
                <span><i className='fas fa-landmark'></i></span><button type='button' value={object.xid}>{object.name}</button>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default CityMuseums;