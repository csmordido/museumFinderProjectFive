import React, { Component } from 'react';
import axios from 'axios';

class CityInfo extends Component {
  constructor (props) {
    super (props);

    this.state = {
      weather: [],
    }
  }

  // function to call on API to get the current temperature and weather description of the inputted city
  getWeatherData = () => {
    axios({
      url: 'https://api.openweathermap.org/data/2.5/weather',
      method: 'GET',
      responseType: 'JSON',
      params: {
        q: this.props.city,
        units: 'metric',
        appid: 'c9a747c48bbadd82284c2f57f9cf4656',
      }
    }).then((response) => {
        const temp = Math.round(response.data.main.temp);
        const state = response.data.weather[0].main;
        const weather = [];
        weather.push(temp, state);
        this.setState({
          weather,
        });
      })
  }

  componentDidMount () {
    this.getWeatherData();
  }

  // Checks if the city state has changed. Will make an API call if it has changed.
  componentDidUpdate(prevProps) {
    if (this.props.city !== prevProps.city) {
      this.getWeatherData();
    }
  }
  
  render () {
    return (
      <div className='cityInfo'>
        <p>Museums in</p>
        <h2>{this.props.city}, {this.props.country}</h2>
        <div className='weather'>
          <p>{this.state.weather[0]} &#8451;</p>
          <p>{this.state.weather[1]}</p>
        </div>
      </div>
    )
  }
}

export default CityInfo;