import React, { Component } from 'react';

class CityInfo extends Component {
  constructor (props) {
    super (props);
  }
  
  render () {
    return (
      <div className="cityInfo">
        <p>Museums in</p>
        <h2>{this.props.city}, {this.props.country}</h2>
      </div>
    )
  }
}

export default CityInfo;