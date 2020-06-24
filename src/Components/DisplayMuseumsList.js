import React, { Component } from 'react';
import scrollToElement from './scrollToElement';
import axios from 'axios';

class DisplayMuseumsList extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  // on click of the list's button
  handleClick = e => {
    // grab the value (xid props) of the clicked button
    const xid = e.target.value;
    const key = '5ae2e3f221c38a28845f05b6c25ce5d3be16ef238b3cedc588767b71';
    // use the xid in the API endpoint to get details of the clicked museum
    axios({
      url: `https://api.opentripmap.com/0.1/en/places/xid/${xid}`,
      method: 'GET',
      responseType: 'JSON',
      params: {
        apikey: key,
      }
    }).then(response => {
      const newMuseumDetails = [];
      // push the API data to the newMuseumDetails array
      newMuseumDetails.push(response.data);
      // update the museumDetails state in the App.js with newMuseumsDetails array
      this.props.onDataUpdate(newMuseumDetails);
      // scroll to #detailsContainer after getting a response from the API
      scrollToElement('detailsContainer');
    })
  }

  render () {
    return (
      <li>
        <span><i className='fas fa-landmark'></i></span><button type='button' value={this.props.museumXid} onClick={this.handleClick}>{this.props.museumName}</button>
      </li>
    )
  }
}

export default DisplayMuseumsList;