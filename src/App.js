import React, { useState } from 'react';
import Header from "./Components/Header";
import Form from './Components/Form';
import CityData from './Components/CityData';
import MuseumDetails from './Components/MuseumDetails';

const App = () => {

  /* State set in the Form component after the first API call.
     Passed as props to CityData sub-components (CityHeader & CityMuseums). */
  const [cityData, setCityData] = useState({});

  /* State set in the CityMuseums component on click of the museum name on the list.
     Passed as props to MuseumDetails component to be used for the API request. */
  const [xid, setXid] = useState('');

  /* State set to 'false' in the CityMuseums component on click of the museum name. Then set to 'true' in the MuseumDetails component on click of the 'Go back to list' button. */ 
  const [isHidden, setIsHidden] = useState(true);

    return (
      <>
        <Header />
        <Form setCityData={setCityData} />
        {
          cityData.name
          ? <CityData 
              cityData={cityData} 
              setXid={setXid} 
              setIsHidden={setIsHidden}
            />
          :null
        }
        {
          !isHidden
          ? <MuseumDetails 
              xid={xid} 
              setIsHidden={setIsHidden}
            />
          : null
        }
        {/* {
          this.state.hasError
          ? <ErrorMessage updateErrorState={this.updateHasError} />
          : null
        } */}
      </>
    );
    
}

export default App;