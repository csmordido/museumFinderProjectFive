import React, { useState } from "react";
import Form from "./Form";
import CityData from "./CityData";


const Main = () => {
  const [cityData, updateCityData] = useState({});
  const [isLoading, updateIsLoading] = useState(true);


  return(
    <>
      <main>
        <Form 
          updateCityData={updateCityData}
          updateIsLoading={updateIsLoading}
        />
      </main>
      { !isLoading
        ? <CityData cityData={cityData}/>
        : null
      }
      </>
  )
}

export default Main;