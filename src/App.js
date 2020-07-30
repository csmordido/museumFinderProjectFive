import React, { useState } from 'react';
import Header from "./Components/Header";
import Form from './Components/Form';
import CityData from './Components/CityData';
import MuseumDetails from './Components/MuseumDetails';

const App = () => {

  const [cityData, updateCityData] = useState({});
  const [xid, updateXid] = useState('');


  // constructor () {
  //   super();

    // this.state = {
      // userInput: '',
      // cityInfo: [],
      // museumsData: [],
      // museumDetails: [],
      // isDesktop: false,
      // hasError: false,
  //   }
  // }

  // function passed to the DisplayMuseumsList component to update the museumDetails state
  // updateMuseumDetails = (newData) => {
  //   this.setState({
  //     museumDetails: newData,
  //   });
  // }

  // // function passed as props to DisplayErrorMessage to update the hasError state
  // updateHasError = (value) => {
  //   this.setState({
  //     hasError: value,
  //   });
  // }

    return (
      <>
        <Header />
        <Form updateCityData={updateCityData} />
        <CityData cityData={cityData} updateXid={updateXid} />
        <MuseumDetails xid={xid} />
          
        {/*
        {
          // map over the museumsDetails array and pass the data to the DisplayMuseumDetails component
          this.state.museumDetails.map( obj => {
            return (
              <DisplayMuseumDetails 
                key={obj.xid}
                imgDetail={obj.preview.source}
                nameDetail={obj.name}
                addressDetail={obj.address}
                urlDetail={obj.url}
                infoDetail={obj.wikipedia_extracts.text}
              />
            )
          })
        }
        {
          this.state.hasError
          ? <DisplayErrorMessage updateErrorState={this.updateHasError} />
          : null
        } */}
      </>
    );
}

export default App;