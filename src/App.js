import React, { Component } from 'react';
import axios from 'axios';
import Form from './Components/Form';
import DisplayMuseumsList from './Components/DisplayMuseumsList';
import DisplayMuseumDetails from './Components/DisplayMuseumDetails';
import CityInfo from './Components/CityInfo';
import { ReactComponent as Logo } from './assets/logo.svg';
import scrollToElement from './Components/ScrollToElement';

class App extends Component {
  constructor () {
    super();

    this.state = {
      userInput: '',
      cityInfo: [],
      museumsData: [],
      museumDetails: [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateMuseumDetails = this.updateMuseumDetails.bind(this);
  }

  handleChange(event) {
    this.setState({
      userInput: event,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const key = '5ae2e3f221c38a28845f05b6c25ce5d3be16ef238b3cedc588767b71';
    axios({
      url: 'https://api.opentripmap.com/0.1/en/places/geoname',
      method: 'GET',
      responseType: 'JSON',
      params: {
        name: this.state.userInput,
        apikey: key,
      }
    }).then( response => {
      const longitude = response.data.lon;
      const latitude = response.data.lat;
      const newCityInfo = [];
      newCityInfo.push(response.data.name, response.data.country);
      this.setState({
        cityInfo: newCityInfo,
      });
      this.updateMuseumsData(longitude, latitude, key);
    })
    this.setState({
      userInput: '',
    });
  }

  updateMuseumsData = (lon, lat, key) => {
    axios({
      url: 'https://api.opentripmap.com/0.1/en/places/radius',
      method: 'GET',
      responseType: 'JSON',
      params: {
        radius: 100000,
        lon: lon,
        lat: lat,
        kinds: 'museums',
        rate: '3',
        format: 'json',
        limit: 10,
        apikey: key,
      }
    }).then( (response) => {
      const newMuseumsData = [];
      response.data.forEach( obj => {
        newMuseumsData.push(obj);
      });
      this.setState({
        museumsData: newMuseumsData,
      });   
      if (this.state.museumsData) {
        scrollToElement('listContainer');
      }
    })
  }

  updateMuseumDetails(newData) {
    this.setState({
      museumDetails: newData,
    });
  }

  render() {
    return (
      <div>
        <header>
          <h1>Museum <span><Logo className="logo"/>Finder</span></h1>
        </header>
        <main className="wapper">
          <Form 
            onTextInputChange={this.handleChange} 
            value={this.state.userInput}
            onFormSubmit={this.handleSubmit}
          />
        </main>
        <section className="museumsList" id="listContainer">
          {
            this.state.cityInfo.length > 0 
            ? <CityInfo city={this.state.cityInfo[0]} country={this.state.cityInfo[1]} /> : null
          }
          <ul>
            {
              this.state.museumsData.map( obj => {
                return (
                  <DisplayMuseumsList 
                    key={obj.xid}
                    museumName={obj.name} 
                    museumXid={obj.xid}
                    onDataUpdate={this.updateMuseumDetails}
                  />
                )
              })
            }
          </ul>
        </section>
        {
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
      </div>
    );
  }
}

export default App;