import React from 'react';
import CityHeader from './CityHeader';
import CityMuseums from './CityMuseums';

const CityData = (props) => {
    return (
      <>
        <CityHeader cityData={props.cityData} />
        <CityMuseums cityData={props.cityData} updateXid={props.updateXid} />
      </>
    )
  }

export default CityData;