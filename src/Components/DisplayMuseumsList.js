import React, { Component } from 'react';
import scrollToElement from './ScrollToElement';
import axios from 'axios';

class DisplayMuseumsList extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = e => {
    const xid = e.currentTarget.getAttribute('data-xid');
    const key = '5ae2e3f221c38a28845f05b6c25ce5d3be16ef238b3cedc588767b71';
    axios({
      url: `https://api.opentripmap.com/0.1/en/places/xid/${xid}`,
      method: 'GET',
      responseType: 'JSON',
      params: {
        apikey: key,
      }
    }).then(response => {
      const newMuseumDetails = [];
      newMuseumDetails.push(response.data);
      this.props.onDataUpdate(newMuseumDetails);
      scrollToElement('detailsContainer');
    })
  }

  render () {
    return (
      <li data-xid={this.props.museumXid} onClick={this.handleClick}>
        <span><i className="fas fa-landmark"></i></span>
        <h3>{this.props.museumName}</h3>
      </li>
    )
  }
}

export default DisplayMuseumsList;