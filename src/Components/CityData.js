import React from 'react';
import CityHeader from './CityHeader';
import CityMuseums from './CityMuseums';

const CityData = (props) => {

    return (
      <>
        <CityHeader cityData={props.cityData} />
        <CityMuseums 
          cityData={props.cityData} 
          setXid={props.setXid} 
          setIsHidden={props.setIsHidden}
        />
      </>
    )
    
  }

export default CityData;