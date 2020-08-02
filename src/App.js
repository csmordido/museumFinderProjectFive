import React, { useState } from 'react';
import Header from "./Components/Header";
import Form from './Components/Form';
import CityData from './Components/CityData';
import MuseumDetails from './Components/MuseumDetails';

const App = () => {

  const [cityData, setCityData] = useState({});
  const [xid, setXid] = useState('');

    return (
      <>
        <Header />
        <Form 
          setCityData={setCityData} 
          cityData={cityData} 
        />
        {
          cityData.name
          ? <CityData 
              cityData={cityData} 
              setXid={setXid} 
            />
          :null
        }
          <MuseumDetails xid={xid} />
         
        
        {/* {
          this.state.hasError
          ? <ErrorMessage updateErrorState={this.updateHasError} />
          : null
        } */}
      </>
    );
}

export default App;