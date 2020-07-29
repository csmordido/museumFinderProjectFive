import React, { useState } from 'react';
import Form from './Form';
import CityData from './CityData';


const Main = () => {
  const [cityData, updateCityData] = useState({});
  // const [xid, updateXid] = useState("");
  // const [isLoading, updateIsLoading] = useState(true);


  return(
    <>
      <Form updateCityData={updateCityData} />
      <CityData cityData={cityData} />
    </>
  )
}

export default Main;