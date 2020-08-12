import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from "./Components/Header";
import Form from './Components/Form';
import CityData from './Components/CityData';
import MuseumDetails from './Components/MuseumDetails';
import ErrorMessage from './Components/ErrorMessage';
import Saved from './Components/Saved';

const App = () => {

  /* State storing data from the first API call in the Form component.
     Passed as props to CityData sub-components (CityHeader & CityMuseums). */
  const [cityData, setCityData] = useState({});

  /* State holding the xid data from the CityMuseums component on click of the museum name on the list.
     Passed as props to MuseumDetails component to be used for the API request. */
  const [xid, setXid] = useState('');

  /* State set to 'false' in the CityMuseums component on click of the museum name. Then set to 'true' in the MuseumDetails component on click of the 'Go back to list' button. Controlls visibility of the MuseumDetails component. */ 
  const [isHidden, setIsHidden] = useState(true);

  /* State set to 'true' when error exists in each of the API requests. Then set to 'false' on click of the 'Close Window' button in the ErrorMessage component.  
  Controls visibility of the ErrorMessage component. */ 
  const [hasError, setHasError] = useState(false);


    return (
      <>
        <Header />
        <Form setCityData={setCityData} setHasError={setHasError} />
        <Router>
          <>
            <Route path='/'
              render={ () => {
                return (
                  cityData.name
                  ? <CityData 
                      cityData={cityData} 
                      setXid={setXid} 
                      setIsHidden={setIsHidden}
                      setHasError={setHasError}
                    />
                  :null
                  )
            }}/>
            <Route exact path='/saved-museums' component={Saved} />
          </>
        </Router>
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