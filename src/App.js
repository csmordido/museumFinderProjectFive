import React, { Component } from 'react';
import axios from 'axios';
import Form from './Components/Form';
import DisplayMuseumsList from './Components/DisplayMuseumsList';
import DisplayMuseumDetails from './Components/DisplayMuseumDetails';
import CityInfo from './Components/CityInfo';
import { ReactComponent as Logo } from './assets/logo.svg';
import scrollToElement from './Components/scrollToElement';
import DisplayErrorMessage from './Components/DisplayErrorMessage';

class App extends Component {
  constructor () {
    super();

    this.state = {
      userInput: '',
      cityInfo: [],
      museumsData: [],
      museumDetails: [],
      isDesktop: false,
      hasError: false,
    }
  }

  // tracks user's form input
  handleChange = (event) => {
    this.setState({
      userInput: event,
    })
  }

  // on form submit
  handleSubmit = (event) => {
    event.preventDefault();
    const key = '5ae2e3f221c38a28845f05b6c25ce5d3be16ef238b3cedc588767b71';
    // make an API request to grab the latitude and longitude of the user inputted city
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
        // push the city and country name API data to the newCityInfo array
        newCityInfo.push(response.data.name, response.data.country);
        // update the cityInfo state to newCityInfo array
        this.setState({
          cityInfo: newCityInfo,
        });
        // make a second API call with the longitude and latitude data from the first API request
        this.updateMuseumsData(longitude, latitude, key);
    }).catch(error => {
      // if error exists update hasError state to true
        if (error) {
          this.setState({
            hasError: true,
          });
        }
      });
    // empty form input after submit
    this.setState({
      userInput: '',
    });
  }

  // function for the second API request
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
        // push each data for the museums in the newMuseumsData array
        response.data.forEach( obj => {
          newMuseumsData.push(obj);
        });
        // update the museumsData state to newMuseumsData array
        this.setState({
          museumsData: newMuseumsData,
        });   
        // if device is desktop
        if (this.state.isDesktop) {
          // set the height of the .museumsList section to 100vh
          this.setContainerHeight('100vh');
        } else {
          this.setContainerHeight('initial');
        }
        // scroll to #listContainer when museumsData is present
        if (this.state.museumsData) {
          scrollToElement('listContainer');
        }
    }).catch( error => {
        // if error exists update hasError state to true
        if (error) {
          this.setState({
            hasError: true,
          });
        }
    });
  }

  // function passed to the DisplayMuseumsList component to update the museumDetails state
  updateMuseumDetails = (newData) => {
    this.setState({
      museumDetails: newData,
    });
  }

  // function to set the #listContainer's height
  setContainerHeight = (heightValue) => {
    document.getElementById('listContainer').style.height = heightValue;
  }

  // function to execute when window is resized
  handleWindowResize = () => {
    // sets isDesktop state to true if screen size is >= 940px
    this.setState({
      isDesktop: window.innerWidth >= 940,
    });
    // if device is desktop and API request has no error
    if (this.state.isDesktop && this.state.museumsData.length > 0) {
      // set the height of the .museumsList section to 100vh
      this.setContainerHeight('100vh');
    } else {
      this.setContainerHeight('initial');
    }
  }

  componentDidMount() {
    // add event listener for window resize
    window.addEventListener('resize', this.handleWindowResize);
    const screenWidth = window.innerWidth;
    // sets isDesktop state to true if screen size is >= 940px
    this.setState({
      isDesktop: screenWidth >= 940,
    });
  }

  componentWillUnmount() {
    // remove event listener for window resize
    window.removeEventListener('resize', this.handleWindowResize);
  }

  // function passed as props to DisplayErrorMessage to update the hasError state
  updateHasError = (value) => {
    this.setState({
      hasError: value,
    });
  }

  render() {
    return (
      <div>
        <header>
          <h1>Museum <span><Logo className='logo'/>Finder</span></h1>
        </header>
        <main>
          <Form
            onTextInputChange={this.handleChange} 
            value={this.state.userInput}
            onFormSubmit={this.handleSubmit}
          />
        </main>
        <section className='museumsList wrapper' id='listContainer'>
          {
            // if the museumsData state has data display CityInfo component
            this.state.museumsData.length > 0
            ? <CityInfo city={this.state.cityInfo[0]} country={this.state.cityInfo[1]} /> : null
          }
          <ul>
            {
              // map the museumsData array and pass the object properties to the DisplayMuseumsList component
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
        }
      </div>
    );
  }
}

export default App;