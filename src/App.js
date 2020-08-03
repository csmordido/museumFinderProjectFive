import React, { useState } from 'react';
import Header from "./Components/Header";
import Form from './Components/Form';
import CityData from './Components/CityData';
import MuseumDetails from './Components/MuseumDetails';
import ErrorMessage from './Components/ErrorMessage';

const App = () => {

  /* State set in the Form component after the first API call.
     Passed as props to CityData sub-components (CityHeader & CityMuseums). */
  const [cityData, setCityData] = useState({});

  /* State set in the CityMuseums component on click of the museum name on the list.
     Passed as props to MuseumDetails component to be used for the API request. */
  const [xid, setXid] = useState('');

  /* State set to 'false' in the CityMuseums component on click of the museum name. Then set to 'true' in the MuseumDetails component on click of the 'Go back to list' button. */ 
  const [isHidden, setIsHidden] = useState(true);

  const [hasError, setHasError] = useState(false);


    return (
      <>
        <Header />
        <Form setCityData={setCityData} setHasError={setHasError} />
        {
          cityData.name
          ? <CityData 
              cityData={cityData} 
              setXid={setXid} 
              setIsHidden={setIsHidden}
              setHasError={setHasError}
            />
          :null
        }
        {
          !isHidden
          ? <MuseumDetails 
              xid={xid} 
              setIsHidden={setIsHidden}
              setHasError={setHasError}
            />
          : null
        }
         {
          hasError
          ? <ErrorMessage setHasError={setHasError} />
          : null
        }
      </>
    );
    
}

export default App;