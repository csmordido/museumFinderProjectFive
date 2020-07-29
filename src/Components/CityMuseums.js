import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

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

  return (
    <section className='museumsList wrapper' id='listContainer'>
      ...
    </section>
  )
}

export default CityMuseums;