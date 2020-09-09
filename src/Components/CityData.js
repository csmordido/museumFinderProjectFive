import React, { useRef } from 'react';
import CityHeader from './CityHeader';
import CityMuseums from './CityMuseums';

const CityData = (props) => {

    return (
      <>
        <CityHeader cityData={props.cityData} forwardedRef={props.forwardedRef}/>
        <CityMuseums 
          cityData={props.cityData} 
          setXid={props.setXid} 
          setIsHidden={props.setIsHidden}
          setHasError={props.setHasError}
          forwardedRef={props.forwardedRef}
        />
      </>
    )
  }

export default CityData;