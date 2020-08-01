import React, { useState } from 'react';
import Header from "./Components/Header";
import Form from './Components/Form';
import CityData from './Components/CityData';
import MuseumDetails from './Components/MuseumDetails';

const App = () => {

  const [cityData, updateCityData] = useState({});
  const [xid, updateXid] = useState('');

    return (
      <>
        <Header />
        <Form updateCityData={updateCityData} />
        <CityData cityData={cityData} updateXid={updateXid} />
        <MuseumDetails xid={xid} />
        {/* {
          this.state.hasError
          ? <DisplayErrorMessage updateErrorState={this.updateHasError} />
          : null
        } */}
      </>
    );
}

export default App;