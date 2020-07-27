import React, { useState } from "react";
import Form from "./Form";
import CityData from "./CityData";


const Main = () => {
  const [cityData, updateCityData] = useState({});


  return(
    <>
      <main>
        <Form updateCityData={updateCityData}/>
      </main>
      <CityData cityData={cityData}/>
      </>
  )
}

export default Main;